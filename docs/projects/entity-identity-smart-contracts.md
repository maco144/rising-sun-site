# Entity Identity Smart Contracts

Comprehensive documentation for the Entity Identity zero-knowledge proof smart contract system for type verification and anonymous attestation.

## Table of Contents

1. [Overview](#overview)
2. [Contract Architecture](#contract-architecture)
3. [Smart Contract Details](#smart-contract-details)
4. [Deployment Guide](#deployment-guide)
5. [Gas Optimization](#gas-optimization)
6. [Events and Integration](#events-and-integration)
7. [Cross-Chain Considerations](#cross-chain-considerations)
8. [Security Analysis](#security-analysis)
9. [Developer Integration](#developer-integration)

## Overview

The Entity Identity smart contract system provides on-chain verification for entity types using zero-knowledge proofs. The system enables anonymous yet verifiable attestations about whether an entity is an AI, human, autonomous robot, or hybrid system.

### Key Components

- **EntityTypeRegistry.sol**: Main registry contract for storing and verifying type attestations
- **EntityTypeVerifier.sol**: Groth16 ZK-SNARK verifier contract (auto-generated)
- **Deployment Scripts**: Automated deployment and verification infrastructure

### Core Features

- Privacy-preserving entity type verification
- Groth16 ZK-SNARK proof verification
- Merkle tree-based attester registry
- Nullifier-based replay attack prevention
- Multi-network deployment support

## Contract Architecture

### System Design

```
┌─────────────────────────────────────────────────────────────┐
│                     Entity Identity System                   │
├─────────────────────────────────────────────────────────────┤
│  Frontend/SDK                                               │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────────────┐ │
│  │ Proof Gen    │ │ Verifier     │ │ Registry Interface   │ │
│  └──────────────┘ └──────────────┘ └──────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│  Smart Contracts Layer                                     │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │            EntityTypeRegistry.sol                       │ │
│  │  ┌─────────────┐ ┌─────────────┐ ┌─────────────────────┐ │ │
│  │  │ Verify &    │ │ State Mgmt  │ │ Admin Functions     │ │ │
│  │  │ Register    │ │             │ │                     │ │ │
│  │  └─────────────┘ └─────────────┘ └─────────────────────┘ │ │
│  └──────────────────────────────────────────────────────────┘ │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │          EntityTypeVerifier.sol (Groth16)               │ │
│  └──────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│  Zero-Knowledge Circuit Layer                               │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │         entity_type_proof.circom                        │ │
│  └──────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### Entity Type Encoding

```solidity
// Entity type prefixes (16-bit codes)
uint16 public constant PREFIX_AI = 0x0100;  // Artificial Intelligence
uint16 public constant PREFIX_AR = 0x0200;  // Autonomous Robot
uint16 public constant PREFIX_HU = 0x0300;  // Human
uint16 public constant PREFIX_HY = 0x0400;  // Hybrid System
```

### State Management

The system maintains several key mappings:
- `verifiedTypes`: Entity commitment → verified type code
- `verificationTimestamps`: Entity commitment → verification time
- `usedNullifiers`: Nullifier → usage status (replay prevention)
- `attestersRoot`: Current approved attesters Merkle root
- `publicTrustRoot`: Public trust registry Merkle root

## Smart Contract Details

### EntityTypeRegistry.sol

The main registry contract that handles proof verification and state management.

#### Core Functions

```solidity
function verifyAndRegister(
    uint[2] calldata proofA,
    uint[2][2] calldata proofB,
    uint[2] calldata proofC,
    uint[5] calldata publicSignals
) external
```

**Public Signals Structure:**
- `[0]` nullifier: Unique identifier preventing replay attacks
- `[1]` commitment: Entity's pseudonymous commitment
- `[2]` type: Claimed entity type (16-bit code)
- `[3]` attestersRoot: Merkle root of approved attesters
- `[4]` contextId: Application-specific context identifier

#### Verification Logic

1. **Nullifier Check**: Ensures the nullifier hasn't been used before
2. **Root Validation**: Verifies attesters root matches current registry state
3. **ZK Proof Verification**: Calls the Groth16 verifier contract
4. **Type Validation**: Ensures the claimed type is valid (prefixes 1-4)
5. **State Update**: Records the verification and marks nullifier as used

#### Query Functions

```solidity
function getVerification(bytes32 commitment)
    external view
    returns (uint16 entityType, uint256 timestamp)

function isVerificationFresh(bytes32 commitment, uint256 maxAge)
    external view
    returns (bool fresh)

function decodeType(uint16 typeCode)
    external pure
    returns (uint8 prefix, uint8 category)
```

#### Administrative Functions

```solidity
function updateAttestersRoot(bytes32 newRoot) external
function updatePublicTrustRoot(bytes32 newRoot) external
function transferAdmin(address newAdmin) external
```

### EntityTypeVerifier.sol (Groth16Verifier)

Auto-generated Groth16 verifier contract with hardcoded verification keys.

#### Key Specifications

- **Curve**: BN254 (alt_bn128)
- **Field Size**: 21888242871839275222246405745257275088548364400416034343698204186575808495617
- **Public Inputs**: 5 field elements
- **Verification**: Single `verifyProof` function

#### Verification Function

```solidity
function verifyProof(
    uint[2] calldata _pA,
    uint[2][2] calldata _pB,
    uint[2] calldata _pC,
    uint[5] calldata _pubSignals
) public view returns (bool)
```

The function performs:
1. Field element validation
2. G1/G2 point operations
3. Pairing check verification
4. Returns boolean result

## Deployment Guide

### Prerequisites

```bash
npm install
cp .env.example .env
# Edit .env with your configuration
```

### Environment Variables

```bash
SEPOLIA_RPC_URL=https://rpc.sepolia.org
MUMBAI_RPC_URL=https://rpc-mumbai.maticvigil.com
PRIVATE_KEY=0x...
ETHERSCAN_API_KEY=...
```

### Deployment Commands

```bash
# Local deployment (Hardhat network)
npx hardhat run scripts/deploy.js

# Sepolia testnet
npx hardhat run scripts/deploy.js --network sepolia

# Polygon Mumbai
npx hardhat run scripts/deploy.js --network polygonMumbai
```

### Deployment Process

1. **Verifier Deployment**: Deploys the Groth16 verifier contract
2. **Registry Deployment**: Deploys the main registry with verifier address
3. **Verification**: Automatically verifies contracts on Etherscan (if API key provided)
4. **State Persistence**: Saves deployment addresses to `deployments/{network}.json`

### Current Deployments

#### Sepolia Testnet
- **Chain ID**: 11155111
- **Verifier**: `0x7444ba1b14a8dfC3342e3190b2Be991bA4A3801E`
- **Registry**: `0xFb637C39439f969e5Cc0b1910308146f1DD529Fe`
- **Deployer**: `0x93295684D34dDd3b7f059593C2847158043EF453`

#### Localhost Development
- **Chain ID**: 31337
- **Verifier**: `0x5FbDB2315678afecb367f032d93F642f64180aa3`
- **Registry**: `0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512`

### Hardhat Configuration

```javascript
module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
    polygonMumbai: {
      url: process.env.MUMBAI_RPC_URL,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
};
```

## Gas Optimization

### Contract Optimizations

1. **Immutable Verifier**: The verifier address is immutable, saving gas on reads
2. **Optimized Compiler**: Uses Solidity 0.8.20 with 200 optimization runs
3. **Efficient Storage**: Uses mappings for O(1) lookups
4. **Event Indexing**: Proper event indexing for efficient querying

### Gas Costs Analysis

| Operation | Estimated Gas | Notes |
|-----------|---------------|-------|
| Deploy Verifier | ~2,800,000 | One-time deployment |
| Deploy Registry | ~800,000 | One-time deployment |
| verifyAndRegister | ~400,000 | Includes ZK verification |
| getVerification | ~2,500 | View function |
| isVerificationFresh | ~3,000 | View function |
| updateAttestersRoot | ~45,000 | Admin only |

### Optimization Strategies

1. **Batch Verifications**: Consider implementing batch proof verification
2. **Proxy Pattern**: Use upgradeable proxies for the registry (not verifier)
3. **Layer 2**: Deploy on L2 solutions for lower costs
4. **State Pruning**: Implement mechanisms to clean old verifications

## Events and Integration

### Event Schemas

#### EntityVerified Event

```solidity
event EntityVerified(
    bytes32 indexed commitment,  // Entity's pseudonymous commitment
    uint16 indexed entityType,   // Verified entity type
    bytes32 nullifier,          // Used nullifier
    uint256 timestamp           // Block timestamp
);
```

#### Administrative Events

```solidity
event AttestersRootUpdated(bytes32 oldRoot, bytes32 newRoot);
event PublicTrustRootUpdated(bytes32 oldRoot, bytes32 newRoot);
```

### Integration Patterns

#### Event Listening

```javascript
// Listen for new verifications
contract.on("EntityVerified", (commitment, entityType, nullifier, timestamp) => {
  console.log(`Entity ${commitment} verified as type ${entityType}`);
});

// Filter by entity type
const filter = contract.filters.EntityVerified(null, 0x0101); // AI.CA only
const events = await contract.queryFilter(filter, -1000); // Last 1000 blocks
```

#### SDK Integration

```javascript
import { EntityIdentity } from 'entity-identity-sdk';

const ei = new EntityIdentity({
  rpcUrl: 'https://rpc.sepolia.org',
  registryAddress: '0xFb637C39439f969e5Cc0b1910308146f1DD529Fe',
});

// Verify a proof
const result = await ei.verifyAndRegister({
  proof: generatedProof,
  publicSignals: signals,
});
```

#### Web3 Integration

```javascript
import { ethers } from 'ethers';
import RegistryABI from './EntityTypeRegistry.json';

const provider = new ethers.JsonRpcProvider(rpcUrl);
const contract = new ethers.Contract(registryAddress, RegistryABI, provider);

// Check if entity is verified
const [entityType, timestamp] = await contract.getVerification(commitment);
if (entityType !== 0) {
  console.log(`Entity verified as type ${entityType} at ${timestamp}`);
}
```

## Cross-Chain Considerations

### Multi-Chain Deployment Strategy

1. **Verifier Consistency**: Same verification keys across all chains
2. **Registry Isolation**: Independent registries per chain
3. **Cross-Chain Messaging**: Use LayerZero or similar for cross-chain verification

### Chain-Specific Configurations

#### Ethereum Mainnet
- High security, expensive gas
- Full verification requirements
- Long-term storage

#### Polygon
- Lower costs, faster finality
- Suitable for frequent verifications
- Good UX for applications

#### Arbitrum/Optimism
- L2 benefits with Ethereum security
- Lower costs than mainnet
- Fraud proof considerations

### Deployment Matrix

| Network | Registry Address | Verifier Address | Status |
|---------|------------------|------------------|---------|
| Sepolia | `0xFb637C39...` | `0x7444ba1b...` | Active |
| Mumbai | TBD | TBD | Planned |
| Arbitrum | TBD | TBD | Planned |

## Security Analysis

### Attack Vectors and Mitigations

#### 1. Replay Attacks
- **Risk**: Reusing valid proofs
- **Mitigation**: Nullifier system prevents double-spending of proofs
- **Implementation**: `usedNullifiers` mapping

#### 2. Admin Key Compromise
- **Risk**: Malicious attester root updates
- **Mitigation**: Multi-sig admin, timelock for updates
- **Implementation**: Single admin currently (consider upgrading)

#### 3. ZK Proof Forgery
- **Risk**: Invalid proofs accepted
- **Mitigation**: Cryptographically secure Groth16 implementation
- **Implementation**: Trusted setup ceremony required

#### 4. Front-Running
- **Risk**: MEV extraction on verification transactions
- **Mitigation**: Private mempools, commit-reveal schemes
- **Status**: Current implementation vulnerable

### Security Best Practices

1. **Trusted Setup**: Ensure verifier keys from legitimate ceremony
2. **Admin Security**: Use multi-sig wallets for admin functions
3. **Upgrade Path**: Consider proxy patterns for registry upgrades
4. **Monitoring**: Set up alerts for suspicious activity
5. **Rate Limiting**: Implement application-layer rate limiting

### Audit Considerations

- ZK circuit correctness verification
- Solidity contract security review
- Gas optimization analysis
- Integration testing across networks

## Developer Integration

### Contract ABIs

The contracts expose standard ABIs for integration. Key interfaces:

```typescript
interface IEntityTypeRegistry {
  verifyAndRegister(
    proofA: [BigNumber, BigNumber],
    proofB: [[BigNumber, BigNumber], [BigNumber, BigNumber]],
    proofC: [BigNumber, BigNumber],
    publicSignals: [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
  ): Promise<ContractTransaction>;

  getVerification(commitment: string): Promise<[number, BigNumber]>;
  isVerificationFresh(commitment: string, maxAge: BigNumber): Promise<boolean>;
}
```

### Testing Framework

```javascript
// Test setup
const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('EntityTypeRegistry', () => {
  beforeEach(async () => {
    const Verifier = await ethers.getContractFactory('Groth16Verifier');
    const verifier = await Verifier.deploy();

    const Registry = await ethers.getContractFactory('EntityTypeRegistry');
    const registry = await Registry.deploy(verifier.address);
  });

  it('should verify valid proofs', async () => {
    // Test implementation
  });
});
```

### Development Workflow

1. **Setup Environment**
   ```bash
   git clone <repo>
   npm install
   cp .env.example .env
   ```

2. **Local Development**
   ```bash
   npx hardhat node  # Start local chain
   npx hardhat run scripts/deploy.js  # Deploy contracts
   npm test  # Run tests
   ```

3. **Integration Testing**
   ```bash
   npm run test:integration
   ```

4. **Testnet Deployment**
   ```bash
   npx hardhat run scripts/deploy.js --network sepolia
   ```

### Common Integration Patterns

#### 1. Verification Gateway
```javascript
async function verifyEntityType(proof, signals) {
  const tx = await registry.verifyAndRegister(
    proof.pi_a,
    proof.pi_b,
    proof.pi_c,
    signals
  );

  const receipt = await tx.wait();
  const event = receipt.events.find(e => e.event === 'EntityVerified');

  return {
    commitment: event.args.commitment,
    entityType: event.args.entityType,
    timestamp: event.args.timestamp,
  };
}
```

#### 2. Type-Based Access Control
```javascript
async function checkAccess(commitment, requiredType) {
  const [entityType, timestamp] = await registry.getVerification(commitment);

  if (entityType === 0) {
    throw new Error('Entity not verified');
  }

  if (entityType !== requiredType) {
    throw new Error('Insufficient permissions');
  }

  const fresh = await registry.isVerificationFresh(commitment, 86400); // 24h
  if (!fresh) {
    throw new Error('Verification expired');
  }

  return true;
}
```

#### 3. Event-Driven Updates
```javascript
// Real-time verification monitoring
registry.on('EntityVerified', async (commitment, entityType, nullifier, timestamp) => {
  await updateApplicationState({
    entity: commitment,
    type: decodeEntityType(entityType),
    verifiedAt: new Date(timestamp * 1000),
  });
});
```

### Error Handling

Common errors and handling:

```solidity
error InvalidProof();           // ZK proof verification failed
error NullifierAlreadyUsed();  // Replay attack prevention
error InvalidEntityType();     // Unknown entity type
error Unauthorized();          // Admin function access denied
```

### Performance Considerations

- Use `staticcall` for view functions to avoid gas costs
- Batch multiple verifications when possible
- Cache verification results off-chain for better UX
- Consider using The Graph for efficient event indexing

---

*This documentation covers the complete smart contract system for Entity Identity. For circuit-level documentation, see the ZK circuits documentation. For application integration, refer to the SDK documentation.*