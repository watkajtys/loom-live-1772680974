import { useAXReports } from '../hooks/useData';

export default function AXReports() {
    const { data, loading, submitFix } = useAXReports();

    return (
        <div className="flex-1 flex flex-col overflow-hidden grid-line bg-[radial-gradient(circle_at_50%_0%,_rgba(0,242,255,0.03)_0%,_transparent_50%)]">
            <header className="h-14 border-b border-accent/20 flex items-center justify-between px-6 bg-background-dark/80 backdrop-blur-md z-10 shrink-0">
                <div className="flex items-center gap-4">
                    <span className="text-accent text-xs font-mono tracking-widest uppercase">AX_Reports::Performance_Audit</span>
                    <div className="h-4 w-px bg-accent/20"></div>
                    <div className="flex items-center gap-2 text-xs font-mono">
                        <span className="size-2 rounded-full bg-accent animate-pulse"></span>
                        <span className="text-accent">AGENT_METRIC_LIVE</span>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-slate-400 text-sm font-mono">
                        <span className="material-symbols-outlined text-sm">calendar_today</span>
                        <span>LAST 24 HOURS</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 px-3 py-1 border border-accent/30 rounded text-xs text-accent hover:bg-accent/10 transition-colors">
                            <span className="material-symbols-outlined text-sm">download</span>
                            EXPORT
                        </button>
                    </div>
                </div>
            </header>
            
            <div className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shrink-0">
                    <div className="glass-panel p-6 rounded-lg relative group">
                        <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                            <span className="material-symbols-outlined text-accent">query_stats</span>
                        </div>
                        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Response Accuracy</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold font-mono text-white">94.2%</span>
                            <span className="text-green-400 text-xs font-mono">↑ 2.4%</span>
                        </div>
                        <div className="mt-4 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-accent w-[94.2%]"></div>
                        </div>
                    </div>
                    <div className="glass-panel p-6 rounded-lg relative group">
                        <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                            <span className="material-symbols-outlined text-accent">timer</span>
                        </div>
                        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Avg. Resolution Time</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold font-mono text-white">4m 12s</span>
                            <span className="text-green-400 text-xs font-mono">↓ 18s</span>
                        </div>
                        <div className="mt-4 flex gap-1 items-end h-4">
                            <div className="w-1 bg-accent/40 h-2"></div>
                            <div className="w-1 bg-accent/40 h-3"></div>
                            <div className="w-1 bg-accent h-4"></div>
                            <div className="w-1 bg-accent/40 h-2"></div>
                        </div>
                    </div>
                    <div className="glass-panel p-6 rounded-lg relative group">
                        <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                            <span className="material-symbols-outlined text-accent">mood</span>
                        </div>
                        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Sentiment Shift</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold font-mono text-white">+0.82</span>
                            <span className="text-slate-500 text-xs font-mono">SCORE</span>
                        </div>
                        <div className="mt-4 flex items-center justify-between text-[10px] font-mono text-slate-500">
                            <span>NEGATIVE</span>
                            <div className="flex-1 mx-3 h-0.5 bg-gradient-to-r from-red-500 via-slate-700 to-green-500 relative">
                                <div className="absolute top-1/2 left-[80%] -translate-y-1/2 size-2 bg-white rounded-full shadow-[0_0_8px_white]"></div>
                            </div>
                            <span>POSITIVE</span>
                        </div>
                    </div>
                </div>

                <div className="glass-panel rounded-lg p-6 flex flex-col h-80 shrink-0">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h3 className="text-xs font-mono text-accent uppercase tracking-widest">Developer Satisfaction over time</h3>
                            <p className="text-slate-500 text-[10px] font-mono uppercase">CSAT / NPS Real-time Delta</p>
                        </div>
                        <div className="flex gap-4 font-mono text-[10px]">
                            <div className="flex items-center gap-1">
                                <span className="size-2 rounded-full bg-accent"></span>
                                <span className="text-slate-300">CURRENT</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="size-2 rounded-full bg-slate-700"></span>
                                <span className="text-slate-500">PREVIOUS</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="absolute inset-0 grid grid-cols-6 border-l border-b border-accent/20">
                            <div className="border-r border-accent/5"></div><div className="border-r border-accent/5"></div>
                            <div className="border-r border-accent/5"></div><div className="border-r border-accent/5"></div>
                            <div className="border-r border-accent/5"></div><div className="border-r border-accent/5"></div>
                        </div>
                        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 100">
                            <defs>
                                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#00f2ff" stopOpacity="0.2"></stop>
                                    <stop offset="100%" stopColor="#00f2ff" stopOpacity="0"></stop>
                                </linearGradient>
                            </defs>
                            <path d="M0 80 Q 150 20, 300 50 T 600 30 T 1000 10 L 1000 100 L 0 100 Z" fill="url(#chartGradient)"></path>
                            <path className="chart-path" d="M0 80 Q 150 20, 300 50 T 600 30 T 1000 10" fill="none" stroke="#00f2ff" strokeWidth="2"></path>
                            <circle className="animate-pulse" cx="0" cy="80" fill="#00f2ff" r="3"></circle>
                            <circle cx="300" cy="50" fill="#00f2ff" r="3"></circle>
                            <circle cx="600" cy="30" fill="#00f2ff" r="3"></circle>
                            <circle className="animate-pulse" cx="1000" cy="10" fill="#00f2ff" r="3"></circle>
                        </svg>
                        <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-[10px] font-mono text-slate-500">
                            <span>00:00</span><span>04:00</span><span>08:00</span><span>12:00</span><span>16:00</span><span>20:00</span><span>NOW</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-6 shrink-0">
                    <div className="lg:col-span-8 glass-panel rounded-lg overflow-hidden flex flex-col">
                        <div className="p-4 border-b border-accent/20 bg-accent/5 flex justify-between items-center">
                            <h3 className="text-xs font-mono text-white uppercase font-bold tracking-widest">System AX Issues</h3>
                            <span className="text-[10px] font-mono text-accent">LATEST REPORTS</span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left font-mono text-xs">
                                <thead>
                                    <tr className="text-slate-500 border-b border-accent/10">
                                        <th className="p-4 font-normal w-1/3">ERROR LOG</th>
                                        <th className="p-4 font-normal w-1/3">SUGGESTED FIX</th>
                                        <th className="p-4 font-normal text-right w-1/3">ACTION</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-accent/5">
                                    {loading && <tr><td colSpan={3} className="p-4 text-slate-500">Loading reports...</td></tr>}
                                    {!loading && data.length === 0 && <tr><td colSpan={3} className="p-4 text-slate-500">No issues reported.</td></tr>}
                                    
                                    {data.map((report) => (
                                        <tr key={report.id} className="hover:bg-accent/5 transition-colors group">
                                            <td className="p-4 text-slate-300 font-mono text-[10px] max-w-xs truncate" title={report.error_log}>{report.error_log}</td>
                                            <td className="p-4 text-accent font-mono text-[10px] max-w-xs truncate" title={report.suggested_fix}>{report.suggested_fix}</td>
                                            <td className="p-4 text-right">
                                                {report.status === 'pending' ? (
                                                    <button onClick={() => submitFix(report.id)} className="px-2 py-1 border border-accent/30 text-accent hover:bg-accent hover:text-obsidian rounded-sm text-[10px] transition-all">SUBMIT FIX</button>
                                                ) : (
                                                    <span className="px-2 py-0.5 border border-green-500/30 text-green-400 rounded-sm text-[10px]">SUBMITTED</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <div className="glass-panel rounded-lg p-5 flex-1">
                            <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-4">Metric Breakdown</h4>
                            <div className="space-y-4">
                                <div className="flex flex-col gap-1">
                                    <div className="flex justify-between text-[10px] font-mono">
                                        <span className="text-slate-300">TECHNICAL_ACCURACY</span>
                                        <span className="text-accent">98.2%</span>
                                    </div>
                                    <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-accent w-[98%]"></div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="flex justify-between text-[10px] font-mono">
                                        <span className="text-slate-300">TONE_CONSISTENCY</span>
                                        <span className="text-accent">85.4%</span>
                                    </div>
                                    <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-accent/60 w-[85%]"></div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="flex justify-between text-[10px] font-mono">
                                        <span className="text-slate-300">COORDINATION_LAG</span>
                                        <span className="text-yellow-400">12ms</span>
                                    </div>
                                    <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-yellow-400/40 w-[30%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-accent/10 border border-accent/30 rounded-lg p-5 flex items-center justify-between">
                            <div>
                                <p className="text-[10px] font-mono text-accent uppercase font-bold">System Status</p>
                                <p className="text-sm font-bold">ALL AGENTS PERFORMING</p>
                            </div>
                            <span className="material-symbols-outlined text-accent animate-pulse">verified_user</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
