# Forgeground Strategy

> Product strategy for the Browser-Based 3D Arena Shooter

---

## Executive Summary

Forgeground is positioned to prove that **the browser is a viable AAA gaming platform**. By delivering 60fps arena shooter gameplay with zero downloads, we target the massive underserved market of players who want quality gaming without hardware barriers.

**Strategic thesis**: The 50-100GB download era of gaming is ending. As web technologies mature (WebGPU, WASM, WebSockets), the browser becomes the universal gaming platform. First movers who build native-quality browser games will dominate the next gaming paradigm.

---

## I. Market & Competition

### Market Overview

#### Total Addressable Market (TAM)

| Market | Size (2026) | Growth Rate |
|--------|-------------|-------------|
| **PC Gaming** | $42B | 5% CAGR |
| **Browser Games** | $11B | 12% CAGR |
| **Esports** | $4B | 15% CAGR |
| **Cloud Gaming** | $3B | 40% CAGR |

**Combined TAM**: ~$60B globally

#### Serviceable Addressable Market (SAM)

Focusing on:
- FPS/Arena shooter players
- Browser gaming enthusiasts
- Players without gaming hardware
- Esports participants and viewers

**SAM**: ~$8B (FPS players open to browser alternatives)

#### Serviceable Obtainable Market (SOM)

Year 1-2 realistic capture:
- 75K MAU (free-to-play base)
- 5% premium conversion = 3,750 paying users
- At $8 ARPU = $360K ARR

**SOM (2027)**: ~$500K ARR

### Target Segments

#### Primary Segments

| Segment | Profile | Pain Points | Acquisition Cost |
|---------|---------|-------------|-----------------|
| **Casual FPS Players** | Played shooters, not hardcore | Downloads too big, gaming PC expensive | Low - broad reach |
| **Work/School Gamers** | Play during breaks | Can't install games, need browser-based | Low - search/referral |
| **International Players** | Emerging markets | Hardware expensive, downloads on slow internet | Low - viral |
| **Lapsed Gamers** | Used to play, life got busy | Don't want to commit to downloads/updates | Medium |

#### Secondary Segments

| Segment | Profile | Entry Point |
|---------|---------|-------------|
| **Competitive Players** | Skill-focused, ranked play | Ranked mode, tournaments |
| **Streamers** | Content creators | Clip-worthy moments, challenges |
| **Retro Enthusiasts** | Love arena shooters (Quake, UT) | Nostalgia + accessibility |

### Competitive Landscape

#### Direct Competitors (Browser Shooters)

| Competitor | Approach | Strengths | Weaknesses |
|------------|----------|-----------|------------|
| **Krunker.io** | Simple browser FPS | Large player base, proven model | Basic graphics, dated feel |
| **Shell Shockers** | Casual egg FPS | Fun, casual | Niche, not competitive |
| **Shellshock.io** | Browser battle royale | BR mechanics | Performance issues |
| **1v1.LOL** | Building + shooting | Fortnite mechanics | Mobile-first |

#### Indirect Competitors (Traditional FPS)

| Competitor | Why They Matter |
|------------|-----------------|
| **Valorant** | Free-to-play, competitive FPS gold standard |
| **CS2** | Legacy esports, hardcore audience |
| **Apex Legends** | Movement mechanics, F2P model |
| **Call of Duty** | Mainstream benchmark |

#### Cloud Gaming (Emerging Competition)

| Service | Approach |
|---------|----------|
| **GeForce Now** | Stream any game, latency issues |
| **Xbox Cloud** | Game Pass in browser |
| **Luna** | Amazon's attempt |

#### Competitive Positioning Matrix

```
                      HIGH FIDELITY
                           │
         ┌─────────────────┼─────────────────┐
         │                 │                 │
         │  Cloud Gaming   │   FORGEGROUND   │
         │  (latency)      │      ★          │
         │                 │                 │
BARRIER ─┼─────────────────┼─────────────────┼── FRICTIONLESS
(install)│                 │                 │
         │  Valorant/CS2   │   Krunker.io    │
         │  (downloads)    │   (basic)       │
         │                 │                 │
         └─────────────────┼─────────────────┘
                           │
                      LOW FIDELITY
```

