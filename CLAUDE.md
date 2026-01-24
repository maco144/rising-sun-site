# CLAUDE.md

Context for Claude Code when working on this repository.

## Project Overview

Rising Sun is a **developer portfolio and business showcase** with a retro terminal/CRT aesthetic. It presents a suite of projects unified by a mission: *an internet where users are safe, AIs are allies, and power is decentralized*.

**Stack**: Next.js 14 (App Router) + TypeScript + Tailwind CSS

## Quick Reference

```bash
npm run dev      # Dev server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint check
```

## Live Products

| Project | URL | Status |
|---------|-----|--------|
| Password Palace | [passwordpalace.com](https://passwordpalace.com) | Private Beta |
| Trove | [trove.website](https://trove.website) | Live |
| GameGames | [gamegames.gg](https://gamegames.gg) | Devnet |
| Eudaimonia | [aios.design](https://aios.design) | Alpha |
| Forgeground | [forgeground.online](https://forgeground.online) | Beta |

## Site Structure

```
/                 # Homepage - featured projects + updates
/manifesto        # Philosophy, principles, vision
/roadmap          # Timeline, milestones, metrics
/projects         # All projects list
/projects/[slug]  # Project detail pages
/about            # About page
/contact          # Contact info
/updates          # Blog/updates list
/updates/[slug]   # Update detail pages
```

## Key Files

| Purpose | File |
|---------|------|
| Root layout | `src/app/layout.tsx` |
| Homepage | `src/app/page.tsx` |
| **Manifesto page** | `src/app/manifesto/page.tsx` |
| **Roadmap page** | `src/app/roadmap/page.tsx` |
| Global styles | `src/app/globals.css` |
| Projects data | `src/data/projects.ts` |
| Updates data | `src/data/updates.ts` |
| Navigation | `src/components/Header.tsx` |

## Documentation Structure

```
docs/
├── README.md              # Vision overview
├── MANIFESTO.md           # Philosophy (source for /manifesto)
├── TECHNOLOGY_THESIS.md   # Technical deep-dive (734 lines)
├── ROADMAP.md             # Timeline (source for /roadmap)
├── STRATEGY.md            # Business strategy
├── projects/              # Per-project docs
│   ├── {project}.md       # Business overview
│   └── {project}-strategy.md
└── one-pagers/            # Investor materials
    └── {project}.md
```

## Architecture

- **No database** - Content in `src/data/` TypeScript files
- **Static generation** - All pages SSG-compatible
- **Client/Server split** - Effects in ClientLayout; UI is server-rendered
- **Docs as source** - `docs/MANIFESTO.md` informs `/manifesto` page content

## Design System

**Colors** (Tailwind `terminal-*` prefix):
| Token | Hex | Usage |
|-------|-----|-------|
| `terminal-green` | #00ff41 | Primary accent, active states |
| `terminal-amber` | #ffb000 | Secondary accent, headings |
| `terminal-cyan` | #00d4ff | Links, info |
| `terminal-black` | #0a0a0a | Background |
| `terminal-white` | #e0e0e0 | Text |
| `terminal-white-dim` | #808080 | Muted text |

**Effects**: `.glow-green`, `.glow-amber`, `.glow-cyan`

**Font**: JetBrains Mono (monospace throughout)

## Components

| Component | Type | Usage |
|-----------|------|-------|
| `ASCIIBorder` | Server | `<ASCIIBorder variant="single\|double">` |
| `ClientLayout` | Client | Wraps app with boot, CRT, cursor |
| `BootSequence` | Client | BIOS startup (skippable, session-cached) |
| `CRTEffect` | Client | Scanlines + vignette overlay |
| `CustomCursor` | Client | Block cursor following mouse |
| `ProjectCard` | Server | Project preview with status badge |

## Adding Content

### New Project
Edit `src/data/projects.ts`:
```typescript
{
  slug: "my-project",
  name: "My Project",
  tagline: "Short tagline",
  description: "Card description",
  longDescription: `Markdown content...`,
  status: "active" | "beta" | "coming-soon",
  tags: ["tag1", "tag2"],
  links: [{ label: "Website", url: "https://..." }],
  featured: true | false
}
```

### New Documentation
Add to `docs/projects/` for business docs, `docs/one-pagers/` for investor materials.

## Navigation

Current nav structure in `Header.tsx`:
```typescript
const navLinks = [
  { href: "/", label: "home" },
  { href: "/manifesto", label: "manifesto" },
  { href: "/roadmap", label: "roadmap" },
  { href: "/projects", label: "projects" },
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
];
```

## Mission Context

When working on this site, keep in mind the core thesis:

1. **User Safety** - Technology protected by math, not promises (ZK proofs)
2. **AI as Ally** - AI that serves users, not platforms
3. **Decentralization** - No single point of failure or control

The manifesto and roadmap pages are central to communicating this vision.

## File Counts

- Components: 14
- Pages: 9
- Documentation: 21 files
- Total source: 24 files
