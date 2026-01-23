# Trove

> **Spatial Puzzle Protocol for Digital Treasure**

*"A game where everyone wins"*

## The Problem

Distributing valuable digital content today requires trusting intermediaries. Inheritance, escrow, treasure hunts, and conditional access all rely on custodians who can be hacked, coerced, or simply disappear. There's no trustless way to say "this unlocks when X happens" or "the first person to solve Y gets Z."

## The Solution

Trove is a protocol for protecting valuable contents behind **spatial puzzles** with **distributed access**. Create a Trove, fill it with anything valuable, distribute puzzle pieces. The first to solve it claims the contents - verified by zero-knowledge proofs, enforced by blockchain.

## How It Works

1. **Create a Trove**: Define a 3D spatial puzzle (like a Password Palace room)
2. **Fill It**: Deposit tokens, NFTs, secrets, access keys, or files
3. **Distribute Pieces**: Share puzzle components (maps, hints, keys) however you want
4. **First to Solve Wins**: ZK proofs verify the solution; smart contract releases contents

## Use Cases

| Use Case | Description |
|----------|-------------|
| **Treasure Hunts** | Create real-world scavenger hunts with crypto prizes |
| **Inheritance** | Time-locked or condition-locked asset transfer |
| **Escrow** | Trustless conditional release of funds |
| **CTF Competitions** | Capture-the-flag with cryptographic verification |
| **Brand Campaigns** | Gamified marketing with guaranteed prizes |
| **Team Security** | Multi-party access control for sensitive data |

## Token Economics ($TROVE)

```
SUPPLY:        1,000,000,000 $TROVE (fixed, deflationary)
EMISSIONS:     Zero inflation

FEE DISTRIBUTION:
├── 40% BURNED        → Permanent deflation
├── 40% COMMUNITY CHEST → Winnable prizes
└── 20% FOUNDATION    → Ecosystem grants
```

| Action | Fee |
|--------|-----|
| Create Trove | 0.0001 + 0.00001 per slot |
| Solve Trove | 0.0001 |
| Transfer Piece | 0.0001 |
| Mint Piece NFT | 0.001 |
| Buy Hint | 0.0005 |

## Technical Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      TROVE CHAIN (L1)                        │
├─────────────────────────────────────────────────────────────┤
│  ┌────────────┐  ┌────────────┐  ┌────────────┐            │
│  │   TROVE    │  │   PIECE    │  │   TOKEN    │            │
│  │  MODULE    │  │  MODULE    │  │  MODULE    │            │
│  │            │  │            │  │            │            │
│  │ Create     │  │ Mint/Trade │  │ $TROVE     │            │
│  │ Solve      │  │ Distribute │  │ Burns      │            │
│  │ Verify     │  │ Claim      │  │ Splits     │            │
│  └─────┬──────┘  └─────┬──────┘  └─────┬──────┘            │
│        └───────────────┼───────────────┘                    │
│                        ▼                                     │
│               ┌────────────────┐                             │
│               │  ZK VERIFIER   │                             │
│               │   (Halo2)      │                             │
│               └────────────────┘                             │
├─────────────────────────────────────────────────────────────┤
│  BASE: Cosmos SDK  │  CONSENSUS: CometBFT  │  VM: CosmWasm  │
└─────────────────────────────────────────────────────────────┘
```

## Repository Structure

```
trove/
├── circuits/        # Halo2 ZK circuits (Rust)
│   ├── voxel_hash.rs
│   ├── merkle_tree.rs
│   ├── solution_proof.rs
│   └── solvability_proof.rs
├── contracts/       # CosmWasm smart contracts
│   ├── trove-core/
│   ├── trove-pieces/
│   ├── trove-token/
│   ├── trove-chest/
│   └── trove-verifier/
├── sdk/            # TypeScript client SDK
└── scene/          # 3D scene system
```

## Technology Stack

| Layer | Technology |
|-------|------------|
| Blockchain | Cosmos SDK, CometBFT consensus |
| Smart Contracts | CosmWasm (Rust → WASM) |
| ZK Proofs | Halo2, Pasta curves, Poseidon hashing |
| Storage | IPFS for encrypted content |
| Encryption | AES-256-GCM, HKDF key derivation |
| SDK | TypeScript, WASM prover |

## Relationship to Password Palace

Trove and Password Palace share the same cryptographic foundation:

| | Password Palace | Trove |
|---|---|---|
| **Focus** | Personal secrets | Shared secrets |
| **Access** | Your memory | Distributed pieces |
| **Users** | Single user | Multi-party |
| **Model** | Subscription | Token economy |
| **Shared** | Spatial memory, ZK proofs, Halo2 circuits, Merkle commitments |

## Roadmap

| Phase | Timeline | Deliverables |
|-------|----------|--------------|
| **1. Core Chain** | 4-6 weeks | Trove module, ZK verifier, testnet |
| **2. Pieces** | 3-4 weeks | Piece NFTs, marketplace, conditions |
| **3. Economics** | 2-3 weeks | Fee splitting, chest, foundation |
| **4. SDK** | 3-4 weeks | TypeScript SDK, React hooks |
| **5. Apps** | 4-6 weeks | Trove Hunt app, Studio tool |
| **6. Mainnet** | 2-3 weeks | Audits, genesis, launch |

**MVP**: 8-10 weeks | **Full Launch**: 18-26 weeks

## Links

- **Website**: [trove.website](https://trove.website)

## Metrics & Status

- **Status**: Live product

---

## Why This Matters

Trove enables **trustless conditional access** to digital value. No lawyers, no escrow agents, no custodians - just mathematics and consensus. This is infrastructure for a world where "code is law" actually works for everyday use cases.
