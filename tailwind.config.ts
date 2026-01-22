import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        terminal: {
          black: "#0a0a0a",
          dark: "#1a1a1a",
          gray: "#2a2a2a",
          green: "#00ff41",
          "green-dim": "#00cc33",
          amber: "#ffb000",
          "amber-dim": "#cc8800",
          cyan: "#00d4ff",
          white: "#e0e0e0",
          "white-dim": "#808080",
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', "Consolas", "Monaco", "monospace"],
      },
      animation: {
        blink: "blink 1s step-end infinite",
        typewriter: "typewriter 2s steps(40) forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        scan: "scan 2s linear infinite",
        glitch: "glitch 0.3s ease",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        flicker: "flicker 4s infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        typewriter: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        glitch: {
          "0%, 100%": { clipPath: "inset(0 0 0 0)", transform: "translate(0)" },
          "20%": { clipPath: "inset(20% 0 60% 0)", transform: "translate(-2px, 2px)" },
          "40%": { clipPath: "inset(60% 0 10% 0)", transform: "translate(2px, -2px)" },
          "60%": { clipPath: "inset(40% 0 30% 0)", transform: "translate(-1px, 1px)" },
          "80%": { clipPath: "inset(80% 0 5% 0)", transform: "translate(1px, -1px)" },
        },
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 5px currentColor, 0 0 10px currentColor",
          },
          "50%": {
            boxShadow: "0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor",
          },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "92%": { opacity: "1" },
          "93%": { opacity: "0.8" },
          "94%": { opacity: "1" },
          "97%": { opacity: "0.9" },
          "98%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
