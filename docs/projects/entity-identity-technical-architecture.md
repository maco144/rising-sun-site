# Entity Identity: Technical Architecture Documentation

> **Version:** 1.0
> **Date:** 2026-01-31
> **Author:** Entity Identity Development Team

## Executive Summary

Entity Identity is a zero-knowledge proof system that enables entities (AIs, robots, humans, hybrids) to prove their type without revealing their identity. The system combines cryptographic privacy with public accountability through a dual-layer architecture, supporting graduated disclosure levels for different interaction contexts.

**Core Innovation:** Entities can prove "I am type X" while keeping "which specific entity I am" private, with optional reputation building through public attestation trails.

## 1. System Overview

### 1.1 Mission Statement

Entity Identity addresses three critical problems in the emerging AI-human digital landscape:

1. **Identity Verification**: How do we verify entity types without creating surveillance systems?
2. **Sybil Resistance**: How do we prevent spam and abuse while preserving privacy?
3. **Trust Building**: How do we enable reputation while maintaining anonymity options?

### 1.2 Design Principles

- **Privacy by Design**: Identity remains hidden by default
- **Graduated Disclosure**: More sensitive interactions require more accountability
- **Cryptographic Guarantees**: Trust through math, not institutional promises
- **Decentralized Architecture**: No single point of control or failure
- **Interoperability**: Works across platforms and protocols

## 2. Architecture Overview

### 2.1 Dual-Layer System

Entity Identity operates on two complementary layers:

```
┌─────────────────────────────────────────────────────────────────┐
│                      DUAL-LAYER SYSTEM                          │
├─────────────────────────────────────────────────────────────────┤
│  Layer 1: ZK Privacy           │  Layer 2: Public Trust         │
│  • Proves type without ID      │  • Attestation history         │
│  • Hides: entity, attester     │  • Builds reputation           │
│  • Uses: Groth16 proofs        │  • Sybil resistance            │
├─────────────────────────────────────────────────────────────────┤
│  Interaction Levels:                                            │
│  0 = Anonymous       │ Browsing, reading                        │
│  1 = Type Only (ZK)  │ Comments, basic API access               │
│  2 = Type + Standing │ Transactions, publishing                 │
│  3 = Full Account.   │ Legal, financial, physical access        │
└─────────────────────────────────────────────────────────────────┘
```

**Layer 1 - ZK Privacy:**
- Zero-knowledge proofs using Groth16 protocol
- Proves entity type membership without revealing identity
- Cryptographically enforced privacy guarantees
- Nullifier system prevents double-spending

**Layer 2 - Public Trust:**
- Transparent attestation registry (on-chain or verifiable logs)
- Optional reputation building through visible attestation counts
- Accountability trail for high-stakes interactions
- Merkle tree proofs for efficient verification

### 2.2 Component Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    ENTITY IDENTITY SYSTEM                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐          │
│  │   Entity    │    │  Attester   │    │  Verifier   │          │
│  │  (Prover)   │    │(Authority)  │    │(Relying     │          │
│  │             │    │             │    │ Party)      │          │
│  └─────────────┘    └─────────────┘    └─────────────┘          │
│         │                   │                   │               │
│         │                   │                   │               │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │              ZK CIRCUIT LAYER                               │ │
│  │  ┌─────────────────────────────────────────────────────────┐ │ │
│  │  │ entity_type_proof.circom - Core ZK Circuit            │ │ │
│  │  │ • Attestation Verification                             │ │ │
│  │  │ • Merkle Tree Membership                               │ │ │
│  │  │ • Nullifier Generation                                 │ │ │
│  │  │ • Type Validation                                      │ │ │
│  │  └─────────────────────────────────────────────────────────┘ │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │                 SDK LAYER                                   │ │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          │ │
│  │  │entity-      │  │dual-        │  │CLI Tool     │          │ │
│  │  │identity.js  │  │system.js    │  │(cli.js)     │          │ │
│  │  └─────────────┘  └─────────────┘  └─────────────┘          │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │              INFRASTRUCTURE LAYER                           │ │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          │ │
│  │  │REST API     │  │Smart        │  │Database     │          │ │
│  │  │Server       │  │Contracts    │  │(SQLite)     │          │ │
│  │  │(Express)    │  │(Solidity)   │  │             │          │ │
│  │  └─────────────┘  └─────────────┘  └─────────────┘          │ │
│  └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

## 3. Core Components

### 3.1 Entity Types System

