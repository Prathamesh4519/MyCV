import React from "react";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeChefIcon } from "./Icons";
import { personalInfo } from "../../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Journey", href: "#journey" },
    { label: "Exploring ML", href: "#exploring" },
    { label: "Experience", href: "#experience" },
    { label: "GitHub", href: "#github" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-[#090e1c] border-t border-slate-800/80 text-slate-400 text-xs py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-800">
          {/* Brand Info */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-mono font-bold text-sm text-cyan-400">&lt;Prathamesh Kale /&gt;</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <p className="text-slate-400 text-xs max-w-sm">
              Computer Science Engineering Student @ IIIT Nagpur (2024–2028). Building, learning, and exploring the future of software & ML.
            </p>
          </div>

          {/* Nav quick anchors */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-slate-400 hover:text-cyan-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-amber-400 transition-colors"
              aria-label="LeetCode"
            >
              <LeetCodeIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.codechef}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-sky-400 transition-colors"
              aria-label="CodeChef"
            >
              <CodeChefIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 transition-colors ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} Prathamesh Kale. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with React, Tailwind CSS & Vite</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
