# Technology Thesis

> *The technical bets behind Rising Sun*

## Executive Summary

We're building infrastructure for a post-trust internet using five technical pillars:

1. **Zero-knowledge proofs** for verification without disclosure
2. **Spatial interfaces** that leverage human cognitive strengths
3. **Purpose-fit blockchains** (Cosmos for sovereignty, Solana for speed)
4. **Agentic AI** that serves users, not platforms
5. **Web-native architecture** that eliminates gatekeepers

This document explains why we chose these technologies, how they interconnect, and what makes this approach defensible.

---

## I. Zero-Knowledge Proofs

### The Core Insight

Most authentication and verification systems have a fundamental flaw: to prove something, you must reveal it. To prove you know a password, you send it. To prove you own an asset, you expose your holdings. To prove your identity, you hand over credentials.

Zero-knowledge proofs break this paradigm. You can prove you know a secret *without revealing the secret itself*. You can prove a computation was performed correctly *without revealing the inputs*.

This isn't cryptographic novelty - it's a paradigm shift in how trust works.

### Why Halo2

We chose Halo2 (developed by the Zcash team) over alternatives for specific reasons:

| Property | Halo2 | SNARKs (Groth16) | STARKs |
|----------|-------|------------------|--------|
| Trusted setup | **No** | Yes (toxic waste) | No |
| Proof size | ~5-10 KB | ~200 bytes | ~50-100 KB |
| Verification time | Fast | Very fast | Slower |
| Prover time | Moderate | Fast | Slow |
| Quantum resistance | No | No | **Yes** |
| Recursion | **Native** | Complex | Complex |

Halo2's killer feature is **no trusted setup**. SNARKs require a ceremony where participants generate and destroy secret parameters - if anyone keeps them, they can forge proofs. This "toxic waste" problem is a trust assumption we refuse to make.

Halo2 also supports **recursive proof composition** - proofs that verify other proofs. This enables:
- Incremental verification (prove a chain of actions)
- Proof aggregation (batch many proofs into one)
- Succinct blockchain state (prove entire chain validity)

### Our Halo2 Circuits

**Spatial Commitment Circuit** (Password Palace, Trove)
```
Public inputs:  merkle_root, nullifier
Private inputs: voxel_positions[], voxel_orientations[], voxel_labels[], merkle_path

Constraints:
1. hash(voxel_i) = leaf_i for all voxels
2. merkle_verify(leaves, path, root) = true
3. nullifier = hash(secret || domain_separator)
```

This proves: "I know a spatial arrangement that hashes to this commitment" without revealing the arrangement.

**Solution Proof Circuit** (Trove)
```
Public inputs:  trove_commitment, solution_hash
Private inputs: voxels[], solution_key

Constraints:
1. spatial_hash(voxels) = trove_commitment
2. hash(voxels || solution_key) = solution_hash
```

