import { useState, useEffect } from 'react';
import { pb, SocialMention, ContentPipeline, AXReport, KnowledgeSource } from '../lib/pocketbase';

export function useSocialMentions() {
    const [data, setData] = useState<SocialMention[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetch = async () => {
            try {
                const records = await pb.collection('social_mentions').getFullList<SocialMention>({
                    sort: '-created',
                });
                setData(records);
            } catch (error) {
                console.error("Error fetching social mentions", error);
            } finally {
                setLoading(false);
            }
        };
        fetch();
    }, []);

    const updateStatus = async (id: string, status: SocialMention['status']) => {
        try {
            const updated = await pb.collection('social_mentions').update<SocialMention>(id, { status });
            setData((prev: SocialMention[]) => prev.map((m: SocialMention) => m.id === id ? updated : m));
        } catch(e) { console.error(e) }
    };

    return { data, loading, updateStatus };
}

export function useContentPipeline() {
    const [data, setData] = useState<ContentPipeline[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetch = async () => {
            try {
                const records = await pb.collection('content_pipeline').getFullList<ContentPipeline>({
                    sort: '-created',
                });
                setData(records);
            } catch (error) {
                console.error("Error fetching content pipeline", error);
            } finally {
                setLoading(false);
            }
        };
        fetch();
    }, []);

    const updateStatus = async (id: string, status: ContentPipeline['status']) => {
        try {
            const updated = await pb.collection('content_pipeline').update<ContentPipeline>(id, { status });
            setData((prev: ContentPipeline[]) => prev.map((m: ContentPipeline) => m.id === id ? updated : m));
        } catch(e) { console.error(e) }
    };

    return { data, loading, updateStatus };
}

export function useAXReports() {
    const [data, setData] = useState<AXReport[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetch = async () => {
            try {
                const records = await pb.collection('ax_reports').getFullList<AXReport>({
                    sort: '-created',
                });
                setData(records);
            } catch (error) {
                console.error("Error fetching AX reports", error);
            } finally {
                setLoading(false);
            }
        };
        fetch();
    }, []);

    const submitFix = async (id: string) => {
        try {
            const updated = await pb.collection('ax_reports').update<AXReport>(id, { status: 'submitted' });
            setData((prev: AXReport[]) => prev.map((m: AXReport) => m.id === id ? updated : m));
        } catch(e) { console.error(e) }
    };

    return { data, loading, submitFix };
}

export function useKnowledgeSources() {
    const [data, setData] = useState<KnowledgeSource[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetch = async () => {
            try {
                const records = await pb.collection('knowledge_sources').getFullList<KnowledgeSource>({
                    sort: '-created',
                });
                setData(records);
            } catch (error) {
                console.error("Error fetching knowledge sources", error);
            } finally {
                setLoading(false);
            }
        };
        fetch();
    }, []);

    const forceReindex = async () => {
        alert("Force Reindex triggered. (This would typically send an RPC or update status on multiple records)");
    };

    return { data, loading, forceReindex };
}
