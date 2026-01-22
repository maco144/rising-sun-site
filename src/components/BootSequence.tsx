"use client";

import { useState, useEffect } from "react";

const bootLines = [
  { text: "RISING_SUN BIOS v3.14", delay: 0 },
  { text: "Copyright (C) 2025 Rising Sun Industries", delay: 100 },
  { text: "", delay: 200 },
  { text: "Initializing system...", delay: 300 },
  { text: "Memory check: 64GB OK", delay: 500 },
  { text: "Loading kernel modules...", delay: 700 },
  { text: "  [OK] display.driver", delay: 850 },
  { text: "  [OK] network.stack", delay: 950 },
  { text: "  [OK] ascii.renderer", delay: 1050 },
  { text: "  [OK] terminal.emulator", delay: 1150 },
  { text: "", delay: 1250 },
  { text: "Mounting filesystems...", delay: 1350 },
  { text: "  /dev/projects    mounted", delay: 1500 },
  { text: "  /dev/updates     mounted", delay: 1600 },
  { text: "  /dev/portfolio   mounted", delay: 1700 },
  { text: "", delay: 1800 },
  { text: "Starting services...", delay: 1900 },
  { text: "  creativity.daemon    [RUNNING]", delay: 2050 },
  { text: "  code.compiler        [RUNNING]", delay: 2150 },
  { text: "  caffeine.monitor     [CRITICAL]", delay: 2250 },
  { text: "", delay: 2400 },
  { text: "System ready.", delay: 2500 },
  { text: "", delay: 2600 },
  { text: "Welcome to RISING_SUN", delay: 2700 },
];

interface BootSequenceProps {
  onComplete: () => void;
  skip?: boolean;
}

export default function BootSequence({ onComplete, skip = false }: BootSequenceProps) {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (skip) {
      onComplete();
      return;
    }

    // Show each line with its delay
    bootLines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, index]);
      }, line.delay);
    });

    // Complete the boot sequence
    const completeTimer = setTimeout(() => {
      setIsComplete(true);
      setTimeout(onComplete, 800);
    }, 3200);

    return () => clearTimeout(completeTimer);
  }, [onComplete, skip]);

  // Cursor blink for final line
  useEffect(() => {
    if (visibleLines.length === bootLines.length) {
      const interval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [visibleLines.length]);

  if (skip) return null;

  return (
    <div className={`boot-screen ${isComplete ? "boot-complete" : ""}`}>
      <div className="max-w-2xl mx-auto font-mono text-sm">
        {bootLines.map((line, index) => (
          <div
            key={index}
            className={`boot-line ${visibleLines.includes(index) ? "" : "opacity-0"}`}
            style={{
              animationDelay: `${line.delay}ms`,
              color: line.text.includes("[OK]")
                ? "#00ff41"
                : line.text.includes("[RUNNING]")
                ? "#00ff41"
                : line.text.includes("[CRITICAL]")
                ? "#ffb000"
                : line.text.includes("Welcome")
                ? "#00ff41"
                : "#e0e0e0",
            }}
          >
            {line.text}
            {index === bootLines.length - 1 &&
              visibleLines.includes(index) &&
              showCursor && <span className="boot-cursor" />}
          </div>
        ))}
      </div>

      {/* Skip hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-terminal-white-dim text-xs animate-pulse">
        Press any key to skip...
      </div>
    </div>
  );
}