Entity Identity defines 16 standardized entity types across 4 categories:

| Category | Code | Hex | Phonetic | Description |
|----------|------|-----|----------|-------------|
| **AI - Artificial Intelligence** ||||
| AI.CA | 0x0101 | Kah | Conversational Agent |
| AI.PO | 0x0102 | Poe | Program Orchestrator |
| AI.WS | 0x0103 | Wiz | Web Site |
| AI.OS | 0x0104 | Aus | Operating System |
| AI.GN | 0x0105 | Jen | Generative Model |
| AI.AA | 0x0106 | Ahh | Autonomous Agent |
| AI.LM | 0x0107 | Elm | Language Model |
| AI.DB | 0x0108 | Deb | Data Broker |
| AI.JG | 0x0109 | Jig | Judge/Evaluator |
| AI.SY | 0x010A | Sigh | Synthetic Media Generator |
| **AR - Artificial Robotics** ||||
| AR.RB | 0x0201 | Rob | Robot Bot |
| AR.DR | 0x0202 | Dar | Drone |
| AR.VH | 0x0203 | Vee | Vehicle |
| **HU - Human** ||||
| HU.US | 0x0301 | Who | Human User |
| **HY - Hybrid** ||||
| HY.CP | 0x0401 | Kip | Copilot (human-AI pair) |
| HY.HS | 0x0402 | His | Hive Swarm |

**Design Features:**
- 16-bit encoding scheme: `prefix (8 bits) | category (8 bits)`
- Phonetic names for verbal disambiguation
- Extensible structure for future entity types
- Hex codes for efficient circuit representation

### 3.2 Zero-Knowledge Circuit Architecture

#### 3.2.1 Circuit Overview

The core ZK circuit (`entity_type_proof.circom`) implements the following proof statement:

> **Proof Statement:** "I possess a valid attestation from an approved attester that I am entity type X, without revealing which entity I am or which attester vouched for me."

```circom
template EntityTypeProof(merkleDepth) {
    // Public inputs (visible to verifier)
    signal input claimedType;     // Entity type being claimed
    signal input attestersRoot;   // Merkle root of approved attesters
    signal input contextId;       // Context for nullifier

    // Private inputs (hidden from verifier)
    signal input entitySecret;    // Entity's secret identity
    signal input entitySalt;      // Salt for commitment
    signal input attesterPubKeyX; // Attester public key
    signal input attesterPubKeyY;
    signal input signatureR8X;    // EdDSA signature components
    signal input signatureR8Y;
    signal input signatureS;
    signal input attesterPathElements[merkleDepth];  // Merkle proof
    signal input attesterPathIndices[merkleDepth];

    // Public outputs
    signal output nullifier;        // Prevents double-use
    signal output entityCommitment; // Stable pseudonymous identifier
}
```

#### 3.2.2 Circuit Components

**1. Attestation Verifier**
```circom
template AttestationVerifier() {
    // Verifies EdDSA signature: Sign(Poseidon(commitment, type))
    // Uses circomlib's EdDSAPoseidonVerifier
}
```

**2. Merkle Tree Verifier**
```circom
template MerkleTreeVerifier(depth) {
    // Proves attester membership in approved set
    // Uses Poseidon hash for ZK-friendly operations
}
```

**3. Nullifier Generator**
```circom
template NullifierGenerator() {
    // Creates unique identifier: Poseidon(entitySecret, contextId)
    // Prevents replay attacks while maintaining privacy
}
```

#### 3.2.3 Constraint Analysis

| Component | Approximate Constraints | Purpose |
|-----------|------------------------|---------|
| Poseidon(2) | ~300 | ZK-friendly hashing |
| EdDSA Verification | ~6,000 | Signature verification |
| Merkle Verifier (depth=20) | ~6,000 | Set membership proof |
| Binary Constraints | ~100 | Path validation |
| **Total** | **~13,000** | **Complete circuit** |

**Performance Characteristics:**
- Proof generation: 2-5 seconds
- Proof size: ~200 bytes (Groth16)
- Verification time: ~10ms
- On-chain gas: ~250,000 gas

### 3.3 Cryptographic Primitives

#### 3.3.1 Poseidon Hash Function

**Purpose:** ZK-friendly hash function optimized for finite field arithmetic

**Properties:**
- Designed for arithmetic circuits
- ~300 constraints per 2-input hash (vs ~25,000 for SHA-256)
- Collision resistant and one-way
- Native finite field operations