### Positioning & Differentiation

#### Core Positioning Statement

> For gamers who want competitive shooter gameplay without barriers, Forgeground is the only browser game that delivers 60fps arena action with physics manipulation weapons, proving that zero-download doesn't mean zero quality.

#### Key Differentiators

| Differentiator | Why It Matters | Proof Points |
|----------------|----------------|--------------|
| **Zero Download** | Play instantly, anywhere | Just open URL |
| **Physics Weapons** | Unique gameplay | Gravity, time, inertia manipulation |
| **60Hz Multiplayer** | Competitive-grade | Server-authoritative, client prediction |
| **Cross-Platform** | Any device with browser | PC, Mac, Linux, mobile |
| **No Gatekeepers** | No app store, no Steam | IPFS hosting option |
| **Instant Updates** | No download queues | Deploy = live |

#### Messaging Pillars

1. **"Click. Play. Frag."** - Zero friction
2. **"Browser gaming, AAA quality"** - Overcome expectations
3. **"Physics is your weapon"** - Unique mechanic
4. **"Gaming without walls"** - Accessibility

### SWOT Analysis

| Strengths | Weaknesses |
|-----------|------------|
| Zero download barrier | Browser limitations vs native |
| Unique physics weapons | Unknown brand |
| Cross-platform native | Small team |
| IPFS = censorship resistant | No AAA budget |

| Opportunities | Threats |
|---------------|---------|
| WebGPU adoption | AAA studios enter browser gaming |
| Cloud gaming fatigue | Krunker or similar innovates |
| Esports for accessible games | Browser performance hits ceiling |
| GameGames integration | Player attention fragmentation |

---

## II. Go-to-Market Strategy

### Launch Strategy

#### Phase 1: Core Beta (Current)

**Goal**: Nail the core gameplay loop

| Activity | Target | Success Metric |
|----------|--------|----------------|
| Core weapons | 5 standard + 2 physics | Balanced, fun |
| Multiplayer stability | 8 players/room | <100ms latency |
| Basic matchmaking | Quick play | <30s queue times |
| AI opponents | Practice mode | Playable offline |

#### Phase 2: Public Beta (Q2 2026)

**Goal**: Build player base, validate retention

| Activity | Target | Success Metric |
|----------|--------|----------------|
| Public launch | Open access | 10K first-month players |
| All 6 physics weapons | Unique gameplay | Positive feedback |
| Ranked mode | Competitive layer | 20% play ranked |
| Content creator program | Streamers | 50 creators |

#### Phase 3: Growth (Q3-Q4 2026)

**Goal**: Esports foundation, monetization

| Activity | Target | Success Metric |
|----------|--------|----------------|
| Tournament infrastructure | Brackets, spectating | Weekly events |
| Mobile controls | Expand TAM | 20% mobile players |
| Cosmetics system | Monetization | 5% purchase rate |
| GameGames integration | Wager on matches | Cross-product synergy |

### User Acquisition Channels

#### Channel Strategy (Priority Order)

| Channel | Strategy | CAC Target | Volume Potential |
|---------|----------|------------|------------------|
| **1. Gaming YouTube/TikTok** | Gameplay clips, "browser game??" | $0.50-1 | Very High |
| **2. Reddit** | r/games, r/fps, r/browsergames | $0.25-0.50 | High |
| **3. Streamer seeding** | Free keys, challenges | $1-3 | High |
| **4. SEO** | "browser fps", "no download shooter" | $0 | Medium |
| **5. Discord servers** | Gaming communities | $0.50 | Medium |
| **6. Paid UA (later)** | Performance marketing | $2-5 | High |

#### Viral Mechanics

| Mechanic | Implementation | Impact |
|----------|----------------|--------|
| **Share replay** | One-click clip sharing | Social proof |
| **Challenge friends** | Direct invite links | 1:1 acquisition |
| **Leaderboards** | Public ranking pages | SEO + competition |
| **Custom games** | Private lobbies | Group play |

#### Content Strategy

| Content Type | Frequency | Purpose |
|--------------|-----------|---------|
| Gameplay clips | Daily | Social sharing |
| Developer updates | Weekly | Community trust |
| Tournament VODs | Weekly | Esports positioning |
| "How we built X" technical | Monthly | Developer credibility |

