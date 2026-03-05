import { test, expect } from '@playwright/test';

test('Verify Command Center layout', async ({ page }) => {
  await page.goto('/');

  // Verify Sidebar placeholder
  const sidebar = page.locator('aside[aria-label="Sidebar"]');
  await expect(sidebar).toBeVisible();
  await expect(sidebar).toContainText('Sidebar Placeholder');

  // Verify Header placeholder
  const header = page.locator('header[aria-label="Header"]');
  await expect(header).toBeVisible();
  await expect(header).toContainText('Header Placeholder');

  // Verify Main content area
  const mainContent = page.locator('main[aria-label="Main Content"]');
  await expect(mainContent).toBeVisible();
  await expect(mainContent).toContainText('Loom Initialized');

  // Take screenshot at the end
  await page.screenshot({ path: 'evidence.png' });
});
