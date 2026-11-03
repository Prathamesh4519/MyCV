import React from "react";
import { Trophy, Code2, Award, Zap, ExternalLink, ArrowUpRight, Star } from "lucide-react";
import { achievementsData } from "../../data/achievementsData";
import { personalInfo } from "../../data/portfolioData";

export default function Achievements() {
  const iconMap = {
    Code2: Code2,
    Trophy: Trophy,
    Award: Award,
    Zap: Zap
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/80 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>METRICS & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Competitive <span className="text-gradient-amber">Milestones</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Verified algorithmic problem solving, competitive coding metrics, and hackathon accomplishments.
          </p>
        </div>

        {/* 4-Card Achievement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {achievementsData.map((item) => {
            const Icon = iconMap[item.icon] || Trophy;

            return (
              <div
                key={item.id}
                className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-700/80 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="relative z-10 space-y-5">
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-xl bg-amber-500/15 text-amber-300 border border-amber-500/30 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                          {item.category}
                        </span>
                        <h3 className="text-lg font-bold font-display text-white mt-0.5">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 text-xs font-mono font-bold rounded-full bg-slate-900 text-amber-300 border border-amber-500/30">
                      {item.badge}
                    </span>
                  </div>

                  {/* Big Highlight Number */}
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight group-hover:text-amber-300 transition-colors">
                      {item.statNumber}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {item.statLabel}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Breakdown Badges */}
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    {item.metricBreakdown.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-2.5 rounded-xl text-center border border-slate-800 bg-slate-900/80 font-mono"
                      >
                        <div className="font-bold text-sm sm:text-base text-white">{m.count}</div>
                        <div className="text-[10px] uppercase text-slate-400 mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* External Profile Link */}
                  {item.link && (
                    <div className="pt-2">
                      <a
                        href={item.link.startsWith("#") ? item.link : item.link}
                        target={item.link.startsWith("#") ? "_self" : "_blank"}
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                      >
                        <span>{item.linkText}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Coding Profiles Ribbon */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-2.5 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30 shrink-0">
              <Star className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-white">Competitive Programming Profiles</div>
              <div className="text-xs text-slate-400">Track algorithmic progress and verified live contest submissions</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/30 text-xs font-semibold transition-colors"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>LeetCode (200+)</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            <a
              href={personalInfo.socials.codechef}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-sky-300 border border-sky-500/30 text-xs font-semibold transition-colors"
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>CodeChef (2★)</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
