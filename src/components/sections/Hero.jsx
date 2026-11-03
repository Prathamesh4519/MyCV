import React, { useState, useEffect } from "react";
import { ArrowRight, Mail, FileText, Sparkles, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeChefIcon } from "../common/Icons";
import { personalInfo } from "../../data/portfolioData";
import HeroTerminal from "./HeroTerminal";

export default function Hero({ onOpenResume, onShowToast }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(110);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const roles = personalInfo.roles;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(45);
      }, 1600);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setTypingSpeed(110);
    } else {
      timer = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentRole.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles, typingSpeed]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopiedEmail(true);
    if (onShowToast) onShowToast("Email copied to clipboard!", "success");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToSection = (id) => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Radiant Cosmic Orbs in Background */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/20 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-purple-600/20 via-pink-500/15 to-cyan-500/20 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2.5s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Headline, Typewriter, Bio, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/35 text-cyan-300 text-xs font-mono backdrop-blur-xl shadow-lg shadow-cyan-950/40">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/80" />
              <span>{personalInfo.statusBadge}</span>
            </div>

            {/* Main Greeting & Big Headline */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 shrink-0 shadow-lg shadow-cyan-500/30">
                  <img
                    src="/profile.jpg"
                    alt="Prathamesh Kale"
                    className="w-full h-full rounded-full object-cover"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-[#090d1a]" />
                </div>
                <p className="text-slate-200 font-medium text-lg sm:text-xl">
                  Hi, I'm <span className="text-white font-bold">{personalInfo.name}</span> 👋
                </p>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-white leading-[1.1]">
                I <span className="text-gradient-cyan">Build</span>,{" "}
                <span className="text-gradient-purple">Learn</span> &{" "}
                <span className="text-gradient-emerald">Solve.</span>
              </h1>
            </div>

            {/* Typewriter Rotating Role */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start gap-2 text-xl sm:text-2xl font-mono text-slate-200">
              <span className="text-cyan-400 font-bold">&gt;</span>
              <span className="text-white font-semibold underline decoration-cyan-500/50 decoration-2 underline-offset-4">
                {displayText}
              </span>
              <span className="inline-block w-2.5 h-6 bg-cyan-400 animate-blink align-middle ml-0.5" />
            </div>

            {/* Short Bio */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalInfo.bio.short}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              {/* View Projects */}
              <button
                onClick={() => scrollToSection("projects")}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Explore GitHub */}
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/60 text-slate-100 font-semibold text-sm shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span>GitHub Profile</span>
              </a>

              {/* Resume button */}
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-purple-500/40 hover:border-purple-400 text-purple-300 font-medium text-sm transition-all hover:scale-[1.02]"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Social Icons & Quick Copy Email */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500 text-slate-400 hover:text-cyan-300 transition-colors shadow-sm"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500 text-slate-400 hover:text-indigo-300 transition-colors shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-amber-500 text-slate-400 hover:text-amber-300 transition-colors shadow-sm"
                aria-label="LeetCode Profile"
                title="LeetCode (200+ Solved)"
              >
                <LeetCodeIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.codechef}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-sky-500 text-slate-400 hover:text-sky-300 transition-colors shadow-sm"
                aria-label="CodeChef Profile"
                title="CodeChef (1538 / 2-Star)"
              >
                <CodeChefIcon className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500 text-slate-300 hover:text-emerald-300 text-xs font-mono transition-colors shadow-sm"
                title="Click to copy email address"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Mail className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Hero Terminal & Code Playground */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <HeroTerminal onShowToast={onShowToast} />
          </div>
        </div>

        {/* Bottom Interactive Quick Stats Banner */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4">
          {personalInfo.stats.map((stat) => (
            <div
              key={stat.id}
              className="glass-card p-5 rounded-2xl text-center group cursor-default transition-all hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/15"
            >
              <div className="text-2xl sm:text-3xl font-black font-display text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:via-indigo-300 group-hover:to-purple-300 transition-all">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-200 mt-1">{stat.label}</div>
              <div className="text-[11px] font-mono text-cyan-400/80 mt-0.5">{stat.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
