import PocketBase from 'pocketbase';

export const pb = new PocketBase(`http://${window.location.hostname}:8090`);

export interface SocialMention {
  id?: string;
  platform: string;
  query: string;
  draft_reply: string;
  status: "pending" | "approved" | "rejected";
  created?: string;
  updated?: string;
}

export interface ContentPipeline {
  id?: string;
  title: string;
  markdown_body: string;
  status: "drafting" | "review" | "published";
  created?: string;
  updated?: string;
}

export interface AxReport {
  id?: string;
  error_log: string;
  suggested_fix: string;
  status: "pending" | "submitted";
  created?: string;
  updated?: string;
}

export interface KnowledgeSource {
  id?: string;
  source_type: "sdk_repo" | "docs_url" | "github_issues" | "forum";
  url: string;
  vectorization_status: "pending" | "processing" | "vectorized" | "failed";
  last_synced: string;
  created?: string;
  updated?: string;
}

// social_mentions
export const getSocialMentions = async (): Promise<SocialMention[]> => {
  return await pb.collection('social_mentions').getFullList<SocialMention>();
};

export const createSocialMention = async (data: Omit<SocialMention, 'id' | 'created' | 'updated'>): Promise<SocialMention> => {
  return await pb.collection('social_mentions').create<SocialMention>(data);
};

export const updateSocialMention = async (id: string, data: Partial<SocialMention>): Promise<SocialMention> => {
  return await pb.collection('social_mentions').update<SocialMention>(id, data);
};

export const deleteSocialMention = async (id: string): Promise<boolean> => {
  return await pb.collection('social_mentions').delete(id);
};

// content_pipeline
export const getContentPipelines = async (): Promise<ContentPipeline[]> => {
  return await pb.collection('content_pipeline').getFullList<ContentPipeline>();
};

export const createContentPipeline = async (data: Omit<ContentPipeline, 'id' | 'created' | 'updated'>): Promise<ContentPipeline> => {
  return await pb.collection('content_pipeline').create<ContentPipeline>(data);
};

export const updateContentPipeline = async (id: string, data: Partial<ContentPipeline>): Promise<ContentPipeline> => {
  return await pb.collection('content_pipeline').update<ContentPipeline>(id, data);
};

export const deleteContentPipeline = async (id: string): Promise<boolean> => {
  return await pb.collection('content_pipeline').delete(id);
};

// ax_reports
export const getAxReports = async (): Promise<AxReport[]> => {
  return await pb.collection('ax_reports').getFullList<AxReport>();
};

export const createAxReport = async (data: Omit<AxReport, 'id' | 'created' | 'updated'>): Promise<AxReport> => {
  return await pb.collection('ax_reports').create<AxReport>(data);
};

export const updateAxReport = async (id: string, data: Partial<AxReport>): Promise<AxReport> => {
  return await pb.collection('ax_reports').update<AxReport>(id, data);
};

export const deleteAxReport = async (id: string): Promise<boolean> => {
  return await pb.collection('ax_reports').delete(id);
};

// knowledge_sources
export const getKnowledgeSources = async (): Promise<KnowledgeSource[]> => {
  return await pb.collection('knowledge_sources').getFullList<KnowledgeSource>();
};

export const createKnowledgeSource = async (data: Omit<KnowledgeSource, 'id' | 'created' | 'updated'>): Promise<KnowledgeSource> => {
  return await pb.collection('knowledge_sources').create<KnowledgeSource>(data);
};

export const updateKnowledgeSource = async (id: string, data: Partial<KnowledgeSource>): Promise<KnowledgeSource> => {
  return await pb.collection('knowledge_sources').update<KnowledgeSource>(id, data);
};

export const deleteKnowledgeSource = async (id: string): Promise<boolean> => {
  return await pb.collection('knowledge_sources').delete(id);
};
