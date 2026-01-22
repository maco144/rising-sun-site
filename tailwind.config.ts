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
          black: "#0d0d0d",
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
      },
    },
  },
  plugins: [],
};
export default config;
