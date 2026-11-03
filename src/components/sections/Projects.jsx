import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, ArrowRight } from "lucide-react";
import { GithubIcon } from "../common/Icons";
import { projectsData } from "../../data/projectsData";
import { personalInfo } from "../../data/portfolioData";
import CricketSimPreview from "./CricketSimPreview";
import HabitTrackerPreview from "./HabitTrackerPreview";
import ProjectModal from "./ProjectModal";
import BorderGlow from "../common/BorderGlow";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : activeTab === "web"
        ? projectsData.filter((p) => p.technologies.includes("React.js") || p.technologies.includes("HTML5"))
        : projectsData.filter((p) => p.technologies.includes("C++") || p.technologies.includes("Algorithms"));

  return (
    <section id="projects" className="py-24 relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Featured <span className="text-gradient-cyan">Engineering Projects</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            From algorithmic simulation engines in C++ to full-stack web platforms and interactive visualizers.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === "all"
                ? "bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-cyan-500/25 scale-105"
                : "bg-slate-900/80 text-slate-300 hover:text-white border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800"
            }`}
          >
            All Projects ({projectsData.length})
          </button>
          <button
            onClick={() => setActiveTab("web")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === "web"
                ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 scale-105"
                : "bg-slate-900/80 text-slate-300 hover:text-white border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800"
            }`}
          >
            Web Applications
          </button>
          <button
            onClick={() => setActiveTab("cpp")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === "cpp"
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 scale-105"
                : "bg-slate-900/80 text-slate-300 hover:text-white border border-slate-700 hover:border-purple-500/50 hover:bg-slate-800"
            }`}
          >
            C++ & Algorithms
          </button>
        </div>

        {/* Featured Projects Grid */}
        <div className="space-y-12">
          {filteredProjects.map((project) => {
            const isCricket = project.id === "cricket-simulator";
            const isHabit = project.id === "habit-tracker";

            return (
              <BorderGlow
                key={project.id}
                borderRadius={24}
                glowRadius={36}
                glowColor="200 80 60"
                colors={["#06b6d4", "#6366f1", "#a855f7", "#38bdf8"]}
                backgroundColor="#0d1424"
                className="p-6 sm:p-8 transition-all duration-300 relative group border border-cyan-500/20"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column: Details, Highlights, Tech Stack, Links */}
                  <div className="lg:col-span-6 space-y-5">
                    {/* Badge & Category */}
                    <div className="flex items-center gap-2.5">
                      <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                        {project.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-400">{project.category}</span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 text-sm font-medium mt-1">{project.subtitle}</p>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Key Bullet Highlights */}
                    <div className="space-y-2 pt-1">
                      {project.highlights.slice(0, 3).map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-900/80 text-slate-300 border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-cyan-500/50 text-xs font-semibold transition-all hover:scale-[1.02]"
                        >
                          <GithubIcon className="w-4 h-4 text-cyan-400" />
                          <span>View Code</span>
                        </a>
                      )}

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white text-xs font-semibold shadow-lg shadow-cyan-500/25 border border-cyan-400/30 transition-all hover:scale-[1.02]"
                      >
                        <span>Full Project Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Live Interactive Preview or High-Tech Mockup */}
                  <div className="lg:col-span-6">
                    {isCricket && <CricketSimPreview />}
                    {isHabit && <HabitTrackerPreview />}
                    {!isCricket && !isHabit && (
                      <div className="bg-[#090e1c] rounded-2xl border border-cyan-500/20 p-6 space-y-4 shadow-xl">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-xs font-mono text-white font-semibold">{project.title} Specs</span>
                          </div>
                          <span className="text-xs font-mono text-cyan-400">Active</span>
                        </div>

                        <div className="space-y-3 font-mono text-xs text-slate-200 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                          <div className="text-cyan-400 font-semibold">// Architecture Highlights</div>
                          {project.highlights.map((h, i) => (
                            <div key={i} className="flex items-center gap-2 text-slate-300">
                              <span className="text-cyan-400">&gt;</span>
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-2 text-xs font-mono text-slate-400">
                          <span>Stack: {project.technologies.slice(0, 3).join(", ")}</span>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                          >
                            Explore Repository <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </BorderGlow>
            );
          })}
        </div>

        {/* More GitHub Projects Card */}
        <div className="mt-16 glass-panel rounded-3xl p-8 border border-slate-700/80 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 text-cyan-300 border border-cyan-500/30 text-xs font-mono">
                <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>OPEN SOURCE CONTRIBUTIONS</span>
              </div>
              <h3 className="text-2xl font-bold font-display text-white">
                More Projects & Experiments on GitHub
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Beyond my featured projects, I actively experiment with new ideas, build utility tools, practice competitive programming, and explore Machine Learning notebooks.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/30 transition-all hover:scale-105"
              >
                <span>Explore All Repositories</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
