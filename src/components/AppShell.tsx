import { ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function AppShell({ children }: { children: ReactNode }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentView = searchParams.get('view') || 'community_queue';

    const setView = (view: string) => {
        setSearchParams({ view });
    };

    return (
        <div className="flex h-screen overflow-hidden text-slate-100 font-mono">
            <aside className="w-16 flex flex-col items-center py-6 border-r border-accent/10 bg-obsidian z-20 shrink-0">
                <div className="mb-10 text-accent">
                    <span className="material-symbols-outlined text-3xl">terminal</span>
                </div>
                <nav className="flex flex-col gap-8 flex-1">
                    <button 
                        onClick={() => setView('community_queue')}
                        className={`group relative flex items-center justify-center p-2 rounded-lg transition-colors ${currentView === 'community_queue' ? 'bg-accent/10 text-accent' : 'text-slate-400 hover:text-accent'}`}
                    >
                        <span className="material-symbols-outlined">forum</span>
                        <span className="absolute left-14 hidden group-hover:block bg-obsidian border border-accent/20 px-2 py-1 text-xs rounded whitespace-nowrap z-50">Community</span>
                    </button>
                    <button 
                        onClick={() => setView('content_pipeline')}
                        className={`group relative flex items-center justify-center p-2 rounded-lg transition-colors ${currentView === 'content_pipeline' ? 'bg-accent/10 text-accent' : 'text-slate-400 hover:text-accent'}`}
                    >
                        <span className="material-symbols-outlined">article</span>
                        <span className="absolute left-14 hidden group-hover:block bg-obsidian border border-accent/20 px-2 py-1 text-xs rounded whitespace-nowrap z-50">Content Pipeline</span>
                    </button>
                    <button 
                        onClick={() => setView('ax_reports')}
                        className={`group relative flex items-center justify-center p-2 rounded-lg transition-colors ${currentView === 'ax_reports' ? 'bg-accent/10 text-accent' : 'text-slate-400 hover:text-accent'}`}
                    >
                        <span className="material-symbols-outlined">analytics</span>
                        <span className="absolute left-14 hidden group-hover:block bg-obsidian border border-accent/20 px-2 py-1 text-xs rounded whitespace-nowrap z-50">AX Reports</span>
                    </button>
                    <button 
                        onClick={() => setView('knowledge_base')}
                        className={`group relative flex items-center justify-center p-2 rounded-lg transition-colors ${currentView === 'knowledge_base' ? 'bg-accent/10 text-accent' : 'text-slate-400 hover:text-accent'}`}
                    >
                        <span className="material-symbols-outlined">database</span>
                        <span className="absolute left-14 hidden group-hover:block bg-obsidian border border-accent/20 px-2 py-1 text-xs rounded whitespace-nowrap z-50">Knowledge Base</span>
                    </button>
                </nav>
                <div className="flex flex-col gap-6 items-center">
                    <button className="text-slate-400 hover:text-accent transition-colors">
                        <span className="material-symbols-outlined">settings</span>
                    </button>
                    <div className="size-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-[10px] font-bold text-accent">
                        AV
                    </div>
                </div>
            </aside>
            <main className="flex-1 flex flex-col overflow-hidden bg-background-dark/50">
                {children}
            </main>
        </div>
    );
}
