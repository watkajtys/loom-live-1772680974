import { useSocialMentions } from '../hooks/useData';

export default function CommunityQueue() {
    const { data, loading, updateStatus } = useSocialMentions();

    return (
        <>
            <header className="h-14 border-b border-accent/10 flex items-center justify-between px-6 bg-obsidian/50 backdrop-blur-md">
                <div className="flex items-center gap-4">
                    <span className="text-accent text-xs font-mono tracking-widest uppercase">Community::Queue_Manager</span>
                    <div className="h-4 w-px bg-accent/20"></div>
                    <div className="flex items-center gap-2 text-xs font-mono">
                        <span className="text-slate-400">PENDING_APPROVAL:</span>
                        <span className="text-accent font-bold">{data.filter(d => d.status === 'pending').length}</span>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-slate-400 text-sm font-mono bg-accent/5 px-3 py-1 rounded border border-accent/10">
                        <span className="material-symbols-outlined text-sm">search</span>
                        <span className="text-xs">FILTER: ALL_PLATFORMS</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="material-symbols-outlined text-slate-400 hover:text-accent">refresh</button>
                        <div className="h-6 w-px bg-accent/20"></div>
                        <div className="flex items-center gap-2">
                            <span className="size-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                            <span className="text-[10px] uppercase text-green-500">Live_Sync</span>
                        </div>
                    </div>
                </div>
            </header>
            
            <div className="flex flex-1 overflow-hidden">
                <div className="flex-1 p-6 flex flex-col gap-4 overflow-hidden">
                    <div className="grid grid-cols-4 gap-4">
                        <div className="glass-panel p-3 rounded flex flex-col border-l-2 border-l-accent">
                            <span className="text-[10px] text-slate-500 uppercase">Avg Response Time</span>
                            <span className="text-lg font-bold">4.2m</span>
                        </div>
                        <div className="glass-panel p-3 rounded flex flex-col border-l-2 border-l-green-500">
                            <span className="text-[10px] text-slate-500 uppercase">Sentiment Score</span>
                            <span className="text-lg font-bold text-green-400">88% POS</span>
                        </div>
                        <div className="glass-panel p-3 rounded flex flex-col border-l-2 border-l-orange-500">
                            <span className="text-[10px] text-slate-500 uppercase">Tech Support Needs</span>
                            <span className="text-lg font-bold text-orange-400">12 HIGH</span>
                        </div>
                        <div className="glass-panel p-3 rounded flex flex-col border-l-2 border-l-primary">
                            <span className="text-[10px] text-slate-500 uppercase">Active Agent</span>
                            <span className="text-lg font-bold text-primary">Llama-3-DevRel</span>
                        </div>
                    </div>

                    <div className="flex-1 glass-panel rounded-lg overflow-hidden flex flex-col">
                        <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-accent/10 bg-accent/5 text-[10px] uppercase tracking-widest font-bold text-slate-400">
                            <div className="col-span-1">Platform</div>
                            <div className="col-span-2">Developer</div>
                            <div className="col-span-3">Inbound Query</div>
                            <div className="col-span-4">Agent Draft</div>
                            <div className="col-span-1 text-center">Sentiment</div>
                            <div className="col-span-1 text-right">Action</div>
                        </div>
                        
                        <div className="flex-1 overflow-y-auto terminal-scroll">
                            {loading && <div className="p-6 text-slate-500">Loading queries...</div>}
                            {!loading && data.length === 0 && <div className="p-6 text-slate-500">No mentions found.</div>}
                            
                            {data.map((item) => (
                                <div key={item.id} className={`grid grid-cols-12 gap-4 px-6 py-5 border-b border-accent/5 queue-row transition-all group items-start ${item.status !== 'pending' ? 'opacity-50' : ''}`}>
                                    <div className="col-span-1 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-accent text-lg">
                                            {item.platform.toLowerCase() === 'x' ? 'alternate_email' : 'hub'}
                                        </span>
                                        <span className="text-[10px] text-slate-500 truncate max-w-[40px]">{item.platform}</span>
                                    </div>
                                    <div className="col-span-2">
                                        <div className="text-xs font-bold text-accent">user</div>
                                        <div className="text-[10px] text-slate-500">id: {item.id.slice(0, 8)}</div>
                                    </div>
                                    <div className="col-span-3">
                                        <p className="text-xs leading-relaxed text-slate-300">"{item.query}"</p>
                                    </div>
                                    <div className="col-span-4">
                                        <div className="bg-black/40 p-3 rounded border border-accent/10 group-hover:border-accent/30 transition-colors">
                                            <p className="text-xs leading-relaxed text-slate-400 italic">"{item.draft_reply}"</p>
                                        </div>
                                    </div>
                                    <div className="col-span-1 flex justify-center">
                                        <span className="size-3 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.4)] mt-1" title="Neutral"></span>
                                    </div>
                                    <div className="col-span-1 flex flex-col gap-2 items-end">
                                        {item.status === 'pending' ? (
                                            <>
                                                <button onClick={() => updateStatus(item.id, 'approved')} className="bg-accent/10 hover:bg-accent text-accent hover:text-obsidian text-[10px] px-3 py-1 rounded border border-accent/20 font-bold transition-all">APPROVE</button>
                                                <button onClick={() => updateStatus(item.id, 'rejected')} className="text-slate-500 hover:text-white text-[10px]">REJECT</button>
                                            </>
                                        ) : (
                                            <span className="text-[10px] text-slate-500 uppercase">{item.status}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <aside className="w-72 border-l border-accent/10 bg-obsidian/80 flex flex-col hidden xl:flex shrink-0">
                    <div className="p-4 border-b border-accent/10 bg-accent/5">
                        <h3 className="text-[10px] font-bold text-accent uppercase tracking-widest flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">neurology</span>
                            Agent Thinking Process
                        </h3>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-[11px] terminal-scroll">
                        <div className="space-y-1">
                            <span className="text-accent">[14:32:01]</span>
                            <p className="text-slate-400">Context matching for queries...</p>
                            <p className="text-green-500/70">{">"} Found match in index (89% confidence)</p>
                        </div>
                        <div className="space-y-1">
                            <span className="text-accent">[14:32:05]</span>
                            <p className="text-slate-400">Synthesizing reply using technical_support_persona</p>
                            <div className="h-1 w-full bg-accent/10 rounded overflow-hidden">
                                <div className="h-full bg-accent w-2/3"></div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 border-t border-accent/10 bg-black/20">
                        <div className="flex items-center gap-3">
                            <div className="size-2 rounded-full bg-accent animate-pulse"></div>
                            <div>
                                <p className="text-[10px] text-slate-500">AGENT_STATUS</p>
                                <p className="text-[11px] text-accent uppercase font-bold">Waiting for input...</p>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    );
}
