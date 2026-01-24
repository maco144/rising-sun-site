# Project Index: rising-sun-site

**Generated**: 2026-01-24
**Type**: Next.js Developer Portfolio & Business Showcase
**Framework**: Next.js 14 (App Router) + TypeScript + Tailwind CSS

---

## Project Structure

```
rising-sun-site/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout (metadata, Header/Footer)
│   │   ├── page.tsx            # Homepage (featured projects, updates)
│   │   ├── globals.css         # Global styles, CRT effects, animations
│   │   ├── manifesto/page.tsx  # Vision & philosophy page
│   │   ├── roadmap/page.tsx    # Timeline & milestones page
│   │   ├── about/page.tsx      # About page
│   │   ├── contact/page.tsx    # Contact page
│   │   ├── projects/
│   │   │   ├── page.tsx        # Projects list
│   │   │   └── [slug]/page.tsx # Project detail (dynamic route)
│   │   └── updates/
│   │       ├── page.tsx        # Updates/blog list
│   │       └── [slug]/page.tsx # Update detail (dynamic route)
│   ├── components/             # React components (14 total)
│   │   ├── ClientLayout.tsx    # Client wrapper (boot, CRT, cursor)
│   │   ├── Header.tsx          # Site navigation
│   │   ├── Footer.tsx          # Site footer with ASCII art
│   │   ├── BootSequence.tsx    # BIOS-style boot animation
│   │   ├── CRTEffect.tsx       # Scanlines + vignette overlay
│   │   ├── CustomCursor.tsx    # Terminal block cursor
│   │   ├── AnimatedHero.tsx    # Homepage hero with typing effect
│   │   ├── ASCIIBorder.tsx     # Decorative ASCII box borders
│   │   ├── GlitchText.tsx      # Text with glitch effect
│   │   ├── TypewriterText.tsx  # Character-by-character typing
│   │   ├── ProjectCard.tsx     # Project preview card
│   │   └── UpdateCard.tsx      # Blog/update preview card
│   └── data/                   # Static data (no database)
│       ├── projects.ts         # Project definitions + helpers
│       └── updates.ts          # Blog updates + helpers
├── docs/                       # Business documentation
│   ├── README.md               # Vision overview
│   ├── MANIFESTO.md            # Philosophy & principles
│   ├── TECHNOLOGY_THESIS.md    # Technical deep-dive
│   ├── ROADMAP.md              # Timeline & milestones
│   ├── STRATEGY.md             # Business strategy
│   ├── projects/               # Project summaries (10 files)
│   │   ├── {project}.md        # Business overview
│   │   └── {project}-strategy.md # Strategy docs
│   └── one-pagers/             # Investor one-pagers (5 files)
├── tailwind.config.ts          # Custom colors, animations, fonts
├── CLAUDE.md                   # AI assistant context
├── PROJECT_INDEX.md            # This file
└── PROJECT_INDEX.json          # Machine-readable index
```

---

## Pages & Routes

| Route | File | Description |
|-------|------|-------------|
| `/` | `app/page.tsx` | Homepage with featured projects + updates |
| `/manifesto` | `app/manifesto/page.tsx` | Philosophy, principles, vision |
| `/roadmap` | `app/roadmap/page.tsx` | Timeline, milestones, metrics |
| `/about` | `app/about/page.tsx` | About page |
| `/contact` | `app/contact/page.tsx` | Contact information |
| `/projects` | `app/projects/page.tsx` | All projects list |
| `/projects/[slug]` | `app/projects/[slug]/page.tsx` | Project detail |
| `/updates` | `app/updates/page.tsx` | All updates/blog |
| `/updates/[slug]` | `app/updates/[slug]/page.tsx` | Update detail |

---

## Components

