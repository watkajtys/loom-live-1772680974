"""
Product Manager (PM) Agent Module for Project Loom.
Translates high-level product roadmaps into actionable Kanban backlog tasks.
"""

import json
import logging
import uuid
from typing import List

import google.generativeai as genai
from google.api_core import exceptions
from tenacity import retry, stop_after_attempt, wait_exponential, retry_if_exception_type

from loom.agents.base import AgentProxy
from loom.core.state import BacklogTask, TaskType, TaskPriority

logger = logging.getLogger("loom")

class PMAgent(AgentProxy): # pylint: disable=too-few-public-methods
    """
    An agent that acts as a Product Manager. It reads the overall project roadmap
    and generates specific, micro-level execution tasks for the Backlog.
    """

    def __init__(self, model_name: str = 'gemini-3.1-pro-preview'):
        self.model = genai.GenerativeModel(model_name)

    @retry(
        stop=stop_after_attempt(5),
        wait=wait_exponential(multiplier=1, min=4, max=60),
        retry=(
            retry_if_exception_type(exceptions.DeadlineExceeded) |
            retry_if_exception_type(exceptions.ServiceUnavailable) |
            retry_if_exception_type(exceptions.InternalServerError) |
            retry_if_exception_type(exceptions.ResourceExhausted)
        ),
        reraise=True
    )
    def _generate_content_with_retry(self, content):
        try:
            logger.info("Sending request to PM Agent (%s)...", self.model.model_name)
            return self.model.generate_content(content, request_options={"timeout": 360})
        except Exception as e:
            logger.warning("PM Agent Gemini call failed (attempting retry): %s", e)
            raise

    # pylint: disable=too-many-locals
    def plan_next_sprint(
        self, app_meta: str, roadmap: str, past_learnings: str = ""
    ) -> List[BacklogTask]:
        """
        Translates the high-level roadmap into 3-5 concrete BacklogTask objects.
        """
        logger.info("PM Agent is planning the next sprint based on the roadmap...")

        prompt = f"""
You are the elite Product Manager for Project Loom.
Your job is to read the macro-level ROADMAP and generate the next micro-level Kanban sprint.

APP IDENTITY:
{app_meta}

ROADMAP:
{roadmap}

PAST LEARNINGS (Context):
{past_learnings}

CRITICAL DIRECTIVES:
1. Identify the *current* active phase of the roadmap. Do not generate tasks for future phases yet.
2. Break that phase down into 3-5 sequential, atomic engineering tasks.
3. Keep the scope of each task extremely small. "Build a login page" is too big. "Implement the Login UI layout", "Implement PocketBase Auth Hook", "Wire Login UI to Auth Hook" are better.
4. If a task requires a visual layout/UI, set `requires_design` to true. If it is purely state management or API logic, set it to false.
5. All tasks you generate MUST have `priority: 1` (P1_HIGH) or `priority: 2` (P2_NORMAL).

Output MUST be a valid JSON array of task objects matching this exact schema:
[
  {{
    "type": "feature",
    "priority": 1,
    "description": "Short description of the task",
    "target_route": "/login",
    "data_model": "Optional JSON schema if this requires a new database table, else null",
    "requires_design": true,
    "test_scenario": "User fills out form and clicks submit, verifying state updates",
    "context": "Any extra notes for the Engineer"
  }}
]

Return ONLY the JSON array.
"""

        try:
            response = self._generate_content_with_retry(prompt)
            text = response.text.strip()

            # Clean markdown formatting if present
            if "```json" in text:
                text = text.split("```json")[1].split("```")[0].strip()
            elif "```" in text:
                text = text.split("```")[1].split("```")[0].strip()

            tasks_data = json.loads(text)
            backlog_tasks = []

            for t_data in tasks_data:
                # Generate a unique ID
                task_id = f"TASK-{uuid.uuid4().hex[:6].upper()}"

                # Map integer priorities to the Enum
                priority_int = t_data.get("priority", 1)
                priority = TaskPriority.P1_HIGH
                if priority_int == 2:
                    priority = TaskPriority.P2_NORMAL
                elif priority_int == 0:
                    priority = TaskPriority.P0_CRITICAL

                # Validate type
                task_type_str = t_data.get("type", "feature").lower()
                if task_type_str == "refactor":
                    task_type = TaskType.REFACTOR
                elif task_type_str == "bugfix":
                    task_type = TaskType.BUGFIX
                else:
                    task_type = TaskType.FEATURE

                task = BacklogTask(
                    id=task_id,
                    type=task_type,
                    priority=priority,
                    description=t_data.get("description", "Unknown task"),
                    target_route=t_data.get("target_route", "/"),
                    data_model=t_data.get("data_model"),
                    requires_design=t_data.get("requires_design", True),
                    test_scenario=t_data.get("test_scenario", ""),
                    context=t_data.get("context", ""),
                    status="todo"
                )
                backlog_tasks.append(task)

            logger.info("PM Agent generated %d new tasks.", len(backlog_tasks))
            return backlog_tasks

        except Exception as e: # pylint: disable=broad-exception-caught
            logger.error("PM Agent failed to generate sprint plan: %s", e)
            return []