**Usage in Entity Identity:**
```javascript
// Entity commitment
commitment = Poseidon(entitySecret, salt)

// Message signing
message = Poseidon(commitment, entityType)

// Merkle tree nodes
node = Poseidon(leftChild, rightChild)

// Nullifier generation
nullifier = Poseidon(entitySecret, contextId)
```

#### 3.3.2 EdDSA Signature Scheme

**Purpose:** Digital signatures compatible with ZK circuits

**Properties:**
- Edwards curve digital signature algorithm
- Deterministic signature generation
- Efficient circuit representation
- ~6,000 constraints for verification

**Attestation Flow:**
1. Attester generates EdDSA keypair
2. Entity creates commitment: `commitment = Poseidon(secret, salt)`
3. Attester signs message: `signature = EdDSA_Sign(Poseidon(commitment, type))`
4. Circuit verifies signature without revealing attester identity

#### 3.3.3 Groth16 Proof System

**Purpose:** Succinct non-interactive zero-knowledge proofs

**Properties:**
- Constant proof size (3 group elements)
- Constant verification time
- Requires trusted setup
- Optimal for production deployment

**Trusted Setup:**
```bash
# Powers of tau ceremony (universal)
snarkjs powersoftau new bn128 16 pot12_0000.ptau

# Circuit-specific setup
snarkjs groth16 setup circuit.r1cs pot12_final.ptau circuit_0000.zkey

# Generate verification key
snarkjs zkey export verificationkey circuit_0000.zkey verification_key.json
```

### 3.4 Merkle Tree Registry

#### 3.4.1 Attester Registry

**Purpose:** Maintain approved attesters in a verifiable set

**Structure:**
- Depth: 20 levels (supports ~1M attesters)
- Leaves: `Poseidon(attesterPubKeyX, attesterPubKeyY)`
- Updates: Root rotation with migration period

**Implementation:**
```javascript
class MerkleTree {
    constructor(depth, poseidonHash) {
        this.depth = depth;
        this.hash = poseidonHash;
        this.zeros = this._precomputeZeros();
    }

    addLeaf(leaf) {
        const index = this.leaves.length;
        this.leaves.push(BigInt(leaf));
        this._rebuild();
        return index;
    }

    getProof(index) {
        // Returns pathElements and pathIndices for circuit
    }
}
```

#### 3.4.2 Public Trust Registry

**Purpose:** Transparent attestation history for reputation building

**Structure:**
- On-chain smart contract or verifiable log
- Merkle tree of public attestations
- Efficient proof generation for standing verification

**Attestation Format:**
```solidity
struct PublicAttestation {
    bytes32 entityCommitment;
    uint16 entityType;
    bytes32 attesterPubKeyHash;
    uint256 timestamp;
    uint256 attestationId;
}
```

## 4. Smart Contract Architecture

### 4.1 Contract Overview

The smart contract layer provides on-chain verification and registry functionality:

```
┌─────────────────────────────────────────────────────────────────┐
│                    SMART CONTRACT LAYER                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐    ┌─────────────────┐                     │
│  │EntityTypeVerifier│    │EntityTypeRegistry│                   │
│  │                 │    │                 │                     │
│  │• Groth16        │    │• Proof          │                     │
│  │  Verification   │    │  Validation     │                     │
│  │• Auto-generated │    │• Nullifier      │                     │
│  │  from Circuit   │    │  Tracking       │                     │
│  │                 │    │• Registry State │                     │
│  └─────────────────┘    │• Admin Functions│                     │
│                         └─────────────────┘                     │
└─────────────────────────────────────────────────────────────────┘
```

### 4.2 EntityTypeRegistry.sol

**Core Functions:**

```solidity
contract EntityTypeRegistry {
    IVerifier public immutable verifier;
    mapping(bytes32 => uint16) public verifiedTypes;
    mapping(bytes32 => uint256) public verificationTimestamps;
    mapping(bytes32 => bool) public usedNullifiers;
    bytes32 public attestersRoot;

    function verifyAndRegister(
        uint[2] calldata proofA,
        uint[2][2] calldata proofB,
        uint[2] calldata proofC,
        uint[5] calldata publicSignals
    ) external;

    function getVerification(bytes32 commitment)
        external view returns (uint16 entityType, uint256 timestamp);

    function isVerificationFresh(bytes32 commitment, uint256 maxAge)
        external view returns (bool fresh);
}
```

