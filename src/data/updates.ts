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
