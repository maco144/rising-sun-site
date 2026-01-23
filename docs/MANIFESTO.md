# The Rising Sun Manifesto

## The Internet We Were Promised

The early internet promised liberation. Information wants to be free. Anyone can publish. Connect with anyone, anywhere. Build anything.

That internet is dying.

Today, five companies control what you see, what you can say, and increasingly, what you can think. Your passwords are stored in databases waiting to be breached. Your AI assistant reports to a corporation, not to you. Your digital identity exists at the pleasure of platforms that can revoke it without appeal. Your games, your music, your books - you don't own them. You license them until someone decides otherwise.

We traded the open web for convenience. We traded privacy for "free" services. We traded ownership for access.

It was a bad deal.

---

## The Internet We're Building

We believe another path is possible. Not backward to some nostalgic past, but forward to something better. An internet where:

**Users are safe** - not because companies promise to protect them, but because the mathematics make exploitation impossible.

**AI is an ally** - not a surveillance system, not a manipulation engine, but genuine intelligence that works *for* you.

**Power is distributed** - not concentrated in data centers controlled by billionaires, but spread across networks that no one can shut down.

This isn't idealism. This is engineering. The technology exists. We're building it.

---

## Three Principles

### I. Safety Through Mathematics

Trust is expensive. Trust is fragile. Trust is exploited.

The old model: "Trust us with your password. Trust us with your data. Trust us not to get hacked, go bankrupt, or turn evil."

The new model: **Don't trust. Verify.**

Zero-knowledge proofs let you prove you know a secret without revealing it. Merkle trees let you verify data hasn't been tampered with. Cryptographic commitments let you make promises that can't be broken.

When safety comes from mathematics rather than promises, it doesn't matter if the company is trustworthy. It doesn't matter if the server is compromised. It doesn't matter if the government issues a subpoena. The math protects you regardless.

Password Palace doesn't store your passwords because it doesn't need to. Trove doesn't require a trusted escrow agent because the protocol *is* the escrow. This isn't a feature - it's a fundamental architectural choice that eliminates entire categories of risk.

**We build systems where being evil is not just wrong, but impossible.**

### II. AI as Ally, Not Adversary

The current AI paradigm is extraction. Companies build AI to:
- Keep you scrolling longer (engagement)
- Show you ads you'll click (targeting)
- Predict your behavior (surveillance)
- Replace your labor (automation)

The AI doesn't work for you. You work for it - generating training data, providing feedback, creating the content it learns from. And then it's used against you.

We reject this entirely.

AI should be a tool that amplifies human capability, not a system that harvests human attention. AI should remember what you've told it and act on your behalf, not forget everything and start over. AI should be transparent about its reasoning, not a black box optimizing for metrics you never agreed to.

Eudaimonia is an AI that works for its owner. It has memory. It has agency. It can earn money and manage resources. It answers to you, not to a corporate parent. It's not a product - it's infrastructure for human flourishing.

GameGames uses AI for verification, not surveillance. Instead of invasive anti-cheat software monitoring your every keystroke, AI simply looks at the outcome and confirms it. The AI serves the players, not the platform.

**We build AI that you own, that serves you, that makes you more capable.**

### III. Decentralization as Insurance

Centralization is efficient. It's also fragile, corruptible, and ultimately tyrannical.

Every centralized system eventually:
- Gets hacked (data breaches)
- Gets corrupted (enshittification)
- Gets captured (regulatory or political pressure)
- Gets abandoned (company fails, pivots, or loses interest)

Decentralization isn't about ideology. It's about resilience. When no single point can fail, the system survives. When no single entity can censor, speech remains free. When no single company can rug-pull, users retain control.

Our projects run on Cosmos, Solana, and IPFS - not because blockchain is magic, but because these networks have no off switch. No CEO can decide to shut them down. No government can issue a takedown order that actually works. No acquirer can pivot the product.

Forgeground's frontend lives on IPFS. Even if we disappeared tomorrow, the game would keep running. GameGames' escrow is controlled by code, not by us. We literally cannot steal user funds - the architecture prevents it.

**We build systems that survive us, that can't be corrupted by us, that don't require trusting us.**

---

## The Identity Problem

Before there can be a free internet, there must be sovereign identity.

Think about it: every freedom online depends on proving who you are. Access to your money, your data, your communications, your reputation - all gated by identity. Whoever controls identity controls everything.

Today's identity solutions all fail the sovereignty test:

**Passwords** - Stored in databases you don't control. Phished. Leaked. Breached. You don't own your password; you share it with every service that demands one.

**Biometrics** - Your face, your fingerprint, your iris. Convenient, yes. But you can't change them if compromised. They can be captured without consent. And they reduce your identity to a biological signature that governments and corporations can demand, scan, and track.

**Hardware tokens** - Better, but you're trusting a manufacturer. The device can be stolen, lost, or backdoored. Your identity becomes a physical object that can be confiscated.

**Voice/Face recognition** - Trivially spoofable with AI. Deepfakes make these authentication methods increasingly worthless. And worse, they normalize constant biometric surveillance.

