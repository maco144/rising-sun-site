# Project Index: rising-sun-site

**Generated**: 2026-01-23
**Type**: Next.js Developer Portfolio Website
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
│   │   ├── about/page.tsx      # About page
│   │   ├── contact/page.tsx    # Contact page
│   │   ├── projects/
│   │   │   ├── page.tsx        # Projects list
│   │   │   └── [slug]/page.tsx # Project detail (dynamic route)
│   │   └── updates/
│   │       ├── page.tsx        # Updates/blog list
│   │       └── [slug]/page.tsx # Update detail (dynamic route)
│   ├── components/             # React components
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
├── tailwind.config.ts          # Custom colors, animations, fonts
├── tsconfig.json               # TypeScript config
├── package.json                # Dependencies
└── .eslintrc.json              # ESLint config
```

---

## Entry Points

| Entry | Path | Purpose |
|-------|------|---------|
| **App Entry** | `src/app/layout.tsx` | Root layout, metadata, global structure |
| **Homepage** | `src/app/page.tsx` | Featured projects + recent updates |
| **Dev Server** | `npm run dev` | Start development at localhost:3000 |
| **Build** | `npm run build` | Production build |

---

## Core Modules

### Data Layer (`src/data/`)

**projects.ts**
- `Project` interface: slug, name, tagline, description, longDescription, status, tags, links, featured
- `projects[]`: Array of 6 projects (Password Palace, Trove, GameGames, Eudaimonia, Forgeground, Rising Sun)
- Helpers: `getProjectBySlug()`, `getFeaturedProjects()`, `getProjectsByStatus()`

**updates.ts**
- `Update` interface: slug, title, date, excerpt, content, projects[]
- `updates[]`: Array of 7 blog updates
- Helpers: `getUpdateBySlug()`, `getRecentUpdates()`, `getUpdatesByProject()`

### Components (`src/components/`)

| Component | Type | Purpose |
|-----------|------|---------|
| `ClientLayout` | Client | Wraps app with boot sequence, CRT effects, custom cursor |
| `BootSequence` | Client | BIOS-style startup animation (skippable, session-cached) |
| `CRTEffect` | Client | Scanline overlay + vignette + screen noise |
| `CustomCursor` | Client | Terminal block cursor following mouse |
| `AnimatedHero` | Client | Homepage hero with Rising Sun ASCII art + typing |
| `Header` | Server | Navigation links |
| `Footer` | Server | Contact links + ASCII footer art |
| `ASCIIBorder` | Server | Box-drawing character borders (single/double) |
| `ProjectCard` | Server | Project preview with status badge |
| `UpdateCard` | Server | Blog post preview card |
| `GlitchText` | Server | Text with glitch hover effect |
| `TypewriterText` | Client | Character-by-character typing animation |

---

## Design System

### Color Palette (Tailwind)

| Token | Hex | Usage |
|-------|-----|-------|
| `terminal-black` | `#0a0a0a` | Background |
| `terminal-dark` | `#1a1a1a` | Card backgrounds |
| `terminal-gray` | `#2a2a2a` | Borders, muted elements |
| `terminal-green` | `#00ff41` | Primary accent, active states |
| `terminal-amber` | `#ffb000` | Secondary accent, warnings |
| `terminal-cyan` | `#00d4ff` | Links, info elements |
| `terminal-white` | `#e0e0e0` | Primary text |
| `terminal-white-dim` | `#808080` | Secondary text |

### Custom Animations

- `blink`: Cursor blink (1s step-end)
- `typewriter`: Width 0→100% (2s steps)
- `fade-in`: Opacity + translateY entrance
- `scan`: Scanline movement
- `glitch`: Clip-path + translate distortion
- `pulse-glow`: Box-shadow pulsing
- `flicker`: Subtle opacity flicker

### Visual Effects (globals.css)

- **CRT Overlay**: Scanlines, vignette, screen noise
- **Glitch Effects**: Hover-triggered color shift + clip-path
- **Boot Sequence**: Line-by-line reveal with cursor
- **Glow Classes**: `.glow-green`, `.glow-amber`, `.glow-cyan`
- **Custom Scrollbar**: Terminal-styled green gradient
- **Custom Cursor**: Block cursor + trailing dot

---

## Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 14.2.35 | React framework (App Router) |
| `react` | ^18 | UI library |
| `tailwindcss` | ^3.4.1 | Utility CSS |
| `typescript` | ^5 | Type safety |

**Font**: JetBrains Mono (Google Fonts)

---

## Pages & Routes

| Route | File | Description |
|-------|------|-------------|
| `/` | `app/page.tsx` | Homepage with featured projects + updates |
| `/about` | `app/about/page.tsx` | About page |
| `/contact` | `app/contact/page.tsx` | Contact information |
| `/projects` | `app/projects/page.tsx` | All projects list |
| `/projects/[slug]` | `app/projects/[slug]/page.tsx` | Project detail |
| `/updates` | `app/updates/page.tsx` | All updates/blog |
| `/updates/[slug]` | `app/updates/[slug]/page.tsx` | Update detail |

---

## Projects Showcased

| Project | Status | Tags |
|---------|--------|------|
| **Password Palace** | active | web3, typescript, react, three.js, cosmos, zk-proofs |
| **Trove** | active | web3, cosmos, zk-proofs, typescript, rust |
| **GameGames** | active | web3, solana, gaming, ai, typescript |
| **Eudaimonia** | beta | design, ai, ux, research, interfaces |
| **Forgeground** | beta | gamedev, typescript, babylonjs, webgl, multiplayer |
| **Rising Sun** | active | nextjs, tailwind, typescript, portfolio, css |

---

## Quick Start

```bash
# Install dependencies
npm install

# Development server (localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint check
npm run lint
```

---

## Architecture Notes

1. **No Database**: All content stored in TypeScript files (`src/data/`)
2. **Static Generation**: Pages use static data, fully SSG-compatible
3. **Client Components**: Interactive effects (boot, cursor, CRT) wrapped in `ClientLayout`
4. **Server Components**: Most UI components are server-rendered by default
5. **Retro Aesthetic**: Terminal/CRT visual language throughout
6. **Session Storage**: Boot sequence only plays once per session
