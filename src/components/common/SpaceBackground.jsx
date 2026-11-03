import React, { useState, useEffect } from "react";
import Hyperspeed, { SPACE_PRESETS } from "./Hyperspeed";
import { Zap, Compass, Sparkles, ChevronRight, Eye } from "lucide-react";

export default function SpaceBackground() {
  const [selectedTheme, setSelectedTheme] = useState("deepCosmos");
  const [isWarping, setIsWarping] = useState(false);
  const [showHud, setShowHud] = useState(false);

  // Custom effect options with responsive callbacks
  const currentPreset = SPACE_PRESETS[selectedTheme] || SPACE_PRESETS.deepCosmos;

  const effectOptions = {
    ...currentPreset,
    onSpeedUp: () => setIsWarping(true),
    onSlowDown: () => setIsWarping(false)
  };

  return (
    <div className="space-bg-container" aria-hidden="true">
      {/* Three.js Hyperspeed & Space Starfield Canvas */}
      <Hyperspeed effectOptions={effectOptions} />

      {/* Layered Cosmic Nebula Atmosphere */}
      <div className="space-nebula-overlay" />

      {/* Deep Space Vignette to keep text readable */}
      <div className="space-vignette" />

      {/* Subtle Space Particle Dust Overlay for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.035] pointer-events-none" />

      {/* Interactive Space Cockpit / Warp Speed HUD */}
      <div className="fixed bottom-4 right-4 z-40 pointer-events-auto select-none">
        <div className="relative">
          {/* Collapsible Panel */}
          {showHud && (
            <div className="mb-2 p-3 rounded-2xl bg-slate-950/90 border border-cyan-500/30 backdrop-blur-xl shadow-2xl shadow-cyan-950/50 text-xs w-64 animate-in fade-in slide-in-from-bottom-3 duration-200">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80">
                <div className="flex items-center gap-1.5 font-mono text-cyan-300 font-semibold text-[11px]">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>WARP DRIVE ENGINE</span>
                </div>
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${isWarping ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'}`}>
                  {isWarping ? 'WARP ENGAGED' : 'CRUISING'}
                </span>
              </div>

              <div className="space-y-1.5">
                <p className="text-[11px] text-slate-400">Cosmic Colorways:</p>
                <div className="grid grid-cols-3 gap-1.5">
                  <button
                    onClick={() => setSelectedTheme("deepCosmos")}
                    className={`py-1.5 px-2 rounded-lg text-[10px] font-mono border text-center transition-all ${
                      selectedTheme === "deepCosmos"
                        ? "bg-cyan-500/20 border-cyan-400 text-cyan-200 font-bold"
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                    }`}
                  >
                    Cosmos
                  </button>
                  <button
                    onClick={() => setSelectedTheme("cyberNebula")}
                    className={`py-1.5 px-2 rounded-lg text-[10px] font-mono border text-center transition-all ${
                      selectedTheme === "cyberNebula"
                        ? "bg-purple-500/20 border-purple-400 text-purple-200 font-bold"
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                    }`}
                  >
                    Nebula
                  </button>
                  <button
                    onClick={() => setSelectedTheme("solarWarp")}
                    className={`py-1.5 px-2 rounded-lg text-[10px] font-mono border text-center transition-all ${
                      selectedTheme === "solarWarp"
                        ? "bg-amber-500/20 border-amber-400 text-amber-200 font-bold"
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                    }`}
                  >
                    Solar
                  </button>
                </div>
              </div>

              <div className="mt-2.5 pt-2 border-t border-slate-800/80 text-[10px] text-slate-400/90 leading-tight">
                💡 <span className="text-slate-300 font-medium">Tip:</span> Click & hold anywhere on screen to activate hyperspeed warp!
              </div>
            </div>
          )}

          {/* Minimal HUD Pill Button */}
          <button
            onClick={() => setShowHud(!showHud)}
            className={`group flex items-center gap-2 px-3 py-2 rounded-full border backdrop-blur-xl transition-all shadow-lg text-xs font-mono ${
              isWarping
                ? "bg-cyan-500/25 border-cyan-400 text-cyan-200 shadow-cyan-500/30 scale-105"
                : "bg-slate-950/80 hover:bg-slate-900/90 border-slate-800 hover:border-cyan-500/40 text-slate-300"
            }`}
            title="Hyperspeed Space Controls"
            aria-label="Toggle Space Controls"
          >
            <div className={`w-2 h-2 rounded-full ${isWarping ? 'bg-cyan-400 animate-ping' : 'bg-emerald-400 animate-pulse'}`} />
            <Zap className={`w-3.5 h-3.5 ${isWarping ? 'text-cyan-300' : 'text-cyan-400 group-hover:rotate-12 transition-transform'}`} />
            <span className="hidden sm:inline">
              {isWarping ? "HYPERDRIVE 2.5x" : "SPACE WARP"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
