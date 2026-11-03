import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { Sparkles, Rocket, CheckCircle2, X, Send, Heart, Database, ArrowRight } from "lucide-react";

export default function FeedbackSuccessModal({ isOpen, onClose, submissionData }) {
  useEffect(() => {
    if (!isOpen) return;

    // Trigger high-energy cosmic confetti cannon
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 9999
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ["#06b6d4", "#38bdf8", "#818cf8"]
    });
    fire(0.2, {
      spread: 60,
      colors: ["#a855f7", "#ec4899", "#f43f5e"]
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ["#10b981", "#34d399", "#fbbf24"]
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ["#06b6d4", "#a855f7", "#ffffff"]
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      colors: ["#38bdf8", "#c084fc", "#fde047"]
    });

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Dark Blurred Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border border-cyan-500/40 p-6 sm:p-8 shadow-2xl shadow-cyan-500/20 text-center z-10 animate-in zoom-in-95 duration-300">
        {/* Ambient Glowing Orbs inside Modal */}
        <div className="absolute -top-20 -left-20 w-48 h-48 bg-cyan-500/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-purple-500/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700/60 transition-all hover:scale-110 active:scale-95"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Animated Central Icon with Orbiting Glow */}
        <div className="relative mx-auto mb-6 w-20 h-20 flex items-center justify-center">
          {/* Pulsing Glow Rings */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 animate-ping opacity-25" />
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 opacity-75 blur-sm animate-pulse" />
          <div className="relative w-20 h-20 rounded-full bg-slate-950 border border-cyan-400/50 flex items-center justify-center shadow-inner">
            <Rocket className="w-9 h-9 text-cyan-400 animate-bounce" />
          </div>
        </div>

        {/* Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-mono mb-3">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
          <span>TRANSMISSION RECEIVED</span>
        </div>

        {/* Main Heading */}
        <h3 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight leading-snug">
          Thanks for <span className="text-gradient-cyan">Feedback!</span> 🎉
        </h3>

        {/* Subtitle */}
        <p className="mt-2 text-sm text-slate-300/90 leading-relaxed max-w-md mx-auto">
          Your thoughts, suggestions, and ideas have been safely saved to the database. I deeply appreciate your input!
        </p>

        {/* Submission Details Snippet Card */}
        {submissionData && (
          <div className="mt-5 p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 text-left text-xs font-mono space-y-1.5">
            <div className="flex items-center justify-between text-slate-400 pb-1.5 border-b border-slate-800/80">
              <span className="flex items-center gap-1 text-[11px] text-emerald-400">
                <Database className="w-3.5 h-3.5" />
                <span>MongoDB Atlas Stored</span>
              </span>
              <span className="text-[10px] text-slate-500">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
            {submissionData.name && (
              <div className="text-slate-300 truncate">
                <span className="text-cyan-400">From:</span> {submissionData.name} ({submissionData.email})
              </div>
            )}
            {submissionData.subject && (
              <div className="text-slate-300 truncate">
                <span className="text-purple-400">Topic:</span> {submissionData.subject}
              </div>
            )}
            {submissionData.message && (
              <div className="text-slate-400 line-clamp-2 italic pt-0.5">
                "{submissionData.message}"
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold text-xs shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <span>Awesome, Got It!</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
