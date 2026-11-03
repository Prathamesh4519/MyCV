import React, { useState } from "react";
import { X, Printer, Copy, Check, ExternalLink, GraduationCap, Award, Briefcase, Code, Sparkles, Mail, MapPin, Phone } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";
import { projectsData } from "../../data/projectsData";
import { achievementsData } from "../../data/achievementsData";
import { experienceData } from "../../data/experienceData";

export default function ResumeModal({ isOpen, onClose, onShowToast }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
PRATHAMESH KALE
Computer Science Engineering Student @ IIIT Nagpur (Completed 2nd Year)
Phone: ${personalInfo.phone} | Email: ${personalInfo.socials.email} | GitHub: ${personalInfo.socials.github} | LinkedIn: ${personalInfo.socials.linkedin}
Location: Nagpur, Maharashtra, India

EDUCATION
• IIIT Nagpur — B.Tech in Computer Science & Engineering (2024 - 2028) | CGPA: 7.87 (Completed 2nd Year)
• Spring Dales Junior College — HSC: 89.33%
• Bhaskaracharya English School — SSC: 97.00%

CAREER OBJECTIVE
Curious and growth-oriented Computer Science Engineering student who enjoys building, learning, and continuously improving. Particularly interested in exploring modern web technologies and scalable systems while gaining hands-on industry experience.

TECHNICAL SKILLS
• Programming: C, C++, Python, JavaScript
• Web Development: HTML, CSS, JavaScript, React.js, Tailwind CSS
• Mobile Development: Android Studio, XML Layouts, Java/Kotlin, Room/SQLite
• Tools & Databases: Git, Android Studio, PHP, MongoDB, AutoCAD, Canva

SELECTED PROJECTS
• SAMS – Student Attendance Management System (React.js, Tailwind CSS, PHP, MongoDB): Automated attendance percentage tracking, shortfall alerts, and academic analytics.
• Crescendo Cultural & Fest Web Portal (React.js, Tailwind CSS, JavaScript): Interactive campus fest platform featuring dynamic event timelines, registrations, and media showcases.
• Cricket Score Simulator (C++, React, Tailwind CSS, JS): Probability-based match simulation engine with over-by-over progression and live stats.
• IIIT Nagpur Website Clone (HTML, CSS, JS, PHP, MongoDB): Responsive institutional portal clone with backend exploration.
• Habit Tracker (Android Studio, XML Layouts, Java/Kotlin, SQLite): Native Android mobile app with custom XML layouts for daily streaks and routine tracking.

ACHIEVEMENTS
• Solved 200+ problems on LeetCode (Profile: https://leetcode.com/u/Pratham_4519/).
• Achieved 2-star rating (1538) on CodeChef (Profile: https://www.codechef.com/users/pratham_4518).
• Secured Top 7 in IIIT Nagpur Web Dev Hackathon (Top 3 shortlisted).

LEADERSHIP & EXPERIENCE
• Former Club Head — Crescendo Music Club (2nd Year / Completed Tenure) — organized multiple successful events.
• Stage Team Member — Abhivyakti (1st Year) — stage operations and team coordination.
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    if (onShowToast) onShowToast("Resume text copied to clipboard!", "success");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header Actions Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950/80 border-b border-slate-800 no-print">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <h2 className="text-sm font-mono text-slate-300 font-semibold ml-2">Prathamesh_Kale_Resume.pdf</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied" : "Copy Text"}</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/60 rounded-lg border border-cyan-700/50 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Content */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-900/95 text-slate-200 text-sm leading-relaxed space-y-7 print:bg-white print:text-black print:p-0">
          {/* Header */}
          <div className="border-b border-slate-800 print:border-black pb-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src="/profile.jpg"
                  alt="Prathamesh Kale"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-cyan-500/50 shadow-md shrink-0 print:hidden"
                />
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold font-display text-white print:text-black tracking-tight">
                    {personalInfo.name}
                  </h1>
                  <p className="text-cyan-400 print:text-slate-800 font-medium text-sm mt-0.5">
                    Computer Science Engineering Student @ IIIT Nagpur • Developer & Problem Solver
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 print:text-slate-600 mt-1.5">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> IIIT Nagpur, India</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-cyan-400" /> {personalInfo.phone}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-cyan-400" /> {personalInfo.socials.email}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-mono text-slate-400 print:text-slate-700">
                <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 flex items-center gap-1">
                  github.com/{personalInfo.socials.githubUsername} <ExternalLink className="w-3 h-3" />
                </a>
                <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 flex items-center gap-1">
                  linkedin.com/in/prathamesh-kale <ExternalLink className="w-3 h-3" />
                </a>
                <a href={personalInfo.socials.leetcode} target="_blank" rel="noreferrer" className="hover:text-cyan-400 flex items-center gap-1">
                  leetcode.com/u/Pratham_4519 <ExternalLink className="w-3 h-3" />
                </a>
                <a href={personalInfo.socials.codechef} target="_blank" rel="noreferrer" className="hover:text-cyan-400 flex items-center gap-1">
                  codechef.com/users/pratham_4518 <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-wider uppercase text-cyan-400 print:text-black flex items-center gap-2 mb-3">
              <GraduationCap className="w-4 h-4" /> Education
            </h2>
            <div className="space-y-3">
              {personalInfo.education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-slate-800/40 print:bg-transparent p-3 rounded-lg border border-slate-800/60 print:border-none">
                  <div>
                    <div className="font-semibold text-slate-100 print:text-black">{edu.institution}</div>
                    <div className="text-xs text-slate-400 print:text-slate-700">{edu.degree}</div>
                  </div>
                  <div className="sm:text-right mt-1 sm:mt-0">
                    <span className="inline-block px-2 py-0.5 text-xs font-semibold font-mono rounded bg-cyan-950/70 text-cyan-300 border border-cyan-800/60 print:border-none print:text-black">
                      {edu.score}
                    </span>
                    <div className="text-xs text-slate-400 print:text-slate-600 font-mono mt-0.5">{edu.period} • {edu.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-wider uppercase text-cyan-400 print:text-black flex items-center gap-2 mb-3">
              <Code className="w-4 h-4" /> Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-800/40 p-3 rounded-lg border border-slate-800/60">
                <span className="font-semibold text-slate-200">Programming Languages:</span>
                <p className="text-slate-400 mt-1">C, C++, Python, JavaScript</p>
              </div>
              <div className="bg-slate-800/40 p-3 rounded-lg border border-slate-800/60">
                <span className="font-semibold text-slate-200">Web Development:</span>
                <p className="text-slate-400 mt-1">HTML, CSS, JavaScript, React.js, Tailwind CSS</p>
              </div>
              <div className="bg-slate-800/40 p-3 rounded-lg border border-slate-800/60">
                <span className="font-semibold text-slate-200">Tools, Mobile & Databases:</span>
                <p className="text-slate-400 mt-1">Git, Android Studio, XML Layouts, PHP, MongoDB, SQLite</p>
              </div>
              <div className="bg-slate-800/40 p-3 rounded-lg border border-slate-800/60">
                <span className="font-semibold text-purple-300">Currently Learning (ML/AI):</span>
                <p className="text-slate-400 mt-1">Machine Learning, NumPy, Pandas, Matplotlib, Scikit-learn</p>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-wider uppercase text-cyan-400 print:text-black flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4" /> Selected Projects
            </h2>
            <div className="space-y-4">
              {projectsData.slice(0, 4).map((proj) => (
                <div key={proj.id} className="border-l-2 border-cyan-500/50 pl-3.5 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-slate-100 print:text-black text-sm">{proj.title}</h3>
                    <span className="text-xs font-mono text-cyan-400 print:text-slate-700">{proj.technologies.slice(0, 3).join(", ")}</span>
                  </div>
                  <p className="text-xs text-slate-400 print:text-slate-800 leading-normal">
                    {proj.shortDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Ratings */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-wider uppercase text-cyan-400 print:text-black flex items-center gap-2 mb-3">
              <Award className="w-4 h-4" /> Coding & Key Achievements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {achievementsData.slice(0, 3).map((ach) => (
                <div key={ach.id} className="p-3 bg-slate-800/40 rounded-lg border border-slate-800/60">
                  <div className="font-mono font-bold text-sm text-cyan-300">{ach.statNumber}</div>
                  <div className="font-medium text-xs text-slate-200 mt-0.5">{ach.title}</div>
                  <div className="text-[11px] text-slate-400 mt-1">{ach.subtitle}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Co-curricular */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-wider uppercase text-cyan-400 print:text-black flex items-center gap-2 mb-3">
              <Briefcase className="w-4 h-4" /> Leadership & Experience
            </h2>
            <div className="space-y-3">
              {experienceData.map((exp) => (
                <div key={exp.id} className="bg-slate-800/40 p-3.5 rounded-lg border border-slate-800/60">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-semibold text-slate-200">{exp.role} — {exp.organization}</span>
                    <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{exp.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer info bar */}
        <div className="px-6 py-3 bg-slate-950/80 border-t border-slate-800 text-center text-xs font-mono text-slate-500 no-print">
          Press ESC or click close to dismiss • Optimized for standard A4 printing
        </div>
      </div>
    </div>
  );
}
