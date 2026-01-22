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
    tagline: "3D Memory Palace Authentication System",
    description:
      "A revolutionary authentication system using spatial memory and zero-knowledge proofs on the Cosmos blockchain. Navigate 3D rooms to unlock your digital identity.",
    longDescription: `Password Palace reimagines authentication through spatial memory. Instead of remembering text passwords, users navigate a personalized 3D memory palace - a technique used by memory champions for millennia, now secured by blockchain cryptography.

## Key Features

- **Spatial Memory Authentication**: Navigate 3D rooms, interact with objects, and trace patterns to prove your identity
- **Zero-Knowledge Proofs**: Your spatial secrets never leave your device - only cryptographic proofs are verified on-chain
- **9 Authentication Modalities**: 3D Room navigation, Gesture sequences, Keystroke dynamics, Pattern drawing, Melody recognition, Air gestures, and more
- **Cosmos Integration**: Built on the Cosmos blockchain with CosmWasm smart contracts
- **Keplr Wallet Support**: Seamless integration with the Cosmos ecosystem

## How It Works

1. Create your memory palace by placing objects in 3D rooms
2. Define your secret path through the space
3. When authenticating, recreate your journey
4. ZK proofs verify you know the path without revealing it

## Tech Stack

Built with React 19, TypeScript, and Three.js for immersive 3D experiences. CosmWasm (Rust) smart contracts handle on-chain verification. Halo2 circuits generate zero-knowledge proofs.`,
    status: "active",
    tags: ["web3", "typescript", "react", "three.js", "cosmos", "zk-proofs"],
    links: [
      { label: "Website", url: "https://passwordpalace.com" },
    ],
    featured: true,
  },
  {
    slug: "trove",
    name: "Trove",
    tagline: "Spatial puzzle protocol for digital treasure",
    description:
      "A protocol for protecting valuable digital contents with spatial puzzles and distributed access. Create treasure hunts, ARG experiences, and secure vaults using zero-knowledge cryptography.",
    longDescription: `Trove is a protocol that protects valuable digital contents behind spatial puzzles with distributed access control. Think of it as programmable treasure chests secured by zero-knowledge proofs.

## Key Features

- **Spatial Puzzles**: Protect content with location-based, pattern-based, or multi-step spatial challenges
- **$TROVE Token**: Native token for the Trove ecosystem powering treasure hunts and rewards
- **Hunt System**: Create multi-stage ARG (Alternate Reality Game) experiences with progressive reveals
- **Zero-Knowledge Security**: Halo2 circuits ensure puzzle solutions are verified without revealing the answer
- **Distributed Access**: Split access across multiple participants or time-locked reveals

## Use Cases

- **Digital Treasure Hunts**: Create real-world scavenger hunts with crypto rewards
- **ARG Experiences**: Build immersive narrative games with cryptographic puzzles
- **Secure Vaults**: Time-locked or condition-locked content delivery
- **Collaborative Unlocking**: Content that requires multiple parties to access

## Tech Stack

CosmWasm smart contracts for on-chain logic, Halo2 ZK circuits for proof generation, TypeScript SDK for developers. Integrates with the Cosmos ecosystem.`,
    status: "active",
    tags: ["web3", "cosmos", "zk-proofs", "typescript", "rust"],
    links: [
      { label: "Website", url: "https://trove.website" },
    ],
    featured: true,
  },
  {
    slug: "gamegames",
    name: "GameGames",
    tagline: "Decentralized skill wagering platform",
    description:
      "A trustless skill wagering platform built on Solana. Compete in Chess, TFT, Clash Royale, Brawl Stars, and TETR.IO with crypto stakes and AI-verified results.",
    longDescription: `GameGames is a decentralized platform for skill-based wagering. Put your gaming skills to the test with real stakes, secured by blockchain escrow and verified by AI vision systems.

## Supported Games

- **Chess**: Classic 1v1 matches with ELO-based matchmaking
- **Teamfight Tactics (TFT)**: Placement-based wagering for auto-battler fans
- **Clash Royale**: Real-time mobile strategy competition
- **Brawl Stars**: Mobile action wagering
- **TETR.IO**: Competitive Tetris with precise scoring

## Key Features

- **Trustless Escrow**: Stakes are held in Solana smart contracts, released automatically on match completion
- **AI Vision Verification**: Claude-powered computer vision verifies game results from screenshots
- **Reputation System**: Build your player reputation with verified match history
- **Fair Matchmaking**: ELO-based matching ensures competitive games
- **Instant Payouts**: Winners receive funds immediately after verification

## Tech Stack

Built on Solana for fast, low-cost transactions. AI vision system powered by Claude for result verification. React frontend with real-time match updates via WebSocket.`,
    status: "active",
    tags: ["web3", "solana", "gaming", "ai", "typescript"],
    links: [
      { label: "Play Now", url: "https://gamegames.gg" },
    ],
    featured: true,
  },
  {
    slug: "eudaimonia",
    name: "Eudaimonia",
    tagline: "AI-native operating system design",
    description:
      "Exploring the future of human-computer interaction through AI-native operating system concepts. Reimagining how we work, create, and compute.",
    longDescription: `Eudaimonia (AIOS) is a design exploration into AI-native operating systems. What if your computer truly understood you? What if the interface adapted to your thoughts rather than forcing you to adapt to it?

## Design Philosophy

Named after the Greek concept of human flourishing, Eudaimonia explores interfaces that enhance human capability rather than replacing it. The goal is sustainable, meaningful interaction with technology.

## Exploration Areas

- **Contextual Awareness**: Systems that understand your current task and anticipate needs
- **Natural Interaction**: Moving beyond clicks and keyboards to more intuitive modalities
- **Privacy-Preserving AI**: Local-first intelligence that respects your data
- **Adaptive Interfaces**: UIs that reshape themselves based on context and user patterns
- **Ambient Computing**: Computing that fades into the background until needed

## Current Focus

Design concepts and prototypes exploring how AI assistants should integrate into daily computing workflows. Research into spatial interfaces, voice-first interaction, and proactive assistance.

## Tech Stack

Design explorations using Figma and prototypes in React. Research documentation and concept development.`,
    status: "beta",
    tags: ["design", "ai", "ux", "research", "interfaces"],
    links: [
      { label: "Website", url: "https://aios.design" },
    ],
    featured: false,
  },
  {
    slug: "forgeground",
    name: "Forgeground",
    tagline: "3D arena shooter with physics manipulation",
    description:
      "A browser-based 3D arena shooter built with Babylon.js. Features singleplayer AI, multiplayer via WebSocket, and unique physics field weapons.",
    longDescription: `Forgeground is a fast-paced 3D arena shooter that runs entirely in your browser. Battle AI opponents or compete against players online with a unique physics manipulation system.

## Key Features

- **Singleplayer AI**: Multiple difficulty levels from easy to nightmare with intelligent state-machine AI
- **Multiplayer**: Real-time WebSocket networking with client-side prediction and interpolation
- **15+ Weapons**: From hitscan rifles to physics-manipulating graviton lances and temporal repeaters
- **30+ Abilities**: Movement (dash, blink, grappling hook), offensive (grenades, missiles), and physics manipulation
- **Physics Fields**: Gravity, time, inertia, entropy, space, and mass manipulation

## Weapon Types

Standard weapons (rifle, shotgun, sniper, bow) plus unique physics weapons:
- **Graviton Lance**: Fires gravity field projectiles
- **Temporal Repeater**: Time manipulation shots
- **Inertia Hammer**: Momentum-based attacks
- **Entropy Bow**: Decay field arrows
- **Spatial Shotgun**: Space compression pellets

## Tech Stack

Built with TypeScript and Babylon.js. 60Hz fixed timestep physics with deterministic seeded PRNG. WebSocket multiplayer with server reconciliation.`,
    status: "beta",
    tags: ["gamedev", "typescript", "babylonjs", "webgl", "multiplayer"],
    links: [
      { label: "Play", url: "https://forgeground.online" },
    ],
    featured: false,
  },
  {
    slug: "rising-sun",
    name: "Rising Sun",
    tagline: "This very website you're browsing",
    description:
      "A minimal, ASCII-aesthetic portfolio site built with Next.js and Tailwind CSS. Features CRT effects, boot sequences, and terminal-inspired design.",
    longDescription: `Rising Sun is this portfolio website - a showcase of projects built with a love for retro computing aesthetics and modern web technologies.

## Design Philosophy

- **Terminal Aesthetic**: Inspired by classic CRT monitors and terminal interfaces
- **Boot Sequence**: Simulated BIOS startup for full retro immersion
- **CRT Effects**: Scanlines, vignette, flicker, and noise for authentic feel
- **Minimal & Fast**: No unnecessary bloat, statically generated for speed

## Features

- **Custom Block Cursor**: Follows your mouse like an old terminal
- **Glitch Effects**: Hover interactions with retro glitch animations
- **ASCII Art**: Decorative borders and graphics using text characters
- **Responsive**: Full experience on all device sizes

## Tech Stack

Built with Next.js 14, TypeScript, and Tailwind CSS. Custom CSS animations for CRT and glitch effects. Hosted on Vercel.`,
    status: "active",
    tags: ["nextjs", "tailwind", "typescript", "portfolio", "css"],
    links: [
      { label: "Source", url: "https://github.com/maco144/rising-sun-site" },
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