**Platform identity** - "Sign in with Google/Apple/Facebook." Your identity exists at the pleasure of a corporation that can revoke it, mine it, or hand it to authorities without your knowledge.

None of these give you identity that is truly *yours*.

Password Palace is different. It's built on a simple insight: **the most secure secret is one that exists only in your mind, in a form that can't be extracted, photographed, or coerced.**

Spatial memory - the way you remember where you put things, how your childhood home was arranged, the path through a familiar place - is deeply human. It's how memory champions memorize thousands of items. It's intuitive, memorable, and *yours*.

When your "password" is a 3D room you designed, with objects you placed, in an arrangement only you know - that's identity no one can steal by breaching a database. No one can capture by photographing your face. No one can extract by taking your hardware.

And with zero-knowledge proofs, you never reveal the secret. You prove you know it. The verifier learns nothing except that you're you.

This matters beyond convenience. In a world of increasing authoritarianism, your ability to maintain a digital identity that can't be revoked, surveilled, or coerced is foundational to freedom itself. Dissidents need identity that governments can't seize. Journalists need identity that corporations can't pressure. Everyone needs identity that isn't contingent on the goodwill of platforms.

Password Palace isn't just a better password manager. It's infrastructure for self-sovereign identity - the foundation on which a free internet must be built.

**You are not your biometrics. You are not your hardware. You are not your platform account. You are your memories, your knowledge, your secrets. Own them.**

---

## Why Now

Three technological shifts make this moment unique:

**Zero-knowledge proofs are practical.** Five years ago, ZK proofs were academic curiosities - too slow, too expensive, too complex for real applications. Today, Halo2 circuits run in browsers. Proof generation takes seconds, not hours. The cryptography is ready.

**AI is actually intelligent.** Large language models crossed a threshold. They can reason, code, analyze, and act. For the first time, we can build AI systems that genuinely augment human capability rather than just pattern-matching.

**Web technology is powerful enough.** WebGL renders 3D graphics at 60fps. WebAssembly runs cryptographic operations at near-native speed. WebSockets enable real-time multiplayer. The browser is now a serious application platform.

The pieces exist. Someone needs to assemble them.

---

## What We're Actually Building

This isn't a whitepaper for vaporware. These are working systems:

**Password Palace** - 95+ components, 9 authentication modalities, ZK proofs running in production. Not just authentication - *self-sovereign digital identity*. No biometrics to spoof, no hardware to steal, no passwords to breach. Identity that exists only in your mind, proven through mathematics.

**Trove** - Full specification, Halo2 circuits, CosmWasm contracts. Infrastructure for trustless conditional access to digital value.

**GameGames** - Solana program deployed to devnet, React frontend on IPFS. Decentralized skill wagering with AI verification.

**Eudaimonia** - 2,200+ tests passing, 18 specialists, 70+ tools, 44 API integrations. A self-sustaining AI operating system.

**Forgeground** - 60Hz multiplayer, physics manipulation, running in browsers. No download, no install, no gatekeepers.

We ship code, not promises.

---

## The Bet We're Making

We're betting that people want technology that respects them.

We're betting that "free" services funded by surveillance will eventually be rejected when better alternatives exist.

We're betting that ownership matters - that people will choose to actually own their digital lives rather than rent them from corporations.

We're betting that the next generation of internet infrastructure will be built on cryptographic truth rather than institutional trust.

We might be wrong. The convenient, exploitative path might win. People might prefer the familiar cage to an unfamiliar freedom.

But we don't think so.

Every breach erodes trust in the old model. Every AI scandal reveals the misalignment between corporate AI and human flourishing. Every deplatforming demonstrates the fragility of building on rented land.

The demand for something better is growing. We're building the supply.

---

## An Invitation

This isn't a company. It's not a DAO. It's not a movement with membership cards.

It's a set of tools and a set of principles. Use them. Extend them. Build on them. Disagree with them and build something better.

The code is open. The protocols are permissionless. The ideas are free to spread.

If you're a developer: the ZK circuits, the smart contracts, the AI architectures - they're building blocks for a thousand applications we haven't imagined.

If you're a user: try the tools. Experience authentication without passwords. See what AI looks like when it works for you.

If you're an investor: this is infrastructure. Identity, AI assistants, digital assets, gaming - foundational layers for the next internet.

If you're a skeptic: good. Skepticism is healthy. But try the products. Read the code. The proof is in the implementation.

---

## The Rising Sun

We named this project Rising Sun because dawn follows darkness.

The current internet is in twilight - the promises of the open web fading into the long night of platform capitalism, surveillance infrastructure, and digital serfdom.

But the sun rises.

New technologies enable new possibilities. New architectures escape old traps. New systems can be built that embody different values from their foundations.

We're not fighting the old internet. We're building the new one.

One line of code at a time. One user at a time. One proof at a time.

The sun is rising.

Join us.

---

*Written January 2026*

*"The best way to predict the future is to build it."*
