import React, { useState } from "react";
import AuroraBackground from "./components/common/AuroraBackground";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ResumeModal from "./components/common/ResumeModal";
import CommandPalette from "./components/common/CommandPalette";
import Toast from "./components/common/Toast";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Achievements from "./components/sections/Achievements";
import LearningJourney from "./components/sections/LearningJourney";
import CurrentlyExploring from "./components/sections/CurrentlyExploring";
import Experience from "./components/sections/Experience";
import GitHubSection from "./components/sections/GitHubSection";
import Contact from "./components/sections/Contact";

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "info" });

  const showToast = (message, type = "info") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 3500);
  };

  return (
    <div className="relative min-h-screen bg-[#090d1a] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 antialiased">
      {/* High-End Aurora & Spotlight Background */}
      <AuroraBackground />

      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onShowToast={showToast}
      />

      {/* Main Page Sections */}
      <main className="relative z-10">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onShowToast={showToast}
        />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <LearningJourney />
        <CurrentlyExploring />
        <Experience />
        <GitHubSection />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onShowToast={showToast}
      />

      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
        onShowToast={showToast}
      />

      <Toast
        toast={toast}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
}
