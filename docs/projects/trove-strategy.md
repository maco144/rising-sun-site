# Trove Strategy

> Product strategy for the Spatial Puzzle Protocol for Digital Treasure

---

## Executive Summary

Trove is the **infrastructure layer for trustless conditional access** to digital value. Using zero-knowledge proofs and spatial puzzles inherited from Password Palace, Trove enables programmable release of assets without any intermediary — no escrow agents, no lawyers, just math.

**Strategic thesis**: Every conditional transfer of value (escrow, inheritance, contests, rewards) currently requires trust. ZK proofs eliminate that requirement. Whoever builds the best trustless conditional access protocol captures a massive horizontal market.

**The Three Phases**:
1. **Core Protocol** — Trustless Troves for individuals and developers
2. **Brand Campaigns** — B2B treasure hunts for marketing and engagement
3. **Conditional Access Infrastructure** — SDK/API for escrow, inheritance, prizes across Web3

---

## I. The Three-Phase Strategy

### Phase 1: Core Protocol

**Timeline**: Q1-Q2 2026
**Focus**: Ship the protocol, build creator community

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    PHASE 1: CORE PROTOCOL                                │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  HOW A TROVE WORKS                                                       │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                                                                  │   │
│  │  1. CREATE               2. LOCK                3. DISTRIBUTE   │   │
│  │  ┌──────────────┐      ┌──────────────┐      ┌──────────────┐  │   │
│  │  │ Design your  │      │ Deposit      │      │ Give pieces  │  │   │
│  │  │ spatial      │ ───► │ tokens/NFTs  │ ───► │ to intended  │  │   │
│  │  │ puzzle       │      │ into Trove   │      │ recipients   │  │   │
│  │  └──────────────┘      └──────────────┘      └──────────────┘  │   │
│  │                                                     │           │   │
│  │  4. SOLVE               5. VERIFY               6. CLAIM       │   │
│  │  ┌──────────────┐      ┌──────────────┐      ┌──────────────┐  │   │
│  │  │ Collect all  │      │ ZK proof     │      │ Winner       │  │   │
│  │  │ pieces +     │ ───► │ verifies     │ ───► │ receives     │  │   │
│  │  │ solve puzzle │      │ solution     │      │ contents     │  │   │
│  │  └──────────────┘      └──────────────┘      └──────────────┘  │   │
│  │                                                                  │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  TROVE TYPES                                                             │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐         │
│  │   SINGLE        │  │   MULTI-PIECE   │  │   TIME-LOCKED   │         │
│  │                 │  │                 │  │                 │         │
│  │ One puzzle,     │  │ Multiple pieces │  │ Unlocks after   │         │
│  │ first solver    │  │ needed to solve │  │ specific date   │         │
│  │ wins all        │  │ (collaboration) │  │ (inheritance)   │         │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘         │
│                                                                          │
│  KEY FEATURES                                                            │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │ • Spatial puzzles (Password Palace tech)                        │   │
│  │ • ZK verification (Halo2 — no one sees solution until solved)   │   │
│  │ • Multi-chain assets (Cosmos IBC)                               │   │
│  │ • Piece NFTs (tradeable access rights)                          │   │
│  │ • Hint system (monetization for creators)                       │   │
│  │ • $TROVE token (deflationary, 40% fee burn)                     │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

#### The ZK Architecture

