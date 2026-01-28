"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const heroAsciiFrames = [
  `

                    ▲
                   ╱ ╲
                  ╱   ╲
                 ╱     ╲
                ╱       ╲
               ╱         ╲
    ──────────────────────────────
`,
  `
                    *
                   ▲
                  ╱°╲
                 ╱   ╲
                ╱     ╲
               ╱   ☼   ╲
              ╱         ╲
    ──────────────────────────────
`,
  `
                 '  *  '
                   ▲
                  ╱°╲
                 ╱ ☼ ╲
                ╱     ╲
               ╱  ☼ ☼  ╲
              ╱         ╲
    ──────────────────────────────
`,
  `
              *       ·    *
                '   ·   '
                   ▲
                  ╱°╲
                 ╱ ☼ ╲
                ╱  ☼  ╲
               ╱ ☼   ☼ ╲
              ╱         ╲
    ──────────────────────────────
`,
  `
            ·           ·
              *   ' ·     *
                 ' * '
                  ▲
                 ╱°°╲
                ╱ ☼☼ ╲
               ╱  ☼☼  ╲
              ╱ ☼ ☼☼ ☼ ╲
             ╱           ╲
    ──────────────────────────────
`,
];

const finalAscii = `
           ·    *    '    ·    *
              '    ·    '    ·
                 ' *** '
                  ╱°°°╲
                 ╱ ☼☼☼ ╲
                ╱  ☼☼☼  ╲
               ╱ ☼ ☼☼☼ ☼ ╲
              ╱  ☼ ☼☼☼ ☼  ╲
    ════════════════════════════════
           R I S I N G   S U N
              dev portfolio
    ════════════════════════════════
`;

export default function AnimatedHero() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  const welcomeText = "Welcome, traveler.";

  // Animate ASCII frames
  useEffect(() => {
    if (currentFrame < heroAsciiFrames.length) {
      const timer = setTimeout(() => {
        setCurrentFrame((prev) => prev + 1);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [currentFrame]);

  // Typewriter effect for welcome text
  useEffect(() => {
    if (!isComplete) return;

    if (typedText.length < welcomeText.length) {
      const timer = setTimeout(() => {
        setTypedText(welcomeText.slice(0, typedText.length + 1));
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [isComplete, typedText]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Interactive glow effect based on mouse position
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  return (
    <section className="py-12 md:py-20" ref={heroRef} onMouseMove={handleMouseMove}>
      <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
        {/* ASCII Art - Interactive */}
        <div className="relative">
          <pre
            className="ascii-art text-terminal-amber text-xs sm:text-sm md:text-base ascii-interactive transition-all duration-300"
            style={{
              textShadow: isComplete
                ? `${mousePos.x}px ${mousePos.y}px 20px rgba(255, 176, 0, 0.5), 0 0 30px rgba(255, 176, 0, 0.3)`
                : "none",
            }}
          >
            {isComplete
              ? finalAscii
              : heroAsciiFrames[Math.min(currentFrame, heroAsciiFrames.length - 1)]}
          </pre>

          {/* Decorative glowing orb */}
          {isComplete && (
            <div
              className="absolute w-4 h-4 rounded-full bg-terminal-amber opacity-60 blur-sm animate-pulse"
              style={{
                top: "30%",
                left: "50%",
                transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)`,
                transition: "transform 0.2s ease-out",
              }}
            />
          )}
        </div>

        {/* Hero Text */}
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-terminal-green mb-4 phosphor-glow">
              {typedText}
              <span
                className={`inline-block w-3 h-6 md:w-4 md:h-8 bg-terminal-green ml-1 align-middle ${
                  showCursor ? "opacity-100" : "opacity-0"
                }`}
              />
            </h1>
            <p
              className={`text-terminal-white-dim text-lg max-w-xl transition-opacity duration-500 ${
                typedText.length === welcomeText.length ? "opacity-100" : "opacity-0"
              }`}
            >
              This is a collection of projects built with passion for clean code,
              thoughtful design, and solving interesting problems. Browse around,
              explore the source, and feel free to reach out.
            </p>
          </div>

          <div
            className={`flex flex-wrap gap-4 transition-all duration-500 delay-300 ${
              typedText.length === welcomeText.length
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-terminal-black transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,255,65,0.5)] glitch-hover"
            >
              <span className="group-hover:animate-pulse">{">"}</span>
              <span>view_projects</span>
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-terminal-gray text-terminal-white hover:border-terminal-amber hover:text-terminal-amber transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,176,0,0.3)] glitch-hover"
            >
              <span>$</span>
              <span>about_me</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