This proves: "I solved this puzzle" without revealing the solution (so others can't copy it).

**Solvability Proof Circuit** (Trove)
```
Public inputs:  trove_commitment
Private inputs: valid_solution[]

Constraints:
1. spatial_hash(valid_solution) = trove_commitment
2. is_valid_arrangement(valid_solution) = true
```

This proves: "A solution exists" when creating a Trove (prevents unsolvable puzzles).

### WASM Prover Architecture

ZK proofs are computationally expensive. Our architecture:

```
┌─────────────────────────────────────────────────────────────┐
│                      BROWSER                                 │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐     │
│  │   UI Layer  │───►│ Prover WASM │───►│  Proof JSON │     │
│  │  (React)    │    │   (Rust)    │    │             │     │
│  └─────────────┘    └─────────────┘    └──────┬──────┘     │
│                                                │            │
└────────────────────────────────────────────────┼────────────┘
                                                 │
                                                 ▼
┌─────────────────────────────────────────────────────────────┐
│                    BLOCKCHAIN                                │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              VERIFIER CONTRACT                       │   │
│  │  • Pairing checks (BN254/Pasta curves)              │   │
│  │  • Public input validation                          │   │
│  │  • State transition on success                      │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

The prover runs entirely client-side via WebAssembly:
- **Privacy**: Secret inputs never leave the browser
- **Decentralization**: No prover service to trust or pay
- **Availability**: Works offline once loaded

Proof generation takes 2-10 seconds depending on circuit complexity. Verification on-chain takes milliseconds.

---

## II. Spatial Interfaces

### The Cognitive Science

Humans have exceptional spatial memory - it's an evolutionary adaptation for navigating physical environments. The "method of loci" (memory palace technique) has been used for millennia because it works with how our brains naturally encode information.

Key findings from cognitive research:

- **Spatial memory is robust**: People can remember locations of thousands of objects in familiar environments
- **Spatial memory is intuitive**: Requires no training, unlike mnemonic systems
- **Spatial memory is hard to extract**: Unlike verbal memories, spatial knowledge is difficult to articulate or transfer
- **Spatial memory is personal**: Your arrangement, your palace, your associations

This makes spatial secrets ideal for authentication:
- Easy to remember (you designed the space)
- Hard to phish (attacker would need to understand your 3D mental model)
- Hard to coerce (difficult to verbalize under pressure)
- Impossible to keylog (no text to capture)

### Voxel-Based Representation

We represent spatial arrangements as voxel grids:

```typescript
interface Voxel {
  position: { x: number; y: number; z: number };
  orientation: { pitch: number; yaw: number; roll: number };
  label: string;  // Object identifier
}

interface SpatialCommitment {
  voxels: Voxel[];
  merkleRoot: string;  // Poseidon hash of voxel tree
}
```

Why voxels over continuous 3D:
- **Discrete**: Finite space of valid arrangements (important for ZK circuits)
- **Deterministic**: Same arrangement always produces same hash
- **Efficient**: Merkle trees work naturally with discrete elements
- **Intuitive**: Grid-based placement is easy to understand

### 3D Rendering Pipeline

```
┌─────────────────────────────────────────────────────────────┐
│                    RENDERING STACK                           │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────┐                                            │
│  │   React     │  UI state, routing, forms                  │
│  └──────┬──────┘                                            │
│         │                                                    │
│         ▼                                                    │
│  ┌─────────────┐                                            │
│  │ React Three │  Declarative 3D components                 │
│  │   Fiber     │                                            │
│  └──────┬──────┘                                            │
│         │                                                    │
│         ▼                                                    │
│  ┌─────────────┐                                            │
│  │  Three.js   │  Scene graph, materials, lighting          │
│  └──────┬──────┘                                            │
│         │                                                    │
│         ▼                                                    │
│  ┌─────────────┐                                            │
│  │   WebGL 2   │  GPU rendering                             │
│  └─────────────┘                                            │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

For Password Palace, we built a custom voxel editor that:
- Renders 3D rooms with object placement
- Supports 21+ primitive object types
- Handles orientation (6 degrees of freedom)
- Exports arrangements to merkle-tree-compatible format

---

## III. Blockchain Architecture

### The Two-Chain Strategy

We use different blockchains for different purposes:

| Requirement | Cosmos | Solana |
|-------------|--------|--------|
| Sovereignty (own chain) | ✓ | ✗ |
| Custom VM logic | ✓ | Limited |
| Transaction speed | ~6s | ~400ms |
| Transaction cost | ~$0.01 | ~$0.00025 |
| Smart contract language | Rust (CosmWasm) | Rust (Anchor) |
| Ecosystem | IBC interoperability | DeFi, NFTs, gaming |

**Cosmos** for Password Palace and Trove:
- Sovereign chain = full control over protocol
- CosmWasm allows complex ZK verifier logic
- IBC enables cross-chain identity/assets
- Governance via staking

**Solana** for GameGames:
- Sub-second finality for real-time wagering
- Extremely low fees enable micro-stakes
- Strong gaming/consumer ecosystem
- Existing wallet infrastructure (Phantom)

### CosmWasm Contract Architecture

```rust
// Simplified Password Palace contract structure

#[cw_serde]
pub struct Room {
    pub owner: Addr,
    pub commitment: String,      // Merkle root
    pub nullifier_set: Vec<String>,  // Prevent replay
    pub created_at: Timestamp,
}

#[cw_serde]
pub enum ExecuteMsg {
    CreateRoom { commitment: String },
    Authenticate { proof: Halo2Proof, nullifier: String },
    UpdateCommitment { proof: Halo2Proof, new_commitment: String },
}

pub fn authenticate(
    deps: DepsMut,
    info: MessageInfo,
    proof: Halo2Proof,
    nullifier: String,
) -> Result<Response, ContractError> {
    let room = ROOMS.load(deps.storage, &info.sender)?;

    // Verify nullifier not used (prevent replay)
    if room.nullifier_set.contains(&nullifier) {
        return Err(ContractError::NullifierReused {});
    }

    // Verify ZK proof
    let public_inputs = vec![room.commitment.clone(), nullifier.clone()];
    verify_halo2_proof(&proof, &public_inputs)?;

    // Record nullifier
    ROOMS.update(deps.storage, &info.sender, |r| {
        let mut room = r.unwrap();
        room.nullifier_set.push(nullifier);
        Ok(room)
    })?;

    Ok(Response::new().add_attribute("action", "authenticated"))
}
```

### Solana Program Architecture

```rust
// Simplified GameGames program structure

#[program]
pub mod gg_bet {
    pub fn create_bet(
        ctx: Context<CreateBet>,
        game: Game,
        outcome_type: OutcomeType,
        wager: u64,
    ) -> Result<()> {
        let bet = &mut ctx.accounts.bet;
        bet.creator = ctx.accounts.creator.key();
        bet.game = game;
        bet.outcome_type = outcome_type;
        bet.wager = wager;
        bet.state = BetState::Open;

        // Transfer wager to escrow PDA
        transfer_to_escrow(ctx, wager)?;

        Ok(())
    }

    pub fn resolve_bet(
        ctx: Context<ResolveBet>,
        winner: Pubkey,
        proof_cid: String,  // IPFS CID
    ) -> Result<()> {
        // Only oracle can resolve
        require!(
            ctx.accounts.oracle.key() == AUTHORIZED_ORACLE,
            ErrorCode::UnauthorizedOracle
        );

        let bet = &mut ctx.accounts.bet;
        bet.state = BetState::Resolved;
        bet.winner = Some(winner);
        bet.proof_cid = Some(proof_cid);

        // Transfer escrow to winner
        transfer_from_escrow(ctx, winner, bet.total_pot())?;

        Ok(())
    }
}
```

---

## IV. Agentic AI Architecture

### The Eudaimonia Model

Most AI assistants are stateless query-response systems. Eudaimonia is an **autonomous agent** with:

- **Persistent memory**: Remembers across sessions
- **Internal economics**: Allocates resources via Theta currency
- **Governance hierarchy**: Master → Commissioner → Specialists
- **External earnings**: Generates value through API services
- **P2P networking**: Coordinates with other Eudaimonia instances

```
┌─────────────────────────────────────────────────────────────┐
│                     EUDAIMONIA KERNEL                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                   GOVERNANCE                         │   │
│  │  TrueMaster (cryptographic root)                    │   │
│  │       │                                             │   │
│  │       ▼                                             │   │
│  │  Master (human operator)                            │   │
│  │       │                                             │   │
│  │       ▼                                             │   │
│  │  Commissioner (task orchestration)                  │   │
│  │       │                                             │   │
│  │       ▼                                             │   │
│  │  Specialists (domain experts)                       │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │    THETA     │  │    NOUS      │  │   MEMORY     │      │
│  │  (internal)  │  │  (external)  │  │  (semantic)  │      │
│  │              │  │              │  │              │      │
│  │ • Treasury   │  │ • USD value  │  │ • State      │      │
│  │ • Allocation │  │ • API Bridge │  │ • Search     │      │
│  │ • Bidding    │  │ • Conversion │  │ • Context    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Specialist Architecture

Each specialist is a prompted LLM with domain expertise:

```python
class Specialist:
    def __init__(self, name: str, system_prompt: str, tools: List[Tool]):
        self.name = name
        self.system_prompt = system_prompt
        self.tools = tools
        self.theta_balance = 0

    async def bid(self, task: Task) -> Bid:
        """Bid Theta to handle this task"""
        relevance = self.estimate_relevance(task)
        return Bid(
            specialist=self.name,
            amount=relevance * self.theta_balance * 0.1,
            confidence=relevance
        )

    async def execute(self, task: Task) -> Result:
        """Execute task with tools"""
        messages = [
            {"role": "system", "content": self.system_prompt},
            {"role": "user", "content": task.description}
        ]

        while not complete:
            response = await llm.chat(messages, tools=self.tools)
            if response.tool_calls:
                results = await self.execute_tools(response.tool_calls)
                messages.extend(results)
            else:
                return Result(output=response.content)
```

The 18 specialists cover:
- **Core**: Commissioner, Reasoner, Coder, Researcher, Debugger, Communicator
- **Domain**: MarketAnalyst, Mathematician, LegalAdvisor, GovernmentAdvisor, SocialTrends
- **Venture**: Content, SaaS, Newsletter, Course, Agency, Affiliate, OpenSource

### AI Verification (GameGames)

For GameGames, AI serves a different purpose: **verification without surveillance**.

```python
async def verify_game_result(
    proof_image: bytes,
    claimed_outcome: Outcome,
    game: Game
) -> VerificationResult:
    """
    Use vision AI to verify game outcome from screenshot.

    Key principle: We analyze the RESULT, not the PROCESS.
    No keyloggers, no screen recording, no behavior analysis.
    Just: "Does this screenshot show what the user claims?"
    """

    prompt = f"""
    Analyze this {game.name} screenshot.

    User claims: {claimed_outcome}

    Verify:
    1. Is this a legitimate {game.name} results screen?
    2. What outcome does the screenshot show?
    3. Does it match the user's claim?

    Return: VERIFIED, REJECTED, or INCONCLUSIVE with reasoning.
    """

    response = await claude.analyze_image(proof_image, prompt)
    return parse_verification(response)
```

This is AI as ally: it verifies without invading. No kernel-level anti-cheat, no behavioral biometrics, no continuous surveillance. Just outcome verification.

---

## V. Web-Native Architecture

### Why Browser-First

The browser is the most deployed runtime in history. Building for the browser means:

- **Zero installation**: URL = application
- **Cross-platform**: Windows, Mac, Linux, mobile, Chromebooks
- **Instant updates**: No app store approval, no user action required
- **No gatekeepers**: Apple/Google can't reject or remove
- **Sandboxed security**: Isolated from system, permission-gated APIs

### WebAssembly for Performance-Critical Code

WASM lets us run Rust/C++ at near-native speed in browsers:

```
┌─────────────────────────────────────────────────────────────┐
│                    WASM MODULES                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────────┐    Performance: ~0.8x native           │
│  │  ZK Prover      │    Size: ~2MB                          │
│  │  (Halo2/Rust)   │    Load: ~500ms                        │
│  └─────────────────┘                                        │
│                                                              │
│  ┌─────────────────┐    Performance: ~0.9x native           │
│  │  Cryptography   │    Size: ~200KB                        │
│  │  (Poseidon)     │    Load: ~50ms                         │
│  └─────────────────┘                                        │
│                                                              │
│  ┌─────────────────┐    Performance: ~0.95x native          │
│  │  Physics        │    Size: ~100KB                        │
│  │  (Forgeground)  │    Load: ~30ms                         │
│  └─────────────────┘                                        │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### WebGL/WebGPU for Graphics

Forgeground proves AAA-quality graphics are possible in browsers:

```typescript
// Babylon.js setup for Forgeground
const engine = new Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
    antialias: true
});

const scene = new Scene(engine);
scene.enablePhysics(
    new Vector3(0, -9.81, 0),
    new AmmoJSPlugin()  // Deterministic physics via WASM
);

// 60fps render loop
engine.runRenderLoop(() => {
    scene.render();
});
```

Key techniques:
- **Instanced rendering**: Draw thousands of objects in single draw call
- **LOD (Level of Detail)**: Reduce geometry at distance
- **Frustum culling**: Don't render what's not visible
- **Texture atlasing**: Minimize state changes

### WebSocket for Real-Time

Multiplayer requires low-latency bidirectional communication:

```typescript
// Client-side prediction + server reconciliation
class NetworkedPlayer {
    private serverState: PlayerState;
    private pendingInputs: Input[] = [];

    processServerUpdate(state: PlayerState, lastProcessedInput: number) {
        this.serverState = state;

        // Remove acknowledged inputs
        this.pendingInputs = this.pendingInputs.filter(
            input => input.sequence > lastProcessedInput
        );

        // Re-apply unacknowledged inputs
        let predicted = { ...state };
        for (const input of this.pendingInputs) {
            predicted = this.applyInput(predicted, input);
        }

        this.render(predicted);
    }
}
```

This gives responsive gameplay even with 100ms+ latency.

### IPFS for Censorship Resistance

Static assets and proofs live on IPFS:

```typescript
// Deploy frontend to IPFS
const { cid } = await ipfs.add(buildDirectory, {
    recursive: true,
    wrapWithDirectory: true
});

// Pin for persistence
await pinata.pinByHash(cid);

// Access via any gateway
// https://ipfs.io/ipfs/{cid}
// https://gateway.pinata.cloud/ipfs/{cid}
// https://{cid}.ipfs.dweb.link
```

Benefits:
- **Content-addressed**: CID = hash of content, can't be tampered
- **Replicated**: Multiple nodes store copies
- **Censorship-resistant**: No single point to block
- **Permanent**: Once pinned, persists indefinitely

---

## VI. The Integrated Stack

### How It Fits Together

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           RISING SUN STACK                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                         USER LAYER                                   │   │
│  │  Password Palace │ Trove Hunt │ GameGames │ Forgeground │ Eudaimonia│   │
│  └────────┬─────────────┬────────────┬────────────┬────────────┬───────┘   │
│           │             │            │            │            │            │
│  ┌────────▼─────────────▼────────────▼────────────▼────────────▼───────┐   │
│  │                      INTERFACE LAYER                                 │   │
│  │  React │ Three.js │ React Three Fiber │ Babylon.js │ TailwindCSS    │   │
│  └────────┬─────────────┬────────────┬────────────┬────────────────────┘   │
│           │             │            │            │                         │
│  ┌────────▼─────────────▼────────────▼────────────▼────────────────────┐   │
│  │                      RUNTIME LAYER                                   │   │
│  │  TypeScript │ WebAssembly │ WebGL/WebGPU │ WebSocket │ Web Workers  │   │
│  └────────┬─────────────┬────────────┬────────────┬────────────────────┘   │
│           │             │            │            │                         │
│  ┌────────▼─────────────▼────────────▼────────────▼────────────────────┐   │
│  │                    CRYPTOGRAPHY LAYER                                │   │
│  │  Halo2 ZK │ Poseidon Hash │ Merkle Trees │ AES-256 │ HKDF          │   │
│  └────────┬─────────────┬────────────────────────────────────────────────   │
│           │             │                                                   │
│  ┌────────▼─────────────▼──────────────────────────────────────────────┐   │
│  │                    CONSENSUS LAYER                                   │   │
│  │  Cosmos SDK │ CosmWasm │ Solana │ Anchor │ IPFS │ Bittensor        │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Shared Components

| Component | Used By | Purpose |
|-----------|---------|---------|
| Halo2 circuits | Password Palace, Trove | ZK proof generation |
| Poseidon hash | Password Palace, Trove | ZK-friendly hashing |
| Merkle trees | Password Palace, Trove | Commitment schemes |
| Voxel system | Password Palace, Trove | Spatial representation |
| WASM prover | Password Palace, Trove | Client-side proving |
| React + TypeScript | All projects | UI framework |

### Cross-Project Synergies

**Password Palace → Trove**: Same spatial memory system. Users who build password palaces can create Troves. Same ZK circuits verify both.

**Eudaimonia → All Projects**: AI assistance for all applications. Eudaimonia can help users create memory palaces, design Trove puzzles, analyze GameGames strategies.

**Forgeground → GameGames**: Forgeground matches can be wagered on via GameGames. Same verification oracle, different game integration.

---

## VII. Technical Moats

### What's Defensible

**1. ZK Circuit Expertise**
Building production ZK circuits requires deep knowledge of:
- Finite field arithmetic
- Polynomial commitment schemes
- Circuit optimization (constraint minimization)
- Security analysis (soundness, zero-knowledge)

We have working circuits. Most teams have whitepapers.

**2. Spatial Memory IP**
The specific application of spatial memory to authentication is novel:
- Voxel-based commitment schemes
- Multi-modality authentication (9 methods)
- Fuzzy matching for biometric inputs
- Privacy-preserving verification

Defensible through both technical complexity and potential patents.

**3. Integrated Stack**
The value isn't in any single component but in the integration:
- ZK proofs + spatial interfaces + blockchain verification
- AI agents + API bridges + P2P networking
- Browser runtime + WASM performance + decentralized storage

Replicating the full stack requires years of development.

**4. Network Effects**
Once deployed:
- Password Palace: More integrations → more valuable identity
- Trove: More users → larger community chest → more attractive prizes
- GameGames: More players → better matchmaking → stickier platform
- Eudaimonia: More instances → stronger hivemind → smarter agents

---

## VIII. Open Questions

Intellectual honesty requires acknowledging unknowns:

**ZK Proof Performance**
- Can we get proof generation under 1 second on mobile?
- Will recursive proofs enable practical proof aggregation?
- How will quantum computing affect our curve choices?

**Spatial Memory Limits**
- How many rooms can users reliably remember?
- How do we handle users who struggle with spatial thinking?
- What's the failure rate in real-world usage?

**Blockchain Scalability**
- Will Cosmos IBC handle cross-chain identity at scale?
- How do we manage state growth over years?
- What happens if our chain's validators centralize?

**AI Alignment**
- Can we ensure Eudaimonia agents remain aligned with user interests?
- How do we prevent agents from developing adversarial behaviors?
- What governance mechanisms prevent abuse?

**Regulatory**
- How will ZK-based identity interact with KYC requirements?
- Is GameGames wagering legal in target jurisdictions?
- Will blockchain-based systems face platform liability?

We're building into uncertainty. That's what makes it interesting.

---

## IX. Conclusion

The technology thesis is simple:

1. **Zero-knowledge proofs** let us build systems where privacy is guaranteed by math, not policy
2. **Spatial interfaces** leverage innate human cognitive abilities
3. **Blockchains** provide censorship-resistant coordination
4. **Agentic AI** can serve users instead of exploiting them
5. **Web-native architecture** eliminates gatekeepers

These aren't speculative technologies. They're production-ready tools that have never been combined this way.

The thesis is that combining them creates something greater than the sum of parts: infrastructure for a post-trust internet where users are safe, AI is an ally, and no one can be deplatformed.

We're testing this thesis with working software.

---

*"In theory, there is no difference between theory and practice. In practice, there is."*

*— Yogi Berra*

*We're in practice.*
