# GameGames

> **Decentralized Skill Wagering Platform**

## The Problem

Skill-based gaming wagering is dominated by centralized platforms that:
- Take 10-20% fees
- Can freeze your funds
- Lack transparency in verification
- Are banned in many jurisdictions
- Require trusting a single company

Meanwhile, millions of gamers would love to compete for stakes but have no trustless way to do so.

## The Solution

GameGames is a **fully decentralized** wagering platform built on Solana. Stakes are held in smart contract escrow, results are verified by AI vision, and the entire frontend lives on IPFS. No company can shut it down, freeze your funds, or manipulate outcomes.

## How It Works

1. **Create a Bet**: Choose your game, set conditions (K/D ratio, placement, score), deposit your wager
2. **Join a Bet**: Browse the lobby, find matches at your skill level, stake your SOL
3. **Play Your Game**: Compete in the actual game (not on our platform)
4. **Submit Proof**: Upload screenshot/video of your results to IPFS
5. **AI Verifies**: Our AI analyzes the proof and determines the winner
6. **Instant Payout**: Smart contract automatically pays the winner

## Supported Games

| Game | Proof Type | Outcome Types |
|------|-----------|---------------|
| Fortnite | Screenshot/Video | Placement, Kills, Wins |
| Call of Duty | Screenshot | K/D Ratio, Score |
| League of Legends | Match History | Win/Loss, KDA |
| Counter-Strike | Screenshot | Match Result, Kills |
| Valorant | Screenshot | Win/Loss, Combat Score |
| Apex Legends | Screenshot | Placement, Damage |

*Extensible - any game with verifiable results can be added*

## Technical Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                       GAMEGAMES                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌────────────┐         ┌────────────┐                      │
│  │  Frontend  │◄───────►│   IPFS     │                      │
│  │  (React)   │         │  Storage   │                      │
│  └─────┬──────┘         └────────────┘                      │
│        │                                                     │
│        ▼                                                     │
│  ┌────────────────────────────────────────────┐             │
│  │           SOLANA BLOCKCHAIN                 │             │
│  │  ┌──────────────────────────────────────┐  │             │
│  │  │         GG-BET PROGRAM               │  │             │
│  │  │                                      │  │             │
│  │  │  • Bet Creation & Matching           │  │             │
│  │  │  • Escrow Management                 │  │             │
│  │  │  • Proof Hash Storage                │  │             │
│  │  │  • Oracle-Verified Payouts           │  │             │
│  │  └──────────────────────────────────────┘  │             │
│  └────────────────────────────────────────────┘             │
│        ▲                                                     │
│        │                                                     │
│  ┌─────┴──────┐         ┌────────────┐                      │
│  │   Oracle   │◄────────│ AI Verifier│                      │
│  │  Service   │         │ (Claude)   │                      │
│  └────────────┘         └────────────┘                      │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Why Solana?

| Feature | Benefit |
|---------|---------|
| **400ms finality** | Near-instant bet confirmation |
| **$0.00025 fees** | Micro-wagers are viable |
| **65k TPS** | Scales to millions of concurrent bets |
| **Ecosystem** | Phantom wallet, existing gaming community |

## Technology Stack

| Component | Technology |
|-----------|------------|
| Blockchain | Solana |
| Smart Contracts | Rust + Anchor Framework |
| Frontend | React + TypeScript |
| Wallet | Phantom, Solflare (via @solana/wallet-adapter) |
| Backend | Node.js + Express |
| AI Verification | Claude Vision API |
| Storage | IPFS (Infura/Pinata) |
| Hosting | IPFS + IPNS (fully decentralized) |

## Repository Structure

```
gamegames/
├── programs/gg-bet/      # Solana program (Rust + Anchor)
├── app/                  # React frontend
├── backend/              # Indexer + AI verifier
├── gg-discord-bot/       # Discord integration
├── gg-capture/           # Proof capture tools
├── oracle/               # Verification oracle
└── scripts/              # Deployment automation
```

## Security Model

| Layer | Protection |
|-------|------------|
| **Funds** | Escrowed in program-controlled accounts (not our keys) |
| **Proofs** | Immutable on IPFS, hash stored on-chain |
| **Oracle** | Multi-sig authorization, disputable outcomes |
| **Frontend** | IPFS hosting - no single point of failure |

## Business Model

GameGames takes a **2.5% platform fee** on completed wagers, significantly lower than centralized alternatives (10-20%). Fees go to:

- 50% Protocol treasury (for development)
- 30% Liquidity incentives
- 20% Insurance fund (for disputed outcomes)

## Roadmap

- [x] MVP on Solana devnet
- [x] React frontend
- [x] IPFS deployment
- [ ] AI verification implementation (Claude Vision)
- [ ] Chainlink oracle integration
- [ ] Mobile app (React Native)
- [ ] Tournament mode
- [ ] DAO governance
- [ ] Mainnet launch

## Metrics & Status

- **Status**: Development, devnet testing
- **Network**: Solana Devnet
- **Program ID**: `Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS`

## Links

- Play: [gamegames.gg](https://gamegames.gg)

---

## Why This Matters

GameGames proves that **AI can be an ally** in verification rather than surveillance. Instead of invasive anti-cheat software monitoring your every move, AI simply looks at the outcome and verifies it. The platform is trustless - we can't steal your funds, rig outcomes, or censor you. Gaming wagering, done right.