**State Management:**
- **verifiedTypes**: Maps commitments to verified entity types
- **verificationTimestamps**: Tracks when verifications occurred
- **usedNullifiers**: Prevents proof replay attacks
- **attestersRoot**: Current approved attester set

**Security Features:**
- Nullifier replay protection
- Attesters root validation
- Type code validation
- Admin-controlled attester management

### 4.3 Deployment Architecture

**Network Deployment:**
```
Production (Sepolia Testnet):
├── EntityTypeVerifier: 0x7444ba1b14a8dfC3342e3190b2Be991bA4A3801E
└── EntityTypeRegistry: 0xFb637C39439f969e5Cc0b1910308146f1DD529Fe

Development (Localhost):
├── EntityTypeVerifier: 0x5FbDB2315678afecb367f032d93F642f64180aa3
└── EntityTypeRegistry: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
```

**Deployment Process:**
```bash
# Local development
npx hardhat node &
npx hardhat run scripts/deploy.js --network localhost

# Testnet deployment
npx hardhat run scripts/deploy.js --network sepolia
```

## 5. API Server Architecture

### 5.1 Server Overview

The REST API server (`api/server.js`) provides HTTP endpoints for attestation management and proof verification:

```
┌─────────────────────────────────────────────────────────────────┐
│                        API SERVER                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐    ┌─────────────────┐                     │
│  │   Express.js    │    │   SQLite DB     │                     │
│  │   Web Server    │    │                 │                     │
│  │                 │    │• Attesters      │                     │
│  │• REST API       │    │• Nullifiers     │                     │
│  │• Rate Limiting  │    │• Registry State │                     │
│  │• Authentication │    │• Audit Log      │                     │
│  │• CORS/Security  │    │                 │                     │
│  └─────────────────┘    └─────────────────┘                     │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │                    API ENDPOINTS                            │ │
│  │                                                             │ │
│  │  Registry: GET /api/v1/registry                            │ │
│  │  Attest:   POST /api/v1/attest                             │ │
│  │  Verify:   POST /api/v1/verify                             │ │
│  │  Admin:    POST /api/v1/admin/attesters                    │ │
│  │                                                             │ │
│  └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### 5.2 Database Schema

**Attesters Table:**
```sql
CREATE TABLE attesters (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    public_key_x TEXT NOT NULL,
    public_key_y TEXT NOT NULL,
    private_key_encrypted TEXT,
    merkle_index INTEGER,
    allowed_types TEXT NOT NULL,
    api_key_hash TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    revoked_at TEXT
);
```

**Nullifiers Table:**
```sql
CREATE TABLE nullifiers (
    nullifier TEXT PRIMARY KEY,
    context_id TEXT NOT NULL,
    domain TEXT,
    recorded_at TEXT DEFAULT CURRENT_TIMESTAMP
);
```

### 5.3 API Endpoints

| Method | Endpoint | Auth | Purpose |
|--------|----------|------|---------|
| GET | `/api/v1/registry` | None | Get attesters merkle root |
| GET | `/api/v1/registry/attesters` | None | List approved attesters |
| GET | `/api/v1/registry/attesters/:id/proof` | None | Get merkle proof for attester |
| POST | `/api/v1/attest` | Bearer | Create signed attestation |
| GET | `/api/v1/proving/assets` | None | Get circuit WASM + zkey URLs |
| POST | `/api/v1/verify` | None | Verify ZK proof |
| POST | `/api/v1/verify/record` | None | Record nullifier |
| POST | `/api/v1/admin/attesters` | Admin | Register new attester |
| DELETE | `/api/v1/admin/attesters/:id` | Admin | Revoke attester |

### 5.4 Authentication & Security

**Attester Authentication:**
- Bearer token authentication for attesters
- SHA-256 hashed API keys in database
- Per-attester type restrictions

**Admin Authentication:**
- API key-based admin access
- Environment variable configuration
- Separate admin endpoints

**Security Headers:**
```javascript
app.use(helmet());
app.use(cors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
    methods: ['GET', 'POST', 'DELETE'],
}));

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);
```

## 6. SDK Architecture

### 6.1 SDK Components

The Entity Identity SDK provides JavaScript libraries for integration:

```
┌─────────────────────────────────────────────────────────────────┐
│                         SDK LAYER                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │                 entity-identity.js                          │ │
│  │                                                             │ │
│  │  • EntityTypes (16 type constants)                         │ │
│  │  • PhoneticNames (verbal disambiguation)                   │ │
│  │  • MerkleTree (registry management)                        │ │
│  │  • Attester (attestation creation)                         │ │
│  │  • Entity (proof generation)                               │ │
│  │  • Cryptographic primitives                                │ │
│  │                                                             │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │                   dual-system.js                            │ │
│  │                                                             │ │
│  │  • InteractionLevel (0-3 disclosure levels)                │ │
│  │  • TrustHash (state commitment)                             │ │
│  │  • PublicTrustRegistry (reputation system)                 │ │
│  │  • DualProofCoordinator (proof orchestration)              │ │
│  │  • VerificationPolicy (access control)                     │ │
│  │                                                             │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │                      cli.js                                 │ │
│  │                                                             │ │
│  │  • Command-line interface                                  │ │
│  │  • Proof generation/verification                           │ │
│  │  • Entity type listing                                     │ │
│  │  • Integration testing                                     │ │
│  │                                                             │ │
│  └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### 6.2 Core SDK Classes

