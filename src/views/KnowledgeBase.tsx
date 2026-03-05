import { useState } from 'react';
import { useKnowledgeSources } from '../hooks/useData';

export default function KnowledgeBase() {
    const { data, loading, forceReindex } = useKnowledgeSources();
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const docs = data.filter(d => d.source_type === 'docs_url' || d.source_type === 'sdk_repo');
    const forums = data.filter(d => d.source_type === 'forum' || d.source_type === 'github_issues');

    const selectedDoc = selectedId ? data.find(d => d.id === selectedId) : null;

    return (
        <div className="flex-1 flex flex-col overflow-hidden">
            <header className="h-14 border-b border-accent/20 flex items-center justify-between px-6 bg-panel-dark shrink-0">
                <div className="flex items-center gap-4">
                    <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">Knowledge_Base::Manager</span>
                    <div className="h-4 w-px bg-accent/20"></div>
                    <div className="relative flex items-center">
                        <input className="bg-transparent border-none focus:ring-0 text-xs text-accent placeholder:text-accent/30 w-64 font-mono outline-none" placeholder="SEARCH_VECTORS..." type="text"/>
                        <span className="material-symbols-outlined text-sm text-accent/50 absolute right-0">search</span>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3 text-xs">
                        <span className="text-slate-500 uppercase">Total Vectors:</span>
                        <span className="text-accent">1.24M</span>
                        <div className="h-3 w-px bg-accent/20"></div>
                        <span className="text-slate-500 uppercase">Storage:</span>
                        <span className="text-accent">4.2 GB</span>
                    </div>
                    <button onClick={forceReindex} className="bg-accent/10 hover:bg-accent/20 border border-accent/30 text-accent px-3 py-1 text-[10px] uppercase font-bold transition-all">
                        Force_Reindex
                    </button>
                </div>
            </header>
            
            <div className="flex-1 flex overflow-hidden">
                <nav className="w-80 border-r border-accent/10 bg-panel-dark/30 flex flex-col shrink-0">
                    <div className="p-4 border-b border-accent/10 flex justify-between items-center bg-panel-dark/50">
                        <span className="text-[10px] uppercase font-bold text-accent tracking-widest">Sources_Explorer</span>
                        <span className="material-symbols-outlined text-sm text-accent cursor-pointer">create_new_folder</span>
                    </div>
                    <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
                        <div className="space-y-4">
                            {loading && <div className="text-slate-500 text-xs">Loading sources...</div>}
                            
                            {/* Docs */}
                            <div>
                                <div className="flex items-center gap-2 text-slate-100 mb-2 cursor-pointer group">
                                    <span className="material-symbols-outlined text-sm text-accent">expand_more</span>
                                    <span className="material-symbols-outlined text-lg text-accent/70">auto_stories</span>
                                    <span className="text-xs font-bold uppercase tracking-tight">Documentation</span>
                                </div>
                                <div className="ml-6 space-y-1 relative">
                                    <div className="tree-line"></div>
                                    {docs.map(doc => (
                                        <div 
                                            key={doc.id} 
                                            onClick={() => setSelectedId(doc.id)}
                                            className={`flex items-center gap-2 p-2 text-xs cursor-pointer border-l border-transparent ${selectedId === doc.id ? 'text-accent tree-item-active' : 'text-slate-400 hover:text-accent'}`}
                                        >
                                            <span className="material-symbols-outlined text-sm">description</span>
                                            <span className="truncate">{doc.url.split('/').pop() || doc.url}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Forums / Archives */}
                            <div>
                                <div className="flex items-center gap-2 text-slate-100 mb-2 cursor-pointer group">
                                    <span className="material-symbols-outlined text-sm text-accent">expand_more</span>
                                    <span className="material-symbols-outlined text-lg text-accent/70">forum</span>
                                    <span className="text-xs font-bold uppercase tracking-tight">Archives</span>
                                </div>
                                <div className="ml-6 space-y-1 relative">
                                    <div className="tree-line"></div>
                                    {forums.map(forum => (
                                        <div 
                                            key={forum.id} 
                                            onClick={() => setSelectedId(forum.id)}
                                            className={`flex items-center gap-2 p-2 text-xs cursor-pointer border-l border-transparent ${selectedId === forum.id ? 'text-accent tree-item-active' : 'text-slate-400 hover:text-accent'}`}
                                        >
                                            <span className="material-symbols-outlined text-sm">history</span>
                                            <span className="truncate">{forum.url.split('/').pop() || forum.url}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                
                <section className="flex-1 overflow-y-auto custom-scrollbar p-8 bg-[radial-gradient(circle_at_50%_-20%,_rgba(0,242,255,0.08)_0%,_transparent_50%)]">
                    {!selectedDoc ? (
                        <div className="flex h-full items-center justify-center text-slate-500 font-mono">
                            Select a source to view details
                        </div>
                    ) : (
                        <>
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h1 className="text-2xl font-bold text-white tracking-tight">{selectedDoc.url.split('/').pop() || selectedDoc.url}</h1>
                                        <span className="px-2 py-0.5 text-[10px] bg-accent/20 text-accent border border-accent/30 font-bold uppercase">SOURCE_{selectedDoc.source_type}</span>
                                    </div>
                                    <p className="text-sm text-slate-500">Path: {selectedDoc.url}</p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="text-right">
                                        <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Last Sync</p>
                                        <p className="text-xs text-slate-200">{new Date(selectedDoc.last_synced).toLocaleString()}</p>
                                    </div>
                                    <div className="h-8 w-px bg-accent/20"></div>
                                    <div className="text-right">
                                        <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Embed Status</p>
                                        <p className={`text-xs uppercase ${selectedDoc.vectorization_status === 'vectorized' ? 'text-green-400' : 'text-orange-400'}`}>
                                            {selectedDoc.vectorization_status}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-6 mb-8">
                                <div className="glass-panel p-4">
                                    <span className="text-[10px] text-accent/60 uppercase block mb-2">Vector Count</span>
                                    <span className="text-xl font-bold text-white">4,281</span>
                                </div>
                                <div className="glass-panel p-4">
                                    <span className="text-[10px] text-accent/60 uppercase block mb-2">Dimensions</span>
                                    <span className="text-xl font-bold text-white">1,536</span>
                                </div>
                                <div className="glass-panel p-4">
                                    <span className="text-[10px] text-accent/60 uppercase block mb-2">Inference Load</span>
                                    <span className="text-xl font-bold text-white">0.42ms</span>
                                </div>
                            </div>
                            
                            <div className="flex flex-col h-[500px]">
                                <div className="bg-panel-dark border-x border-t border-accent/20 px-4 py-2 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm text-accent">visibility</span>
                                        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Ingested_Content_Preview</span>
                                    </div>
                                    <div className="flex gap-1">
                                        <div className="size-2 rounded-full bg-slate-700"></div>
                                        <div className="size-2 rounded-full bg-slate-700"></div>
                                        <div className="size-2 rounded-full bg-slate-700"></div>
                                    </div>
                                </div>
                                <div className="flex-1 bg-black p-6 font-mono text-sm border border-accent/20 overflow-y-auto custom-scrollbar relative">
                                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-panel-dark/50 border-r border-accent/5 flex flex-col items-center py-6 text-slate-700 text-[10px] select-none">
                                        <span>01</span><span>02</span><span>03</span><span>04</span><span>05</span><span>06</span><span>07</span><span>08</span><span>09</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span>
                                    </div>
                                    <div className="ml-10">
                                        <div className="mb-4">
                                            <span className="text-accent/60">// Source: {selectedDoc.url.split('/').pop()}</span><br/>
                                            <span className="text-accent"># Authentication and Authorization Overview</span>
                                        </div>
                                        <div className="text-slate-300 leading-relaxed mb-4">
                                            The Advoloom agent utilizes a multi-layered authentication strategy. 
                                            By default, all requests are routed through the <span className="text-accent">OAuth2.0</span> gateway. 
                                            JWT tokens are issued with a 15-minute TTL.
                                        </div>
                                        <div className="text-slate-300 leading-relaxed mb-4">
                                            <span className="text-accent">Vector_Mapping_Note:</span> This section is linked to the 
                                            <span className="text-accent/80">'User_Access_Control'</span> neural cluster.
                                        </div>
                                        <div className="p-4 bg-accent/5 border-l-2 border-accent mb-4">
                                            <span className="text-accent/70">CRITICAL:</span> Ensure the callback URL is correctly whitelisted in 
                                            the integration settings before initializing the vector re-sync.
                                        </div>
                                        <div className="text-slate-300 leading-relaxed">
                                            The agent maintains state through a session-based approach, mapping 
                                            the <span className="text-accent">X-API-KEY</span> header to specific workspace permissions. 
                                            Rate limiting is applied at the gateway level.
                                        </div>
                                        <div className="mt-8 flex items-center gap-2">
                                            <span className="text-accent animate-pulse">_</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-panel-dark border-x border-b border-accent/20 px-4 py-2 flex justify-between items-center">
                                    <span className="text-[9px] text-slate-500 uppercase">UTF-8 | PDF_RAW_BYTES | LINE: 142</span>
                                    <div className="flex gap-4">
                                        <button className="text-[9px] text-accent uppercase hover:underline">Download_Original</button>
                                        <button className="text-[9px] text-accent uppercase hover:underline">Re-chunk_Data</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </section>
            </div>
        </div>
    );
}
