import PocketBase from 'pocketbase';

export const pb = new PocketBase(`${window.location.protocol}//${window.location.hostname}:8090`);

export type SocialMention = {
    id: string;
    platform: string;
    query: string;
    draft_reply: string;
    status: "pending" | "approved" | "rejected";
    created: string;
    updated: string;
}

export type ContentPipeline = {
    id: string;
    title: string;
    markdown_body: string;
    status: "drafting" | "review" | "published";
    created: string;
    updated: string;
}

export type AXReport = {
    id: string;
    error_log: string;
    suggested_fix: string;
    status: "pending" | "submitted";
    created: string;
    updated: string;
}

export type KnowledgeSource = {
    id: string;
    source_type: "sdk_repo" | "docs_url" | "github_issues" | "forum";
    url: string;
    vectorization_status: "pending" | "processing" | "vectorized" | "failed";
    last_synced: string;
    created: string;
    updated: string;
}