| Component | Type | Purpose |
|-----------|------|---------|
| `ClientLayout` | Client | Wraps app with boot sequence, CRT effects, cursor |
| `BootSequence` | Client | BIOS-style startup animation (skippable) |
| `CRTEffect` | Client | Scanline overlay + vignette + noise |
| `CustomCursor` | Client | Terminal block cursor following mouse |
| `AnimatedHero` | Client | Homepage hero with Rising Sun ASCII + typing |
| `Header` | Client | Navigation with active state highlighting |
| `Footer` | Server | Contact links + ASCII footer art |
| `ASCIIBorder` | Server | Box-drawing character borders (single/double) |
| `ProjectCard` | Server | Project preview with status badge |
| `UpdateCard` | Server | Blog post preview card |
| `GlitchText` | Server | Text with glitch hover effect |
| `TypewriterText` | Client | Character-by-character typing animation |

---

## Documentation Structure

```
docs/
├── README.md                 # Vision overview (127 lines)
├── MANIFESTO.md              # Philosophy (217 lines)
├── TECHNOLOGY_THESIS.md      # Technical deep-dive (734 lines)
├── ROADMAP.md                # Timeline (445 lines)
├── STRATEGY.md               # Business strategy
├── projects/
│   ├── password-palace.md    # PP business overview
│   ├── trove.md              # Trove business overview
│   ├── gamegames.md          # GG business overview
│   ├── eudaimonia.md         # AIOS business overview
│   ├── forgeground.md        # FG business overview
│   └── *-strategy.md         # Per-project strategy docs
└── one-pagers/
    ├── password-palace.md    # PP investor one-pager
    ├── trove.md              # Trove investor one-pager
    ├── gamegames.md          # GG investor one-pager
    ├── eudaimonia.md         # AIOS investor one-pager
    ├── forgeground.md        # FG investor one-pager
    └── rising-sun-portfolio.md # Portfolio overview
```

---

## Design System

### Colors (Tailwind `terminal-*`)

| Token | Hex | Usage |
|-------|-----|-------|
| `terminal-black` | `#0a0a0a` | Background |
| `terminal-green` | `#00ff41` | Primary accent, active states |
| `terminal-amber` | `#ffb000` | Secondary accent, headings |
| `terminal-cyan` | `#00d4ff` | Links, info elements |
| `terminal-white` | `#e0e0e0` | Primary text |
| `terminal-white-dim` | `#808080` | Secondary text |

### Animations

`blink`, `typewriter`, `fade-in`, `scan`, `glitch`, `pulse-glow`, `flicker`

### CSS Effects

CRT overlay, scanlines, vignette, screen noise, glitch text, glow classes, custom cursor

---

## Projects Showcased

| Project | Status | Website |
|---------|--------|---------|
| **Password Palace** | Private Beta | [passwordpalace.com](https://passwordpalace.com) |
| **Trove** | Live | [trove.website](https://trove.website) |
| **GameGames** | Devnet | [gamegames.gg](https://gamegames.gg) |
| **Eudaimonia** | Alpha | [aios.design](https://aios.design) |
| **Forgeground** | Beta | [forgeground.online](https://forgeground.online) |
| **Rising Sun** | Active | This site |

---

## Quick Start

```bash
npm install          # Install dependencies
npm run dev          # Dev server (localhost:3000)
npm run build        # Production build
npm run lint         # ESLint check
```

---

## Key Files

| File | Purpose |
|------|---------|
| `CLAUDE.md` | AI assistant context for development |
| `docs/MANIFESTO.md` | Core philosophy and vision |
| `docs/TECHNOLOGY_THESIS.md` | Technical architecture details |
| `docs/ROADMAP.md` | Timeline and milestones |
| `src/data/projects.ts` | Project data and helpers |
| `src/app/manifesto/page.tsx` | Manifesto page implementation |
| `src/app/roadmap/page.tsx` | Roadmap page implementation |

---

## File Counts

| Category | Count |
|----------|-------|
| TSX Components | 14 |
| App Pages | 9 |
| Data Files | 2 |
| Documentation (docs/) | 21 |
| Total Source Files | 24 |
