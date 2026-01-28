# Rising Sun Strategy

> Product strategy for the Spatial Communication Protocol

---

## Executive Summary

Rising Sun is **foundational infrastructure for consent-based communication**. Using spatial memory for identity and Merkle trees for world state, Rising Sun enables communication where history is opt-in, identity is self-sovereign, and proof requires consent.

**Strategic thesis**: Every communication platform today assumes permanent history and centralized identity. Rising Sun inverts both assumptions. Whoever builds the best consent-based communication infrastructure captures the privacy-conscious segment of messaging, collaboration, and identity.

**The Three Phases**:
1. **Protocol & SDK** — Core infrastructure for developers
2. **Consumer Apps** — End-user applications built on the protocol
3. **Ecosystem Foundation** — Identity and communication layer for Rising Sun products

---

## I. The Three-Phase Strategy

### Phase 1: Protocol & SDK

**Timeline**: Q1-Q2 2026
**Focus**: Ship robust protocol, developer adoption

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    PHASE 1: PROTOCOL & SDK                               │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  CORE PRIMITIVES                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                                                                  │   │
│  │  SPATIAL IDENTITY          WORLD STATE           RECEIPTS       │   │
│  │  ┌──────────────┐      ┌──────────────┐      ┌──────────────┐  │   │
│  │  │ 3D spatial   │      │ Sparse       │      │ Cryptographic│  │   │
│  │  │ arrangement  │ ───► │ Merkle Tree  │ ───► │ proof of     │  │   │
│  │  │ = identity   │      │ of regions   │      │ presence     │  │   │
│  │  └──────────────┘      └──────────────┘      └──────────────┘  │   │
│  │                                                                  │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  REGION TYPES                                                            │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐         │
│  │     HOME        │  │    CHANNEL      │  │     TROVE       │         │
│  │                 │  │                 │  │                 │         │
│  │ Private space   │  │ Real-time chat  │  │ Multi-party     │         │
│  │ Owner only      │  │ Ephemeral       │  │ unlock          │         │
│  │ Permanent       │  │ E2E encrypted   │  │ Piece-based     │         │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘         │
│                                                                          │
│  KEY FEATURES                                                            │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │ • No accounts — identity IS spatial memory                      │   │
│  │ • No stored passwords — nothing to leak                         │   │
│  │ • Opt-in history — receipts kept by users, not servers          │   │
│  │ • E2E encryption — X25519 + ChaCha20-Poly1305                   │   │
│  │ • Merkle proofs — self-validating, no trust required            │   │
│  │ • P2P ready — WebRTC for serverless operation                   │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

#### The Consent Architecture

What makes Rising Sun different:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    CONSENT-BASED COMMUNICATION                           │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  TRADITIONAL PLATFORMS              RISING SUN                           │
│  ────────────────────              ──────────                            │
│                                                                          │
│  Platform stores everything         World only knows current state       │
│  History is permanent               History requires receipts            │
│  Identity = account + password      Identity = spatial knowledge         │
│  Platform can prove you were there  Only YOU can prove you were there    │
│  Subpoena gets your history         No history to subpoena               │
│                                                                          │
│  HOW RECEIPTS WORK                                                       │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                                                                  │   │
│  │  Alice sends message to Bob in #general                         │   │
│  │                              │                                   │   │
│  │                              ▼                                   │   │
│  │  World state updates (message exists NOW)                       │   │
│  │                              │                                   │   │
│  │         ┌────────────────────┼────────────────────┐             │   │
│  │         ▼                    ▼                    ▼             │   │
│  │  Alice generates       Bob generates        Server forgets      │   │
│  │  receipt (optional)    receipt (optional)   after delivery      │   │
│  │         │                    │                                   │   │
│  │         ▼                    ▼                                   │   │
│  │  Alice can prove       Bob can prove        No third party      │   │
│  │  she sent it           he received it       can prove anything  │   │
│  │                                                                  │   │
│  │  RESULT: History exists only where both parties consent         │   │
│  │                                                                  │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Phase 1 Success Metrics

| Metric | Q1 2026 | Q2 2026 | Why It Matters |
|--------|---------|---------|----------------|
| SDK downloads | 500 | 2,000 | Developer interest |
| Active servers | 10 | 50 | Production usage |
| Regions created | 1,000 | 10,000 | Protocol adoption |
| Test coverage | 90% | 95% | Reliability |
| Documentation pages | 20 | 50 | Developer experience |

---

### Phase 2: Consumer Apps

