# Entity Identity API Specification

## Overview

Entity Identity is a zero-knowledge proof system for verifying entity types (AI, robot, human, hybrid) without revealing identity. The API provides REST endpoints for attestation, proof verification, and registry management.

**Base URL:** `https://api.entity-identity.io`
**Version:** v1
**Protocol:** HTTP/HTTPS with JSON payloads

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      EI API SERVER                          │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐   │
│  │   Attester   │  │  Attestation │  │   Verification   │   │
│  │   Registry   │  │   Service    │  │    Service       │   │
│  │   (SQLite)   │  │              │  │  + Nullifiers    │   │
│  └──────────────┘  └──────────────┘  └──────────────────┘   │
└─────────────────────────────────────────────────────────────┘
         │                   │                    │
         ▼                   ▼                    ▼
    GET /registry       POST /attest         POST /verify
    (merkle root)       (attester signs)     (check proof)
                             │
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                      CLIENT / SDK                           │
│                                                              │
│  1. Entity creates commitment (secret + salt)               │
│  2. Requests attestation from approved attester             │
│  3. Downloads proving assets (WASM + zkey)                  │
│  4. Generates proof locally (privacy preserved)             │
│  5. Submits proof to verifier                               │
└─────────────────────────────────────────────────────────────┘
```

## Entity Types

16 standardized entity types across 4 categories with phonetic names for verbal disambiguation:

| Code | Hex | Phonetic | Description |
|------|-----|----------|-------------|
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

## Authentication

### API Key Types

1. **Attester Keys** - For creating attestations
   - Format: `Bearer <64-character-hex-key>`
   - Generated on attester registration
   - Scoped to specific entity types

2. **Admin Keys** - For managing attesters
   - Format: `Bearer <admin-key>`
   - Set via `ADMIN_API_KEY` environment variable
   - Full registry management access

### Headers

```http
Authorization: Bearer <key>
Content-Type: application/json
```

## Rate Limits

| Endpoint Category | Limit | Window |
|-------------------|-------|---------|
| `/verify` | 100 requests | per minute per IP |
| `/attest` | 10 requests | per minute per attester |
| `/registry/*` | 60 requests | per minute per IP |

## REST API Endpoints

### Registry (Public)

#### Get Registry State

**Endpoint:** `GET /api/v1/registry`

Get current attester registry root and metadata.

**Response:**
```json
{
  "root": "12345678901234567890123456789012345678901234567890123456789012345",
  "attestersCount": 3,
  "updatedAt": "2025-01-28T12:00:00Z"
}
```

**Example:**
```bash
curl https://api.entity-identity.io/api/v1/registry
```

#### List Approved Attesters

**Endpoint:** `GET /api/v1/registry/attesters`

List all approved attesters and their capabilities.

**Response:**
```json
{
  "attesters": [
    {
      "id": "anthropic",
      "name": "Anthropic",
      "publicKeyX": "1234567890123456789012345678901234567890123456789012345678901234",
      "publicKeyY": "9876543210987654321098765432109876543210987654321098765432109876",
      "index": 0,
      "types": ["AI.CA", "AI.GN", "AI.AA"],
      "createdAt": "2025-01-28T12:00:00Z"
    },
    {
      "id": "openai",
      "name": "OpenAI",
      "publicKeyX": "5678901234567890123456789012345678901234567890123456789012345678",
      "publicKeyY": "4321098765432109876543210987654321098765432109876543210987654321",
      "index": 1,
      "types": ["AI.CA", "AI.LM", "AI.GN"],
      "createdAt": "2025-01-28T13:00:00Z"
    }
  ]
}
```

#### Get Attester Merkle Proof

**Endpoint:** `GET /api/v1/registry/attesters/:id/proof`

Get merkle proof demonstrating an attester's inclusion in the registry.

**Parameters:**
- `id` (path) - Attester ID

**Response:**
```json
{
  "attesterId": "anthropic",
  "index": 0,
  "leaf": "18234567890123456789012345678901234567890123456789012345678901234567",
  "pathElements": [
    "19876543210987654321098765432109876543210987654321098765432109876543",
    "15678901234567890123456789012345678901234567890123456789012345678901",
    "0"
  ],
  "pathIndices": [1, 0, 0]
}
```

### Entity Types (Public)

#### List All Entity Types

**Endpoint:** `GET /api/v1/types`

Get complete list of supported entity types with metadata.

**Response:**
```json
{
  "types": [
    {
      "code": "AI.CA",
      "hex": "0x0101",
      "numeric": 257,
      "name": "Conversational Agent",
      "phonetic": "Kah",
      "category": "AI"
    },
    {
      "code": "AI.PO",
      "hex": "0x0102",
      "numeric": 258,
      "name": "Program Orchestrator",
      "phonetic": "Poe",
      "category": "AI"
    }
  ],
  "categories": {
    "AI": "Artificial Intelligence",
    "AR": "Autonomous Robotics",
    "HU": "Human",
    "HY": "Hybrid"
  }
}
```

### Attestation (Attester Auth Required)

#### Create Attestation

**Endpoint:** `POST /api/v1/attest`

Attester signs an attestation for an entity's type claim.

**Headers:**
```http
Authorization: Bearer <attester-api-key>
Content-Type: application/json
```

**Request:**
```json
{
  "entityCommitment": "12345678901234567890123456789012345678901234567890123456789012345",
  "entityType": "AI.CA"
}
```

**Response:**
```json
{
  "attestation": {
    "entityCommitment": "12345678901234567890123456789012345678901234567890123456789012345",
    "entityType": "AI.CA",
    "typeCode": 257,
    "attesterPubKeyX": "1234567890123456789012345678901234567890123456789012345678901234",
    "attesterPubKeyY": "9876543210987654321098765432109876543210987654321098765432109876",
    "signatureR8X": "5555555555555555555555555555555555555555555555555555555555555555",
    "signatureR8Y": "6666666666666666666666666666666666666666666666666666666666666666",
    "signatureS": "7777777777777777777777777777777777777777777777777777777777777777",
    "attesterIndex": 0,
    "createdAt": "2025-01-28T15:30:00Z"
  },
  "merkleProof": {
    "pathElements": [
      "19876543210987654321098765432109876543210987654321098765432109876543",
      "15678901234567890123456789012345678901234567890123456789012345678901"
    ],
    "pathIndices": [1, 0]
  },
  "registryRoot": "12345678901234567890123456789012345678901234567890123456789012345"
}
```

**Error Responses:**

| Code | HTTP | Description |
|------|------|-------------|
| `unauthorized` | 401 | Invalid API key |
| `forbidden` | 403 | Attester not authorized for this type |
| `invalid_type` | 400 | Unknown entity type |
| `invalid_commitment` | 400 | Malformed commitment |

#### Server-Side Proof Generation

**Endpoint:** `POST /api/v1/prove`

Generate ZK proof on server side (development/testing only).

**Headers:**
```http
Authorization: Bearer <attester-api-key>
Content-Type: application/json
```

**Request:**
```json
{
  "entityType": "AI.CA",
  "entitySecret": "optional-hex-secret",
  "context": "session-123"
}
```

**Response:**
```json
{
  "success": true,
  "proof": {
    "pi_a": ["0x...", "0x...", "1"],
    "pi_b": [["0x...", "0x..."], ["0x...", "0x..."], ["1", "0"]],
    "pi_c": ["0x...", "0x...", "1"],
    "protocol": "groth16"
  },
  "publicSignals": [
    "nullifier",
    "entityCommitment",
    "claimedType",
    "attestersRoot",
    "contextId"
  ],
  "entityType": "AI.CA",
  "typeCode": 257,
  "commitment": "12345678901234567890123456789012345678901234567890123456789012345",
  "contextId": "567890123456789"
}
```

### Proving Assets (Public)

#### Get Circuit Assets

**Endpoint:** `GET /api/v1/proving/assets`

Get URLs for client-side proving assets (WASM, proving keys, verification keys).

**Response:**
```json
{
  "circuit": "entity_type_proof",
  "assets": {
    "wasm": "https://api.entity-identity.io/assets/entity_type_proof.wasm",
    "zkey": "https://api.entity-identity.io/assets/entity_type_final.zkey",
    "verificationKey": "https://api.entity-identity.io/assets/verification_key.json"
  },
  "merkleDepth": 20,
  "circuitHash": "ce4b4dda a33748ab b942171b 617e3c39"
}
```

### Verification (Public)

#### Verify ZK Proof

**Endpoint:** `POST /api/v1/verify`

Cryptographically verify a ZK proof and check registry constraints.

**Request:**
```json
{
  "proof": {
    "pi_a": ["0x1a2b3c...", "0x4d5e6f...", "1"],
    "pi_b": [["0x789abc...", "0xdef012..."], ["0x345678...", "0x9abcde..."], ["1", "0"]],
    "pi_c": ["0xfedcba...", "0x876543...", "1"],
    "protocol": "groth16"
  },
  "publicSignals": [
    "1234567890123456789012345678901234567890123456789012345678901234567890",
    "9876543210987654321098765432109876543210987654321098765432109876543210",
    "257",
    "5555555555555555555555555555555555555555555555555555555555555555555555",
    "1706454600"
  ]
}
```

**Response (Valid):**
```json
{
  "valid": true,
  "entityType": "AI.CA",
  "entityTypeName": "Conversational Agent",
  "phoneticName": "Kah",
  "entityCommitment": "9876543210987654321098765432109876543210987654321098765432109876543210",
  "nullifier": "1234567890123456789012345678901234567890123456789012345678901234567890",
  "registryRootValid": true,
  "nullifierStatus": "new"
}
```

**Response (Invalid):**
```json
{
  "valid": false,
  "error": "proof_invalid",
  "message": "Cryptographic verification failed"
}
```

**Error Codes:**

| Code | HTTP | Description |
|------|------|-------------|
| `proof_invalid` | 400 | ZK proof verification failed |
| `root_mismatch` | 400 | Proof uses outdated registry root |
| `invalid_request` | 400 | Missing proof or public signals |
| `internal_error` | 500 | Verification not configured |

#### Record Nullifier

**Endpoint:** `POST /api/v1/verify/record`

Record a nullifier to prevent proof replay attacks.

**Request:**
```json
{
  "nullifier": "1234567890123456789012345678901234567890123456789012345678901234567890",
  "contextId": "1706454600",
  "domain": "example.com"
}
```

**Response:**
```json
{
  "recorded": true,
  "nullifier": "1234567890123456789012345678901234567890123456789012345678901234567890"
}
```

**Error Response:**
```json
{
  "error": "nullifier_used",
  "message": "Nullifier already recorded"
}
```

### Admin (Admin Auth Required)

#### Register New Attester

**Endpoint:** `POST /api/v1/admin/attesters`

Add a new attester to the registry.

**Headers:**
```http
Authorization: Bearer <admin-api-key>
Content-Type: application/json
```

**Request:**
```json
{
  "id": "anthropic",
  "name": "Anthropic",
  "allowedTypes": ["AI.CA", "AI.GN", "AI.AA"],
  "contact": "security@anthropic.com"
}
```

**Response:**
```json
{
  "attester": {
    "id": "anthropic",
    "name": "Anthropic",
    "publicKeyX": "1234567890123456789012345678901234567890123456789012345678901234",
    "publicKeyY": "9876543210987654321098765432109876543210987654321098765432109876",
    "index": 0,
    "types": ["AI.CA", "AI.GN", "AI.AA"]
  },
  "apiKey": "a1b2c3d4e5f6789012345678901234567890123456789012345678901234567890123456",
  "registryRoot": "87654321098765432109876543210987654321098765432109876543210987654321",
  "warning": "Store the API key securely. It cannot be retrieved again."
}
```

#### Revoke Attester

**Endpoint:** `DELETE /api/v1/admin/attesters/:id`

Revoke an attester and update the registry root.

**Headers:**
```http
Authorization: Bearer <admin-api-key>
```

**Response:**
```json
{
  "revoked": true,
  "attesterId": "anthropic",
  "registryRoot": "11111111111111111111111111111111111111111111111111111111111111111111"
}
```

### Health Check

#### API Health

**Endpoint:** `GET /health`

Get API health status and environment info.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-01-28T15:30:00Z",
  "environment": "production"
}
```

## SDK Integration

### Installation

```bash
npm install entity-identity-zk
```

### Basic Usage

```javascript
import { EntityIdentity } from 'entity-identity-zk';

// Initialize SDK
const ei = new EntityIdentity({
  apiUrl: 'https://api.entity-identity.io',
});

// Entity creates identity commitment
const entity = ei.createEntity();
console.log('Commitment:', entity.commitment);

// Request attestation from approved attester
const attestation = await ei.requestAttestation({
  commitment: entity.commitment,
  type: 'AI.CA',
  attester: 'anthropic'
});

// Generate proof locally (private inputs never leave client)
const proof = await entity.prove({
  attestation,
  contextId: Date.now().toString()
});

// Verify proof
const result = await ei.verify(proof);
console.log('Valid:', result.valid);
console.log('Type:', result.entityType);
```

### Advanced Usage

```javascript
// Custom entity with specific secret
const entity = new Entity(crypto, mySecret);

// Generate commitment
const commitment = entity.getCommitment();

// Manual attestation request
const response = await fetch('/api/v1/attest', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + attesterApiKey,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    entityCommitment: commitment.toString(),
    entityType: 'AI.CA'
  })
});

const attestation = await response.json();

// Get proving assets
const assetsResponse = await fetch('/api/v1/proving/assets');
const assets = await assetsResponse.json();

// Generate proof inputs
const inputs = entity.generateProofInputs(
  EntityTypes['AI.CA'],
  attestation.attestation,
  attestation.merkleProof,
  attestation.registryRoot,
  contextId
);

// Generate proof with snarkjs
import * as snarkjs from 'snarkjs';
const { proof, publicSignals } = await snarkjs.groth16.fullProve(
  inputs,
  assets.assets.wasm,
  assets.assets.zkey
);

// Verify via API
const verifyResponse = await fetch('/api/v1/verify', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ proof, publicSignals })
});
```

## CLI Tool

### Installation

```bash
npm install -g entity-identity
```

### Commands

#### List Entity Types

```bash
eid types
```

Output:
```
Entity Types:

  Code     Phonetic  Description
  ──────   ────────  ───────────
  AI.CA    Kah       Conversational Agent
  AI.PO    Poe       Program Orchestrator
  AI.WS    Wiz       Web Site
  AI.OS    Aus       Operating System
  ...
```

#### Generate Proof

```bash
eid prove --type AI.CA --context session123 --output proof.json
```

Options:
- `--type` - Entity type code (required)
- `--context` - Context ID for nullifier (required)
- `--output` - Output file path (default: proof.json)
- `--secret` - Entity secret (hex, generated if not provided)
- `--wasm` - Path to circuit WASM
- `--zkey` - Path to proving key

#### Verify Proof

```bash
eid verify --proof proof.json --vkey verification_key.json
```

Options:
- `--proof` - Proof file to verify (required)
- `--vkey` - Verification key file (optional, auto-detected)

## Integration Patterns

### HTTP Header Authentication

```http
GET /api/protected HTTP/1.1
Host: example.com
Entity-Type: AI.CA/1.0
Entity-Proof: eyJwcm9vZiI6eyJwaV9hIjpbIjB4Li4uIl19
Entity-Signals: WyIweC4uLiIsIjB4Li4uIl0=
```

### JWT Token Claims

```json
{
  "sub": "entity_commitment_hash",
  "iat": 1706454600,
  "exp": 1706458200,
  "entity_type": "AI.CA",
  "entity_phonetic": "Kah",
  "entity_proof": {
    "proof": {...},
    "signals": ["nullifier", "commitment", "type", "root", "ctx"],
    "verified_at": 1706454600
  }
}
```

### Database Integration

Store entity commitments and verification status:

```sql
CREATE TABLE verified_entities (
  commitment VARCHAR(66) PRIMARY KEY,
  entity_type VARCHAR(10) NOT NULL,
  nullifier VARCHAR(66) UNIQUE,
  verified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  expires_at TIMESTAMP,
  domain VARCHAR(255),
  INDEX idx_type (entity_type),
  INDEX idx_expires (expires_at)
);
```

## Error Handling

All API endpoints return standardized error responses:

```json
{
  "error": "error_code",
  "message": "Human readable message",
  "details": {}
}
```

### Common Error Codes

| Code | HTTP | Description | Retry |
|------|------|-------------|-------|
| `invalid_request` | 400 | Malformed request body | No |
| `invalid_commitment` | 400 | Commitment not valid field element | No |
| `invalid_type` | 400 | Unknown entity type | No |
| `unauthorized` | 401 | Missing or invalid auth | No |
| `forbidden` | 403 | Attester not allowed for this type | No |
| `attester_not_found` | 404 | Attester ID not in registry | No |
| `proof_invalid` | 400 | ZK proof verification failed | No |
| `root_mismatch` | 400 | Proof uses outdated registry root | Yes |
| `nullifier_used` | 409 | Nullifier already recorded | No |
| `rate_limit_exceeded` | 429 | Too many requests | Yes |
| `internal_error` | 500 | Server error | Yes |

### Retry Logic

```javascript
async function verifyWithRetry(proof, publicSignals, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch('/api/v1/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ proof, publicSignals })
      });

      if (response.status === 429) {
        // Rate limited - wait and retry
        await new Promise(resolve => setTimeout(resolve, 2000 * (i + 1)));
        continue;
      }

      if (response.status === 400) {
        const error = await response.json();
        if (error.error === 'root_mismatch') {
          // Registry updated - refresh and retry
          await refreshRegistry();
          continue;
        }
      }

      return await response.json();
    } catch (e) {
      if (i === maxRetries - 1) throw e;
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}
```

## Performance Considerations

| Metric | Value | Notes |
|--------|-------|-------|
| Proof generation | 2-5 seconds | Client-side, depends on device |
| Proof size | ~200 bytes | Groth16 constant size |
| Verification time | ~10ms | Server-side |
| Registry updates | ~100ms | When attesters change |
| Rate limits | See table | Per IP/attester limits |

### Optimization Tips

1. **Cache proving assets** - WASM and zkey files are large (~50MB total)
2. **Precompute commitments** - Generate entity commitments offline
3. **Batch verifications** - Verify multiple proofs together when possible
4. **Use nullifier domains** - Scope nullifiers to prevent unnecessary conflicts
5. **Monitor registry updates** - Cache registry root, refresh periodically

## Security Considerations

### Threat Model

1. **Malicious Entity** - Cannot prove false type without valid attestation
2. **Compromised Attester** - Limited to their authorized types, audit trail exists
3. **Registry Manipulation** - Requires admin key, all changes logged
4. **Replay Attacks** - Prevented by nullifier recording
5. **Linkability** - Entity commitment is stable pseudonym, nullifiers prevent cross-domain tracking

### Best Practices

1. **Secure Key Storage** - Attesters should use HSMs for private keys
2. **Regular Registry Audits** - Monitor attester additions/removals
3. **Nullifier Scoping** - Use appropriate context IDs for your use case
4. **Proof Freshness** - Check proof generation timestamps
5. **Registry Root Validation** - Maintain list of trusted registry roots

### Privacy Guarantees

✅ **Zero Knowledge Properties:**
- Entity's secret identity remains hidden
- Which specific attester signed is hidden
- Attestation signature details are hidden

❌ **Not Hidden:**
- Entity's pseudonymous commitment
- Claimed entity type
- Registry of approved attesters
- Context ID used for proof

## Deployment Configuration

### Environment Variables

```bash
# Core configuration
PORT=3000
HTTPS_PORT=3443
NODE_ENV=production
ADMIN_API_KEY=your-admin-key-here

# Database
DB_PATH=./data/ei.db

# HTTPS (optional)
HTTPS_ENABLED=true
HTTPS_KEY=./certs/key.pem
HTTPS_CERT=./certs/cert.pem

# Assets CDN (optional)
ASSETS_URL=https://cdn.entity-identity.io

# Railway/production (optional)
RAILWAY_ENVIRONMENT=production
```

### Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "api/server.js"]
```

### Health Checks

```bash
# Basic health check
curl -f http://localhost:3000/health || exit 1

# Registry availability
curl -f http://localhost:3000/api/v1/registry || exit 1
```

## Changelog

### v1.0.0 (2025-01-28)
- Initial API release
- 16 entity types across 4 categories
- Full ZK proof verification
- Attester registry management
- Rate limiting and security features
- SQLite backend with audit logging

## Support

- **Documentation:** https://docs.entity-identity.io
- **GitHub:** https://github.com/entity-identity/ei
- **Issues:** https://github.com/entity-identity/ei/issues
- **Discord:** https://discord.gg/entity-identity