### Distribution Strategy

#### Platform Strategy

| Platform | Priority | Implementation |
|----------|----------|----------------|
| **Web (Primary)** | Critical | forgeground.online |
| **IPFS Mirror** | High | Censorship-resistant backup |
| **PWA** | Medium | Installable web app |
| **Mobile Web** | Medium | Responsive + touch controls |
| **Discord Activity** | Low | In-Discord play |

#### Network Effects

```
Player invites friends → More players in matchmaking
         │
         ▼
Shorter queue times → Better experience
         │
         ▼
More retention → More content creation
         │
         ▼
Clips go viral → New player acquisition
         │
         ▼
(Cycle repeats)
```

### Partnership Strategy

#### Strategic Partnerships

| Partner Type | Target Partners | Value Exchange |
|--------------|-----------------|----------------|
| **Esports orgs** | Amateur leagues, collegiate | Tournament hosting |
| **Gaming hardware** | Peripheral brands | Sponsorship, tournaments |
| **Browser/tech** | Chrome, Cloudflare | Case study, distribution |
| **GameGames** | Internal | Wagering integration |

#### Content Creator Partnerships

| Tier | Approach | Budget Allocation |
|------|----------|-------------------|
| **Nano (1-10K)** | Free cosmetics, feature | $0 |
| **Micro (10-50K)** | Custom skins, shoutouts | $5K |
| **Mid (50-250K)** | Sponsored content | $20K |
| **Major (250K+)** | Long-term partnerships | $50K |

### Community Building

#### Community Channels

| Channel | Purpose | Target Size (Y1) |
|---------|---------|------------------|
| **Discord** | Primary hub, LFG, feedback | 15,000 |
| **Reddit** | r/Forgeground | 5,000 |
| **Twitter/X** | News, clips | 20,000 |
| **TikTok** | Clips, virality | 50,000 followers |

#### Competitive Programs

| Program | Description | Investment |
|---------|-------------|------------|
| **Weekly Tournaments** | Open brackets | $500/week prizes |
| **Monthly Championship** | Invite + qualifier | $2,500 prize pool |
| **Streamer Showdowns** | Creator events | $1,000 per event |
| **College League** | Esports clubs | Free hosting |

---

## III. Monetization Strategy

### Revenue Model

#### Primary: Cosmetics (F2P Model)

| Item Type | Price Range | Examples |
|-----------|-------------|----------|
| **Weapon Skins** | $2-10 | Visual effects, colors |
| **Character Skins** | $5-20 | Full character models |
| **Kill Effects** | $3-8 | Death animations |
| **Emotes** | $2-5 | Victory animations |

#### Battle Pass (Seasonal)

| Tier | Price | Contents |
|------|-------|----------|
| **Free Track** | $0 | Basic rewards, keeps players engaged |
| **Premium Track** | $10/season | Exclusive cosmetics, faster progression |

#### Tournament Entry

| Format | Entry Fee | Platform Cut |
|--------|-----------|--------------|
| **Daily Tournaments** | $1-5 | 10% |
| **Weekly Major** | $5-20 | 10% |
| **Monthly Championship** | $10-50 | 10% |

#### GameGames Integration Revenue

- Wagering on Forgeground matches via GameGames
- Revenue share on wagers
- Drives engagement for both products

### Pricing Strategy

#### Competitive Pricing Analysis

| Game | Cosmetic Range | Battle Pass |
|------|----------------|-------------|
| Valorant | $10-25 (premium) | $10 |
| Fortnite | $5-20 | $8 |
| Apex | $5-20 | $10 |
| **Forgeground** | $2-20 | $10 |

**Philosophy**: Price slightly below AAA because browser context = lower perceived value. Compensate with volume.

#### Monetization Timeline

| Phase | Focus | Target ARPU |
|-------|-------|-------------|
| **Beta** | Free, no monetization | $0 |
| **Launch** | Starter cosmetics | $1 |
| **Growth** | Battle Pass + shop | $5 |
| **Mature** | Full economy | $8 |

### Unit Economics

#### Player Economics