**Timeline**: Q2-Q4 2026
**Focus**: End-user applications demonstrating the protocol

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    PHASE 2: CONSUMER APPS                                │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  APP 1: RISING SUN CHAT                                                  │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                                                                  │   │
│  │  Privacy-first messaging with opt-in history                    │   │
│  │                                                                  │   │
│  │  • Spatial identity (no phone number, no email)                 │   │
│  │  • E2E encrypted by default                                     │   │
│  │  • Messages disappear unless you keep receipts                  │   │
│  │  • Prove you received a message (or didn't)                     │   │
│  │  • Group chats with consent-based history                       │   │
│  │                                                                  │   │
│  │  TARGET: Privacy advocates, journalists, activists              │   │
│  │                                                                  │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  APP 2: RISING SUN SPACES                                                │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                                                                  │   │
│  │  Collaborative spaces with cryptographic presence               │   │
│  │                                                                  │   │
│  │  • Create rooms for teams, communities, events                  │   │
│  │  • Prove attendance without surveillance                        │   │
│  │  • Forum-style discussions with permanent or ephemeral posts    │   │
│  │  • Multi-party Troves for group access control                  │   │
│  │                                                                  │   │
│  │  TARGET: Remote teams, DAOs, communities                        │   │
│  │                                                                  │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  APP 3: RISING SUN IDENTITY                                              │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                                                                  │   │
│  │  Self-sovereign identity without intermediaries                 │   │
│  │                                                                  │   │
│  │  • Create identity from spatial memory                          │   │
│  │  • Export receipts as verifiable credentials                    │   │
│  │  • Prove membership, attendance, or participation               │   │
│  │  • No identity provider can lock you out                        │   │
│  │                                                                  │   │
│  │  TARGET: Web3 users, privacy-conscious individuals              │   │
│  │                                                                  │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Phase 2 Success Metrics

| Metric | Q3 2026 | Q4 2026 | Why It Matters |
|--------|---------|---------|----------------|
| Chat app users | 1,000 | 10,000 | Consumer validation |
| Messages sent | 50K | 500K | Engagement |
| Receipts generated | 10K | 100K | Feature adoption |
| Spaces created | 100 | 1,000 | Community usage |
| Identity exports | 500 | 5,000 | Credential adoption |

---

### Phase 3: Ecosystem Foundation

**Timeline**: Q4 2026 → 2027+
**Focus**: Become the identity and communication layer for Rising Sun products

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    PHASE 3: ECOSYSTEM FOUNDATION                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  RISING SUN AS INFRASTRUCTURE                                            │
│                                                                          │
│                    ┌─────────────────────┐                              │
│                    │    RISING SUN       │                              │
│                    │    PROTOCOL         │                              │
│                    └──────────┬──────────┘                              │
│                               │                                          │
│       ┌───────────────────────┼───────────────────────┐                 │
│       │                       │                       │                 │
│       ▼                       ▼                       ▼                 │
│  ┌─────────────┐        ┌─────────────┐        ┌─────────────┐         │
│  │  PASSWORD   │        │   TROVE     │        │  GAMEGAMES  │         │
│  │  PALACE     │        │             │        │             │         │
│  │             │        │             │        │             │         │
│  │ Shared      │        │ Piece       │        │ Player      │         │
│  │ spatial     │        │ distribution│        │ identity    │         │
│  │ primitives  │        │ via regions │        │ via spatial │         │
│  └─────────────┘        └─────────────┘        └─────────────┘         │
│                                                                          │
│  INTEGRATION BENEFITS                                                    │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                                                                  │   │
│  │  UNIFIED IDENTITY                                                │   │
│  │  • One spatial identity across all Rising Sun products          │   │
│  │  • No separate accounts for each service                        │   │
│  │  • Receipts portable between products                           │   │
│  │                                                                  │   │
│  │  SHARED COMMUNICATION                                            │   │
│  │  • Trove pieces distributed via Rising Sun regions              │   │
│  │  • GameGames match coordination in channels                     │   │
│  │  • Password Palace community in forums                          │   │
│  │                                                                  │   │
│  │  CONSENT EVERYWHERE                                              │   │
│  │  • Opt-in history for all interactions                          │   │
│  │  • User-controlled proof of participation                       │   │
│  │  • No platform can surveil across products                      │   │
│  │                                                                  │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Phase 3 Success Metrics

| Metric | 2027 H1 | 2027 H2 | Why It Matters |
|--------|---------|---------|----------------|
| Cross-product identities | 10K | 50K | Ecosystem cohesion |
| Ecosystem integrations | 3 | 5 | Product synergy |
| Third-party SDK users | 25 | 100 | Platform status |
| Receipts across products | 500K | 2M | Feature stickiness |

---

## II. Market & Competition

### Market Overview

#### Target Markets

| Market | Size (2026) | Growth | Rising Sun Opportunity |
|--------|-------------|--------|------------------------|
| **Secure Messaging** | $8B | 12% CAGR | Privacy-first alternative |
| **Identity Management** | $15B | 14% CAGR | Self-sovereign identity |
| **Collaboration Tools** | $45B | 10% CAGR | Consent-based workspaces |
| **Web3 Identity** | $2B | 35% CAGR | Spatial identity primitive |

**Combined TAM**: ~$70B

#### Serviceable Addressable Market (SAM)

Focusing on:
- Privacy-conscious messaging users
- Self-sovereign identity adopters
- Web3 collaboration tools
- Developer infrastructure

**SAM**: ~$5B

### Competitive Landscape

#### Messaging Competitors

| Competitor | Approach | Strengths | Weaknesses |
|------------|----------|-----------|------------|
| **Signal** | E2E encryption | Trusted, simple | Still stores metadata, requires phone |
| **Telegram** | Cloud + optional E2E | Features, scale | Not private by default |
| **Matrix** | Federated, E2E | Decentralized | Complex, stores history |
| **Session** | Decentralized, no phone | No metadata | Limited features |

#### Identity Competitors

| Competitor | Approach | Strengths | Weaknesses |
|------------|----------|-----------|------------|
| **ENS** | Blockchain naming | Established | Just names, not full identity |
| **Ceramic** | Decentralized data | Developer-friendly | Complex, stores data |
| **Spruce/Sign-in with Ethereum** | Wallet auth | Simple | Wallet-dependent |

#### Competitive Positioning

```
                    DECENTRALIZED
                         │
       ┌─────────────────┼─────────────────┐
       │                 │                 │
       │  Matrix         │   RISING SUN    │
       │  Session        │       ★         │
       │                 │                 │
STORES ─┼─────────────────┼─────────────────┼── FORGETS
HISTORY │                 │                 │   BY DEFAULT
       │  Signal         │   (empty        │
       │  Telegram       │    quadrant)    │
       │                 │                 │
       └─────────────────┼─────────────────┘
                         │
                    CENTRALIZED
```

**Rising Sun occupies a unique position**: decentralized AND forgets by default.

### Positioning & Differentiation

#### Core Positioning Statement

> For privacy-conscious communicators who need to control their digital history, Rising Sun is the only protocol where identity comes from spatial memory and history requires consent, enabling communication that platforms can't surveil and courts can't subpoena.

#### Key Differentiators

| Differentiator | Why It Matters | Proof Points |
|----------------|----------------|--------------|
| **Opt-in history** | Only users decide what's remembered | Receipt system |
| **Spatial identity** | No phone, email, or third party | createSelf() from objects |
| **Consent-based memory** | Both parties must keep receipts | Mutual receipt protocol |
| **Self-validating proofs** | No trust required | Merkle proofs |
| **No metadata** | Server forgets after delivery | Ephemeral world state |

---

## III. Go-to-Market Strategy

### Launch Strategy

#### Phase 1: Developer Launch (Q1-Q2 2026)

| Activity | Target | Success Metric |
|----------|--------|----------------|
| SDK release (TypeScript) | npm package | 2,000 downloads |
| Documentation site | Comprehensive guides | <5 support questions/day |
| Example apps | 5 reference implementations | Fork count |
| Developer Discord | Community support | 500 members |

#### Phase 2: Consumer Beta (Q3 2026)

| Activity | Target | Success Metric |
|----------|--------|----------------|
| Chat app beta | Privacy enthusiasts | 1,000 DAU |
| Spaces beta | Remote teams | 100 active spaces |
| Product Hunt launch | Tech audience | Top 5 of day |
| Press coverage | Privacy/tech media | 10 articles |

#### Phase 3: Ecosystem Integration (Q4 2026+)

| Activity | Target | Success Metric |
|----------|--------|----------------|
| Password Palace integration | Shared identity | Seamless auth |
| Trove integration | Piece distribution | Channel-based pieces |
| GameGames integration | Match coordination | In-game chat |

### User Acquisition Channels

| Channel | Strategy | CAC Target | Volume |
|---------|----------|------------|--------|
| **1. Privacy communities** | Reddit, HN, Twitter | $0 (organic) | Medium |
| **2. Developer relations** | SDK adoption | $10-20 | Low volume, high leverage |
| **3. Cross-promote (ecosystem)** | PP, Trove, GG users | $0 | Medium |
| **4. Press/PR** | Privacy angle | $5-10 | Medium |
| **5. Web3 communities** | DAOs, NFT projects | $5-10 | Medium |

### Partnership Strategy

#### Technical Partnerships

| Partner Type | Target | Integration |
|--------------|--------|-------------|
| **Wallet providers** | MetaMask, Rainbow | Spatial identity from wallet |
| **Storage** | IPFS, Arweave | Receipt backup |
| **ZK infrastructure** | Aztec, zkSync | On-chain verification |

#### Distribution Partnerships

| Partner Type | Target | Value |
|--------------|--------|-------|
| **Privacy tools** | VPN providers, browsers | Bundled offering |
| **DAOs** | Major DAOs | Governance communication |
| **Media** | Journalists, activists | High-value users |

---

## IV. Monetization Strategy

### Revenue Model

Rising Sun is **infrastructure** — revenue comes from:

#### 1. Hosted Services

| Service | Pricing | Target Customer |
|---------|---------|-----------------|
| **Managed servers** | $50-500/mo | Teams, businesses |
| **Enterprise deployment** | Custom | Large organizations |
| **SLA support** | $1K-10K/mo | Mission-critical users |

#### 2. Premium Features

| Feature | Pricing | Value |
|---------|---------|-------|
| **Receipt backup** | $5/mo | Cloud-synced receipts |
| **Extended history** | $10/mo | Longer receipt retention |
| **Advanced analytics** | $20/mo | Usage insights |
| **Custom regions** | $50/mo | Branded spaces |

#### 3. Ecosystem Revenue

| Source | Mechanism |
|--------|-----------|
| **Password Palace** | Shared infrastructure cost |
| **Trove** | Piece distribution fees |
| **GameGames** | Communication infrastructure |

### Revenue Projections

#### Conservative Scenario

| Metric | 2026 Q3 | 2026 Q4 | 2027 H1 | 2027 H2 |
|--------|---------|---------|---------|---------|
| **Managed servers** | 10 | 50 | 150 | 400 |
| **Premium users** | 100 | 500 | 2,000 | 8,000 |
| **Server revenue** | $2K | $10K | $30K | $80K |
| **Premium revenue** | $500 | $2.5K | $10K | $40K |
| **Total revenue** | $2.5K | $12.5K | $40K | $120K |

### Path to Sustainability

Rising Sun's primary value is as **ecosystem infrastructure**. Direct revenue is secondary to:

1. **Enabling Password Palace** — Shared spatial primitives
2. **Enabling Trove** — Piece distribution mechanism
3. **Enabling GameGames** — Player communication
4. **Network effects** — More users = more valuable identity

---

## V. Technical Roadmap

### Current Status (January 2026)

| Component | Status | Notes |
|-----------|--------|-------|
| Core protocol | Complete | World state, regions, receipts |
| WebSocket server | Complete | Production-ready |
| Browser client | Complete | React, IndexedDB, E2E |
| E2E encryption | Complete | X25519, ChaCha20-Poly1305 |
| P2P signaling | In progress | WebRTC, TURN |
| ZK integration | Planned | Poseidon hashing ready |
| Federation | Planned | Multi-server sync |

### 2026 Roadmap

| Quarter | Deliverables |
|---------|--------------|
| **Q1** | P2P beta, mobile SDK, improved documentation |
| **Q2** | Chat app beta, Spaces beta, ZK proof generation |
| **Q3** | Public launch, Password Palace integration |
| **Q4** | Trove integration, GameGames integration, federation alpha |

### 2027 Roadmap

| Half | Deliverables |
|------|--------------|
| **H1** | Federation production, on-chain receipts, enterprise features |
| **H2** | Full ecosystem integration, third-party SDK ecosystem |

---

## VI. Strategic Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| **User adoption slow** | Medium | High | Focus on developer adoption first |
| **Spatial identity too complex** | Medium | Medium | Better UX, onboarding flows |
| **Competing protocols emerge** | Medium | Medium | First-mover advantage, ecosystem lock-in |
| **Regulatory concerns** | Low | High | Jurisdiction selection, legal structure |
| **P2P reliability issues** | Medium | Medium | Hybrid model with fallback servers |

---

## VII. Key Metrics to Track

### North Star Metric

**Active Spatial Identities** — Unique users who have authenticated via spatial memory in the last 30 days

### Supporting Metrics

| Category | Metric | Target (2026 EOY) |
|----------|--------|-------------------|
| **Growth** | Active identities | 25,000 |
| **Engagement** | Messages sent/day | 50,000 |
| **Retention** | 30-day retention | 40% |
| **Receipts** | Receipts generated/day | 10,000 |
| **Developers** | SDK integrations | 25 |
| **Revenue** | MRR | $15K |

---

*Last Updated: January 2026*
