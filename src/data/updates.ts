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
    slug: "password-palace-security-hardening",
    title: "Password Palace: Critical Security Hardening Complete",
    date: "2026-01-25",
    excerpt:
      "Major security improvements across the browser extension, frontend, and OAuth service. Session hijacking vulnerabilities fixed.",
    content: `We've completed a comprehensive security audit and fix cycle for Password Palace, addressing critical vulnerabilities across all components.

## Browser Extension Security

- **Removed HTTP host permissions** - Prevents potential MITM attacks on blockchain RPC calls
- **Auto-clearing sensitive data** - Pending passwords now auto-clear after 5 seconds
- **Removed credential logging** - Autofill capture no longer logs credentials for debugging

## Frontend Security

- **Removed hardcoded secrets** - Faucet mnemonic now requires environment variable
- **Secure token storage** - OAuth tokens moved from localStorage to sessionStorage (cleared on tab close)
- **Mandatory state validation** - OAuth state validation is now required with no fallback bypass

## OAuth Service Fixes

- **Session hijacking fix** - Palace authentication is now bound to OAuth state
- **Token endpoint hardening** - Removed POST body token acceptance in userinfo endpoint

## Infrastructure

Over 100 commits this week also addressed Railway deployment, including database connection handling and TLS configuration for the custodial backend.

## Legal Documentation

Added comprehensive legal documentation including Terms of Service and Privacy Policy.

These changes significantly improve the security posture ahead of the planned public beta launch.`,
    projects: ["password-palace"],
  },
  {
    slug: "gamegames-capture-game-detection",
    title: "GameGames Capture: Automatic Game Detection and End-State Monitoring",
    date: "2026-01-25",
    excerpt:
      "The GG Capture tool now automatically detects which game you're playing and monitors for match end-states to trigger screenshot capture.",
    content: `Major update to GG Capture, the desktop companion app for GameGames wager verification.

## Phase 1: Game Detection

GG Capture can now automatically detect which game you're playing:

- **Process & window detection** - Monitors running processes and window titles
- **10+ games supported** - Chess.com, Lichess, TETR.IO, card games, and more
- **Cross-platform** - Win32, X11 (Linux), and AppleScript (macOS) support
- **Background monitoring** - Emits \`game:changed\` events when you switch games
- **Wager validation** - Ensures your wager matches the detected game

## Phase 2: End-State Detection

The app now knows when your game ends:

- **Game-specific adapters** - Custom detection for Chess, TETR.IO, card games
- **Visual recognition** - Color and pattern-based end-state detection
- **Confidence scoring** - Reports how certain it is about the outcome
- **Auto-capture** - Optionally captures screenshots automatically at game end

## UI Updates

- Shows detected game in both minimized and expanded views
- End-state indicator displays outcome and confidence level
- Toggle controls for monitoring and auto-capture features
- Capture button disabled when no supported game is detected

## Why This Matters

This moves GameGames closer to fully automated verification. Instead of manually screenshotting, the app detects your game, waits for it to end, captures the result, and submits for AI verification—all automatically.

## What's Next

Integration with the AI verification oracle for end-to-end automated wager settlement.`,
    projects: ["gamegames"],
  },
  {
    slug: "eudaimonia-v37-release",
    title: "Eudaimonia V37: 30 Specialists and Nous Validation",
    date: "2026-01-25",
    excerpt:
      "Major release adds 12 new specialists, the Nous validation system with staked claims and dispute resolution, plus Email Gateway and URL Archiving.",
    content: `Eudaimonia V37 is our biggest release yet, with 50 commits adding significant new capabilities.

## 30 Specialists

Eudaimonia now has 30 specialized AI agents, up from 18. New specialists include:

- **Accountant** - Financial record-keeping and analysis
- **Technical Writer** - Documentation and technical communication
- **Integration Engineer** - API and system integration
- **Compliance** - Regulatory and policy compliance
- **Negotiator** - Deal-making and negotiation strategy
- **Arbitrageur** - Market opportunity identification
- **Resource Orchestrator** - Resource allocation and optimization
- **InfraOps** - Infrastructure operations
- **Security Auditor** - Security assessment and hardening

All venture specialists now support modality switching for flexible interaction modes.

## Nous Validation System

A complete trust layer for AI-generated claims:

- **Commit-Reveal System** - Cryptographic commitment before revealing claims
- **Staked Validation** - Validators stake tokens to vouch for claim accuracy
- **Dispute Resolution** - Structured process for challenging and adjudicating contested claims

## New Capabilities

- **Email Gateway** - Send and receive email through Eudaimonia
- **URL Archiving** - Automatic archival of referenced web pages
- **Monitoring Dashboard** - System health and performance metrics
- **TUI Enhancements** - Improved terminal user interface
- **Hivemind App** - Dedicated application for hivemind coordination

## What's Next

V38 will focus on Bittensor subnet integration and voice interface improvements.`,
    projects: ["eudaimonia"],
  },
  {
    slug: "trove-ipfs-integration",
    title: "Trove Adds IPFS Storage with Pinata Integration",
    date: "2026-01-24",
    excerpt:
      "Trove SDK now supports decentralized storage via IPFS. Plus a redesigned homepage with animated hero section.",
    content: `Trove continues its march toward full decentralization with native IPFS support.

## IPFS Storage Integration

The Trove SDK now includes built-in IPFS storage via Pinata:

- **Decentralized by default** - Assets stored on IPFS, not centralized servers
- **Content-addressed** - Files referenced by their hash, ensuring integrity
- **Pinata managed** - Professional pinning service ensures availability
- **SDK integration** - Simple API for uploading and retrieving content

This means Troves can now contain truly decentralized digital assets. The content persists even if Trove's servers go offline.

## Homepage Redesign

We've also launched a redesigned homepage at [trove.website](https://trove.website):

- **Animated hero section** - Dynamic visuals showcasing Trove capabilities
- **Value-focused messaging** - Clearer communication of what Trove enables
- **Improved navigation** - Easier path to documentation and getting started

## Technical Details

The IPFS integration uses:
- Pinata's pinning API for reliable storage
- CIDv1 for content addressing
- Automatic metadata generation
- SDK methods: \`uploadToIPFS()\`, \`getFromIPFS()\`

## What's Next

Q2 will bring the Trove testnet with full ZK conditional access proofs.`,
    projects: ["trove"],
  },
  {
    slug: "project-index-finalized",
    title: "Project Index and Documentation Complete",
    date: "2026-01-24",
    excerpt:
      "All five Rising Sun products now have comprehensive documentation, strategy guides, and investor materials ready.",
    content: `The Rising Sun documentation suite is now complete. Every product in the portfolio has detailed strategy documentation and investor-ready materials.

## What's Included

### Strategy Documentation
Each product now has a dedicated strategy document covering:
- Three-phase development approach
- Market positioning and competitive analysis
- Revenue models and projections
- Technical architecture decisions

### Investor One-Pagers
Professional one-pagers created for:
- **Password Palace** - Self-sovereign identity via spatial memory + ZK proofs
- **Trove** - Programmable conditional access to digital value
- **GameGames** - Trustless skill wagering with AI verification
- **Eudaimonia** - AI Operating System with hivemind coordination
- **Forgeground** - Browser-based competitive FPS
- **Rising Sun Portfolio** - Combined investment thesis

## GameGames Indie Developer Program
Also announced: the Indie Developer Program with split rake economics. Indie developers can integrate their games with GameGames and earn 60% of the rake on their games.

## Access the Docs
All documentation is available in the [docs/](https://github.com/maco144/rising-sun-site/tree/main/docs) directory of the repository.`,
    projects: ["password-palace", "trove", "gamegames", "eudaimonia", "forgeground"],
  },
  {
    slug: "2026-roadmap-published",
    title: "Rising Sun 2026 Roadmap Published",
    date: "2026-01-23",
    excerpt:
      "Our complete roadmap for 2026 is now public. From Password Palace security audit to Trove mainnet launch, here's what's coming.",
    content: `We've published our full 2026 roadmap. Transparency is a core value, and we want you to know exactly what we're building and when.

## Q1 2026: Foundation

**Password Palace**
- Security audit of ZK circuits and contracts
- Browser extension v1.0 (Chrome, Firefox)
- Public beta launch in February
- Production mainnet deployment in March

**Eudaimonia**
- Hivemind P2P stability improvements
- Bittensor subnet integration
- Voice interface (Whisper + TTS)
- Public alpha release in March

**GameGames**
- AI verification implementation (Claude Vision)
- Mainnet deployment on Solana
- Tournament mode MVP

## Q2-Q4 Highlights

- **Trove** testnet launch (Q2), mainnet launch (Q3)
- **Forgeground** ranked matchmaking and tournament infrastructure
- Cross-project integration starting Q2
- Rising Sun DAO formation in Q4

## Success Metrics

By end of 2026, we're targeting:
- 50k Password Palace users
- $500k monthly wagers on GameGames
- 5k active Eudaimonia instances
- 75k monthly Forgeground players

## Read the Full Roadmap

The complete roadmap with quarterly breakdowns, resource allocation, and risk factors is available at [/roadmap](/roadmap).`,
    projects: ["password-palace", "trove", "gamegames", "eudaimonia", "forgeground"],
  },
  {
    slug: "manifesto-technology-thesis",
    title: "Rising Sun Manifesto and Technology Thesis Published",
    date: "2026-01-23",
    excerpt:
      "We've published our core philosophy documents: the Manifesto explaining why we build, and the Technology Thesis explaining how.",
    content: `Two foundational documents now define the Rising Sun vision: the Manifesto and the Technology Thesis.

## The Manifesto

The internet we were promised—open, free, owned by its users—is dying. Five companies control what you see, your passwords wait in breachable databases, and your AI reports to corporations, not you.

We're building something different. Our three principles:

1. **Safety Through Mathematics** - Zero-knowledge proofs mean we can't be evil even if we wanted to. Password Palace doesn't store your passwords because it doesn't need to.

2. **AI as Ally, Not Adversary** - Eudaimonia works for you, not for advertisers. It has memory, agency, and answers only to its owner.

3. **Decentralization as Insurance** - Our products run on Cosmos, Solana, and IPFS because these networks have no off switch. No CEO can shut them down.

## The Technology Thesis

A 700+ line deep-dive into the technical foundations:

- Why spatial memory + ZK proofs solve the identity problem
- How the Halo2 proof system enables trustless verification
- The architecture of Eudaimonia's hivemind coordination
- GameGames' AI verification vs traditional anti-cheat
- Browser-native 3D rendering for Forgeground

## Read More

- [/manifesto](/manifesto) - The philosophy
- Technology Thesis available in docs/TECHNOLOGY_THESIS.md`,
    projects: ["password-palace", "trove", "gamegames", "eudaimonia", "forgeground"],
  },
  {
    slug: "portfolio-site-launch",
    title: "Rising Sun Portfolio Site Launches",
    date: "2026-01-22",
    excerpt:
      "The Rising Sun portfolio site is live with a retro terminal aesthetic, CRT effects, and comprehensive project showcases.",
    content: `We're excited to announce the launch of the Rising Sun portfolio site—the central hub for all our projects and documentation.

## Retro Terminal Aesthetic

The site features a complete retro computing experience:

- **Boot Sequence** - A nostalgic BIOS-style startup animation
- **CRT Effects** - Authentic scanlines and screen curvature
- **Terminal Colors** - Classic green, amber, and cyan on black
- **ASCII Borders** - Box-drawing characters throughout
- **Custom Cursor** - Block cursor that follows your mouse

The aesthetic isn't just for show. It reflects our philosophy: building technology that serves users rather than extracting from them. The early internet was weird, personal, and owned by its users. That's the spirit we're channeling.

## What's on the Site

- **Projects** - Detailed pages for all five Rising Sun products
- **Manifesto** - Our core philosophy and principles
- **Roadmap** - Complete 2026 development timeline
- **Updates** - Development blog and announcements
- **About & Contact** - Connect with us

## Built With

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- JetBrains Mono font
- Zero external component libraries

## Explore

Visit the projects at:
- [Password Palace](https://passwordpalace.com) - Private Beta
- [Trove](https://trove.website) - Live
- [GameGames](https://gamegames.gg) - Devnet
- [Eudaimonia](https://aios.design) - Alpha
- [Forgeground](https://forgeground.online) - Beta`,
    projects: ["password-palace", "trove", "gamegames", "eudaimonia", "forgeground"],
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
