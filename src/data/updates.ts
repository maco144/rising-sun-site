export interface Update {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  projects: string[];
}

export const updates: Update[] = [
  {
    slug: "password-palace-v2-launch",
    title: "Password Palace v2.0 Launches with Team Features",
    date: "2025-01-15",
    excerpt:
      "Major release introducing secure team password sharing, improved browser extensions, and a redesigned vault interface.",
    content: `We're thrilled to announce Password Palace v2.0, our biggest update yet. This release focuses on team collaboration while maintaining our commitment to zero-knowledge security.

## What's New

### Team Sharing
Share passwords securely with team members without ever exposing the actual credentials. Each team member's vault remains encrypted with their own key, and shared items are re-encrypted for each recipient.

### Redesigned Vault Interface
The new vault UI is faster, more intuitive, and supports keyboard navigation throughout. Power users will love the new command palette (Ctrl/Cmd + K).

### Improved Browser Extensions
All browser extensions have been rebuilt from the ground up:
- Faster autofill
- Better site detection
- Biometric unlock support
- Inline password generator

## Migration Guide

Existing users will be automatically migrated to v2.0. Your vault remains encrypted and secure throughout the process.

## What's Next

We're already working on v2.1, which will include:
- Hardware key support (YubiKey, etc.)
- Emergency access feature
- Password health dashboard improvements

Thank you to everyone who provided feedback during the beta. Your input shaped this release.`,
    projects: ["password-palace"],
  },
  {
    slug: "trove-ai-tagging",
    title: "Trove Now Features AI-Powered Auto-Tagging",
    date: "2025-01-10",
    excerpt:
      "Let machine learning organize your assets. Trove's new AI tagging feature automatically categorizes and tags your files.",
    content: `Managing thousands of digital assets just got a lot easier. Trove's new AI-powered tagging feature automatically analyzes and categorizes your files as you upload them.

## How It Works

When you upload assets to Trove, our ML models analyze each file and suggest relevant tags based on:

- **Image Content**: Objects, scenes, colors, and composition
- **Text Content**: Keywords, topics, and document type
- **File Metadata**: Creation date, dimensions, file type

You can accept, reject, or modify suggested tags with a single click.

## Privacy First

All processing happens on our servers, but your actual files are never used to train our models. We use pre-trained models that run in isolated containers.

## Getting Started

AI tagging is enabled by default for all accounts. You can disable it in Settings > Organization > Auto-tagging.

## Accuracy Improvements

We've seen the following accuracy rates in testing:
- Photos: 92% accuracy
- Icons/Illustrations: 87% accuracy
- Documents: 94% accuracy
- Videos: 89% accuracy

The system learns from your corrections, improving over time for your specific use case.`,
    projects: ["trove"],
  },
  {
    slug: "gamegames-multiplayer-update",
    title: "GameGames Adds Real-Time Multiplayer",
    date: "2025-01-05",
    excerpt:
      "Challenge friends or strangers in real-time multiplayer matches. New games and leaderboards included.",
    content: `Get ready to compete! GameGames now supports real-time multiplayer for all games in our collection.

## New Multiplayer Features

### Quick Match
Jump into a game instantly with players of similar skill level. Our matchmaking system ensures fair, competitive matches.

### Private Rooms
Create a private room and share the code with friends. Perfect for game nights or casual sessions.

### Global Leaderboards
Every game now has global leaderboards. Compete for the top spot and earn badges for your achievements.

## New Games

We've added three new games to celebrate the multiplayer launch:

1. **Duel**: A real-time 1v1 puzzle battle
2. **Race to 100**: Competitive math puzzle racing
3. **Territory**: Strategic hex-grid conquest

## Technical Details

Multiplayer is powered by WebSockets with client-side prediction for smooth gameplay even on slower connections. We're running game servers in multiple regions to minimize latency.

## Coming Soon

- Tournament mode
- Spectator mode
- Replay sharing
- Custom game rules`,
    projects: ["gamegames"],
  },
  {
    slug: "eudaimonia-beta-launch",
    title: "Eudaimonia Enters Public Beta",
    date: "2024-12-20",
    excerpt:
      "After months of development, our mindful productivity app is ready for beta testers. Join us in building a more balanced approach to productivity.",
    content: `We're excited to open Eudaimonia to public beta testers. After months of development and private testing, we're ready to share our vision for mindful productivity.

## What is Eudaimonia?

Eudaimonia is a productivity app that doesn't just track your tasks - it tracks your well-being. We believe sustainable productivity comes from understanding your energy, mood, and natural rhythms.

## Beta Features

The current beta includes:

- **Holistic Dashboard**: Your productivity, energy, and mood at a glance
- **Habit Tracking**: Build positive habits with streak tracking
- **Energy Mapping**: Log and understand your energy patterns
- **Task Management**: Simple but effective task organization
- **Weekly Reviews**: Guided reflection to improve continuously

## Join the Beta

We're accepting beta testers on iOS (TestFlight) and Android (Google Play Beta). Desktop apps are coming in the next beta phase.

## Feedback Welcome

As a beta tester, your feedback directly shapes the product. We're particularly interested in:

- Feature requests
- UI/UX improvements
- Performance issues
- Integration suggestions

Join our Discord to connect with other beta testers and the development team.`,
    projects: ["eudaimonia"],
  },
  {
    slug: "forgeground-terminal-sharing",
    title: "Forgeground Adds Shared Terminal Sessions",
    date: "2024-12-15",
    excerpt:
      "Collaborate on more than just code. Forgeground now supports shared terminal sessions with full PTY support.",
    content: `Pair programming is about more than just editing code together. That's why we've added shared terminal sessions to Forgeground.

## Shared Terminals

Now you can:

- **Share a Terminal**: Give collaborators access to a terminal session
- **Control Permissions**: Choose who can type vs. who can only watch
- **Run Commands Together**: Perfect for debugging, testing, and deployment
- **Full PTY Support**: vim, tmux, and other TUI apps work perfectly

## How It Works

Each Forgeground session can have multiple shared terminals. The host's terminal is streamed to all participants with minimal latency. Participants with write access can type commands that execute on the host's session.

## Security Considerations

Shared terminals are powerful, so we've built in safety features:

- Write access is opt-in per participant
- All commands are logged for audit
- Sessions are isolated in containers
- Network access is configurable

## Use Cases

- **Pair Debugging**: Debug issues together in real-time
- **Teaching**: Show students how to use CLI tools
- **Code Reviews**: Run tests and explore behavior together
- **Interviews**: Watch candidates work in a real environment

Try it out and let us know what you think!`,
    projects: ["forgeground"],
  },
  {
    slug: "hexgrid-v3-release",
    title: "HexGrid v3.0: WebGL Renderer and Performance Boost",
    date: "2024-12-01",
    excerpt:
      "Major performance improvements with the new WebGL renderer. Render millions of hexes at 60fps.",
    content: `HexGrid v3.0 is here with a complete rendering overhaul and significant performance improvements.

## New WebGL Renderer

The new WebGL renderer can handle millions of hexes at 60fps. Features include:

- **Instanced Rendering**: Efficiently render massive grids
- **Shader-Based Coloring**: Dynamic terrain coloring in the GPU
- **Zoom Levels**: Automatic detail reduction at far zoom
- **Fog of War**: Built-in fog of war effect support

## Performance Benchmarks

Compared to v2.x Canvas renderer:

| Grid Size | v2.x FPS | v3.0 FPS |
|-----------|----------|----------|
| 1,000 hexes | 60 | 60 |
| 10,000 hexes | 45 | 60 |
| 100,000 hexes | 8 | 60 |
| 1,000,000 hexes | - | 55 |

## Breaking Changes

- Renamed \`HexRenderer\` to \`CanvasRenderer\`
- New \`WebGLRenderer\` class for WebGL rendering
- Changed coordinate system to cube coordinates by default

See the migration guide for details on updating your code.

## What's Next

- 3D hex rendering
- Terrain mesh generation
- Path visualization improvements
- Mobile touch controls`,
    projects: ["hexgrid"],
  },
  {
    slug: "terminal-ui-announcement",
    title: "Announcing Terminal UI: React Components with Retro Style",
    date: "2024-11-15",
    excerpt:
      "A new React component library bringing terminal aesthetics to modern web applications. Coming soon.",
    content: `We're working on something new: Terminal UI, a React component library that brings the aesthetic of classic terminal interfaces to modern web development.

## Why Terminal UI?

There's something timeless about the look of terminal interfaces - the monospace fonts, the box-drawing characters, the blinking cursors. We wanted to capture that aesthetic while providing the functionality modern applications need.

## Planned Components

We're building a comprehensive set of components:

- **Layout**: Containers, grids, and dividers
- **Typography**: Headers, paragraphs, and code blocks
- **Forms**: Inputs, selects, checkboxes, and buttons
- **Feedback**: Alerts, toasts, and progress indicators
- **Navigation**: Menus, tabs, and breadcrumbs
- **Data Display**: Tables, lists, and cards

## Design Principles

1. **Authentic Aesthetic**: True to terminal conventions
2. **Modern Functionality**: Full keyboard navigation, ARIA support
3. **Customizable**: Theming system for colors and borders
4. **Lightweight**: No external CSS dependencies

## Timeline

We're targeting a Q1 2025 release. Follow the GitHub repo for updates and early access.

## Contributing

We'll be opening the repo for contributions once we have the core components stable. Star the repo to stay notified!`,
    projects: ["terminal-ui"],
  },
];

export function getUpdateBySlug(slug: string): Update | undefined {
  return updates.find((u) => u.slug === slug);
}

export function getRecentUpdates(count: number = 5): Update[] {
  return [...updates]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getUpdatesByProject(projectSlug: string): Update[] {
  return updates.filter((u) => u.projects.includes(projectSlug));
}
