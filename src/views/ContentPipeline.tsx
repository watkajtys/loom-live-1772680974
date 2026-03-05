import { useContentPipeline } from '../hooks/useData';

export default function ContentPipeline() {
    const { data, loading, updateStatus } = useContentPipeline();

    const drafting = data.filter(d => d.status === 'drafting');
    const review = data.filter(d => d.status === 'review');
    const published = data.filter(d => d.status === 'published');

    return (
        <div className="flex flex-col h-full overflow-hidden">
            <header className="h-14 border-b border-primary/20 flex items-center justify-between px-6 bg-background-dark/50 backdrop-blur-md shrink-0">
                <div className="flex items-center gap-4">
                    <h1 className="text-accent text-sm font-mono tracking-widest uppercase">Pipeline::Content_Lifecycle</h1>
                    <div className="h-4 w-px bg-primary/20"></div>
                    <div className="flex items-center gap-2 text-[10px] font-mono">
                        <span className="text-slate-500 uppercase">Active Cycles:</span>
                        <span className="text-accent">{drafting.length + review.length}</span>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 px-3 py-1.5 bg-primary/20 border border-primary/40 rounded text-xs text-accent font-mono hover:bg-primary/30 transition-all">
                            <span className="material-symbols-outlined text-sm">add</span>
                            MANUAL_INGEST
                        </button>
                        <div className="h-6 w-px bg-primary/20"></div>
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-slate-400">notifications</span>
                        </div>
                    </div>
                </div>
            </header>
            
            <div className="flex-1 overflow-x-auto p-6 flex gap-6 custom-scrollbar min-h-0">
                {/* Drafting Column */}
                <div className="w-80 flex-shrink-0 flex flex-col gap-4">
                    <div className="flex items-center justify-between px-2">
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold text-slate-400">01</span>
                            <h2 className="text-sm font-display font-bold uppercase tracking-wider">Drafting</h2>
                        </div>
                        <span className="px-2 py-0.5 bg-yellow-500/10 rounded-full text-[10px] font-mono text-yellow-500">{drafting.length}</span>
                    </div>
                    <div className="flex-1 kanban-column rounded-xl p-3 flex flex-col gap-3 custom-scrollbar overflow-y-auto">
                        {loading && <div className="text-slate-500 text-xs p-2">Loading...</div>}
                        {drafting.map(item => (
                            <div key={item.id} className="glass-card p-4 rounded-lg border-l-2 border-l-yellow-500 flex flex-col gap-3">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-2">
                                        <span className="size-2 rounded-full bg-yellow-500 animate-pulse"></span>
                                        <span className="text-[10px] font-mono text-yellow-500">GENERATING...</span>
                                    </div>
                                    <span className="material-symbols-outlined text-sm text-slate-500">more_horiz</span>
                                </div>
                                <h3 className="text-sm font-medium leading-tight">{item.title}</h3>
                                <div className="pt-2 border-t border-primary/10 flex items-center justify-between">
                                    <span className="text-[10px] font-mono text-slate-500">Agent: Llama-3-70B</span>
                                    <button onClick={() => updateStatus(item.id, 'review')} className="text-[10px] font-mono text-accent hover:underline uppercase">Submit for Review</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Review Column */}
                <div className="w-80 flex-shrink-0 flex flex-col gap-4">
                    <div className="flex items-center justify-between px-2">
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold text-slate-400">02</span>
                            <h2 className="text-sm font-display font-bold uppercase tracking-wider">Approval</h2>
                        </div>
                        <span className="px-2 py-0.5 bg-primary/10 rounded-full text-[10px] font-mono text-primary">{review.length}</span>
                    </div>
                    <div className="flex-1 kanban-column rounded-xl p-3 flex flex-col gap-3 custom-scrollbar overflow-y-auto">
                        {review.map(item => (
                            <div key={item.id} className="glass-card p-4 rounded-lg flex flex-col gap-3">
                                <div className="flex justify-between items-start">
                                    <span className="text-[10px] font-mono text-slate-400">READY_FOR_HUMAN</span>
                                    <span className="material-symbols-outlined text-sm text-slate-500">more_horiz</span>
                                </div>
                                <h3 className="text-sm font-medium leading-tight">{item.title}</h3>
                                <div className="flex gap-2 mt-2">
                                    <button onClick={() => updateStatus(item.id, 'published')} className="flex-1 px-3 py-1.5 bg-primary/20 border border-primary/40 rounded text-[10px] font-mono text-accent hover:bg-primary/30 uppercase">Approve</button>
                                    <button className="flex-1 px-3 py-1.5 bg-slate-800 border border-slate-700 rounded text-[10px] font-mono text-slate-300 hover:bg-slate-700 uppercase">Edit</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Published Column */}
                <div className="w-80 flex-shrink-0 flex flex-col gap-4">
                    <div className="flex items-center justify-between px-2">
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold text-published">03</span>
                            <h2 className="text-sm font-display font-bold uppercase tracking-wider text-published">Published</h2>
                        </div>
                        <span className="px-2 py-0.5 bg-published/10 rounded-full text-[10px] font-mono text-published">{published.length}</span>
                    </div>
                    <div className="flex-1 kanban-column rounded-xl p-3 flex flex-col gap-3 custom-scrollbar overflow-y-auto border-published/20">
                        {published.map(item => (
                            <div key={item.id} className="glass-card p-4 rounded-lg border-l-2 border-l-published flex flex-col gap-3 bg-published/5">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm text-published">check_circle</span>
                                        <span className="text-[10px] font-mono text-published uppercase">Active</span>
                                    </div>
                                    <span className="material-symbols-outlined text-sm text-slate-500">launch</span>
                                </div>
                                <h3 className="text-sm font-medium leading-tight">{item.title}</h3>
                                <div className="pt-2 border-t border-published/10 flex items-center justify-between">
                                    <span className="text-[10px] font-mono text-slate-400">Views: -</span>
                                    <button className="text-[10px] font-mono text-accent hover:underline uppercase">Analytics</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <footer className="h-12 border-t border-primary/20 bg-background-dark/50 flex items-center justify-between px-6 shrink-0">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-tighter">Throughput</span>
                        <span className="text-xs font-mono text-accent">4.2 tutorials/day</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
