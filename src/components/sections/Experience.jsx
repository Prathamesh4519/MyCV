import React from "react";
import { Users, Music, CheckCircle2, Calendar } from "lucide-react";
import { experienceData } from "../../data/experienceData";

export default function Experience() {
  const iconMap = {
    Music: Music,
    Users: Users
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>RESPONSIBILITY & TEAMWORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Leadership & <span className="text-gradient-cyan">Experience</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Campus leadership, event operations, and cross-functional team coordination at IIIT Nagpur.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {experienceData.map((exp) => {
            const Icon = iconMap[exp.icon] || Users;

            return (
              <div
                key={exp.id}
                className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/80 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="relative z-10 space-y-5">
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-xl bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                          {exp.type}
                        </span>
                        <h3 className="text-lg font-bold font-display text-white mt-0.5">
                          {exp.role}
                        </h3>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 text-xs font-mono font-bold rounded-full bg-slate-900 text-slate-200 border border-slate-700">
                      {exp.badge}
                    </span>
                  </div>

                  {/* Organization & Period */}
                  <div className="flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 pb-3 border-b border-slate-800 gap-2">
                    <span className="font-semibold text-white">{exp.organization}</span>
                    <span className="flex items-center gap-1.5 text-cyan-300">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2.5 pt-1">
                    {exp.contributions.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Skills tags */}
                <div className="relative z-10 pt-6 mt-4 border-t border-slate-800 flex flex-wrap gap-1.5">
                  {exp.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-slate-900/80 text-slate-300 border border-slate-800"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
