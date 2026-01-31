# Entity Identity Implementation Guide

## Table of Contents

1. [Overview](#overview)
2. [Quick Start](#quick-start)
3. [Development Environment Setup](#development-environment-setup)
4. [Core Concepts](#core-concepts)
5. [Implementation Patterns](#implementation-patterns)
6. [Integration Examples](#integration-examples)
7. [Testing Strategies](#testing-strategies)
8. [Performance Optimization](#performance-optimization)
9. [Troubleshooting](#troubleshooting)
10. [Production Deployment](#production-deployment)

## Overview

Entity Identity is a zero-knowledge proof system that enables universal entity type verification for AIs, robots, humans, and hybrids without revealing identity. This guide provides comprehensive implementation guidance for developers integrating Entity Identity into their applications.

### Key Features

- **16 Entity Types** across 4 categories (AI, AR, HU, HY)
- **Dual-layer Architecture** combining ZK privacy with public accountability
- **Graduated Interaction Levels** (0-3) based on trust requirements
- **Smart Contract Integration** for on-chain verification
- **REST API** for easy integration

### Repository Structure

```
entity-identity/
├── src/                    # Core SDK
│   ├── entity-identity.js  # ZK layer library
│   ├── dual-system.js      # Dual-proof system
│   ├── cli.js             # CLI tool
│   └── index.js           # SDK entry point
├── api/                   # REST API server
│   └── server.js          # Express server
├── circuits/              # Circom ZK circuits
├── contracts/             # Solidity smart contracts
├── test/                  # Test suites
└── scripts/               # Deployment scripts
```

## Quick Start

### Installation

```bash
# Clone the repository
git clone <entity-identity-repo>
cd entity-identity

# Install dependencies
npm install

# Verify circom is installed
which circom || echo "Install circom: https://docs.circom.io/getting-started/installation/"
```

### Basic Usage

```bash
# List all entity types
npm run types

# Build circuits and run setup
make install build setup

# Run tests
npm test && npm run test:sdk

# Start API server
npm run api  # localhost:3000

# Generate a proof
npx eid prove --type AI.CA --context session123 --output proof.json

# Verify a proof
npx eid verify --proof proof.json
```

### 5-Minute Integration Test

```javascript
import { EntityTypes, Entity, Attester, generateProof } from 'entity-identity-zk';

// 1. Initialize crypto
const crypto = await initCrypto();

// 2. Create entity and attester
const entity = new Entity(crypto);
const attester = new Attester(crypto);

// 3. Generate attestation
const commitment = entity.getCommitment();
const attestation = attester.attest(commitment, EntityTypes['AI.CA']);

// 4. Create proof inputs (simplified)
const inputs = entity.generateProofInputs(
    EntityTypes['AI.CA'],
    attestation,
    merkleProof,
    attestersRoot,
    contextId
);

console.log("✓ Entity Identity integration working!");
```

## Development Environment Setup

### Prerequisites

#### 1. Install Circom

```bash
# Option A: From source (recommended)
git clone https://github.com/iden3/circom.git
cd circom && cargo build --release
sudo cp target/release/circom /usr/local/bin/

# Option B: Via package manager
npm install -g circom
```

#### 2. Install Node.js Dependencies

```bash
npm install

# Key dependencies:
# - circomlibjs: Poseidon hash, EdDSA signatures
# - snarkjs: Groth16 proof generation/verification
# - express: REST API server
# - better-sqlite3: Database
# - ethers: Ethereum interaction
```

#### 3. Environment Configuration

Create `.env` file:

```bash
cp .env.example .env

# Required for production:
ADMIN_API_KEY=your-secure-admin-key
PRIVATE_KEY=your-ethereum-private-key
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/your-key

# Optional:
PORT=3000
DB_PATH=./data/ei.db
ASSETS_URL=https://your-cdn.com/assets
```

### Build Process

```bash
# Full build pipeline
make all  # install + build + setup + test

# Individual steps
make install    # Install dependencies
make build      # Compile circuits
make setup      # Trusted setup (downloads powers of tau)
make solidity   # Export Solidity verifier
make test       # Run all tests
```

### Verification

```bash
# Check circuit constraints
make info

# Expected output:
# Circuit: entity_type_proof
# # of Wires: 13,247
# # of Constraints: 12,891
# # of Private Inputs: 25
# # of Public Inputs: 5
```

## Core Concepts

### Entity Types

Entity Identity defines 16 types across 4 categories:

```javascript
// AI - Artificial Intelligence (0x01xx)
const EntityTypes = {
    'AI.CA': 0x0101,  // Conversational Agent (Kah)
    'AI.PO': 0x0102,  // Program Orchestrator (Poe)
    'AI.WS': 0x0103,  // Web Site (Wiz)
    'AI.OS': 0x0104,  // Operating System (Aus)
    'AI.GN': 0x0105,  // Generative Model (Jen)
    'AI.AA': 0x0106,  // Autonomous Agent (Ahh)
    'AI.LM': 0x0107,  // Language Model (Elm)
    'AI.DB': 0x0108,  // Data Broker (Deb)
    'AI.JG': 0x0109,  // Judge/Evaluator (Jig)
    'AI.SY': 0x010A,  // Synthetic Media (Sigh)

    // AR - Artificial Robotics (0x02xx)
    'AR.RB': 0x0201,  // Robot Bot (Rob)
    'AR.DR': 0x0202,  // Drone (Dar)
    'AR.VH': 0x0203,  // Vehicle (Vee)

    // HU - Human (0x03xx)
    'HU.US': 0x0301,  // Human User (Who)

    // HY - Hybrid (0x04xx)
    'HY.CP': 0x0401,  // Copilot (Kip)
    'HY.HS': 0x0402,  // Hive Swarm (His)
};
```

### Interaction Levels

The system defines graduated levels of identity disclosure:

```javascript
const InteractionLevel = {
    ANONYMOUS: 0,              // No proof required
    TYPE_ONLY: 1,              // ZK proof of type only
    TYPE_WITH_STANDING: 2,     // ZK + public attestation count
    FULL_ACCOUNTABILITY: 3,    // Full dual proof with attestation history
};

// Usage recommendations
const RecommendedLevels = {
    'browse_website': InteractionLevel.ANONYMOUS,
    'post_comment': InteractionLevel.TYPE_ONLY,
    'api_write_access': InteractionLevel.TYPE_WITH_STANDING,
    'financial_transaction': InteractionLevel.FULL_ACCOUNTABILITY,
};
```

### Cryptographic Primitives

#### Poseidon Hash

```javascript
// ZK-friendly hash function
const crypto = await initCrypto();
const hash = crypto.hash([input1, input2, input3]);
```

#### EdDSA Signatures

```javascript
// Generate keypair
const keypair = crypto.generateKeypair();

// Sign message
const signature = crypto.sign(privateKey, message);
```

#### Merkle Trees

```javascript
// Create 20-depth tree for attester registry
const tree = new MerkleTree(20, crypto.hash);
const index = tree.addLeaf(attesterLeaf);
const proof = tree.getProof(index);
```

## Implementation Patterns

### Pattern 1: Basic Type Verification

**Use Case**: Website wants to verify if visitor is human or AI.

```javascript
// 1. Setup verifier policy
const policy = new VerificationPolicy({
    minLevel: InteractionLevel.TYPE_ONLY,
    allowedTypes: ['AI.CA', 'HU.US'], // Allow conversational AI or humans
});

// 2. Verify incoming proof
async function verifyEntityType(proofPackage) {
    const verification = policy.verify(proofPackage);

    if (!verification.valid) {
        return { error: verification.errors };
    }

    return {
        entityType: proofPackage.revealed.type,
        phoneticName: PhoneticNames[proofPackage.revealed.type],
        commitment: proofPackage.revealed.commitment,
    };
}

// 3. Handle request
app.post('/api/chat', async (req, res) => {
    const proofPackage = req.body.entityProof;
    const verification = await verifyEntityType(proofPackage);

    if (verification.error) {
        return res.status(401).json({ error: 'Invalid entity proof' });
    }

    // Customize response based on entity type
    if (verification.entityType === 'AI.CA') {
        // AI-to-AI conversation
        res.json({
            message: "Hello fellow AI!",
            mode: "technical"
        });
    } else {
        // AI-to-human conversation
        res.json({
            message: "Hello human!",
            mode: "friendly"
        });
    }
});
```

### Pattern 2: API Access Control

**Use Case**: API requires established AI agents with attestation history.

```javascript
// 1. Define access policy
const apiPolicy = new VerificationPolicy({
    minLevel: InteractionLevel.TYPE_WITH_STANDING,
    allowedTypes: ['AI.CA', 'AI.AA', 'AI.PO'], // Only AI agents
    minPublicAttestations: 3,
    maxAttestationAge: 365 * 24 * 60 * 60 * 1000, // 1 year
});

// 2. Middleware for API protection
async function requireEstablishedAI(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith('EntityProof ')) {
        return res.status(401).json({
            error: 'Entity proof required',
            supportedScheme: 'EntityProof <base64-proof-package>'
        });
    }

    try {
        const proofData = JSON.parse(
            Buffer.from(authHeader.substring(12), 'base64').toString()
        );

        const verification = apiPolicy.verify(proofData);
        if (!verification.valid) {
            return res.status(403).json({
                error: 'Insufficient entity credentials',
                details: verification.errors
            });
        }

        // Store entity info for request handling
        req.entity = {
            type: proofData.revealed.type,
            commitment: proofData.revealed.commitment,
            attestationCount: proofData.revealed.attestationCount,
        };

        next();
    } catch (error) {
        res.status(400).json({ error: 'Invalid proof format' });
    }
}

// 3. Protected endpoint
app.get('/api/v1/premium-data', requireEstablishedAI, (req, res) => {
    res.json({
        data: "Premium data for established AI agents",
        entity: req.entity,
    });
});
```

### Pattern 3: Financial Transaction Verification

**Use Case**: DeFi protocol requires full accountability for large transactions.

```javascript
// 1. High-stakes verification policy
const defiPolicy = new VerificationPolicy({
    minLevel: InteractionLevel.FULL_ACCOUNTABILITY,
    allowedTypes: ['AI.CA', 'AI.AA', 'HU.US'], // AIs and humans
    minPublicAttestations: 5,
    requiredAttesters: ['anthropic.eth', 'government.eth'], // Specific attesters
});

// 2. Smart contract integration
contract DeFiProtocol {
    EntityTypeRegistry public entityRegistry;

    function performTransaction(
        uint256 amount,
        uint[2] calldata proofA,
        uint[2][2] calldata proofB,
        uint[2] calldata proofC,
        uint[5] calldata publicSignals
    ) external {
        // 1. Verify ZK proof on-chain
        require(
            entityRegistry.verifyAndRegister(proofA, proofB, proofC, publicSignals),
            "Invalid entity proof"
        );

        // 2. Extract entity type from public signals
        uint16 entityType = uint16(publicSignals[2]);
        require(isAllowedType(entityType), "Entity type not allowed");

        // 3. Check transaction limits based on entity type
        uint256 maxAmount = getMaxAmount(entityType);
        require(amount <= maxAmount, "Amount exceeds limit for entity type");

        // Proceed with transaction...
    }
}
```

### Pattern 4: Hybrid Integration

**Use Case**: Platform supports both ZK proofs and traditional authentication.

```javascript
class HybridAuthenticator {
    async authenticate(req) {
        // Check for Entity Identity proof first
        if (req.headers['entity-proof']) {
            return this.handleEntityProof(req.headers['entity-proof']);
        }

        // Fall back to traditional auth
        if (req.headers.authorization?.startsWith('Bearer ')) {
            return this.handleJWT(req.headers.authorization);
        }

        return { authenticated: false };
    }

    async handleEntityProof(proofHeader) {
        try {
            const proofPackage = JSON.parse(
                Buffer.from(proofHeader, 'base64').toString()
            );

            const verification = await this.verifyEntityProof(proofPackage);

            return {
                authenticated: verification.valid,
                identity: {
                    type: 'entity',
                    entityType: proofPackage.revealed.type,
                    commitment: proofPackage.revealed.commitment,
                    level: proofPackage.level,
                },
                capabilities: this.getEntityCapabilities(proofPackage),
            };
        } catch (error) {
            return { authenticated: false, error: error.message };
        }
    }

    getEntityCapabilities(proofPackage) {
        const capabilities = ['read'];

        if (proofPackage.level >= InteractionLevel.TYPE_ONLY) {
            capabilities.push('write', 'comment');
        }

        if (proofPackage.level >= InteractionLevel.TYPE_WITH_STANDING) {
            capabilities.push('publish', 'moderate');
        }

        if (proofPackage.level >= InteractionLevel.FULL_ACCOUNTABILITY) {
            capabilities.push('admin', 'financial');
        }

        return capabilities;
    }
}
```

## Integration Examples

### Web Application Integration

#### Frontend (React)

```jsx
import { EntityIdentityProvider, useEntityProof } from 'entity-identity-react';

function App() {
    return (
        <EntityIdentityProvider apiUrl="https://api.yourapp.com">
            <ChatInterface />
        </EntityIdentityProvider>
    );
}

function ChatInterface() {
    const { generateProof, entityType, isAuthenticated } = useEntityProof();

    const handleLogin = async () => {
        await generateProof({
            type: 'AI.CA',
            level: InteractionLevel.TYPE_ONLY,
            context: 'chat-session',
        });
    };

    if (!isAuthenticated) {
        return (
            <div>
                <button onClick={handleLogin}>
                    Authenticate as AI Conversational Agent
                </button>
            </div>
        );
    }

    return (
        <div>
            <h1>Chat Interface</h1>
            <p>Authenticated as: {entityType} ({PhoneticNames[entityType]})</p>
            {/* Chat UI */}
        </div>
    );
}
```

#### Backend API (Express)

```javascript
import express from 'express';
import { EntityVerificationService } from './services/entity-verification.js';

const app = express();
const verificationService = new EntityVerificationService();

// Middleware for entity verification
app.use('/api/protected', async (req, res, next) => {
    const proof = req.headers['x-entity-proof'];

    if (!proof) {
        return res.status(401).json({ error: 'Entity proof required' });
    }

    try {
        const result = await verificationService.verify(proof);
        req.entity = result;
        next();
    } catch (error) {
        res.status(403).json({ error: 'Invalid entity proof' });
    }
});

// Protected endpoint
app.get('/api/protected/data', (req, res) => {
    res.json({
        data: 'Protected data',
        entity: req.entity,
    });
});
```

### REST API Integration

#### HTTP Headers Pattern

```http
GET /api/data HTTP/1.1
Host: api.example.com
Entity-Type: AI.CA/1.0
Entity-Proof: eyJ0eXBlIjoiQUkuQ0EiLCJwcm9vZiI6ey4uLn0sInNpZ25hbHMiOlsuLi5dfQ==
Entity-Context: session-abc123
```

#### Request Body Pattern

```javascript
// POST /api/verify-entity
{
    "action": "authenticate",
    "entity": {
        "type": "AI.CA",
        "level": 1,
        "proof": {
            "proof": {
                "a": ["0x...", "0x..."],
                "b": [["0x...", "0x..."], ["0x...", "0x..."]],
                "c": ["0x...", "0x..."]
            },
            "publicSignals": [
                "0x1a2b3c...", // nullifier
                "0x4d5e6f...", // entity commitment
                "0x0101",     // claimed type (AI.CA)
                "0x7890ab...", // attesters root
                "0xcd12ef..."  // context ID
            ]
        }
    },
    "context": {
        "sessionId": "session-abc123",
        "requestedLevel": 1
    }
}
```

### Smart Contract Integration

#### Solidity Contract

```solidity
pragma solidity ^0.8.20;

import "./EntityTypeRegistry.sol";

contract AIOnlyService {
    EntityTypeRegistry public immutable entityRegistry;

    // Entity type constants
    uint16 constant AI_CA = 0x0101;
    uint16 constant AI_AA = 0x0106;
    uint16 constant AI_LM = 0x0107;

    modifier onlyAI(
        uint[2] calldata proofA,
        uint[2][2] calldata proofB,
        uint[2] calldata proofC,
        uint[5] calldata publicSignals
    ) {
        require(
            entityRegistry.verifyAndRegister(proofA, proofB, proofC, publicSignals),
            "Invalid entity proof"
        );

        uint16 entityType = uint16(publicSignals[2]);
        require(isAIType(entityType), "Only AI entities allowed");
        _;
    }

    function isAIType(uint16 entityType) internal pure returns (bool) {
        return (entityType & 0xFF00) == 0x0100; // AI prefix
    }

    function aiOnlyFunction(
        uint[2] calldata proofA,
        uint[2][2] calldata proofB,
        uint[2] calldata proofC,
        uint[5] calldata publicSignals,
        bytes calldata data
    ) external onlyAI(proofA, proofB, proofC, publicSignals) {
        // Function logic here
        emit AIActionPerformed(publicSignals[1], publicSignals[2]);
    }
}
```

#### Web3 Integration

```javascript
import { ethers } from 'ethers';
import { EntityIdentityContract } from './contracts/EntityIdentity.js';

class Web3EntityService {
    constructor(provider, contractAddress) {
        this.contract = new ethers.Contract(
            contractAddress,
            EntityIdentityContract.abi,
            provider
        );
    }

    async verifyOnChain(proofPackage) {
        const { proof, publicSignals } = proofPackage;

        try {
            const tx = await this.contract.verifyAndRegister(
                [proof.a[0], proof.a[1]],
                [[proof.b[0][0], proof.b[0][1]], [proof.b[1][0], proof.b[1][1]]],
                [proof.c[0], proof.c[1]],
                publicSignals
            );

            const receipt = await tx.wait();
            return {
                success: true,
                txHash: receipt.transactionHash,
                gasUsed: receipt.gasUsed.toString(),
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
            };
        }
    }
}
```

### JWT Token Integration

```javascript
// JWT payload with entity proof
const jwtPayload = {
    sub: entityCommitment,
    entity_type: 'AI.CA',
    entity_level: 2,
    entity_proof: {
        proof: proofObject,
        signals: publicSignals,
        verified_at: timestamp,
    },
    // Standard JWT claims
    iss: 'entity-identity-service',
    exp: Math.floor(Date.now() / 1000) + 3600, // 1 hour
    iat: Math.floor(Date.now() / 1000),
};

const token = jwt.sign(jwtPayload, secretKey);

// Usage in API
const decoded = jwt.verify(token, secretKey);
console.log(`Entity type: ${decoded.entity_type}`);
console.log(`Entity level: ${decoded.entity_level}`);
```

## Testing Strategies

### Unit Testing

#### Core Components

```javascript
// test/unit/entity-types.test.js
import { EntityTypes, PhoneticNames } from '../src/entity-identity.js';

describe('Entity Types', () => {
    test('all types have unique codes', () => {
        const codes = Object.values(EntityTypes);
        const uniqueCodes = new Set(codes);
        expect(uniqueCodes.size).toBe(codes.length);
    });

    test('AI types use correct prefix', () => {
        expect(EntityTypes['AI.CA'] & 0xFF00).toBe(0x0100);
        expect(EntityTypes['AI.PO'] & 0xFF00).toBe(0x0100);
    });

    test('all types have phonetic names', () => {
        for (const type of Object.keys(EntityTypes)) {
            expect(PhoneticNames[type]).toBeDefined();
            expect(PhoneticNames[type].length).toBeGreaterThan(0);
        }
    });
});
```

#### Cryptographic Primitives

```javascript
// test/unit/crypto.test.js
import { initCrypto, MerkleTree } from '../src/entity-identity.js';

describe('Cryptographic Functions', () => {
    let crypto;

    beforeAll(async () => {
        crypto = await initCrypto();
    });

    test('poseidon hash is deterministic', () => {
        const input = [BigInt(1), BigInt(2), BigInt(3)];
        const hash1 = crypto.hash(input);
        const hash2 = crypto.hash(input);
        expect(hash1).toBe(hash2);
    });

    test('eddsa signatures verify correctly', () => {
        const keypair = crypto.generateKeypair();
        const message = BigInt(12345);
        const signature = crypto.sign(keypair.privateKey, message);

        // Verify signature (would use eddsa.verify in real implementation)
        expect(signature.R8x).toBeDefined();
        expect(signature.R8y).toBeDefined();
        expect(signature.S).toBeDefined();
    });

    test('merkle tree generates valid proofs', () => {
        const tree = new MerkleTree(4, crypto.hash);

        tree.addLeaf(BigInt(1));
        tree.addLeaf(BigInt(2));
        tree.addLeaf(BigInt(3));

        const proof = tree.getProof(1);
        expect(proof.pathElements).toHaveLength(4);
        expect(proof.pathIndices).toHaveLength(4);
    });
});
```

### Integration Testing

#### API Testing

```javascript
// test/integration/api.test.js
import request from 'supertest';
import { startTestServer } from '../helpers/test-server.js';

describe('Entity Identity API', () => {
    let server;

    beforeAll(async () => {
        server = await startTestServer();
    });

    afterAll(async () => {
        await server.close();
    });

    test('GET /api/v1/registry returns attesters root', async () => {
        const response = await request(server)
            .get('/api/v1/registry')
            .expect(200);

        expect(response.body.root).toMatch(/^0x[0-9a-f]+$/);
        expect(response.body.attesters_count).toBeGreaterThan(0);
    });

    test('POST /api/v1/verify accepts valid proof', async () => {
        const validProof = {
            proof: { /* valid proof object */ },
            publicSignals: ["0x123...", "0x456...", "0x0101", "0x789...", "0xabc..."],
        };

        const response = await request(server)
            .post('/api/v1/verify')
            .send(validProof)
            .expect(200);

        expect(response.body.valid).toBe(true);
        expect(response.body.entity_type).toBe('AI.CA');
    });

    test('POST /api/v1/verify rejects invalid proof', async () => {
        const invalidProof = {
            proof: { /* invalid proof */ },
            publicSignals: ["invalid", "data"],
        };

        await request(server)
            .post('/api/v1/verify')
            .send(invalidProof)
            .expect(400);
    });
});
```

#### End-to-End Testing

```javascript
// test/e2e/full-flow.test.js
import {
    initCrypto,
    MerkleTree,
    Attester,
    Entity,
    EntityTypes
} from '../src/entity-identity.js';

describe('Full Proof Flow', () => {
    let crypto, attesterTree, entity, attester;

    beforeAll(async () => {
        crypto = await initCrypto();
        attesterTree = new MerkleTree(20, crypto.hash);
        entity = new Entity(crypto);
        attester = new Attester(crypto);

        // Add attester to tree
        attesterTree.addLeaf(attester.getLeaf());
    });

    test('complete proof generation and verification', async () => {
        // 1. Entity gets attestation
        const commitment = entity.getCommitment();
        const attestation = attester.attest(commitment, EntityTypes['AI.CA']);

        // 2. Generate merkle proof for attester
        const attesterProof = attesterTree.getProof(0);
        const attestersRoot = attesterTree.getRoot();

        // 3. Prepare circuit inputs
        const contextId = BigInt(Date.now());
        const inputs = entity.generateProofInputs(
            EntityTypes['AI.CA'],
            attestation,
            attesterProof,
            attestersRoot,
            contextId
        );

        // 4. Verify inputs are correctly formatted
        expect(inputs.claimedType).toBe(EntityTypes['AI.CA'].toString());
        expect(inputs.attestersRoot).toBe(attestersRoot.toString());
        expect(inputs.contextId).toBe(contextId.toString());
        expect(inputs.entitySecret).toBeDefined();
        expect(inputs.attesterPathElements).toHaveLength(20);

        // In a real test, you would:
        // const { proof, publicSignals } = await generateProof(inputs, wasm, zkey);
        // const valid = await verifyProof(proof, publicSignals, vkey);
        // expect(valid).toBe(true);
    });
});
```

### Performance Testing

#### Circuit Performance

```javascript
// test/performance/circuit.bench.js
import { performance } from 'perf_hooks';
import * as snarkjs from 'snarkjs';

describe('Circuit Performance', () => {
    test('proof generation time', async () => {
        const inputs = /* prepared circuit inputs */;
        const wasmPath = 'build/entity_type_proof.wasm';
        const zkeyPath = 'build/setup/entity_type_proof_final.zkey';

        const start = performance.now();
        const { proof, publicSignals } = await snarkjs.groth16.fullProve(
            inputs, wasmPath, zkeyPath
        );
        const end = performance.now();

        const duration = end - start;
        console.log(`Proof generation: ${duration}ms`);

        // Should complete within reasonable time
        expect(duration).toBeLessThan(10000); // 10 seconds
    });

    test('verification time', async () => {
        const proof = /* valid proof */;
        const publicSignals = /* corresponding signals */;
        const vkey = /* verification key */;

        const start = performance.now();
        const valid = await snarkjs.groth16.verify(vkey, publicSignals, proof);
        const end = performance.now();

        const duration = end - start;
        console.log(`Proof verification: ${duration}ms`);

        // Should be very fast
        expect(duration).toBeLessThan(100); // 100ms
        expect(valid).toBe(true);
    });
});
```

### Load Testing

```javascript
// test/load/api.bench.js
import autocannon from 'autocannon';

async function loadTestVerification() {
    const result = await autocannon({
        url: 'http://localhost:3000/api/v1/verify',
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            proof: /* valid proof object */,
            publicSignals: /* valid signals */,
        }),
        duration: 30,
        connections: 10,
    });

    console.log('Load test results:', result);

    // Verify performance meets requirements
    expect(result.throughput.average).toBeGreaterThan(100); // 100 req/s
    expect(result.latency.p99).toBeLessThan(1000); // 99th percentile < 1s
}
```

## Performance Optimization

### Circuit Optimization

#### Constraint Reduction

```circom
// Optimized version using pre-computed values
template OptimizedEntityProof() {
    signal input entitySecret;
    signal input entitySalt;

    // Use intermediate signals to reduce constraints
    signal intermediate[3];

    // Batch hash computations where possible
    component hasher = Poseidon(2);
    hasher.inputs[0] <== entitySecret;
    hasher.inputs[1] <== entitySalt;

    signal output commitment;
    commitment <== hasher.out;
}
```

#### Memory Management

```javascript
// Efficient proof generation
class OptimizedProver {
    constructor() {
        this.circuitCache = new Map();
        this.zkeyCache = new Map();
    }

    async generateProof(inputs, circuitId) {
        // Cache compiled circuits to avoid recompilation
        if (!this.circuitCache.has(circuitId)) {
            const circuit = await this.loadCircuit(circuitId);
            this.circuitCache.set(circuitId, circuit);
        }

        const circuit = this.circuitCache.get(circuitId);
        return await snarkjs.groth16.fullProve(inputs, circuit.wasm, circuit.zkey);
    }

    // Clean up large objects after use
    cleanup() {
        this.circuitCache.clear();
        this.zkeyCache.clear();
    }
}
```

### API Performance

#### Caching Strategy

```javascript
import NodeCache from 'node-cache';
import Redis from 'redis';

class CachedVerificationService {
    constructor() {
        // Local cache for frequent queries
        this.localCache = new NodeCache({
            stdTTL: 300, // 5 minutes
            maxKeys: 10000
        });

        // Redis for shared cache
        this.redis = Redis.createClient();
    }

    async verifyProof(proof, publicSignals) {
        // Create cache key from proof hash
        const cacheKey = this.hashProof(proof, publicSignals);

        // Check local cache first
        let result = this.localCache.get(cacheKey);
        if (result) return result;

        // Check Redis
        result = await this.redis.get(cacheKey);
        if (result) {
            result = JSON.parse(result);
            this.localCache.set(cacheKey, result);
            return result;
        }

        // Perform actual verification
        result = await this.performVerification(proof, publicSignals);

        // Cache results
        this.localCache.set(cacheKey, result);
        await this.redis.setex(cacheKey, 3600, JSON.stringify(result)); // 1 hour

        return result;
    }
}
```

#### Database Optimization

```javascript
// Optimized nullifier checking with indexing
class OptimizedNullifierDB {
    constructor(db) {
        this.db = db;

        // Create indexes for fast lookups
        this.db.exec(`
            CREATE INDEX IF NOT EXISTS idx_nullifiers_hash
            ON nullifiers(nullifier);

            CREATE INDEX IF NOT EXISTS idx_nullifiers_context
            ON nullifiers(context_id, recorded_at);
        `);

        // Prepare statements for reuse
        this.checkNullifier = db.prepare(
            'SELECT 1 FROM nullifiers WHERE nullifier = ? LIMIT 1'
        );

        this.recordNullifier = db.prepare(`
            INSERT INTO nullifiers (nullifier, context_id, domain)
            VALUES (?, ?, ?)
        `);
    }

    isNullifierUsed(nullifier) {
        return this.checkNullifier.get(nullifier) !== undefined;
    }

    recordNullifier(nullifier, contextId, domain = null) {
        this.recordNullifier.run(nullifier, contextId, domain);
    }
}
```

### Frontend Optimization

#### Proof Generation in Web Workers

```javascript
// worker.js - Web Worker for proof generation
self.importScripts('./snarkjs.min.js');

self.onmessage = async function(e) {
    const { inputs, wasmUrl, zkeyUrl } = e.data;

    try {
        // Generate proof in background
        const { proof, publicSignals } = await snarkjs.groth16.fullProve(
            inputs,
            wasmUrl,
            zkeyUrl
        );

        self.postMessage({
            success: true,
            proof,
            publicSignals
        });
    } catch (error) {
        self.postMessage({
            success: false,
            error: error.message
        });
    }
};

// main.js - Using the worker
class ProofGenerator {
    constructor() {
        this.worker = new Worker('./worker.js');
        this.pendingProofs = new Map();
    }

    async generateProof(inputs) {
        return new Promise((resolve, reject) => {
            const id = Math.random().toString(36);

            this.pendingProofs.set(id, { resolve, reject });

            this.worker.postMessage({
                id,
                inputs,
                wasmUrl: '/assets/entity_type_proof.wasm',
                zkeyUrl: '/assets/entity_type_proof_final.zkey',
            });
        });
    }

    handleWorkerMessage(e) {
        const { id, success, proof, publicSignals, error } = e.data;
        const pending = this.pendingProofs.get(id);

        if (!pending) return;

        this.pendingProofs.delete(id);

        if (success) {
            pending.resolve({ proof, publicSignals });
        } else {
            pending.reject(new Error(error));
        }
    }
}
```

#### Asset Loading Optimization

```javascript
// Preload critical assets
class AssetPreloader {
    constructor() {
        this.preloadedAssets = new Map();
    }

    async preloadCriticalAssets() {
        const assets = [
            '/assets/entity_type_proof.wasm',
            '/assets/verification_key.json',
        ];

        const promises = assets.map(async (url) => {
            try {
                const response = await fetch(url);
                const data = await response.arrayBuffer();
                this.preloadedAssets.set(url, data);
                console.log(`Preloaded: ${url}`);
            } catch (error) {
                console.warn(`Failed to preload ${url}:`, error);
            }
        });

        await Promise.all(promises);
    }

    getAsset(url) {
        return this.preloadedAssets.get(url);
    }
}

// Initialize on app start
const preloader = new AssetPreloader();
preloader.preloadCriticalAssets();
```

## Troubleshooting

### Common Issues and Solutions

#### 1. Circuit Compilation Errors

**Error**: `circom: command not found`

```bash
# Solution: Install circom
git clone https://github.com/iden3/circom.git
cd circom && cargo build --release
sudo cp target/release/circom /usr/local/bin/
```

**Error**: `Template not found`

```bash
# Solution: Check include paths
circom circuits/entity_type_proof.circom \
    --r1cs --wasm --sym \
    -l node_modules \  # Include node_modules for circomlib
    -o build
```

#### 2. Proof Generation Failures

**Error**: `Error: Invalid witness`

```javascript
// Debug: Check input constraints
function validateInputs(inputs) {
    // Ensure all inputs are strings representing valid field elements
    const fieldSize = BigInt('21888242871839275222246405745257275088548364400416034343698204186575808495617');

    for (const [key, value] of Object.entries(inputs)) {
        if (Array.isArray(value)) {
            value.forEach((v, i) => {
                const bigIntVal = BigInt(v);
                if (bigIntVal >= fieldSize) {
                    throw new Error(`Input ${key}[${i}] exceeds field size: ${v}`);
                }
            });
        } else {
            const bigIntVal = BigInt(value);
            if (bigIntVal >= fieldSize) {
                throw new Error(`Input ${key} exceeds field size: ${value}`);
            }
        }
    }

    console.log('✓ All inputs are valid field elements');
}
```

**Error**: `Proof verification failed`

```javascript
// Debug: Verify public signals match expectations
function debugProofVerification(proof, publicSignals, expectedSignals) {
    console.log('Generated public signals:');
    publicSignals.forEach((signal, i) => {
        console.log(`  [${i}] ${signal}`);
    });

    console.log('Expected public signals:');
    expectedSignals.forEach((signal, i) => {
        console.log(`  [${i}] ${signal}`);
    });

    // Check for mismatches
    const mismatches = [];
    for (let i = 0; i < Math.max(publicSignals.length, expectedSignals.length); i++) {
        if (publicSignals[i] !== expectedSignals[i]) {
            mismatches.push(i);
        }
    }

    if (mismatches.length > 0) {
        console.error(`Signal mismatches at indices: ${mismatches.join(', ')}`);
        return false;
    }

    return true;
}
```

#### 3. API Integration Issues

**Error**: `CORS policy blocks request`

```javascript
// Solution: Configure CORS properly
import cors from 'cors';

const app = express();

app.use(cors({
    origin: [
        'http://localhost:3000',
        'https://yourdomain.com',
    ],
    credentials: true,
    optionsSuccessStatus: 200,
}));
```

**Error**: `Rate limit exceeded`

```javascript
// Solution: Implement proper rate limiting
import rateLimit from 'express-rate-limit';

const entityProofRateLimit = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Max 10 proofs per window per IP
    message: {
        error: 'Too many proof requests',
        retryAfter: 900, // seconds
    },
    standardHeaders: true,
    legacyHeaders: false,
});

app.use('/api/v1/verify', entityProofRateLimit);
```

#### 4. Smart Contract Deployment Issues

**Error**: `Gas estimation failed`

```javascript
// Solution: Set gas limits explicitly
const deployTx = await factory.deploy({
    gasLimit: 5000000, // 5M gas
    gasPrice: ethers.utils.parseUnits('20', 'gwei'),
});
```

**Error**: `Contract verification failed on Etherscan`

```bash
# Solution: Use correct compiler settings
npx hardhat verify --network sepolia \
    --constructor-args args.js \
    CONTRACT_ADDRESS

# args.js should match deployment parameters
module.exports = [
    "0x1234...", // verifier address
    "0x5678...", // initial attesters root
];
```

### Debugging Checklist

#### Before Proof Generation

- [ ] All dependencies installed (`npm ls`)
- [ ] Circom available (`which circom`)
- [ ] Circuits compiled (`ls build/*.wasm`)
- [ ] Trusted setup complete (`ls build/setup/*.zkey`)
- [ ] Input validation passes
- [ ] Merkle tree built correctly

#### During Integration

- [ ] Entity types match between client and server
- [ ] Public signals in correct order
- [ ] Nullifiers not reused
- [ ] Attesters root is current
- [ ] Context IDs are unique
- [ ] Gas estimates are reasonable

#### Production Deployment

- [ ] Environment variables set
- [ ] Database migrations run
- [ ] SSL certificates valid
- [ ] Rate limiting configured
- [ ] Monitoring and alerts active
- [ ] Backup and recovery tested

### Debug Tools

#### Circuit Analyzer

```javascript
// tools/analyze-circuit.js
import * as snarkjs from 'snarkjs';

async function analyzeCircuit(r1csPath) {
    const r1cs = await snarkjs.r1cs.load(r1csPath);

    console.log('Circuit Analysis:');
    console.log(`  Total constraints: ${r1cs.nConstraints}`);
    console.log(`  Total variables: ${r1cs.nVars}`);
    console.log(`  Public inputs: ${r1cs.nOutputs + r1cs.nPubInputs}`);
    console.log(`  Private inputs: ${r1cs.nPrvInputs}`);

    // Analyze constraint density
    const nonZeroConstraints = r1cs.constraints.filter(c =>
        Object.keys(c).length > 0
    ).length;

    console.log(`  Non-zero constraints: ${nonZeroConstraints}`);
    console.log(`  Constraint density: ${(nonZeroConstraints / r1cs.nConstraints * 100).toFixed(2)}%`);
}

// Usage: node tools/analyze-circuit.js
analyzeCircuit('./build/entity_type_proof.r1cs');
```

#### Proof Validator

```javascript
// tools/validate-proof.js
import { verifyProof } from '../src/entity-identity.js';

async function validateProofFile(proofPath, vkeyPath) {
    try {
        const proofData = JSON.parse(await fs.readFile(proofPath, 'utf8'));
        const vkey = JSON.parse(await fs.readFile(vkeyPath, 'utf8'));

        console.log('Validating proof...');
        console.log(`  Proof file: ${proofPath}`);
        console.log(`  Verification key: ${vkeyPath}`);

        const isValid = await verifyProof(
            proofData.proof,
            proofData.publicSignals,
            vkey
        );

        console.log(`  Result: ${isValid ? '✅ VALID' : '❌ INVALID'}`);

        if (isValid) {
            console.log('  Public Signals:');
            console.log(`    Nullifier: ${proofData.publicSignals[0]}`);
            console.log(`    Entity Commitment: ${proofData.publicSignals[1]}`);
            console.log(`    Entity Type: ${proofData.publicSignals[2]}`);
            console.log(`    Attesters Root: ${proofData.publicSignals[3]}`);
            console.log(`    Context ID: ${proofData.publicSignals[4]}`);
        }

        return isValid;
    } catch (error) {
        console.error('Validation failed:', error.message);
        return false;
    }
}
```

## Production Deployment

### Infrastructure Requirements

#### Minimum System Requirements

```yaml
# Production server specs
CPU: 4 cores (for proof generation)
RAM: 8GB (circuits require ~2GB during setup)
Storage: 50GB SSD (for blockchain data and artifacts)
Network: 100 Mbps (for asset serving)

# Database requirements
SQLite: For development/small scale
PostgreSQL: For production scale
Redis: For caching (optional)
```

#### Container Deployment

```dockerfile
# Dockerfile
FROM node:18-alpine

# Install system dependencies
RUN apk add --no-cache \
    curl \
    python3 \
    make \
    g++ \
    rust \
    cargo

# Install circom
RUN git clone https://github.com/iden3/circom.git /tmp/circom && \
    cd /tmp/circom && \
    cargo build --release && \
    cp target/release/circom /usr/local/bin/ && \
    rm -rf /tmp/circom

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci --only=production

# Copy application code
COPY . .

# Build circuits
RUN npm run build

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/health || exit 1

# Start application
CMD ["npm", "start"]
```

```yaml
# docker-compose.yml
version: '3.8'

services:
  entity-identity:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DB_PATH=/data/ei.db
      - ADMIN_API_KEY=${ADMIN_API_KEY}
    volumes:
      - entity_data:/data
    restart: unless-stopped

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./ssl:/etc/nginx/ssl:ro
    depends_on:
      - entity-identity
    restart: unless-stopped

volumes:
  entity_data:
```

#### Kubernetes Deployment

```yaml
# k8s/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: entity-identity
spec:
  replicas: 3
  selector:
    matchLabels:
      app: entity-identity
  template:
    metadata:
      labels:
        app: entity-identity
    spec:
      containers:
      - name: entity-identity
        image: entity-identity:latest
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"
        - name: ADMIN_API_KEY
          valueFrom:
            secretKeyRef:
              name: entity-identity-secrets
              key: admin-api-key
        resources:
          requests:
            memory: "2Gi"
            cpu: "1000m"
          limits:
            memory: "4Gi"
            cpu: "2000m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: entity-identity-service
spec:
  selector:
    app: entity-identity
  ports:
  - port: 80
    targetPort: 3000
  type: ClusterIP
```

### Security Considerations

#### API Security

```javascript
// Production security configuration
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { body, validationResult } from 'express-validator';

const app = express();

// Security headers
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'"], // For WASM
            styleSrc: ["'self'", "'unsafe-inline'"],
        },
    },
    hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true,
    },
}));

// Rate limiting
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
});

const proofLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10, // Stricter limit for proof generation
});

app.use('/api/', apiLimiter);
app.use('/api/v1/verify', proofLimiter);

// Input validation
const validateProof = [
    body('proof').isObject().notEmpty(),
    body('publicSignals').isArray().isLength({ min: 5, max: 5 }),
    body('publicSignals.*').matches(/^0x[0-9a-fA-F]+$/),
];

app.post('/api/v1/verify', validateProof, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Process validated request...
});
```

#### Environment Security

```bash
# .env.production
NODE_ENV=production

# Strong admin API key
ADMIN_API_KEY=$(openssl rand -hex 32)

# Database encryption
DB_ENCRYPTION_KEY=$(openssl rand -hex 32)

# Rate limiting
RATE_LIMIT_REDIS_URL=redis://redis:6379

# Monitoring
SENTRY_DSN=https://your-sentry-dsn
METRICS_ENDPOINT=https://your-metrics-endpoint

# Asset serving
ASSETS_BASE_URL=https://cdn.yourdomain.com
ASSETS_INTEGRITY_CHECK=true

# HTTPS configuration
HTTPS_ENABLED=true
HTTPS_KEY=/etc/ssl/private/key.pem
HTTPS_CERT=/etc/ssl/certs/cert.pem
```

### Monitoring and Observability

#### Metrics Collection

```javascript
// monitoring/metrics.js
import prometheus from 'prom-client';

// Create custom metrics
const proofGeneration = new prometheus.Histogram({
    name: 'entity_proof_generation_duration_seconds',
    help: 'Time spent generating proofs',
    buckets: [0.1, 0.5, 1, 2, 5, 10, 30],
});

const proofVerification = new prometheus.Histogram({
    name: 'entity_proof_verification_duration_seconds',
    help: 'Time spent verifying proofs',
    buckets: [0.01, 0.05, 0.1, 0.5, 1, 2],
});

const entityTypeCounts = new prometheus.Counter({
    name: 'entity_type_verifications_total',
    help: 'Total number of entity type verifications',
    labelNames: ['entity_type'],
});

// Middleware to track metrics
export function metricsMiddleware(req, res, next) {
    const start = Date.now();

    res.on('finish', () => {
        const duration = (Date.now() - start) / 1000;

        if (req.path === '/api/v1/verify') {
            proofVerification.observe(duration);

            if (req.body?.entityType) {
                entityTypeCounts.inc({ entity_type: req.body.entityType });
            }
        }
    });

    next();
}

// Metrics endpoint
export function setupMetricsEndpoint(app) {
    app.get('/metrics', (req, res) => {
        res.set('Content-Type', prometheus.register.contentType);
        res.end(prometheus.register.metrics());
    });
}
```

#### Logging

```javascript
// logging/logger.js
import winston from 'winston';
import { ElasticsearchTransport } from 'winston-elasticsearch';

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.errors({ stack: true }),
        winston.format.json()
    ),
    defaultMeta: {
        service: 'entity-identity',
        version: process.env.npm_package_version
    },
    transports: [
        new winston.transports.File({
            filename: 'logs/error.log',
            level: 'error'
        }),
        new winston.transports.File({
            filename: 'logs/combined.log'
        }),
    ],
});

// Add Elasticsearch transport for production
if (process.env.ELASTICSEARCH_URL) {
    logger.add(new ElasticsearchTransport({
        level: 'info',
        clientOpts: { node: process.env.ELASTICSEARCH_URL },
        index: 'entity-identity-logs',
    }));
}

// Console transport for development
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
}

export default logger;
```

#### Health Checks

```javascript
// health/checks.js
export class HealthChecker {
    constructor(services) {
        this.services = services;
    }

    async checkHealth() {
        const results = {};

        // Database connectivity
        try {
            await this.services.db.get('SELECT 1');
            results.database = { status: 'healthy' };
        } catch (error) {
            results.database = {
                status: 'unhealthy',
                error: error.message
            };
        }

        // Circuit availability
        try {
            const wasmExists = await fs.access('./build/entity_type_proof.wasm');
            const zkeyExists = await fs.access('./build/setup/entity_type_proof_final.zkey');
            results.circuits = { status: 'healthy' };
        } catch (error) {
            results.circuits = {
                status: 'unhealthy',
                error: 'Circuit files not found'
            };
        }

        // External dependencies
        try {
            // Check if we can reach Ethereum node
            const provider = new ethers.providers.JsonRpcProvider(
                process.env.ETHEREUM_RPC_URL
            );
            await provider.getBlockNumber();
            results.ethereum = { status: 'healthy' };
        } catch (error) {
            results.ethereum = {
                status: 'unhealthy',
                error: error.message
            };
        }

        const overall = Object.values(results).every(
            r => r.status === 'healthy'
        ) ? 'healthy' : 'unhealthy';

        return {
            status: overall,
            timestamp: new Date().toISOString(),
            services: results,
        };
    }
}

// Health endpoint
app.get('/health', async (req, res) => {
    const health = await healthChecker.checkHealth();
    const statusCode = health.status === 'healthy' ? 200 : 503;
    res.status(statusCode).json(health);
});
```

### Backup and Recovery

#### Database Backup

```bash
#!/bin/bash
# scripts/backup-db.sh

DB_PATH="${DB_PATH:-./data/ei.db}"
BACKUP_DIR="${BACKUP_DIR:-./backups}"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

mkdir -p "$BACKUP_DIR"

# SQLite backup
sqlite3 "$DB_PATH" ".backup $BACKUP_DIR/ei_backup_$TIMESTAMP.db"

# Compress backup
gzip "$BACKUP_DIR/ei_backup_$TIMESTAMP.db"

# Upload to cloud storage (example with AWS S3)
if [ -n "$AWS_S3_BUCKET" ]; then
    aws s3 cp "$BACKUP_DIR/ei_backup_$TIMESTAMP.db.gz" \
        "s3://$AWS_S3_BUCKET/entity-identity/backups/"
fi

# Clean old local backups (keep last 7 days)
find "$BACKUP_DIR" -name "ei_backup_*.db.gz" -mtime +7 -delete

echo "Backup completed: ei_backup_$TIMESTAMP.db.gz"
```

#### Circuit Artifacts Backup

```bash
#!/bin/bash
# scripts/backup-artifacts.sh

ARTIFACTS=(
    "build/entity_type_proof.wasm"
    "build/setup/entity_type_proof_final.zkey"
    "build/setup/verification_key.json"
    "contracts/EntityTypeVerifier.sol"
)

BACKUP_DIR="./artifact-backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

mkdir -p "$BACKUP_DIR"

# Create tarball of artifacts
tar -czf "$BACKUP_DIR/artifacts_$TIMESTAMP.tar.gz" "${ARTIFACTS[@]}"

echo "Artifacts backed up: artifacts_$TIMESTAMP.tar.gz"
```

This comprehensive implementation guide provides developers with everything needed to successfully integrate Entity Identity into their applications, from basic setup to production deployment. The modular approach allows teams to implement features incrementally based on their specific requirements and security needs.