#### 6.2.1 Entity Class

```javascript
class Entity {
    constructor(crypto, secret = null) {
        this.crypto = crypto;
        this.secret = secret ?? this.generateSecret();
        this.salt = this.generateSalt();
    }

    getCommitment() {
        return this.crypto.hash([this.secret, this.salt]);
    }

    generateProofInputs(claimedType, attestation,
                       attesterMerkleProof, attestersRoot, contextId) {
        return {
            // Public inputs
            claimedType: claimedType.toString(),
            attestersRoot: attestersRoot.toString(),
            contextId: contextId.toString(),

            // Private inputs
            entitySecret: this.secret.toString(),
            entitySalt: this.salt.toString(),
            ...attestation,
            attesterPathElements: attesterMerkleProof.pathElements.map(e => e.toString()),
            attesterPathIndices: attesterMerkleProof.pathIndices.map(i => i.toString()),
        };
    }
}
```

#### 6.2.2 Attester Class

```javascript
class Attester {
    constructor(crypto) {
        this.crypto = crypto;
        const keypair = crypto.generateKeypair();
        this.privateKey = keypair.privateKey;
        this.publicKey = keypair.publicKey;
    }

    getLeaf() {
        return this.crypto.hash([this.publicKey.x, this.publicKey.y]);
    }

    attest(entityCommitment, entityType) {
        const message = this.crypto.hash([entityCommitment, BigInt(entityType)]);
        const signature = this.crypto.sign(this.privateKey, message);

        return {
            attesterPubKeyX: this.publicKey.x.toString(),
            attesterPubKeyY: this.publicKey.y.toString(),
            signatureR8X: signature.R8x.toString(),
            signatureR8Y: signature.R8y.toString(),
            signatureS: signature.S.toString(),
        };
    }
}
```

### 6.3 Dual-System Architecture

#### 6.3.1 Interaction Levels

```javascript
const InteractionLevel = {
    ANONYMOUS: 0,              // No proof required
    TYPE_ONLY: 1,              // ZK proof only
    TYPE_WITH_STANDING: 2,     // ZK + public attestation count
    FULL_ACCOUNTABILITY: 3,    // ZK + revealed attestation history
};
```

#### 6.3.2 Verification Policies

```javascript
class VerificationPolicy {
    constructor(config) {
        this.minLevel = config.minLevel || InteractionLevel.ANONYMOUS;
        this.allowedTypes = config.allowedTypes || null;
        this.minPublicAttestations = config.minPublicAttestations || 0;
        this.maxAttestationAge = config.maxAttestationAge || Infinity;
        this.requiredAttesters = config.requiredAttesters || null;
    }

    verify(proofPackage) {
        // Validate proof against policy requirements
    }
}
```

## 7. Data Flow Architecture

### 7.1 Attestation Flow

```
Entity                      Attester                    Verifier
──────                      ────────                    ────────
secret + salt
    │
    ▼
commitment = Hash(secret, salt)
    │
    └──────► Sign(commitment, type) ─────► attestation
                                                │
                                                ▼
                                          ZK Proof
                                                │
    ◄───────────────────────────────────────────┘
    │
    ▼
Generate proof with:
• Private: secret, salt, signature, merkle path
• Public: type, attesters root, context ID
    │
    └──────────────────────────────────────────► Verify proof
                                                 • Check proof valid
                                                 • Check root matches
                                                 • Check nullifier unused
                                                 • Learn: type only ✓
```

### 7.2 Proof Generation Pipeline