What makes Trove trustless:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    ZERO-KNOWLEDGE VERIFICATION                           │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  TRADITIONAL ESCROW              TROVE                                   │
│  ──────────────────              ─────                                   │
│                                                                          │
│  Creator → Escrow Agent → Solver    Creator → Smart Contract → Solver   │
│               │                                    │                     │
│          Trust required                      Math only                   │
│          Can be bribed                       Can't be bribed             │
│          Can disappear                       Always available            │
│          Charges fees                        Minimal fees                │
│                                                                          │
│  HOW ZK PROOFS WORK                                                      │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                                                                  │   │
│  │  Creator sets puzzle: "Navigate to coordinates (X, Y, Z)"       │   │
│  │                              │                                   │   │
│  │                              ▼                                   │   │
│  │  Halo2 circuit creates verification key (solution hidden)       │   │
│  │                              │                                   │   │
│  │                              ▼                                   │   │
│  │  Solver submits proof: "I know the path" (doesn't reveal path)  │   │
│  │                              │                                   │   │
│  │                              ▼                                   │   │
│  │  Contract verifies proof → Releases funds                       │   │
│  │                                                                  │   │
│  │  Result: Solver proves knowledge without revealing solution     │   │
│  │          Contract releases funds without knowing solution       │   │
│  │          Creator can't cheat, solver can't cheat               │   │
│  │                                                                  │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Phase 1 Success Metrics

| Metric | Q1 2026 | Q2 2026 | Why It Matters |
|--------|---------|---------|----------------|
| Troves created | 500 | 2,000 | Protocol adoption |
| TVP (Total Value Protected) | $100K | $500K | Real usage |
| Creators | 100 | 500 | Supply side |
| Solvers | 1,000 | 5,000 | Demand side |
| SDK integrations | 5 | 15 | Developer adoption |

---

### Phase 2: Brand Campaigns

**Timeline**: Q2-Q4 2026
**Focus**: B2B treasure hunts for marketing and engagement

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    PHASE 2: BRAND CAMPAIGNS                              │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  WHY BRANDS USE TROVE                                                    │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                                                                  │   │
│  │  Traditional Campaigns          Trove Campaigns                  │   │
│  │  ────────────────────          ────────────────                  │   │
│  │  Low engagement (0.1% CTR)     High engagement (gamified)       │   │
│  │  Bot farms game it             ZK = proof of human effort       │   │
│  │  Forgettable                   Memorable experience             │   │
│  │  One-time impression           Viral sharing                    │   │
│  │  Trust us with prizes          Trustless, verifiable            │   │
│  │                                                                  │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  CAMPAIGN TYPES                                                          │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐         │
│  │   TREASURE      │  │   TOKEN         │  │   PRODUCT       │         │
│  │   HUNT          │  │   DISTRIBUTION  │  │   LAUNCH        │         │
│  │                 │  │                 │  │                 │         │
│  │ City-wide or    │  │ Gamified        │  │ Limited edition │         │
│  │ global puzzles  │  │ airdrops that   │  │ access via      │         │
│  │ with prizes     │  │ resist Sybils   │  │ puzzle solving  │         │
│  │                 │  │                 │  │                 │         │
│  │ Beverage brands │  │ Token launches  │  │ Fashion, tech,  │         │
│  │ Entertainment   │  │ NFT projects    │  │ gaming          │         │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘         │
│                                                                          │
│  EXAMPLE: TOKEN LAUNCH CAMPAIGN                                          │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                                                                  │   │
│  │  Project: $NEWTOKEN launching                                   │   │
│  │  Goal: Distribute 1M tokens to engaged community                │   │
│  │  Problem: Sybil attacks, bots claiming multiple airdrops        │   │
│  │                                                                  │   │
│  │  TROVE SOLUTION                                                 │   │
│  │  ┌───────────────────────────────────────────────────────────┐ │   │
│  │  │ • Create 1,000 Troves with 1,000 tokens each              │ │   │
│  │  │ • Each requires solving unique spatial puzzle              │ │   │
│  │  │ • Puzzles released in waves over 2 weeks                  │ │   │
│  │  │ • Hints available (generates engagement)                   │ │   │
│  │  │ • Community shares strategies, builds excitement           │ │   │
│  │  │ • Result: 10K+ engaged participants, zero bots            │ │   │
│  │  └───────────────────────────────────────────────────────────┘ │   │
│  │                                                                  │   │
│  │  Cost: $25K managed campaign                                    │   │
│  │  Value: $100K+ in earned media, engaged community              │   │
│  │                                                                  │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Campaign Service Tiers

| Tier | Price | Includes | Target Customer |
|------|-------|----------|-----------------|
| **DIY** | Protocol fees | Self-service tools, Trove Studio | Indie projects |
| **Starter** | $10K | Setup support, 10 Troves, basic analytics | Small brands |
| **Growth** | $50K | Full service, 100 Troves, influencer outreach | Mid-market |
| **Enterprise** | $100K+ | White-glove, unlimited Troves, custom dev | Major brands |

#### Phase 2 Success Metrics

| Metric | Q3 2026 | Q4 2026 | Why It Matters |
|--------|---------|---------|----------------|
| Brand campaigns | 5 | 15 | B2B validation |
| Campaign revenue | $75K | $200K | Business model |
| Campaign participants | 25K | 100K | Engagement proof |
| Repeat customers | 2 | 5 | Product-market fit |
| Case studies | 3 | 10 | Sales enablement |

---

### Phase 3: Conditional Access Infrastructure

**Timeline**: Q4 2026 → 2027+
**Focus**: Become the infrastructure for conditional value release

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    PHASE 3: INFRASTRUCTURE LAYER                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  TROVE AS INFRASTRUCTURE                                                 │
│                                                                          │
│                         ┌─────────────────┐                             │
│                         │  TROVE PROTOCOL │                             │
│                         └────────┬────────┘                             │
│                                  │                                       │
│       ┌──────────────────────────┼──────────────────────────┐           │
│       │                          │                          │           │
│       ▼                          ▼                          ▼           │
│  ┌─────────────┐          ┌─────────────┐          ┌─────────────┐     │
│  │    SDK      │          │    API      │          │  MODULES    │     │
│  │             │          │             │          │             │     │
│  │ Embed Troves│          │ Create/     │          │ Specialized │     │
│  │ in any app  │          │ manage via  │          │ use cases   │     │
│  │             │          │ REST/GraphQL│          │             │     │
│  └─────────────┘          └─────────────┘          └─────────────┘     │
│       │                          │                          │           │
│       ▼                          ▼                          ▼           │
│  ┌─────────────┐          ┌─────────────┐          ┌─────────────┐     │
│  │ Web3 games  │          │ Escrow      │          │ Inheritance │     │
│  │ NFT markets │          │ platforms   │          │ services    │     │
│  │ DeFi apps   │          │ Marketplaces│          │ DAO treasury│     │
│  └─────────────┘          └─────────────┘          └─────────────┘     │
│                                                                          │
│  USE CASE MODULES                                                        │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                                                                  │   │
│  │  ESCROW MODULE             INHERITANCE MODULE                    │   │
│  │  ─────────────             ──────────────────                    │   │
│  │  • P2P transactions        • Time-locked release                │   │
│  │  • Milestone payments      • Dead man's switch                  │   │
│  │  • Freelancer contracts    • Multi-beneficiary                  │   │
│  │  • Real estate deposits    • Proof-of-life triggers             │   │
│  │                                                                  │   │
│  │  PRIZE MODULE              GOVERNANCE MODULE                     │   │
│  │  ────────────              ─────────────────                     │   │
│  │  • GameGames integration   • Conditional treasury               │   │
│  │  • Tournament prizes       • Milestone unlocks                  │   │
│  │  • CTF rewards             • KPI-based releases                 │   │
│  │  • Bounty programs         • Multi-sig alternatives             │   │
│  │                                                                  │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Rising Sun Ecosystem Integration

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    TROVE IN THE RISING SUN ECOSYSTEM                     │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌───────────────────┐                                                  │
│  │  PASSWORD PALACE  │──────► Shared spatial puzzle technology         │
│  │                   │──────► Identity verification for Trove access   │
│  └───────────────────┘                                                  │
│            │                                                             │
│            ▼                                                             │
│  ┌───────────────────┐                                                  │
│  │      TROVE        │                                                  │
│  │                   │                                                  │
│  │  Conditional      │                                                  │
│  │  access layer     │                                                  │
│  └───────────────────┘                                                  │
│            │                                                             │
│            ▼                                                             │
│  ┌───────────────────┐         ┌───────────────────┐                   │
│  │    GAMEGAMES      │◄───────►│   FORGEGROUND     │                   │
│  │                   │         │                   │                   │
│  │  Tournament       │         │  Prize pools for  │                   │
│  │  prize pools      │         │  competitions     │                   │
│  │  via Trove        │         │                   │                   │
│  └───────────────────┘         └───────────────────┘                   │
│                                                                          │
│  INTEGRATION EXAMPLES                                                    │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                                                                  │   │
│  │  GameGames Tournament:                                          │   │
│  │  • $10K prize pool locked in Trove                              │   │
│  │  • Winner receives piece automatically                          │   │
│  │  • Solve puzzle (simple for winner) to claim                    │   │
│  │  • Trustless, no GG touching funds                              │   │
│  │                                                                  │   │
│  │  Forgeground Season Rewards:                                    │   │
│  │  • Top 100 players get Trove pieces                             │   │
│  │  • Collaborative puzzle (community event)                       │   │
│  │  • Shared treasure chest unlocked together                      │   │
│  │                                                                  │   │
│  │  Password Palace Premium:                                       │   │
│  │  • Unlock premium features via Trove puzzle                     │   │
│  │  • Gamified onboarding experience                               │   │
│  │                                                                  │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Infrastructure Products

| Product | Description | Pricing | Target Customer |
|---------|-------------|---------|-----------------|
| **Trove SDK** | Embed Troves in any app | Free + protocol fees | Web3 developers |
| **Trove API** | REST/GraphQL for Trove ops | $100/mo + fees | Platforms |
| **Escrow Module** | Specialized escrow Troves | 0.5% of value | Marketplaces |
| **Inheritance Module** | Time-locked + dead man's switch | $10/Trove/year | Estate planning |
| **Prize Module** | GameGames/tournament integration | 1% of prize | Gaming platforms |

#### Phase 3 Success Metrics

| Metric | 2027 H1 | 2027 H2 | Why It Matters |
|--------|---------|---------|----------------|
| SDK integrations | 25 | 75 | Platform adoption |
| API customers | 10 | 30 | B2B revenue |
| Module usage | 5K Troves | 20K Troves | Specialized value |
| 3rd party TVP | $2M | $10M | Infrastructure status |
| Total revenue | $200K | $500K | Business scale |

---

## II. Market & Competition

### Market Overview

#### Total Addressable Market (TAM)

| Market | Size (2026) | Growth Rate |
|--------|-------------|-------------|
| **Escrow Services** | $68B | 8% CAGR |
| **Digital Inheritance** | $3B | 15% CAGR |
| **Promotional/Prizes** | $48B | 6% CAGR |
| **NFT/Digital Assets** | $25B | 25% CAGR |

**Combined TAM**: ~$144B globally

#### Serviceable Addressable Market (SAM)

Focusing on:
- Crypto-native escrow/trust needs
- NFT and token distribution
- Brand engagement campaigns (gamified)
- Digital asset inheritance

**SAM**: ~$15B (crypto-native + progressive brands)

#### Serviceable Obtainable Market (SOM)

Year 1-2 realistic capture:
- 25,000 Troves created
- Average value per Trove: $200
- Protocol fees: ~$100K

**SOM (2027)**: $500K protocol revenue

### Target Segments

#### Primary Segments

| Segment | Profile | Pain Points | Use Case |
|---------|---------|-------------|----------|
| **Crypto Projects** | Token launches, airdrops | Sybil attacks, engagement | Gamified distribution |
| **Brands** | Marketing campaigns | Low engagement, bot farms | Treasure hunt campaigns |
| **Estate Planners** | Crypto inheritance | Centralized services fail | Time-locked inheritance |
| **P2P Transactions** | Freelancers, commerce | Platform fees, trust issues | Trustless escrow |

#### Secondary Segments

| Segment | Profile | Entry Point |
|---------|---------|-------------|
| **CTF Organizers** | Security competitions | Prize distribution |
| **Gaming** | Tournaments, rewards | GameGames integration |
| **Content Creators** | Gated content | Unlock via puzzle |

### Competitive Landscape

#### Direct Competitors (Conditional Access)

| Competitor | Approach | Strengths | Weaknesses |
|------------|----------|-----------|------------|
| **Safe (Gnosis)** | Multisig wallets | Established, trusted | Not conditional, requires signers |
| **Llama** | DAO treasury management | Enterprise focus | Complex, not gamified |
| **Sablier** | Token streaming | Time-based release | Only time-based, no puzzles |
| **Superfluid** | Programmable cashflows | DeFi native | Not conditional access |

#### Indirect Competitors

| Competitor | Why They Matter |
|------------|-----------------|
| **Escrow.com** | Traditional escrow benchmark |
| **Trust & Will** | Digital inheritance |
| **Galxe** | Campaign/quest platforms |
| **Layer3** | Web3 quests |

#### Competitive Positioning Matrix

```
                      TRUSTLESS
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
        │  Multisigs      │   TROVE         │
        │  (n-of-m)       │      ★          │
        │                 │                 │
SIMPLE ─┼─────────────────┼─────────────────┼── PROGRAMMABLE
        │                 │                 │
        │  Escrow.com     │   Smart contract│
        │                 │   escrow        │
        │                 │                 │
        └─────────────────┼─────────────────┘
                          │
                      TRUSTED
```

### Positioning & Differentiation

#### Core Positioning Statement

> For anyone who needs to conditionally release digital value, Trove is the only protocol that combines spatial puzzles with zero-knowledge proofs, enabling trustless treasure hunts, escrow, inheritance, and contests without any intermediary.

#### Key Differentiators

| Differentiator | Why It Matters | Proof Points |
|----------------|----------------|--------------|
| **Spatial Puzzles** | Engaging, memorable, shareable | Password Palace technology |
| **ZK Verification** | No one sees the solution until solved | Halo2 proofs |
| **Piece Distribution** | Flexible access control | NFT pieces, conditions |
| **Deflationary Token** | Aligned incentives | 40% fee burn |
| **Cosmos Ecosystem** | IBC connectivity | Cross-chain value |
| **Own Chain** | Optimized for use case | Trove-specific modules |

#### Messaging Pillars

1. **"Digital treasure, trustlessly secured"** - Core value
2. **"The first to solve it wins"** - Gamification
3. **"No lawyers, no escrow agents, just math"** - Trust architecture
4. **"Treasure hunts for the internet age"** - Consumer appeal

### SWOT Analysis

| Strengths | Weaknesses |
|-----------|------------|
| Novel product (no direct competitor) | Requires ZK understanding |
| Password Palace tech synergy | Cold start (network effects needed) |
| Engaging gamification | Complex to explain |
| Deflationary tokenomics | Crypto-native only initially |

| Opportunities | Threats |
|---------------|---------|
| Brand campaign market huge | Larger platform adds feature |
| Inheritance is underserved | Regulatory scrutiny |
| Rising Sun ecosystem | ZK technology moves fast |
| NFT distribution evolution | Token may not gain traction |

---

## III. Go-to-Market Strategy

### Launch Strategy

#### Phase 1: Core Protocol (Q1-Q2 2026)

**Goal**: Ship working product, early adopters

| Activity | Target | Success Metric |
|----------|--------|----------------|
| Testnet launch | Public | 1,000 test Troves |
| SDK release | TypeScript | 10 integrations |
| Documentation | Comprehensive | <5 support questions/day |
| Early creator program | 50 power users | 500 Troves created |

#### Phase 2: Mainnet + Token (Q3 2026)

**Goal**: Live value, token distribution

| Activity | Target | Success Metric |
|----------|--------|----------------|
| Mainnet launch | $TROVE live | Smooth launch |
| First brand campaign | 1 major brand | 10K participants |
| Community Chest | Gamified pool | 1,000 solvers |
| IBC integration | Cosmos Hub | Cross-chain flow |

#### Phase 3: Scale (Q4 2026 - 2027)

**Goal**: Growth and ecosystem

| Activity | Target | Success Metric |
|----------|--------|----------------|
| Trove Hunt app | Consumer mobile | 50K downloads |
| Trove Studio | Creator tools | 5,000 creators |
| 10+ brand campaigns | Revenue stream | $100K campaign revenue |
| Validator network | Decentralization | 50 validators |

### User Acquisition Channels

#### Channel Strategy (Priority Order)

| Channel | Strategy | CAC Target | Volume Potential |
|---------|----------|------------|------------------|
| **1. Brand partnerships** | B2B campaigns | $0 (they pay us) | Medium per deal, high value |
| **2. Crypto Twitter** | Treasure hunt memes | $5-10 | High |
| **3. NFT communities** | Collection distribution | $3-5 | Medium |
| **4. Cross-promote (PP, GG)** | Ecosystem | $0 | Medium |
| **5. Developer relations** | SDK adoption | $10-20 | Low volume, high leverage |
| **6. Content marketing** | Tutorials, use cases | $5-10 | Medium |

#### Growth Loops

```
Brand runs Trove campaign
         │
         ▼
Users discover Trove to participate
         │
         ▼
Some users create their own Troves
         │
         ▼
Friends invited to solve
         │
         ▼
More users, more Trove awareness
         │
         ▼
More brands see engagement
         │
         └───► (Cycle continues)
```

### Distribution Strategy

#### Platform Strategy

| Platform | Priority | Approach |
|----------|----------|----------|
| **Web App (Trove Studio)** | Primary | Create, manage Troves |
| **Mobile App (Trove Hunt)** | High | Consumer solver experience |
| **SDK (TypeScript)** | High | Developer integration |
| **CLI** | Medium | Power users |
| **Telegram Bot** | Medium | Easy access |

#### B2B vs B2C Balance

| Channel | Revenue Contribution | Strategic Value |
|---------|---------------------|-----------------|
| **B2B (Brands)** | 60% | High revenue, case studies |
| **B2C (Individuals)** | 20% | Volume, network effects |
| **Protocol (Developers)** | 20% | Ecosystem, long-term |

### Partnership Strategy

#### Brand Partnerships (Primary Revenue)

| Partner Type | Target Brands | Value Proposition |
|--------------|--------------|-------------------|
| **Crypto Projects** | New token launches | Gamified, fair distribution |
| **Gaming Brands** | Game studios, esports | Engagement, prizes |
| **Luxury/Premium** | Limited releases | Exclusive access |
| **FMCG** | Mass-market campaigns | Viral engagement |

#### Campaign Examples

| Brand Type | Campaign | Trove Contents |
|------------|----------|----------------|
| Token Launch | City-wide treasure hunt | 100,000 tokens |
| Game Studio | In-game ARG | Exclusive skins, early access |
| Fashion | Limited drop | NFT + physical product |
| Beverage | Summer campaign | Concert tickets, merch |

#### Ecosystem Partnerships

| Partner Type | Target | Integration |
|--------------|--------|-------------|
| **Password Palace** | Internal | Shared spatial engine |
| **GameGames** | Internal | Tournament prizes |
| **Cosmos chains** | Hub, Osmosis | IBC token flow |
| **NFT marketplaces** | Stargaze | Piece trading |

### Community Building

#### Community Strategy

| Channel | Purpose | Target Size (Y1) |
|---------|---------|------------------|
| **Discord** | Creators, solvers, support | 10,000 |
| **Twitter/X** | Announcements, treasure alerts | 30,000 |
| **Telegram** | Hunt coordination | 5,000 |
| **Reddit** | r/TroveHunt | 3,000 |

#### Engagement Programs

| Program | Description | Reward |
|---------|-------------|--------|
| **Hunter Leaderboard** | Most Troves solved | Monthly $TROVE prizes |
| **Creator Rewards** | Best Troves created | Featured + $TROVE |
| **Bug Bounty** | Security research | $1K-$50K |
| **Ambassador** | Regional leads | $TROVE allocation |

---

## IV. Monetization Strategy

### Revenue Model

#### Protocol Fees

| Action | Fee | Distribution |
|--------|-----|--------------|
| Create Trove | 0.0001 + 0.00001/slot $TROVE | 40% burn, 40% chest, 20% foundation |
| Solve Trove | 0.0001 $TROVE | Same |
| Transfer Piece | 0.0001 $TROVE | Same |
| Mint Piece NFT | 0.001 $TROVE | Same |
| Buy Hint | 0.0005 $TROVE | Creator gets 50% |

#### B2B Campaign Revenue

| Service | Pricing Model | Range |
|---------|---------------|-------|
| **Self-Service** | Fee only | Protocol fees |
| **Managed Campaign** | Fixed + success fee | $10K-$100K |
| **Enterprise** | Custom | $50K-$500K |

#### $TROVE Token Value Capture

| Mechanism | Effect |
|-----------|--------|
| **Fee burn (40%)** | Deflationary pressure |
| **Staking for validators** | Supply lock |
| **Governance** | Utility demand |
| **Piece minting** | Usage demand |

### Pricing Strategy

#### Protocol Fee Philosophy

1. **Low enough to encourage usage** - Micro-fees shouldn't deter creation
2. **High enough for token value** - Burns must be meaningful
3. **Creator-aligned** - Hint revenue shares

#### Campaign Pricing

| Tier | Price | Includes |
|------|-------|----------|
| **DIY** | Protocol fees only | Self-service tools |
| **Starter** | $10K | Setup support, basic promotion |
| **Growth** | $50K | Full service, influencer outreach |
| **Enterprise** | $100K+ | White-glove, custom development |

### Unit Economics

#### Per-Trove Economics

| Metric | Value | Notes |
|--------|-------|-------|
| **Avg Trove value** | $200 | Mix of high/low |
| **Protocol fee** | ~$0.10 | Creation + solve |
| **Campaign Troves (branded)** | 10,000 | Per campaign |
| **Campaign revenue** | $1,000+ | Fees + services |

#### Token Economics

| Metric | Value | Notes |
|--------|-------|-------|
| **Total Supply** | 1B $TROVE | Fixed |
| **Annual burn (Y1)** | ~10M | Estimated usage |
| **Effective inflation** | -1% | Deflationary |
| **Validator rewards** | From treasury | Non-inflationary |

### Revenue Projections

#### Conservative Scenario

| Metric | 2026 Q3 | 2026 Q4 | 2027 H1 | 2027 H2 |
|--------|---------|---------|---------|---------|
| **Troves Created** | 1,000 | 5,000 | 15,000 | 40,000 |
| **Trove Value (total)** | $200K | $1M | $3M | $8M |
| **Protocol Fees** | $1K | $5K | $15K | $40K |
| **Campaign Revenue** | $20K | $50K | $100K | $200K |
| **Total Revenue** | $21K | $55K | $115K | $240K |

#### Optimistic Scenario (Major Brand Adoption)

| Metric | 2026 | 2027 |
|--------|------|------|
| **Troves Created** | 25,000 | 250,000 |
| **Campaign Revenue** | $200K | $2M |
| **Total Revenue** | $275K | $2.5M |

### Path to Profitability

#### Cost Structure (Monthly at Scale)

| Category | Amount | % of Revenue |
|----------|--------|--------------|
| **Infrastructure (chain)** | $10K | 20% |
| **Team (4 FTE)** | $50K | 50% |
| **Marketing** | $10K | 15% |
| **Validator incentives** | $5K | 10% |
| **Legal** | $5K | 10% |
| **Total** | $80K | |

#### Profitability Timeline

- **Break-even**: ~$100K monthly revenue
- **Target date**: Q2 2027
- **Path**: Brand campaigns + protocol fee growth

---

## V. Token Strategy

### $TROVE Token Design

#### Utility

| Use Case | Description |
|----------|-------------|
| **Protocol fees** | All actions require $TROVE |
| **Staking** | Validators stake to participate |
| **Governance** | Vote on protocol parameters |
| **Piece minting** | Mint NFT pieces |
| **Hint purchase** | Buy hints for puzzles |

#### Distribution

| Allocation | % | Vesting |
|------------|---|---------|
| **Community Chest** | 30% | Earned via solving |
| **Foundation** | 20% | 4-year unlock |
| **Team** | 15% | 4-year cliff+vest |
| **Investors** | 15% | 2-year vest |
| **Ecosystem Grants** | 10% | As needed |
| **Liquidity** | 10% | At launch |

#### Value Accrual

```
Usage grows
    │
    ▼
More fees collected
    │
    ├──► 40% burned → Supply decreases
    │
    ├──► 40% to Chest → Drives more usage (gamification)
    │
    └──► 20% to Foundation → Ecosystem development

Result: Usage directly reduces supply, increasing scarcity
```

### Launch Strategy

#### Phase 1: Testnet ($TROVE on testnet)
- Free tokens for testing
- No value, pure utility testing

#### Phase 2: Genesis Launch
- Initial distribution via airdrop + early supporters
- DEX liquidity on Osmosis
- Validator set activated

#### Phase 3: Exchange Listings
- CEX listings based on traction
- Additional DEX pools
- Market making partnerships

---

## VI. Strategic Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| ZK proof vulnerabilities | Low | Critical | Audits, formal verification, gradual rollout |
| Token regulatory issues | Medium | High | Token not required for core usage, legal structure |
| Brand adoption slower | Medium | High | Strong B2C to demonstrate demand |
| Competition from bigger players | Medium | Medium | First-mover, technical moat |
| Puzzle solving bots | Medium | Medium | Rate limiting, CAPTCHA options |

---

## VII. Key Metrics to Track

### North Star Metric

**Total Value Protected (TVP)** - Total $ value in active Troves

### Supporting Metrics

| Category | Metric | Target (2026 EOY) |
|----------|--------|-------------------|
| **Growth** | Troves created | 10,000 |
| **Value** | TVP | $2M |
| **Engagement** | Troves solved/month | 2,000 |
| **B2B** | Brand campaigns | 10 |
| **Token** | $TROVE burned | 5M tokens |
| **Network** | Active validators | 30 |

---

*Last Updated: January 2026*
