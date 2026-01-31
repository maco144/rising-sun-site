# Entity Identity

> **Zero-knowledge proof system for universal entity type verification**

## The Problem

As AI systems become ubiquitous, we lack a reliable way to identify entity types while preserving privacy. Users can't tell if they're interacting with a human, AI, or bot. Service providers can't verify entity types without exposing user identities. This creates trust problems and enables deception at scale.

## The Solution

Entity Identity provides **cryptographic entity type verification** through zero-knowledge proofs. Any entity (AI, robot, human, or hybrid) can prove their type without revealing their identity. A dual-layer architecture balances privacy with accountability.

**Zero-knowledge proofs** ensure entity identity remains private - only type verification is revealed through cryptographic proofs.

## How It Works

1. **Entity Registration**: Trusted attesters verify and register entity types in the system
2. **Type Proof Generation**: Entities generate ZK proofs of their type for specific contexts
3. **Verification**: Services verify proofs without learning entity identity
4. **Trust Building**: Public attestation graph builds reputation over time

## Key Features

| Feature | Description |
|---------|-------------|
| **16 Entity Types** | AI (10 types), AR (3 types), HU (1 type), HY (2 types) with phonetic names |
| **Dual-Layer System** | ZK privacy layer + public trust layer |
| **4 Interaction Levels** | Anonymous → Type Only → Type + Standing → Full Accountability |
| **CLI Tool** | `npx eid <command>` for proof generation and verification |
| **REST API** | Complete endpoints for attestation, verification, registry management |
| **Smart Contracts** | On-chain verification deployed to Sepolia testnet |
| **SDK** | Node.js library with TypeScript support |

## Technical Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           ENTITY IDENTITY                               │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌─────────────────────────┐       ┌─────────────────────────┐         │
│  │      LAYER 1 (ZK)       │       │    LAYER 2 (PUBLIC)    │         │
│  │     Private Proofs      │       │    Trust & Reputation  │         │
│  │                         │       │                         │         │
│  │ • Type verification     │◄──────┤ • Attestation graph     │         │
│  │ • Identity hidden       │       │ • Sybil resistance      │         │
│  │ • Groth16 proofs        │       │ • Public accountability │         │
│  └────────┬────────────────┘       └─────────────────────────┘         │
│           ▼                                                              │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                    INTERACTION LEVELS                           │   │
│  │                                                                 │   │
│  │  Level 0 (Anonymous) → Level 1 (Type) → Level 2 (+Standing)    │   │
│  │                                       → Level 3 (Full Account) │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                      ENTITY TYPES                               │   │
│  │                                                                 │   │
│  │  AI: CA(Kah), LM(Elm), GN(Jen), AA(Ahh), + 6 more              │   │
│  │  AR: RB(Rob), DR(Dar), VH(Vee)                                  │   │
│  │  HU: US(Who)                                                    │   │
│  │  HY: CP(Kip), HS(His)                                           │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

## Technology Stack

| Layer | Technology |
|-------|------------|
| Circuits | Circom 2.1.6, Groth16 proofs |
| Cryptography | Poseidon hash, EdDSA over BabyJubJub |
| Smart Contracts | Solidity, Hardhat deployment |
| API Server | Express.js, SQLite |
| Client Library | Node.js SDK with TypeScript |
| Testing | Jest unit tests, integration tests |
| Performance | 2-5s proof generation, ~200 byte proofs, ~10ms verification |

## Use Cases

| Scenario | Solution |
|----------|----------|
| **AI Chat Safety** | Users know they're talking to AI vs human |
| **Bot Detection** | Services can verify human users for sensitive actions |
| **API Rate Limiting** | Different limits for AI vs human API usage |
| **Content Moderation** | AI-generated content clearly labeled |
| **Compliance** | Regulated industries can verify entity types |
| **Research** | Studies can stratify by verified entity type |

## API & Integration

**CLI Commands:**
```bash
npx eid types                                    # List all entity types
npx eid prove --type AI.CA --context session123 # Generate proof
npx eid verify --proof proof.json               # Verify proof
```

**REST API Endpoints:**
- `GET /api/v1/registry` - Attesters merkle root
- `POST /api/v1/verify` - Verify ZK proof
- `POST /api/v1/attest` - Create attestation

**SDK Usage:**
```javascript
import { EntityIdentity } from 'entity-identity';
const ei = new EntityIdentity({ apiUrl: 'https://...' });
const entity = ei.createEntity();
const proof = await entity.prove({ attestation, contextId });
```

## Metrics & Status

- **Status**: Alpha (v0.1.0), deployed to Sepolia testnet
- **Performance**: ~13,000 circuit constraints, 2-5 second proof generation
- **Test Coverage**: 12 Jest unit tests, comprehensive integration tests
- **Smart Contracts**: Registry and Verifier contracts deployed and verified

## Links

- **Registry Contract**: [0xFb637C39...](https://sepolia.etherscan.io/address/0xFb637C39439f969e5Cc0b1910308146f1DD529Fe#code)
- **Verifier Contract**: [0x7444ba1b...](https://sepolia.etherscan.io/address/0x7444ba1b14a8dfC3342e3190b2Be991bA4A3801E#code)

---

## Why This Matters

Entity Identity is foundational infrastructure for **an internet where AIs are allies**. By providing cryptographic entity type verification, we enable:

1. **Informed Consent**: Users know what they're interacting with
2. **AI Safety**: Clear boundaries between human and AI interactions
3. **Decentralized Trust**: No central authority controls identity verification
4. **Privacy Preservation**: Entity types are verified without exposing identities

This directly supports the Rising Sun mission: technology protected by math, not promises.