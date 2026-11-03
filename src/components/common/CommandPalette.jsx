import React, { useState, useEffect } from "react";
import { Search, ArrowRight, Code, Trophy, Sparkles, User, Mail, FileText, Laptop, Terminal, X } from "lucide-react";
import { GithubIcon } from "./Icons";
import { personalInfo } from "../../data/portfolioData";

export default function CommandPalette({ isOpen, onClose, onOpenResume, onShowToast }) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const actions = [
    { id: "hero", label: "Home / Hero", category: "Navigation", icon: Terminal, action: () => scrollTo("hero") },
    { id: "about", label: "About Me & Education (IIIT Nagpur)", category: "Navigation", icon: User, action: () => scrollTo("about") },
    { id: "skills", label: "Skills & Technologies (C++, React, Python)", category: "Navigation", icon: Code, action: () => scrollTo("skills") },
    { id: "projects", label: "Featured Projects (SAMS, Crescendo, Cricket Simulator)", category: "Navigation", icon: Laptop, action: () => scrollTo("projects") },
    { id: "achievements", label: "Coding Milestones (LeetCode 200+, CodeChef 1538)", category: "Navigation", icon: Trophy, action: () => scrollTo("achievements") },
    { id: "journey", label: "Learning Journey Roadmap", category: "Navigation", icon: ArrowRight, action: () => scrollTo("journey") },
    { id: "exploring", label: "Currently Exploring (AI & Machine Learning)", category: "Navigation", icon: Sparkles, action: () => scrollTo("exploring") },
    { id: "experience", label: "Leadership & Experience (Crescendo Club)", category: "Navigation", icon: User, action: () => scrollTo("experience") },
    { id: "github", label: "GitHub & Open Source (Prathamesh4519)", category: "Navigation", icon: GithubIcon, action: () => scrollTo("github") },
    { id: "contact", label: "Contact & Send Message", category: "Navigation", icon: Mail, action: () => scrollTo("contact") },
    {
      id: "resume",
      label: "View / Print Full Resume",
      category: "Action",
      icon: FileText,
      action: () => {
        onClose();
        onOpenResume();
      }
    },
    {
      id: "copy-email",
      label: `Copy Email (${personalInfo.socials.email})`,
      category: "Action",
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText(personalInfo.socials.email);
        onClose();
        if (onShowToast) onShowToast("Email address copied to clipboard!", "success");
      }
    }
  ];

  const filteredActions = actions.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const scrollTo = (id) => {
    onClose();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-[#0d0f17] border border-white/10 rounded-2xl shadow-2xl overflow-hidden glass-panel">
        {/* Search bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.07] bg-[#08090d]/90">
          <Search className="w-5 h-5 text-indigo-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command, search project, or jump to section..."
            className="w-full bg-transparent text-zinc-100 placeholder:text-zinc-500 focus:outline-none text-sm font-medium"
            autoFocus
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-zinc-400 bg-white/[0.06] rounded border border-white/10">
            ESC
          </kbd>
          <button
            onClick={onClose}
            className="p-1 text-zinc-400 hover:text-zinc-200 rounded-lg"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredActions.length === 0 ? (
            <div className="py-8 text-center text-zinc-500 text-sm">
              No matching actions or sections found for "{query}".
            </div>
          ) : (
            filteredActions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm transition-colors ${
                    idx === selectedIndex
                      ? "bg-white/[0.08] text-white border border-white/10 font-semibold"
                      : "text-zinc-300 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-white/[0.04] text-indigo-400 border border-white/10">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium text-zinc-100">{item.label}</div>
                      <div className="text-[11px] text-zinc-500">{item.category}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-500 opacity-70" />
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-[#08090d]/80 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-500 font-mono">
          <span>Quick jump: <kbd className="text-zinc-400 bg-white/[0.04] px-1.5 py-0.5 rounded border border-white/10">Ctrl + K</kbd></span>
          <span>Prathamesh Kale</span>
        </div>
      </div>
    </div>
  );
}
