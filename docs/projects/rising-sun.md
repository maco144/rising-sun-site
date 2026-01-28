# Rising Sun

> **Communication Where History is Opt-in**

*"The world only knows current state. If you want proof of the past, YOU keep the receipt."*

## The Problem

Modern communication platforms remember everything forever. Every message, every login, every action becomes permanent data that can be leaked, subpoenaed, or sold. Users have no control over their digital history. Meanwhile, identity systems require trusted third parties who can be hacked, coerced, or simply disappear.

There's no way to communicate where:
- Your identity comes from what you know, not who vouches for you
- History exists only when both parties consent to remember
- Presence can be proven cryptographically without surveillance

## The Solution

Rising Sun is a unified spatial memory platform where identity, storage, and communication are built on one primitive: **proving where you are in a shared Merkle space**.

Instead of accounts and passwords, your identity IS your spatial memory. Instead of servers storing everything, the world only knows current state. Want proof something happened? YOU keep the receipt.

## How It Works

```
┌─────────────────────────────────────────────────────────────────┐
│                         WORLD STATE                              │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  Sparse Merkle Tree of Regions                          │    │
│  │  - Each region has its own root                         │    │
│  │  - World root = hash of all region roots                │    │
│  │  - Every action changes the world root                  │    │
│  └─────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
                              │
         ┌────────────────────┼────────────────────┐
         │                    │                    │
    ┌────┴────┐          ┌────┴────┐          ┌────┴────┐
    │  HOME   │          │ CHANNEL │          │  TROVE  │
    │ Private │          │  Chat   │          │ Unlock  │
    └─────────┘          └─────────┘          └─────────┘
```

1. **Spatial Identity**: Arrange objects in 3D space → deterministic hash → your permanent ID
2. **Enter Regions**: Join channels, forums, or troves as a leaf in the Merkle tree
3. **Interact**: Send messages, place objects, contribute pieces
4. **Generate Receipts**: Optionally capture cryptographic proof of your presence
5. **History is Yours**: No receipt = no proof = never happened

## Core Concepts

### Identity from Spatial Memory

```typescript
const solution = {
  objects: [
    { type: 'chair', position: { x: 10, y: 0, z: 5 } },
    { type: 'lamp', position: { x: 12, y: 5, z: 5 } },
  ],
};

const self = createSelf(solution);
// self.id = deterministic hash of your spatial arrangement
// self.homeRegion = private space derived from your ID
```

No accounts. No passwords stored anywhere. Identity IS the spatial memory.

### Receipts (Opt-in History)

```typescript
// Generate receipt of current position
const receipt = world.generateReceipt(userId);

// Keep it (your choice)
await keeper.keep(receipt, ['meeting', 'important']);

// Prove later
const proof = await keeper.provePresence(regionId);

// No receipt = no proof = never happened
```

### Consent-Based Memory

For shared history to exist, BOTH parties keep receipts. If Alice sends Bob a message:
- Alice keeps receipt: Alice can prove she sent it
- Bob keeps receipt: Bob can prove he received it
- Neither keeps receipt: It never happened (cryptographically)

## Region Types

| Type | Purpose | Objects | Presence | Persistence |
|------|---------|---------|----------|-------------|
| **home** | Private space | items | owner only | permanent |
| **channel** | Real-time chat | messages, reactions | visible | ephemeral |
| **forum** | Discussion | posts, replies | visible | permanent |
| **trove** | Multi-party unlock | pieces, items | visible | permanent |
| **market** | Exchange | listings, offers | hidden | expires |
| **genesis** | Discovery | announcements | visible | limited |

## Technical Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│  BROWSER                                                         │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  React App                                               │    │
│  │  ├── BrowserClient (WebSocket)                          │    │
│  │  ├── IndexedDBReceiptStore (persistence)                │    │
│  │  ├── BrowserReceiptKeeper (verification)                │    │
│  │  └── E2E Encryption (X25519 + ChaCha20-Poly1305)        │    │
│  └─────────────────────────────────────────────────────────┘    │
│                              │                                   │
│                              │ WebSocket / WebRTC                │
│                              ▼                                   │
└──────────────────────────────│───────────────────────────────────┘
                               │