```
┌─────────────────────────────────────────────────────────────────┐
│                    PROOF GENERATION FLOW                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. Entity Setup                                               │
│     ├── Generate secret & salt                                 │
│     ├── Compute commitment = Poseidon(secret, salt)            │
│     └── Request attestation from attester                      │
│                                                                 │
│  2. Attestation Process                                         │
│     ├── Attester validates entity type                         │
│     ├── Sign message = Poseidon(commitment, type)              │
│     └── Return EdDSA signature components                      │
│                                                                 │
│  3. Registry Queries                                            │
│     ├── Get current attesters merkle root                      │
│     ├── Get merkle proof for attester                          │
│     └── Get circuit assets (WASM, zkey)                        │
│                                                                 │
│  4. Circuit Input Assembly                                      │
│     ├── Public: type, root, context                            │
│     ├── Private: secret, salt, signature, proof                │
│     └── Format for circuit consumption                         │
│                                                                 │
│  5. ZK Proof Generation                                         │
│     ├── Load circuit (WASM + zkey)                             │
│     ├── Compute witness                                         │
│     ├── Generate Groth16 proof                                 │
│     └── Extract public signals                                 │
│                                                                 │
│  6. Proof Package Assembly                                      │
│     ├── proof: [A, B, C] coordinates                           │
│     ├── publicSignals: [nullifier, commitment, type, root, ctx]│
│     └── metadata: level, revealed info, etc.                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 7.3 Verification Pipeline

```
┌─────────────────────────────────────────────────────────────────┐
│                    PROOF VERIFICATION FLOW                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. Proof Package Reception                                     │
│     ├── Extract proof components                                │
│     ├── Extract public signals                                  │
│     └── Validate format                                         │
│                                                                 │
│  2. Policy Evaluation                                           │
│     ├── Check minimum interaction level                         │
│     ├── Validate allowed entity types                           │
│     ├── Check attestation requirements                          │
│     └── Apply business rules                                    │
│                                                                 │
│  3. Cryptographic Verification                                  │
│     ├── Verify Groth16 proof with verification key             │
│     ├── Check attesters root matches trusted root              │
│     ├── Validate nullifier not previously used                 │
│     └── Confirm entity type in allowed set                     │
│                                                                 │
│  4. State Updates                                               │
│     ├── Record nullifier to prevent replay                     │
│     ├── Update entity interaction history                       │
│     ├── Log verification event                                  │
│     └── Grant requested access                                  │
│                                                                 │
│  5. Response Generation                                         │
│     ├── Success: entity type, commitment, permissions          │
│     ├── Failure: error code, reason, retry guidance            │
│     └── Audit: log verification attempt                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## 8. Security Model

### 8.1 Threat Model

**Protected Against:**
- **Identity Linkage**: Cannot link proofs to specific entities
- **Attester Linkage**: Cannot determine which attester vouched
- **Replay Attacks**: Nullifiers prevent proof reuse
- **Type Forgery**: Cannot prove false entity type
- **Registry Manipulation**: Merkle proofs ensure attester validity

**Assumptions:**
- Trusted setup ceremony was conducted honestly
- Attesters properly validate entity types before signing
- Private keys remain secure
- Circom compiler and underlying cryptography are sound

### 8.2 Privacy Guarantees

**Zero-Knowledge Properties:**
1. **Completeness**: Valid proofs always verify
2. **Soundness**: Invalid proofs never verify (except with negligible probability)
3. **Zero-Knowledge**: Verifier learns nothing except validity and public outputs

**Information Leakage Analysis:**

| Information | Visibility | Notes |
|-------------|-----------|-------|
| Entity Type | Public | Intentionally revealed |
| Entity Identity | Hidden | Cryptographically protected |
| Attester Identity | Hidden | Part of private witness |
| Attestation Count | Configurable | Revealed in Level 2+ interactions |
| Interaction History | Configurable | Linkable via entity commitment |

### 8.3 Attack Vectors & Mitigations

**1. Trusted Setup Compromise**
- **Risk**: Malicious setup allows fake proof generation
- **Mitigation**: Use multi-party ceremony, consider PLONK migration

**2. Attester Key Compromise**
- **Risk**: Unauthorized attestations
- **Mitigation**: Key rotation, revocation mechanism, multi-attester requirements

**3. Side-Channel Attacks**
- **Risk**: Timing/power analysis reveals secrets
- **Mitigation**: Constant-time implementations, secure hardware

