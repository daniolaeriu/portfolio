export function Terminal() {
  return (
    <div className="mt-12">
      <div className="bg-slate-800 rounded-lg p-6 border border-cyan-500/30 shadow-lg shadow-cyan-500/20 interactive">
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="font-mono text-sm space-y-2">
          <div className="text-green-400">
            <span className="text-cyan-400">$</span> cat experience.json
          </div>
          <div className="text-gray-300 ml-2">
            <span className="text-yellow-400">&#123;</span>
          </div>

          <div className="ml-4 space-y-1">
            <div className="flex items-center gap-3">
              <img src="/webamboos.webp" className="w-14 h-14" alt="" />
              <div className="flex-1">
                <div className="text-purple-400">
                  "company"<span className="text-gray-400">:</span>{" "}
                  <span className="text-green-300">"Webamboos"</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="text-purple-400">
                  "position"<span className="text-gray-400">:</span>{" "}
                  <span className="text-green-300">"Frontend Developer"</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="text-purple-400">
                  "period"<span className="text-gray-400">:</span>{" "}
                  <span className="text-green-300">"2022 - Present"</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="text-purple-400">
                  "stack"<span className="text-gray-400">:</span>{" "}
                  <span className="text-yellow-400">[</span>
                  <span className="text-green-300">
                    "React", "TypeScript", "Vue", "Tailwind"
                  </span>
                  <span className="text-yellow-400">]</span>
                  <span className="text-gray-400">,</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-gray-300 ml-2">
            <span className="text-yellow-400">&#125;</span>
          </div>

          <div className="text-green-400 flex items-center gap-2 animate-pulse">
            <span className="text-cyan-400">$</span>
            <span className="inline-block w-2 h-4 bg-green-400"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
