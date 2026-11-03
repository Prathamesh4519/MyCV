import React from "react";
import { X, ExternalLink, CheckCircle2, Play } from "lucide-react";
import { GithubIcon } from "../common/Icons";
import CricketSimPreview from "./CricketSimPreview";
import HabitTrackerPreview from "./HabitTrackerPreview";

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#0d1424] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col glass-panel">
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#090e1c] border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 text-xs font-mono font-semibold rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              {project.badge || "Project Deep Dive"}
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">• {project.category}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              {project.title}
            </h2>
            <p className="text-cyan-400 font-medium text-sm mt-1">{project.subtitle}</p>
          </div>

          {/* Interactive Live Playground if applicable */}
          {project.hasInteractivePreview && (
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                <Play className="w-3.5 h-3.5" />
                <span>Live Interactive Simulation & Prototype:</span>
              </div>
              {project.previewType === "cricket-sim" && <CricketSimPreview />}
              {project.previewType === "habit-tracker" && <HabitTrackerPreview />}
            </div>
          )}

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">Architecture & Overview</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.longDescription || project.shortDescription}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          {project.highlights && (
            <div className="space-y-2.5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">Key Engineering Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-200 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-slate-900/90 text-cyan-300 border border-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 bg-[#090e1c] border-t border-slate-800 flex items-center justify-between gap-4">
          <div className="text-xs font-mono text-slate-400">
            Prathamesh Kale • IIIT Nagpur
          </div>
          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold border border-slate-700 hover:border-cyan-500/50 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span>View on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5 text-slate-400" />
              </a>
            ) : (
              <span className="px-3 py-1.5 rounded-xl bg-slate-900 text-cyan-300 text-xs font-mono border border-cyan-500/30">
                Interactive Prototype Mode
              </span>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-semibold shadow-md transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
