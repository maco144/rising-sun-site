# CLAUDE.md

This file provides context for Claude Code when working on this repository.

## Project Overview

Rising Sun is a developer portfolio website with a retro terminal/CRT aesthetic. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Quick Reference

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint check
```

## Architecture

- **No database** - All content in `src/data/projects.ts` and `src/data/updates.ts`
- **Static generation** - All pages can be statically generated
- **Client/Server split** - Interactive effects (boot, cursor, CRT) in ClientLayout; most UI is server-rendered

## Key Files

| Purpose | File |
|---------|------|
| Root layout | `src/app/layout.tsx` |
| Homepage | `src/app/page.tsx` |
| Global styles | `src/app/globals.css` |
| Tailwind config | `tailwind.config.ts` |
| Projects data | `src/data/projects.ts` |
| Updates data | `src/data/updates.ts` |
| Client wrapper | `src/components/ClientLayout.tsx` |

## Design System

**Colors** (use `terminal-` prefix in Tailwind):
- `terminal-green` (#00ff41) - Primary accent
- `terminal-amber` (#ffb000) - Secondary accent
- `terminal-cyan` (#00d4ff) - Links, info
- `terminal-black` (#0a0a0a) - Background
- `terminal-white` (#e0e0e0) - Text

**Glow effects**: `.glow-green`, `.glow-amber`, `.glow-cyan`

**Font**: JetBrains Mono (monospace throughout)

## Adding Content

### New Project
Edit `src/data/projects.ts`, add to the `projects` array:
```typescript
{
  slug: "my-project",
  name: "My Project",
  tagline: "Short tagline",
  description: "Card description",
  longDescription: `Markdown content...`,
  status: "active" | "beta" | "coming-soon",
  tags: ["tag1", "tag2"],
  links: [{ label: "GitHub", url: "https://..." }],
  featured: true | false
}
```

### New Update/Blog Post
Edit `src/data/updates.ts`, add to the `updates` array:
```typescript
{
  slug: "update-slug",
  title: "Update Title",
  date: "2025-01-20",
  excerpt: "Short excerpt",
  content: `Markdown content...`,
  projects: ["related-project-slug"]
}
```

## Component Patterns

- **Server components** (default): No "use client" directive
- **Client components**: Add "use client" at top, used for interactivity
- **ASCII borders**: Use `<ASCIIBorder variant="single|double">`
- **Glitch on hover**: Add `glitch-hover` class
- **Status badges**: active=green, beta=amber, coming-soon=cyan

## Visual Effects

All CRT/retro effects are in `globals.css`:
- Boot sequence plays once per session (sessionStorage)
- Press any key to skip boot
- Custom block cursor follows mouse
- Scanlines + vignette overlay on everything
