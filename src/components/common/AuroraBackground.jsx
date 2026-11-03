import React, { useEffect, useRef, useState } from "react";

export default function AuroraBackground() {
  const [mousePos, setMousePos] = useState({ x: window.innerWidth / 2, y: 300 });
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Floating ambient stardust / particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = Math.min(Math.floor(width / 18), 45);

    const colors = [
      "rgba(99, 102, 241, 0.6)",  // Indigo
      "rgba(168, 85, 247, 0.6)",  // Purple
      "rgba(6, 182, 212, 0.65)",  // Cyan
      "rgba(236, 72, 153, 0.5)",  // Pink
      "rgba(56, 189, 248, 0.7)"   // Sky
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.7 + 0.3,
        pulseSpeed: 0.02 + Math.random() * 0.02
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.01;
        const currentAlpha = Math.max(0.2, Math.min(0.85, p.alpha));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(/[\d.]+\)$/, `${currentAlpha})`);
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0a0e1a]" aria-hidden="true">
      {/* 1. Deep Radiant Base Gradient (Navy & Royal Indigo) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e162e] via-[#090d19] to-[#070a14]" />

      {/* 2. Interactive Glowing Cursor Spotlight */}
      <div
        className="absolute w-[650px] h-[650px] rounded-full blur-[130px] opacity-45 transition-all duration-150 ease-out"
        style={{
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.6) 0%, rgba(6, 182, 212, 0.4) 40%, rgba(168, 85, 247, 0.2) 70%, transparent 85%)",
          left: `${mousePos.x - 325}px`,
          top: `${mousePos.y - 325}px`,
          transform: "translate3d(0,0,0)",
        }}
      />

      {/* 3. Top Cosmic Hero Aurora (Indigo & Cyan Beams) */}
      <div className="absolute -top-[120px] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-indigo-600/35 via-cyan-500/25 to-transparent rounded-[100%] blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />

      {/* 4. Large Flowing Colored Aurora Orbs across sections */}
      {/* Top Left Electric Cyan & Blue Orb */}
      <div className="absolute top-[10%] -left-[10%] w-[600px] h-[600px] rounded-full bg-cyan-500/25 blur-[140px] animate-float" style={{ animationDuration: '9s' }} />

      {/* Top Right Royal Violet & Magenta Orb */}
      <div className="absolute top-[18%] -right-[10%] w-[650px] h-[650px] rounded-full bg-purple-600/28 blur-[150px] animate-float" style={{ animationDuration: '11s', animationDelay: '1.5s' }} />

      {/* Center Flowing Indigo Glow */}
      <div className="absolute top-[40%] left-[20%] w-[700px] h-[500px] rounded-full bg-indigo-600/20 blur-[160px] animate-pulse" style={{ animationDuration: '8s', animationDelay: '3s' }} />

      {/* Mid Right Emerald-Cyan Glow */}
      <div className="absolute top-[58%] -right-[5%] w-[550px] h-[550px] rounded-full bg-emerald-500/20 blur-[140px]" />

      {/* Lower Left Sunset Violet & Rose Glow */}
      <div className="absolute top-[75%] -left-[5%] w-[600px] h-[600px] rounded-full bg-pink-600/20 blur-[150px] animate-float" style={{ animationDuration: '10s', animationDelay: '2s' }} />

      {/* Bottom Center Indigo Glow */}
      <div className="absolute bottom-[5%] left-[30%] w-[650px] h-[450px] rounded-full bg-indigo-500/22 blur-[130px]" />

      {/* 5. Glowing Geometric Tech Grid */}
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* 6. Floating Sparkles / Stardust Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* 7. Soft Horizon Accent Beam */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
    </div>
  );
}
