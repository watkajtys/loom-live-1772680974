import React from 'react';

interface CommandCenterLayoutProps {
  children: React.ReactNode;
}

export function CommandCenterLayout({ children }: CommandCenterLayoutProps) {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      {/* Sidebar Placeholder */}
      <aside className="w-64 flex-shrink-0 border-r border-slate-800 hidden md:block" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto">
          {/* Sidebar content will go here */}
          <div className="text-xl font-bold mb-4">Sidebar Placeholder</div>
        </div>
      </aside>

      <div className="flex flex-col flex-1 min-w-0">
        {/* Header Placeholder */}
        <header className="h-16 flex-shrink-0 border-b border-slate-800 flex items-center px-6" aria-label="Header">
          {/* Header content will go here */}
          <div className="text-lg font-semibold">Header Placeholder</div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6" aria-label="Main Content">
          {children}
        </main>
      </div>
    </div>
  );
}
