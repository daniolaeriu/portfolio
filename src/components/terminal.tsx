export function Terminal({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-12">
      <div className="bg-slate-800 rounded-lg p-6 border border-cyan-500/30 shadow-lg shadow-cyan-500/20 interactive">
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="font-mono text-sm space-y-2">
          {children}

          <div className="text-green-400 flex items-center gap-2 animate-pulse">
            <span className="text-cyan-400">$</span>
            <span className="inline-block w-2 h-4 bg-green-400"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
