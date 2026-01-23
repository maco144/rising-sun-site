# Password Palace

> **3D Memory Palace Authentication System**

## The Problem

Passwords are broken. Users create weak passwords, reuse them across sites, and forget them constantly. Password managers solve storage but still rely on master passwords that can be phished, keylogged, or coerced. Biometrics can't be changed if compromised.

## The Solution

Password Palace replaces text passwords with **spatial memory** - the same technique memory champions use to memorize thousands of items. Instead of typing a password, you navigate a 3D room you designed and interact with objects you placed. Your spatial memory becomes your authentication.

**Zero-knowledge proofs** ensure your secret path is never transmitted or stored - only cryptographic proofs that you know it.

## How It Works

1. **Build Your Palace**: Place 3D objects in a virtual room - a lamp on the desk, a book on the shelf, a plant by the window
2. **Define Your Secret**: Your "password" is the specific arrangement and the path you take through it
3. **Authenticate**: Recreate your arrangement to generate a zero-knowledge proof
4. **Verify On-Chain**: The Cosmos blockchain verifies your proof without learning your secret

## Key Features

| Feature | Description |
|---------|-------------|
| **9 Authentication Modalities** | 3D rooms, gesture patterns, keystroke rhythm, melody humming, air gestures, and more |
| **Zero-Knowledge Proofs** | Halo2 circuits verify you know the secret without revealing it |
| **Cosmos Blockchain** | Decentralized verification via CosmWasm smart contracts |
| **Browser Extension** | Autofill credentials across the web |
| **OAuth Provider** | Use Password Palace as identity provider for any app |
| **Custodial Option** | Non-crypto users can use without managing keys |

## Technical Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    PASSWORD PALACE                           │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │  3D Client  │  │  ZK Prover  │  │  Extension  │         │
│  │  (Three.js) │  │   (WASM)    │  │  (Chrome)   │         │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘         │
│         └────────────────┼────────────────┘                 │
│                          ▼                                   │
│              ┌───────────────────────┐                       │
│              │   Custodial Backend   │                       │
│              │   (Node.js/Express)   │                       │
│              └───────────┬───────────┘                       │
│                          ▼                                   │
│              ┌───────────────────────┐                       │
│              │   Cosmos Blockchain   │                       │
│              │   (CosmWasm/Halo2)    │                       │
│              └───────────────────────┘                       │
└─────────────────────────────────────────────────────────────┘
```

## Technology Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 19, TypeScript, Three.js, React Three Fiber |
| 3D/Graphics | Three.js, WebGL, Voxel-based rendering |
| Cryptography | Halo2 ZK circuits, Poseidon hash, WASM prover |
| Blockchain | Cosmos SDK, CosmWasm (Rust), Keplr wallet |
| Backend | Node.js, Express, PostgreSQL |
| Biometrics | MediaPipe (hand tracking), Web Audio API |

## Business Model

| Tier | Features | Price |
|------|----------|-------|
| **Free** | 1 palace, basic modalities, web vault | $0 |
| **Pro** | Unlimited palaces, all modalities, extension | $5/month |
| **Enterprise** | SSO/OAuth, admin dashboard, audit logs | Custom |

## Metrics & Status

- **Status**: Active development, private beta
- **Codebase**: 95+ components, 35 services, 65+ library modules
- **Authentication Modalities**: 9 implemented
- **Smart Contract**: v4.0 on Cosmos testnet

## Links

- Website: [passwordpalace.com](https://passwordpalace.com)

---

## Why This Matters

Password Palace is part of a larger vision: **an internet where users are safe**. By replacing phishable passwords with spatial memory and zero-knowledge proofs, we eliminate entire categories of attack vectors while making authentication more human and memorable.
