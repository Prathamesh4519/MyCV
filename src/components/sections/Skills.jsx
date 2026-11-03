import React, { useState } from "react";
import { Code, Layout, Database, Wrench, Sparkles, Flame } from "lucide-react";
import { skillsCategories } from "../../data/skillsData";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categoryIcons = {
    languages: Code,
    webdev: Layout,
    "backend-db": Database,
    tools: Wrench,
    "learning-ml": Sparkles
  };

  const allSkills = skillsCategories.flatMap((cat) =>
    cat.skills.map((s) => ({ ...s, categoryName: cat.name, isLearningCat: cat.isLearningCategory }))
  );

  const displayedCategories =
    activeCategory === "all"
      ? skillsCategories
      : skillsCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/80 border border-purple-500/30 text-purple-300 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Skills & <span className="text-gradient-purple">Technologies</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Categorized technical stack with a clear distinction between production foundations and active machine learning exploration.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-cyan-500/25 scale-105"
                : "bg-slate-900/80 text-slate-300 hover:text-white border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800"
            }`}
          >
            All Technologies ({allSkills.length})
          </button>
          {skillsCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Code;
            const isActive = activeCategory === cat.id;
            const isLearning = cat.isLearningCategory;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? isLearning
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30 scale-105"
                      : "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 scale-105"
                    : isLearning
                    ? "bg-purple-950/30 text-purple-300 border border-purple-800/50 hover:bg-purple-900/40"
                    : "bg-slate-900/80 text-slate-300 hover:text-white border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
                {isLearning && <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />}
              </button>
            );
          })}
        </div>

        {/* Skills Display by Category */}
        <div className="space-y-10">
          {displayedCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Code;
            const isLearningCategory = category.isLearningCategory;

            return (
              <div
                key={category.id}
                className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-700/80 transition-all"
              >
                {/* Category Title & Note */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2.5 rounded-xl border ${
                        isLearningCategory
                          ? "bg-purple-500/15 text-purple-300 border-purple-500/30 shadow-sm"
                          : "bg-cyan-500/15 text-cyan-300 border-cyan-500/30 shadow-sm"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-display text-white flex items-center gap-2">
                        {category.name}
                        {isLearningCategory && (
                          <span className="px-2.5 py-0.5 text-[11px] font-mono font-bold rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40">
                            Active Learning
                          </span>
                        )}
                      </h3>
                      <p className="text-xs text-slate-300">{category.description}</p>
                    </div>
                  </div>

                  {isLearningCategory && (
                    <div className="text-xs font-mono text-purple-300 flex items-center gap-1.5 bg-purple-950/50 px-3 py-1.5 rounded-lg border border-purple-800/60">
                      <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                      <span>Mathematical Foundations & Modeling</span>
                    </div>
                  )}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill, sIdx) => {
                    return (
                      <div
                        key={sIdx}
                        className={`p-4 rounded-xl transition-all duration-300 group border ${
                          skill.isLearning
                            ? "bg-slate-900/70 border-purple-500/25 hover:border-purple-500/60 hover:bg-purple-950/20"
                            : "bg-slate-900/70 border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/80"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2.5">
                            <span
                              className="w-2.5 h-2.5 rounded-full inline-block shrink-0 shadow-sm"
                              style={{ backgroundColor: skill.color || "#06b6d4" }}
                            />
                            <div className="font-semibold text-sm text-white group-hover:text-cyan-300 transition-colors">
                              {skill.name}
                            </div>
                          </div>

                          {/* Level or Learning status badge */}
                          {skill.isLearning ? (
                            <span className="px-2 py-0.5 text-[10px] font-mono font-medium rounded bg-purple-500/20 text-purple-300 border border-purple-500/40 shrink-0">
                              {skill.learningStatus || "Learning"}
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-800 text-slate-200 border border-slate-700 shrink-0">
                              {skill.level}
                            </span>
                          )}
                        </div>

                        {/* Description */}
                        <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                          {skill.description}
                        </p>

                        {/* Highlight flag if present */}
                        {skill.highlight && (
                          <div className="mt-3 pt-2 border-t border-slate-800 flex items-center gap-1.5 text-[11px] font-medium text-cyan-400">
                            <Flame className="w-3.5 h-3.5 text-amber-400" />
                            <span>{skill.highlight}</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