| Metric | Value | Notes |
|--------|-------|-------|
| **CAC** | $1 | Primarily organic |
| **Conversion to paying** | 5% | F2P standard |
| **ARPPU (paying users)** | $40/year | Battle Pass + cosmetics |
| **Blended ARPU** | $2/year | 5% × $40 |
| **LTV (2-year)** | $4 | |
| **LTV:CAC** | 4:1 | Sustainable |

#### Cohort Economics

| Metric | Month 1 | Month 3 | Month 6 | Month 12 |
|--------|---------|---------|---------|----------|
| Retention | 40% | 20% | 12% | 8% |
| Cumulative spend | $0.50 | $1.50 | $2.50 | $4 |

### Revenue Projections

#### Conservative Scenario

| Metric | 2026 Q2 | 2026 Q3 | 2026 Q4 | 2027 |
|--------|---------|---------|---------|------|
| **MAU** | 10K | 30K | 60K | 150K |
| **Paying users** | 500 | 1,500 | 3,000 | 7,500 |
| **Monthly revenue** | $5K | $15K | $30K | $75K |
| **Annual run rate** | $60K | $180K | $360K | $900K |

#### Optimistic Scenario (Viral Hit)

| Metric | 2026 | 2027 |
|--------|------|------|
| **MAU** | 250K | 1M |
| **Annual Revenue** | $750K | $4M |

### Path to Profitability

#### Cost Structure (Monthly at Scale)

| Category | Amount | % of Revenue |
|----------|--------|--------------|
| **Infrastructure** | $5K | 15% |
| **Team (3 FTE)** | $40K | 50% |
| **Marketing/UA** | $10K | 20% |
| **Tournaments** | $5K | 10% |
| **Other** | $5K | 10% |
| **Total** | $65K | |

#### Profitability Timeline

- **Break-even MAU**: ~40K (at $2 ARPU)
- **Target date**: Q4 2026
- **Path**: Cosmetics + Battle Pass + Tournament revenue

---

## IV. Esports Strategy

### Esports Vision

Build Forgeground as an **accessible esports title** - competitive enough for serious play, but accessible enough for anyone to participate.

### Competitive Infrastructure

#### Ranked System

| Tier | Rank | % of Players |
|------|------|--------------|
| Iron | I-IV | 20% |
| Bronze | I-IV | 25% |
| Silver | I-IV | 25% |
| Gold | I-IV | 15% |
| Platinum | I-IV | 10% |
| Diamond | I-III | 4% |
| Champion | - | 1% |

#### Tournament Circuit

| Event | Frequency | Prize Pool | Entry |
|-------|-----------|------------|-------|
| **Daily Cup** | Daily | $50 | Free |
| **Weekend Warrior** | Weekly | $500 | $5 |
| **Monthly Major** | Monthly | $2,500 | Qualifier |
| **Seasonal Championship** | Quarterly | $10,000 | Invite |

### Spectator Features

| Feature | Priority | Timeline |
|---------|----------|----------|
| **Spectator mode** | High | Q2 2026 |
| **Replay system** | High | Q2 2026 |
| **Caster tools** | Medium | Q3 2026 |
| **Betting integration** | Medium | Q3 2026 |

---

## V. Strategic Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Browser performance ceiling | Medium | High | WebGPU adoption, optimization |
| Player attention competition | High | Medium | Unique mechanics, community |
| AAA enters browser gaming | Low | High | First-mover, community moat |
| Monetization underperformance | Medium | Medium | Multiple revenue streams |
| Competitive balance issues | Medium | Medium | Frequent patches, community feedback |

---

## VI. Key Metrics to Track

### North Star Metric

**Daily Active Users (DAU)** - Measures engagement and habit formation

### Supporting Metrics

| Category | Metric | Target (2026 EOY) |
|----------|--------|-------------------|
| **Acquisition** | Weekly new players | 5,000 |
| **Engagement** | Sessions/player/week | 4 |
| **Retention** | D30 retention | 15% |
| **Monetization** | Conversion rate | 5% |
| **Revenue** | Monthly revenue | $30K |
| **Competitive** | Ranked participation | 25% of DAU |

---

*Last Updated: January 2026*