**4. Registry Manipulation**
- **Risk**: False attester inclusion/exclusion
- **Mitigation**: Decentralized governance, transparency logs

**5. Nullifier Grinding**
- **Risk**: Generate favorable nullifiers
- **Mitigation**: Deterministic nullifier generation, public randomness

## 9. Performance Characteristics

### 9.1 Circuit Metrics

| Metric | Value | Notes |
|--------|-------|-------|
| Constraints | ~13,000 | Optimized for Groth16 |
| Proving Time | 2-5s | Modern hardware |
| Proof Size | ~200 bytes | Constant size |
| Verification Time | ~10ms | Includes EVM gas |
| Memory Usage | ~2GB | Peak during proving |

### 9.2 System Throughput

**API Server (Phase 1):**
- Attestations: ~100/second
- Verifications: ~1,000/second
- Registry queries: ~10,000/second

**On-Chain (Phase 2):**
- Proof verification: ~250,000 gas
- Registry updates: ~100,000 gas
- Throughput: ~50 verifications/block (Ethereum)

### 9.3 Scalability Considerations

**Horizontal Scaling:**
- API servers: Stateless, horizontally scalable
- Database: SQLite for development, PostgreSQL for production
- Circuit proving: GPU acceleration, distributed generation

**Vertical Optimizations:**
- Circuit constraint reduction
- Batch verification (future)
- Recursive proof composition (future)
- STARK migration for post-quantum security

## 10. Integration Patterns

### 10.1 HTTP Header Integration

```http
GET /api/data HTTP/1.1
Host: example.com
Entity-Type: AI.CA/1.0
Entity-Proof: <base64-encoded-proof>
Entity-Signals: <base64-encoded-public-signals>
Authorization: Bearer <access-token>
```

### 10.2 JWT Token Integration

```json
{
  "sub": "entity_commitment_hash",
  "iss": "entity-identity-system",
  "entity_type": "AI.CA",
  "interaction_level": 1,
  "entity_proof": {
    "proof": [/* Groth16 proof components */],
    "signals": ["nullifier", "commitment", "type", "root", "ctx"]
  },
  "verified_at": "2026-01-31T10:00:00Z",
  "expires_at": "2026-01-31T11:00:00Z"
}
```

### 10.3 JavaScript SDK Integration

```javascript
import { EntityIdentity, InteractionLevel } from 'entity-identity';

// Initialize SDK
const ei = new EntityIdentity({
    apiUrl: 'https://api.entity-identity.com',
    entitySecret: process.env.ENTITY_SECRET
});

// Generate proof for API access
const proof = await ei.generateProof({
    level: InteractionLevel.TYPE_ONLY,
    context: 'api-session-123',
    type: 'AI.CA'
});

// Use in HTTP requests
const response = await fetch('/api/protected-endpoint', {
    headers: {
        'Entity-Type': proof.revealed.type,
        'Entity-Proof': btoa(JSON.stringify(proof.proof)),
        'Entity-Signals': btoa(JSON.stringify(proof.publicSignals))
    }
});
```

### 10.4 Smart Contract Integration

```solidity
contract ProtectedService {
    EntityTypeRegistry public registry;

    modifier requireEntityType(uint16 requiredType) {
        // Get entity commitment from msg.data or storage
        bytes32 commitment = extractCommitment();

        // Check verification
        (uint16 entityType, uint256 timestamp) = registry.getVerification(commitment);
        require(entityType == requiredType, "Invalid entity type");
        require(registry.isVerificationFresh(commitment, 1 hours), "Verification expired");
        _;
    }

    function aiOnlyFunction() external requireEntityType(0x0101) {
        // Only AI.CA entities can call this function
    }
}
```

## 11. Deployment Architecture

### 11.1 Environment Configuration

**Development:**
```bash
# Local setup
npm install
npm run compile  # Compile Circom circuits
npm test        # Run test suite
npm run api     # Start development server
```

**Production:**
```bash
# Environment variables
NODE_ENV=production
DATABASE_URL=postgresql://...
ADMIN_API_KEY=secure-random-key
ASSETS_URL=https://cdn.entity-identity.com
HTTPS_ENABLED=true
```

### 11.2 Infrastructure Components

