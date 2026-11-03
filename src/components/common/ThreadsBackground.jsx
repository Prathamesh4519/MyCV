import React from "react";
import WebThreads from "./WebThreads";

export default function ThreadsBackground() {
  return (
    <div className="threads-bg-wrapper" aria-hidden="true">
      {/* Interactive WebThreads WebGL Canvas */}
      <div className="threads-interactive-canvas">
        <WebThreads
          color1="#06b6d4"     // Electric Cyan
          color2="#a855f7"     // Nebula Purple
          color3="#38bdf8"     // Bright Cyan Highlight
          speed={0.25}
          threadCount={7}
          frequency={4.2}
          spread={0.24}
          taper={0.9}
          position={0.5}
          fanMode="center"
          glow={0.028}
          falloff={0.62}
          thickness={1.25}
          brightness={0.8}
          opacity={0.9}
          mirror={true}
          shimmer={true}
          grain={true}
          grainIntensity={0.035}
          mouseInteraction={true}
          mouseStrength={0.4}
        />
      </div>

      {/* Atmospheric cyber gradient overlay */}
      <div className="threads-overlay-gradient" />

      {/* Deep vignette overlay for text legibility */}
      <div className="threads-vignette" />

      {/* Subtle Dot Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03] pointer-events-none" />
    </div>
  );
}
