import React from "react";
import { Cpu, Target, Layout, Rocket, Sparkles, BrainCircuit } from "lucide-react";
import { journeyStages } from "../../data/journeyData";

export default function LearningJourney() {
  const iconMap = {
    Cpu: Cpu,
    Target: Target,
    Layout: Layout,
    Rocket: Rocket,
    Sparkles: Sparkles,
    BrainCircuit: BrainCircuit
  };

  return (
    <section id="journey" className="py-24 relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/80 border border-purple-500/30 text-purple-300 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span>PROGRESSION ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Developer <span className="text-gradient-purple">Evolution</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            From C++ low-level systems & DSA to full-stack engineering and machine learning models.
          </p>
        </div>

        {/* Timeline Roadmap */}
        <div className="relative">
          {/* Vertical Center Line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-cyan-400 via-indigo-500 to-purple-500 opacity-30 pointer-events-none shadow-sm shadow-cyan-400/50" />

          <div className="space-y-8 lg:space-y-12">
            {journeyStages.map((stage, idx) => {
              const Icon = iconMap[stage.icon] || Sparkles;
              const isEven = idx % 2 === 0;
              const isCurrent = stage.isCurrent;

              return (
                <div
                  key={stage.step}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8 group`}
                >
                  {/* Left / Right Content Card */}
                  <div className="w-full lg:w-1/2">
                    <div
                      className={`p-6 sm:p-7 rounded-2xl transition-all duration-300 ${
                        isCurrent
                          ? "glass-card border-purple-500/50 shadow-xl shadow-purple-950/30 scale-[1.02]"
                          : "glass-card border-slate-700/80 hover:border-slate-600"
                      }`}
                    >
                      {/* Step Header */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-cyan-300 px-2.5 py-0.5 bg-slate-900 rounded-md border border-slate-700">
                            STAGE 0{stage.step}
                          </span>
                          <span className="text-xs font-mono text-slate-400">
                            {stage.phase}
                          </span>
                        </div>

                        <span
                          className={`px-2.5 py-0.5 text-[11px] font-mono font-bold rounded-full ${
                            isCurrent
                              ? "bg-purple-500/20 text-purple-300 border border-purple-400/50 animate-pulse"
                              : "bg-slate-900 text-slate-300 border border-slate-700"
                          }`}
                        >
                          {stage.status}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                        {stage.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-300 text-sm leading-relaxed mt-2">
                        {stage.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-4 mt-2 border-t border-slate-800">
                        {stage.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className={`px-2 py-0.5 text-[11px] font-mono rounded ${
                              isCurrent
                                ? "bg-purple-950/40 text-purple-200 border border-purple-800/50"
                                : "bg-slate-900 text-slate-300 border border-slate-800"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Node Marker */}
                  <div className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                        isCurrent
                          ? "bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-cyan-500/40 scale-110 ring-4 ring-cyan-500/20"
                          : "bg-[#0d1424] text-slate-300 border border-slate-700 shadow-md group-hover:text-white group-hover:border-cyan-500/40"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Spacer for the opposite column on desktop */}
                  <div className="hidden lg:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