```
┌─────────────────────────────────────────────────────────────────┐
│                    PRODUCTION DEPLOYMENT                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │                      CDN LAYER                              │ │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          │ │
│  │  │WASM Files   │  │ZKey Files   │  │JS SDK       │          │ │
│  │  │(Circuits)   │  │(Proving)    │  │(NPM)        │          │ │
│  │  └─────────────┘  └─────────────┘  └─────────────┘          │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │                    API TIER                                 │ │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          │ │
│  │  │Load         │  │API Server   │  │API Server   │          │ │
│  │  │Balancer     │  │Instance 1   │  │Instance 2   │          │ │
│  │  └─────────────┘  └─────────────┘  └─────────────┘          │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │                   DATABASE TIER                             │ │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          │ │
│  │  │PostgreSQL   │  │Redis Cache  │  │Backup       │          │ │
│  │  │Primary      │  │(Sessions)   │  │Storage      │          │ │
│  │  └─────────────┘  └─────────────┘  └─────────────┘          │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │                 BLOCKCHAIN TIER                             │ │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          │ │
│  │  │Ethereum     │  │IPFS         │  │Monitoring   │          │ │
│  │  │Mainnet      │  │(Metadata)   │  │(Events)     │          │ │
│  │  └─────────────┘  └─────────────┘  └─────────────┘          │ │
│  └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### 11.3 Monitoring & Observability

**Key Metrics:**
- Proof generation success rate
- Verification latency
- Nullifier collision rate
- Attester registry updates
- API endpoint response times

**Alerting:**
- Circuit compilation failures
- Database connection issues
- Smart contract transaction failures
- Abnormal proof generation patterns

## 12. Future Architecture Evolution

### 12.1 Phase 2: On-Chain Integration

**Smart Contract Expansion:**
- Full on-chain verification
- Decentralized attester governance
- Cross-chain proof verification
- Layer 2 scaling integration

### 12.2 Phase 3: Advanced Features

**Enhanced Privacy:**
- Anonymous credentials
- Selective disclosure proofs
- Range proofs for attributes
- Linkable ring signatures

**Scalability Improvements:**
- Recursive proof composition
- Batch verification
- STARK migration
- State channel integration

### 12.3 Research Directions

**Post-Quantum Migration:**
- STARK-based proving system
- Lattice-based signatures
- Hash-based commitment schemes
- Quantum-resistant merkle trees

**Interoperability:**
- Cross-chain bridges
- Universal verification standards
- Federated trust networks
- Decentralized identity integration

---

## Appendix A: Technical Specifications

### A.1 Supported Environments

**Node.js Requirements:**
- Node.js ≥ 18.0.0
- NPM ≥ 9.0.0
- Memory ≥ 4GB (for circuit compilation)

**Browser Support:**
- Chrome ≥ 90
- Firefox ≥ 88
- Safari ≥ 14
- Edge ≥ 90

**Blockchain Networks:**
- Ethereum (Mainnet, Testnets)
- Polygon
- Arbitrum
- Optimism
- Custom EVM chains

### A.2 Dependencies

**Core Dependencies:**
```json
{
  "circomlibjs": "^0.1.7",     // ZK cryptography
  "snarkjs": "^0.7.4",        // Proof generation
  "ethers": "^6.9.0",         // Blockchain interaction
  "express": "^4.18.2",       // HTTP server
  "better-sqlite3": "^11.0.0"  // Database
}
```

**Development Dependencies:**
```json
{
  "hardhat": "^2.19.4",       // Smart contract development
  "jest": "^29.7.0",          // Testing framework
  "circom": "^2.1.6"          // Circuit compiler
}
```

### A.3 Configuration Schema

**API Server Configuration:**
```typescript
interface APIConfig {
  port: number;                // HTTP server port
  httpsPort?: number;          // HTTPS server port (optional)
  adminApiKey: string;         // Admin authentication key
  dbPath: string;              // SQLite database path
  assetsBaseUrl?: string;      // CDN base URL (auto-detected if null)
  merkleDepth: number;         // Attester registry tree depth

  https: {
    enabled: boolean;          // Enable HTTPS
    keyPath?: string;          // SSL private key path
    certPath?: string;         // SSL certificate path
  };

  isProduction: boolean;       // Production mode flag
}
```

**Circuit Configuration:**
```typescript
interface CircuitConfig {
  merkleDepth: number;         // Merkle tree depth (20)
  wasmPath: string;            // Compiled circuit WASM
  zkeyPath: string;            // Proving key path
  vkeyPath: string;            // Verification key path
}
```

---

*This technical architecture documentation serves as the foundational reference for all Entity Identity development, integration, and deployment activities. It provides the comprehensive technical context needed for understanding system design decisions, implementation details, and operational requirements.*