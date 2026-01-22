export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  status: "active" | "beta" | "coming-soon";
  tags: string[];
  links: { label: string; url: string }[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "password-palace",
    name: "Password Palace",
    tagline: "Secure password management made simple",
    description:
      "A modern, secure password manager with zero-knowledge encryption. Features browser extensions, mobile apps, and team sharing capabilities.",
    longDescription: `Password Palace is a comprehensive password management solution designed with security and usability in mind. Built on zero-knowledge architecture, your passwords are encrypted locally before ever reaching our servers.

## Key Features

- **Zero-Knowledge Encryption**: Your master password never leaves your device
- **Cross-Platform Sync**: Access your vault from any device
- **Browser Extensions**: Available for Chrome, Firefox, Safari, and Edge
- **Secure Sharing**: Share passwords with team members without exposing the actual credentials
- **Password Generator**: Create strong, unique passwords with customizable rules
- **Security Audit**: Identify weak, reused, or compromised passwords

## Tech Stack

Built with TypeScript, React, and Rust for the core cryptographic operations. Uses WebCrypto API for browser-based encryption.`,
    status: "active",
    tags: ["security", "typescript", "react", "rust", "encryption"],
    links: [
      { label: "Website", url: "https://passwordpalace.com" },
    ],
    featured: true,
  },
  {
    slug: "trove",
    name: "Trove",
    tagline: "Digital asset organization for creators",
    description:
      "A powerful digital asset manager for designers, developers, and content creators. Organize, tag, and find your files instantly.",
    longDescription: `Trove is a digital asset management system designed specifically for creative professionals. Stop wasting time searching through folders - find exactly what you need in seconds.

## Key Features

- **Smart Tagging**: AI-powered automatic tagging and categorization
- **Visual Search**: Find assets by color, shape, or similar images
- **Version Control**: Track changes and restore previous versions
- **Collections**: Organize assets into smart collections with dynamic filters
- **Export Presets**: Export in multiple formats with one click
- **Integration Ready**: Connect with Figma, Sketch, Adobe CC, and more

## Tech Stack

Built with Next.js, PostgreSQL, and uses ML models for image recognition and auto-tagging. S3-compatible storage backend.`,
    status: "active",
    tags: ["productivity", "nextjs", "postgresql", "ml", "s3"],
    links: [
      { label: "Website", url: "https://trove.website" },
    ],
    featured: true,
  },
  {
    slug: "gamegames",
    name: "GameGames",
    tagline: "Retro-inspired browser games collection",
    description:
      "A collection of nostalgic browser games with modern twists. Play classic arcade-style games directly in your browser, no installation required.",
    longDescription: `GameGames is a love letter to the golden age of arcade and early computer games. Each game is a modern reimagining of classic gameplay mechanics, built for the web.

## Featured Games

- **Pixel Invaders**: A bullet-hell twist on the classic shooter
- **Snake++**: Snake with power-ups, obstacles, and multiplayer
- **Tetris Tactics**: Turn-based competitive Tetris
- **Pong Evolved**: Physics-based pong with special abilities
- **Memory Matrix**: Pattern memory game with increasing complexity

## Tech Stack

Built with TypeScript and HTML5 Canvas. Uses Web Audio API for retro sound effects. All games run at 60fps and support keyboard and gamepad input.`,
    status: "active",
    tags: ["games", "typescript", "canvas", "webgl", "retro"],
    links: [
      { label: "Play Now", url: "https://gamegames.gg" },
    ],
    featured: true,
  },
  {
    slug: "eudaimonia",
    name: "Eudaimonia",
    tagline: "Mindful productivity and well-being tracker",
    description:
      "A holistic productivity app that balances achievement with well-being. Track habits, mood, energy, and goals in one unified dashboard.",
    longDescription: `Eudaimonia combines productivity tracking with well-being monitoring to help you achieve sustainable success. Named after the Greek concept of human flourishing, it's designed to help you thrive, not just survive.

## Key Features

- **Holistic Dashboard**: See productivity, energy, mood, and habits at a glance
- **Smart Scheduling**: AI suggests optimal times for deep work based on your patterns
- **Habit Streaks**: Build positive habits with visual streak tracking
- **Energy Mapping**: Understand your natural energy cycles
- **Weekly Reviews**: Guided reflection sessions to improve continuously
- **Privacy First**: All data stored locally with optional encrypted sync

## Tech Stack

React Native for cross-platform mobile, Electron for desktop. Uses SQLite for local storage with optional E2E encrypted sync.`,
    status: "beta",
    tags: ["productivity", "react-native", "electron", "health", "ai"],
    links: [
      { label: "Website", url: "https://aios.design" },
    ],
    featured: false,
  },
  {
    slug: "forgeground",
    name: "Forgeground",
    tagline: "Real-time collaborative code editor",
    description:
      "A VS Code-inspired collaborative editor for pair programming and code reviews. Real-time sync, voice chat, and shared terminals.",
    longDescription: `Forgeground brings real-time collaboration to code editing. Perfect for pair programming sessions, technical interviews, and code reviews.

## Key Features

- **Real-Time Sync**: See changes as they happen with conflict-free editing
- **Voice & Video**: Built-in communication - no need for separate tools
- **Shared Terminal**: Run commands together in a shared environment
- **Language Support**: Syntax highlighting for 100+ languages
- **VS Code Keybindings**: Familiar shortcuts for VS Code users
- **Session Recording**: Record and replay coding sessions

## Tech Stack

Built with Monaco Editor, WebRTC for real-time communication, and CRDTs for conflict-free collaboration. Kubernetes-based infrastructure for scalable container sessions.`,
    status: "beta",
    tags: ["collaboration", "webrtc", "monaco", "kubernetes", "typescript"],
    links: [
      { label: "Try It", url: "https://forgeground.dev" },
      { label: "GitHub", url: "https://github.com/rising-sun/forgeground" },
    ],
    featured: false,
  },
  {
    slug: "rising-sun",
    name: "Rising Sun",
    tagline: "This very website you're browsing",
    description:
      "A minimal, ASCII-aesthetic portfolio site built with Next.js and Tailwind CSS. Features a dark terminal-inspired theme.",
    longDescription: `Rising Sun is this portfolio website - a showcase of projects built with a love for retro computing aesthetics and modern web technologies.

## Design Philosophy

- **Terminal Aesthetic**: Inspired by classic terminal interfaces
- **Minimal & Fast**: No unnecessary bloat, fast load times
- **Accessible**: Keyboard navigable, screen reader friendly
- **Responsive**: Works on all device sizes

## Tech Stack

Built with Next.js 14, TypeScript, and Tailwind CSS. Statically generated for optimal performance. Hosted on Vercel.`,
    status: "active",
    tags: ["nextjs", "tailwind", "typescript", "portfolio"],
    links: [
      { label: "Source", url: "https://github.com/rising-sun/portfolio" },
    ],
    featured: false,
  },
  {
    slug: "hexgrid",
    name: "HexGrid",
    tagline: "Procedural world generation toolkit",
    description:
      "A library for generating and rendering hexagonal grid-based worlds. Perfect for strategy games, simulations, and map visualizations.",
    longDescription: `HexGrid is a comprehensive toolkit for working with hexagonal grids. Whether you're building a strategy game, a simulation, or just want cool hex-based visualizations, HexGrid has you covered.

## Key Features

- **Multiple Coordinate Systems**: Cube, axial, and offset coordinates
- **Procedural Generation**: Terrain, biomes, rivers, and settlements
- **Pathfinding**: A* implementation optimized for hex grids
- **Rendering**: Canvas and WebGL renderers included
- **Serialization**: Save and load worlds efficiently
- **TypeScript**: Fully typed API

## Tech Stack

Pure TypeScript with zero runtime dependencies. Optional rendering packages for Canvas and WebGL.`,
    status: "active",
    tags: ["gamedev", "typescript", "procedural", "webgl", "library"],
    links: [
      { label: "NPM", url: "https://npmjs.com/package/hexgrid" },
      { label: "GitHub", url: "https://github.com/rising-sun/hexgrid" },
      { label: "Demo", url: "https://hexgrid.dev/demo" },
    ],
    featured: false,
  },
  {
    slug: "terminal-ui",
    name: "Terminal UI",
    tagline: "React components with terminal aesthetics",
    description:
      "A React component library that brings terminal and ASCII aesthetics to the modern web. Buttons, inputs, modals, and more.",
    longDescription: `Terminal UI is a React component library for developers who love the aesthetic of classic terminal interfaces but want modern web functionality.

## Components

- **Buttons**: Multiple variants with ASCII borders
- **Inputs**: Text, password, search with terminal styling
- **Modals**: Dialogs with ASCII frame decorations
- **Tables**: Data tables with box-drawing characters
- **Cards**: Content containers with customizable borders
- **Progress**: ASCII progress bars and spinners
- **Typography**: Monospace text components

## Tech Stack

Built with React 18 and TypeScript. Styling via CSS-in-JS. Zero external CSS dependencies.`,
    status: "coming-soon",
    tags: ["react", "component-library", "typescript", "ui", "ascii"],
    links: [
      { label: "GitHub", url: "https://github.com/rising-sun/terminal-ui" },
    ],
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByStatus(
  status: Project["status"]
): Project[] {
  return projects.filter((p) => p.status === status);
}
