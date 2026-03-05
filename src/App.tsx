export default function App() {
  return (
    <>
      <header className="flex items-center justify-between border-b-2 border-white px-6 py-4 shrink-0 bg-background-dark z-10">
        <div className="flex items-center gap-4 text-white">
          <div className="size-8 bg-white text-black flex items-center justify-center font-black text-xl">
            A
          </div>
          <h2 className="text-xl font-black uppercase tracking-widest">Advoloom Logger</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8 items-center">
          <nav className="flex items-center gap-8 hidden md:flex uppercase tracking-widest text-xs font-bold">
            <a className="text-text-muted hover:text-white transition-colors hover:underline decoration-2 underline-offset-4" href="#">Dashboard</a>
            <a className="text-white border-b-2 border-primary pb-1" href="#">Logger</a>
            <a className="text-text-muted hover:text-white transition-colors hover:underline decoration-2 underline-offset-4" href="#">Projects</a>
          </nav>
          <button className="flex items-center justify-center h-10 px-6 bg-white text-black text-xs font-black uppercase tracking-wider hover:bg-primary hover:text-black transition-colors gap-2 border border-white">
            <span className="material-symbols-outlined text-sm">download</span>
            <span>Export CSV</span>
          </button>
          <div className="size-10 bg-surface-light flex items-center justify-center text-white text-xs font-bold border border-border-color">
            JD
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
        <aside className="w-full md:w-72 border-r border-border-color bg-background-dark flex flex-col shrink-0 overflow-y-auto">
          <div className="p-6 border-b border-border-color">
            <h3 className="text-xs font-black uppercase tracking-widest text-white mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">local_offer</span>
              Tag Schema
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between group cursor-pointer p-3 border border-border-color hover:border-white transition-colors bg-surface">
                <div className="flex items-center gap-4 w-full">
                  <div className="flex items-center justify-center size-8 border-2 border-white bg-transparent text-white font-black text-sm">Q</div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white uppercase tracking-wide">Quote</span>
                    <span className="text-[10px] text-text-muted">Solid Border</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between group cursor-pointer p-3 border border-border-color hover:border-white transition-colors bg-surface">
                <div className="flex items-center gap-4 w-full">
                  <div className="flex items-center justify-center size-8 border-2 border-dashed border-white text-white font-black text-sm">B</div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white uppercase tracking-wide">B-Roll</span>
                    <span className="text-[10px] text-text-muted">Dashed Border</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between group cursor-pointer p-3 border border-border-color hover:border-white transition-colors bg-surface">
                <div className="flex items-center gap-4 w-full">
                  <div className="flex items-center justify-center size-8 border-2 border-dotted border-white text-white font-black text-sm">I</div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white uppercase tracking-wide">Insight</span>
                    <span className="text-[10px] text-text-muted">Dotted Border</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 flex-1">
            <h3 className="text-xs font-black uppercase tracking-widest text-white mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">settings</span>
              Quick Settings
            </h3>
            <label className="flex items-center gap-4 py-3 cursor-pointer group border-b border-border-color">
              <div className="relative flex items-center">
                <input defaultChecked className="sr-only peer" type="checkbox"/>
                <div className="w-10 h-5 bg-surface-light border border-border-color peer-focus:outline-none peer peer-checked:after:translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-text-muted after:border-gray-300 after:border after:h-4 after:w-4 after:transition-all peer-checked:bg-primary peer-checked:after:bg-black peer-checked:border-primary"></div>
              </div>
              <span className="text-xs font-bold uppercase tracking-wide text-text-muted group-hover:text-white transition-colors">Auto-pause on tag</span>
            </label>
            <label className="flex items-center gap-4 py-3 cursor-pointer group border-b border-border-color">
              <div className="relative flex items-center">
                <input className="sr-only peer" type="checkbox"/>
                <div className="w-10 h-5 bg-surface-light border border-border-color peer-focus:outline-none peer peer-checked:after:translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-text-muted after:border-gray-300 after:border after:h-4 after:w-4 after:transition-all peer-checked:bg-primary peer-checked:after:bg-black peer-checked:border-primary"></div>
              </div>
              <span className="text-xs font-bold uppercase tracking-wide text-text-muted group-hover:text-white transition-colors">Snap to grid</span>
            </label>
          </div>
        </aside>
        <section className="flex-1 flex flex-col min-w-0 bg-background-dark overflow-hidden relative border-r border-border-color">
          <div className="flex-1 p-8 flex flex-col items-center justify-center min-h-[400px] bg-[#050505]">
            <div className="relative w-full max-w-5xl aspect-video bg-black border-2 border-white shadow-sharp group">
              <div className="absolute inset-0 bg-cover bg-center grayscale contrast-125" data-alt="Cinematic shot of a city street at dusk" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCDJiycr77lWOWeUijZRI6mEoDAa2ec2mp-YtLOSxZia2cQg1FrUPYiiBWTVa50nR9kQAQXnp0TmUekp0GcGmvyU1c2l6mc3AXTSVjIgGO3kuILUZ2SpJ7qRrIftlkoN7jJvqYAlOduIJfshrOysaOwGzranIoMkuoRM4OD1yyze8lchQwWsNGNS3xpLsPax_VNpnx6XsSOpSVhW7wOHZTQ5rJIrsupVp4u6X-UzfJtYfrYifHXrSEiFcICacaTsaVaa2ZNa69arkE')"}}></div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
                <button className="flex items-center justify-center size-20 bg-primary text-black hover:bg-white hover:text-black transition-all border-2 border-black shadow-sharp">
                  <span className="material-symbols-outlined text-5xl ml-1">play_arrow</span>
                </button>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-black pt-4 pb-4 px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-3 border-t-2 border-white">
                <div className="flex h-4 items-center w-full cursor-pointer bg-surface-light border border-white relative group/timeline">
                  <div className="h-full w-[35%] bg-primary relative">
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 size-4 bg-white border-2 border-black transform scale-0 group-hover/timeline:scale-100 transition-transform"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-white font-mono text-xs tracking-wider font-bold">
                  <span className="bg-white text-black px-2 py-0.5">00:01:23:14</span>
                  <div className="flex items-center gap-6">
                    <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-[20px]">volume_up</span></button>
                    <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-[20px]">settings</span></button>
                    <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-[20px]">fullscreen</span></button>
                  </div>
                  <span className="text-text-muted">00:04:12:20</span>
                </div>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-4 bg-black px-8 py-3 border-2 border-white shadow-sharp">
              <button className="text-white hover:text-primary transition-colors" title="Jump Back 10s"><span className="material-symbols-outlined text-3xl">replay_10</span></button>
              <button className="text-white hover:text-primary transition-colors" title="Previous Marker"><span className="material-symbols-outlined text-3xl">skip_previous</span></button>
              <button className="flex items-center justify-center size-12 bg-white text-black hover:bg-primary hover:text-black transition-colors border-2 border-black" title="Play/Pause"><span className="material-symbols-outlined text-3xl">play_arrow</span></button>
              <button className="text-white hover:text-primary transition-colors" title="Next Marker"><span className="material-symbols-outlined text-3xl">skip_next</span></button>
              <button className="text-white hover:text-primary transition-colors" title="Jump Forward 10s"><span className="material-symbols-outlined text-3xl">forward_10</span></button>
            </div>
          </div>
          <div className="h-72 border-t-2 border-white bg-[#0f0f0f] flex flex-col shrink-0 relative overflow-hidden">
            <div className="absolute top-0 bottom-0 left-[35%] w-0.5 bg-primary z-30 pointer-events-none mix-blend-screen">
              <div className="absolute top-0 -left-2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-primary"></div>
            </div>
            <div className="h-10 border-b border-border-color flex items-end px-4 relative overflow-hidden bg-surface">
              <div className="absolute inset-0 flex items-end pl-[35%] gap-[50px] text-[10px] font-mono text-text-muted select-none">
                <div className="relative h-full flex flex-col justify-end pb-1 w-0"><div className="h-3 w-px bg-white absolute bottom-0"></div><span className="absolute bottom-4 -translate-x-1/2 font-bold text-white">01:20</span></div>
                <div className="relative h-full flex flex-col justify-end pb-1 w-0"><div className="h-1.5 w-px bg-border-color absolute bottom-0"></div></div>
                <div className="relative h-full flex flex-col justify-end pb-1 w-0"><div className="h-1.5 w-px bg-border-color absolute bottom-0"></div></div>
                <div className="relative h-full flex flex-col justify-end pb-1 w-0"><div className="h-1.5 w-px bg-border-color absolute bottom-0"></div></div>
                <div className="relative h-full flex flex-col justify-end pb-1 w-0"><div className="h-1.5 w-px bg-border-color absolute bottom-0"></div></div>
                <div className="relative h-full flex flex-col justify-end pb-1 w-0"><div className="h-3 w-px bg-white absolute bottom-0"></div><span className="absolute bottom-4 -translate-x-1/2 font-bold text-white">01:23</span></div>
                <div className="relative h-full flex flex-col justify-end pb-1 w-0"><div className="h-1.5 w-px bg-border-color absolute bottom-0"></div></div>
                <div className="relative h-full flex flex-col justify-end pb-1 w-0"><div className="h-1.5 w-px bg-border-color absolute bottom-0"></div></div>
                <div className="relative h-full flex flex-col justify-end pb-1 w-0"><div className="h-1.5 w-px bg-border-color absolute bottom-0"></div></div>
                <div className="relative h-full flex flex-col justify-end pb-1 w-0"><div className="h-1.5 w-px bg-border-color absolute bottom-0"></div></div>
                <div className="relative h-full flex flex-col justify-end pb-1 w-0"><div className="h-3 w-px bg-white absolute bottom-0"></div><span className="absolute bottom-4 -translate-x-1/2 font-bold text-white">01:26</span></div>
              </div>
            </div>
            <div className="flex-1 flex flex-col relative overflow-hidden bg-[linear-gradient(to_right,#333_1px,transparent_1px)] bg-[size:50px_100%]">
              <div className="flex-1 border-b border-border-color relative flex items-center hover:bg-surface-light transition-colors group bg-surface">
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-black flex items-center justify-center border-r border-border-color z-10 shrink-0">
                  <span className="text-white font-black text-sm">Q</span>
                </div>
                <div className="absolute h-10 bg-black border-2 border-white flex items-center px-3 left-[20%] w-[12%] cursor-pointer hover:bg-surface-light transition-colors">
                  <span className="text-[10px] font-mono text-white truncate pointer-events-none uppercase font-bold tracking-wider">Early Life</span>
                </div>
                <div className="absolute h-10 bg-primary border-2 border-white flex items-center px-3 left-[35%] w-[18%] cursor-pointer shadow-[4px_4px_0px_rgba(255,255,255,0.2)]">
                  <span className="text-[10px] font-mono text-black truncate pointer-events-none font-black uppercase tracking-wider">"I always knew..."</span>
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-black/20 cursor-ew-resize hover:bg-black/50"></div>
                </div>
              </div>
              <div className="flex-1 border-b border-border-color relative flex items-center hover:bg-surface-light transition-colors bg-surface">
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-black flex items-center justify-center border-r border-border-color z-10 shrink-0">
                  <span className="text-white font-black text-sm">B</span>
                </div>
                <div className="absolute h-10 bg-black/80 border-2 border-dashed border-white flex items-center px-3 left-[10%] w-[8%] cursor-pointer hover:bg-surface-light transition-colors">
                  <span className="text-[10px] font-mono text-white truncate pointer-events-none uppercase tracking-wider">City Estab.</span>
                </div>
                <div className="absolute h-10 bg-black/80 border-2 border-dashed border-white flex items-center px-3 left-[55%] w-[15%] cursor-pointer hover:bg-surface-light transition-colors">
                  <span className="text-[10px] font-mono text-white truncate pointer-events-none uppercase tracking-wider">Traffic Pan</span>
                </div>
              </div>
              <div className="flex-1 relative flex items-center hover:bg-surface-light transition-colors bg-surface">
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-black flex items-center justify-center border-r border-border-color z-10 shrink-0">
                  <span className="text-white font-black text-sm">I</span>
                </div>
                <div className="absolute h-10 bg-surface border-2 border-dotted border-white flex items-center px-3 left-[80%] w-[10%] cursor-pointer hover:bg-surface-light transition-colors">
                  <span className="text-[10px] font-mono text-white truncate pointer-events-none uppercase tracking-wider">Key Theme</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <aside className="w-full md:w-96 border-l border-border-color bg-background-dark flex flex-col shrink-0 overflow-hidden">
          <div className="p-4 border-b border-border-color flex justify-between items-center bg-surface">
            <h3 className="text-xs font-black uppercase tracking-widest text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">list_alt</span>
              Event Manifest
            </h3>
            <span className="text-xs font-mono font-bold bg-white text-black px-2 py-1">4 items</span>
          </div>
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
            <div className="p-4 border border-border-color hover:border-white transition-colors flex flex-col gap-2 group cursor-pointer bg-surface">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-3 border border-white"></div>
                  <span className="text-xs font-mono font-bold text-text-muted group-hover:text-white transition-colors">00:00:45:10</span>
                </div>
                <span className="text-[10px] uppercase font-black text-white border border-dashed border-white px-2 py-0.5">B-Roll</span>
              </div>
              <p className="text-sm text-text-muted mt-1 group-hover:text-white transition-colors">City Establishing shot.</p>
            </div>
            <div className="p-4 border border-border-color hover:border-white transition-colors flex flex-col gap-2 group cursor-pointer bg-surface">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-3 bg-white"></div>
                  <span className="text-xs font-mono font-bold text-text-muted group-hover:text-white transition-colors">00:01:10:05</span>
                </div>
                <span className="text-[10px] uppercase font-black text-white border border-white px-2 py-0.5">Quote</span>
              </div>
              <p className="text-sm text-text-muted mt-1 italic group-hover:text-white transition-colors">"It was a different time back then..."</p>
            </div>
            <div className="p-4 border-2 border-primary bg-surface-light flex flex-col gap-2 relative shadow-sharp-primary">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-3 bg-primary animate-pulse"></div>
                  <span className="text-xs font-mono font-black text-black bg-primary px-2 py-0.5">00:01:23:14</span>
                </div>
                <span className="text-[10px] uppercase font-black text-black bg-primary px-2 py-0.5">Quote</span>
              </div>
              <p className="text-sm text-white font-medium mt-1">"I always knew I wanted to build something."</p>
              <div className="mt-2">
                <input className="w-full bg-black border border-border-color text-xs px-3 py-2 text-white placeholder-text-muted focus:outline-none focus:border-primary font-mono" placeholder="Add notes... (Enter to save)" type="text" defaultValue="Crucial moment for narrative arc."/>
              </div>
            </div>
            <div className="p-4 border border-border-color hover:border-white transition-colors flex flex-col gap-2 group cursor-pointer bg-surface opacity-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-3 border border-dotted border-white"></div>
                  <span className="text-xs font-mono font-bold text-text-muted group-hover:text-white transition-colors">00:04:12:20</span>
                </div>
                <span className="text-[10px] uppercase font-black text-white border border-dotted border-white px-2 py-0.5">Insight</span>
              </div>
              <p className="text-sm text-text-muted mt-1 group-hover:text-white transition-colors">Key realization about the market.</p>
            </div>
          </div>
          <div className="p-4 border-t border-border-color bg-surface">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-text-muted mb-2 tracking-wide">
              <span className="material-symbols-outlined text-[14px]">keyboard</span>
              <span>Press <b>[Tag Key]</b> to log at playhead</span>
            </div>
          </div>
        </aside>
      </main>
    </>
  )
}
