import React from "react";
import { GraduationCap, Code2, Rocket, Brain, Award, Layers, Terminal, Sparkles } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";

export default function About() {
  const coreInterests = [
    { text: "Building practical projects from conceptual ideas", icon: Rocket, color: "text-cyan-400", bg: "bg-cyan-500/10" },
    { text: "C++ Programming & Algorithmic Problem Solving", icon: Code2, color: "text-indigo-400", bg: "bg-indigo-500/10" },
    { text: "Modern Web Applications (React.js & Tailwind CSS)", icon: Layers, color: "text-purple-400", bg: "bg-purple-500/10" },
    { text: "Competitive Programming (LeetCode & CodeChef)", icon: Award, color: "text-amber-400", bg: "bg-amber-500/10" },
    { text: "Exploring Machine Learning & Data Science", icon: Brain, color: "text-emerald-400", bg: "bg-emerald-500/10" },
    { text: "Understanding computer systems & memory management", icon: Terminal, color: "text-rose-400", bg: "bg-rose-500/10" },
    { text: "Continuous learning & software craft improvement", icon: Sparkles, color: "text-sky-400", bg: "bg-sky-500/10" }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>BACKGROUND & EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            About <span className="text-gradient-cyan">Prathamesh Kale</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Combining strong algorithmic foundations in C++ with modern full-stack web technologies and active exploration in Machine Learning.
          </p>
        </div>

        {/* Top Feature Profile Card with Photo */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Portrait Image Column */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative group">
                {/* Glowing border background ring */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 rounded-3xl blur-md opacity-60 group-hover:opacity-100 transition-opacity" />

                {/* Image Container */}
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden bg-[#0d1424] border border-cyan-500/30 shadow-2xl">
                  <img
                    src="/profile.jpg"
                    alt="Prathamesh Kale"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d1a]/90 via-transparent to-transparent pointer-events-none" />

                  {/* On-image badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700/80 text-center">
                    <div className="font-bold text-sm text-white font-display">Prathamesh Kale</div>
                    <div className="text-[11px] font-mono text-cyan-300">B.Tech CSE @ IIIT Nagpur</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Intro Column */}
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Problem Solver • Software Builder • ML Explorer</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                "Turning complex algorithmic logic into elegant, high-performance software."
              </h3>

              <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                I am a Computer Science and Engineering undergraduate at <strong className="text-white font-semibold">IIIT Nagpur</strong> who has completed second year. My engineering focus combines solid foundations in <strong className="text-cyan-300">C++</strong> and <strong className="text-cyan-300">Data Structures & Algorithms</strong> with responsive full-stack web applications using <strong className="text-white">React.js, Tailwind CSS, PHP, and MongoDB</strong>.
              </p>

              <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                Alongside core software development and competitive programming (200+ LeetCode problems solved, 2★ CodeChef), I am diving deep into <strong className="text-purple-300">Machine Learning & Data Science</strong> fundamentals, focusing on NumPy, Pandas, Matplotlib, and Scikit-learn to build intelligent, real-world tools.
              </p>

              {/* Highlights pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-900/80 border border-slate-700 text-slate-200">
                  ⚡ 200+ LeetCode Solved
                </span>
                <span className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-900/80 border border-amber-500/30 text-amber-300">
                  🏆 CodeChef 2★ (1538)
                </span>
                <span className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-900/80 border border-purple-500/30 text-purple-300">
                  🎵 Former Head, Crescendo Club
                </span>
                <span className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-900/80 border border-emerald-500/30 text-emerald-300">
                  🚀 IIIT Nagpur Hackathon Top 7
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Core Focus Checklist */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-4">
              <h3 className="text-xl font-bold font-display text-white flex items-center gap-2">
                <span className="w-2 h-6 rounded-full bg-cyan-500 inline-block" />
                Areas of Passion & Daily Focus
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {coreInterests.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3 text-xs text-slate-200 p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-colors">
                      <div className={`p-2 rounded-lg ${item.bg} shrink-0`}>
                        <Icon className={`w-4 h-4 ${item.color}`} />
                      </div>
                      <span className="leading-snug">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Academic Record & Education Timeline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 rounded-2xl space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold font-display text-white flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                  Academic Background
                </h3>
                <span className="text-xs font-mono text-slate-400">2020 – 2028</span>
              </div>

              <div className="space-y-4">
                {personalInfo.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="font-semibold text-sm text-white">{edu.institution}</div>
                        <div className="text-xs text-cyan-300 font-medium mt-0.5">{edu.degree}</div>
                      </div>
                      <span className="px-2.5 py-1 text-xs font-mono font-bold rounded-lg bg-slate-800 text-amber-300 border border-amber-500/30 whitespace-nowrap">
                        {edu.score}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mt-2.5 pt-2 border-t border-slate-800 font-mono">
                      <span>{edu.period}</span>
                      <span className="text-emerald-400">{edu.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