┌──────────────────────────────│───────────────────────────────────┐
│  SERVER (Node.js)            │                                   │
│  ┌───────────────────────────▼─────────────────────────────┐    │
│  │  RisingSunServer                                         │    │
│  │  ├── World State (Sparse Merkle Tree)                   │    │
│  │  ├── Region Management                                   │    │
│  │  ├── Piece Registry & Marketplace                       │    │
│  │  └── Prometheus Metrics                                  │    │
│  └─────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
```

## Repository Structure

```
rising-sun/
├── src/
│   ├── primitives/     # types.ts, merkle.ts - Core types and hashing
│   ├── identity/       # home.ts - User ID from spatial solution
│   ├── world/          # state.ts, persistence.ts - World state management
│   ├── receipts/       # storage.ts, file-store.ts - Proof persistence
│   ├── network/        # protocol.ts, server.ts, client.ts - WebSocket
│   ├── regions/        # channel.ts, forum.ts, trove.ts - Region behaviors
│   ├── pieces/         # sources.ts, registry.ts, marketplace.ts
│   ├── chat/           # types.ts, cache.ts, manager.ts - Chat messages
│   ├── crypto/         # encryption.ts, e2e.ts, poseidon.ts
│   ├── cli/            # Admin CLI
│   ├── metrics/        # Prometheus metrics
│   ├── p2p/            # WebRTC signaling, TURN, peer sync
│   ├── zk/             # Zero-knowledge proofs (Poseidon)
│   └── browser/        # React app, IndexedDB, E2E encryption
├── public/             # index.html, bundled app.js
└── deploy/             # Docker, Grafana dashboards
```

## Technology Stack

| Layer | Technology |
|-------|------------|
| Core | TypeScript, Sparse Merkle Trees |
| Hashing | SHA-256 (runtime), Poseidon (ZK-compatible) |
| Encryption | X25519 key exchange, ChaCha20-Poly1305 |
| Signatures | Ed25519 |
| Network | WebSocket, WebRTC (P2P) |
| Browser Storage | IndexedDB |
| Server | Node.js, Prometheus metrics |

## Piece Sources

Rising Sun supports multi-party unlocking via pieces with various claim requirements:

| Source | Claim Requirement |
|--------|-------------------|
| `public` | Anyone |
| `manual` | Specific user or signature |
| `time` | After timestamp |
| `location` | Within radius of coordinates |
| `nft` | Prove NFT ownership |
| `achievement` | Complete achievement |
| `purchase` | Pay product price |
| `social` | Social media action |
| `puzzle` | Solve another trove |
| `threshold` | N of M sub-sources |

## Relationship to Other Projects

Rising Sun provides foundational infrastructure for the ecosystem:

| | Rising Sun | Password Palace | Trove |
|---|---|---|---|
| **Focus** | Communication infrastructure | Personal identity | Shared treasure |
| **Merkle Trees** | Shared world state | Personal commitment | Puzzle verification |
| **Identity** | Spatial memory → User ID | Spatial memory → Auth | Piece ownership |
| **History** | Opt-in receipts | N/A | Unlock history |
| **Shared** | Spatial primitives, ZK compatibility, Merkle proofs |

## Design Principles

1. **Presence is native** - You're in the tree or you're not
2. **History is opt-in** - No receipt = never happened
3. **Privacy by default** - World forgets, individuals remember
4. **Proof without trust** - Merkle proofs are self-validating
5. **Consent-based memory** - Both parties keep receipts for shared history

## Roadmap

| Phase | Timeline | Deliverables |
|-------|----------|--------------|
| **1. Core** | Complete | World state, regions, receipts, network protocol |
| **2. Browser** | Complete | React app, IndexedDB, E2E encryption |
| **3. P2P** | In Progress | WebRTC signaling, TURN server, peer sync |
| **4. ZK Integration** | Planned | Halo2 WASM, on-chain verification |
| **5. Federation** | Planned | Multi-server world sync |

## Links

- **Source**: [github.com/maco144/rising-sun](https://github.com/maco144/rising-sun)

## Metrics & Status

- **Status**: Beta
- **Tests**: 26 test files, all passing
- **Browser**: Full React client with E2E encryption
- **Server**: WebSocket with Prometheus metrics

---

## Why This Matters

Rising Sun enables **communication where you control your history**. No platform remembers everything forever. No identity provider can lock you out. No intermediary can prove you were somewhere without your consent.

This is infrastructure for a world where privacy is the default and proof requires consent.
