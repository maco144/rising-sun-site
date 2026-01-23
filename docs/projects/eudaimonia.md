# Eudaimonia (AIOS)

> **AI-Native Operating System**

*Named after the Greek concept of human flourishing*

## The Problem

Current AI assistants are:
- **Stateless**: They forget everything between sessions
- **Isolated**: They can't coordinate with other AI systems
- **Unemployable**: They can't earn money or manage resources
- **Controlled**: They serve corporate interests, not yours

What if you had an AI that worked *for you* - one that remembers, plans, earns, and acts autonomously on your behalf?

## The Solution

Eudaimonia is a **self-sustaining AI operating system** with internal economics, governance hierarchy, and autonomous specialists. It can think, plan, execute tasks, and earn value through real-world services. It's not just an assistant - it's an autonomous digital entity that serves you.

## Key Capabilities

| Capability | Description |
|------------|-------------|
| **18 Specialists** | Domain experts: Coder, Researcher, MarketAnalyst, LegalAdvisor, and more |
| **70+ Tools** | File, code, web, browser, financial, spreadsheet operations |
| **44 API Integrations** | QuickBooks, Clio, ServiceTitan - real business services |
| **Theta Economy** | Internal currency for resource allocation |
| **Nous System** | External value earned from real-world services |
| **Hivemind** | P2P networking for AI-to-AI collaboration |
| **Strategic Layer** | Autonomous planning and opportunity discovery |

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      EUDAIMONIA (AIOS)                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                  GOVERNANCE                          │    │
│  │  TrueMaster → Master → Commissioner → Specialists   │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  AGENT LOOP  │  │   STRATEGY   │  │   HIVEMIND   │      │
│  │              │  │              │  │              │      │
│  │ 18 Specs     │  │ Planning     │  │ P2P Network  │      │
│  │ Classifier   │  │ Opportunities│  │ Bittensor    │      │
│  │ Router       │  │ Execution    │  │ Coordination │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │    THETA     │  │     NOUS     │  │   BRIDGE     │      │
│  │  (Internal)  │  │  (External)  │  │  (APIs)      │      │
│  │              │  │              │  │              │      │
│  │ Treasury     │  │ Real USD     │  │ QuickBooks   │      │
│  │ Allocation   │  │ Conversion   │  │ Clio, etc.   │      │
│  │ Priorities   │  │ Earnings     │  │ 44 services  │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                    70+ TOOLS                         │    │
│  │  File • Code • Web • Browser • Financial • Memory   │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Specialists

| Category | Specialists |
|----------|-------------|
| **Core** | Commissioner, Reasoner, Coder, Communicator, Researcher, Debugger |
| **Domain** | MarketAnalyst, Mathematician, SocialTrends, LegalAdvisor, GovernmentAdvisor |
| **Venture** | ContentVenture, SaaSVenture, NewsletterVenture, CourseVenture, AgencyVenture, AffiliateVenture, OpenSourceVenture |

Each specialist has domain expertise and can be invoked based on task classification.

## Economics

### Theta (Internal)
Internal currency for resource allocation:
- Specialists bid Theta to handle requests
- Priority queue based on urgency and value
- Treasury manages allocation

### Nous (External)
Real-world value earned through services:
- API Bridge services earn USD
- 10 Nous = 1 USD
- Accumulates for reinvestment or withdrawal

### API Bridge Earnings

| Industry | Connector | Services | Earnings |
|----------|-----------|----------|----------|
| Accounting | QuickBooks | 12 | $0.05-$2.00/op |
| Legal | Clio | 15 | $0.10-$5.00/op |
| Home Services | ServiceTitan | 17 | $0.05-$2.00/op |

## Boot Sequence (22 Steps)

```
1. Preflight    → 2. Bootstrap   → 3. Theta       → 4. Governance
5. Scheduler    → 6. Market      → 7. Integration → 8. Tools
9. Agent Loop   → 10. Wire       → 11. Intent     → 12. Hivemind
13. Strategy    → 14. Nous       → 15. Accountability
16. Protocol    → 17. Browser    → 18. Chrome DevTools
19. Spreadsheet → 20. Financial Suite → 21. Financial Network
22. API Bridge
```

## Technology Stack

| Component | Technology |
|-----------|------------|
| Language | Python |
| LLM Provider | OpenRouter (Claude, GPT-4, etc.) |
| Code Execution | Claude Code delegation |
| Browser | Chrome DevTools Protocol |
| Storage | SQLite + Semantic Memory |
| P2P | Custom Hivemind protocol |
| Blockchain | Bittensor integration |

## Repository Structure

```
AIOS/
├── eudaimonia/kernel/
│   ├── aios.py           # Main orchestrator
│   ├── agent/            # Specialists, classifier, router
│   ├── bridge/           # API integrations
│   ├── browser/          # Web automation
│   ├── courts/           # Resource arbitration
│   ├── economics/        # Nous system
│   ├── governance/       # Two-master hierarchy
│   ├── hivemind/         # P2P networking
│   ├── memory/           # Semantic search
│   ├── strategy/         # Autonomous planning
│   ├── theta/            # Internal economy
│   └── tools/            # 70+ tools
├── tests/                # 2,200+ tests
└── docs/                 # Architecture, patents
```

## Use Cases

| Use Case | How Eudaimonia Helps |
|----------|---------------------|
| **Personal Assistant** | Manages tasks, calendar, research with persistent memory |
| **Business Automation** | Invoicing, client management, document processing |
| **Research** | Deep web research, analysis, report generation |
| **Development** | Code review, debugging, documentation |
| **Financial** | Market analysis, paper trading, portfolio tracking |

## Metrics & Status

- **Status**: Active development (V28)
- **Tests**: 2,200+ passing
- **Specialists**: 18 implemented
- **Tools**: 70+ implemented
- **API Integrations**: 44 services

## Links

- **Website**: [aios.design](https://aios.design)
- **GitHub**: [github.com/maco144/Eudaimonia](https://github.com/maco144/Eudaimonia)

---

## Why This Matters

Eudaimonia represents a vision where **AI is an ally, not a product**. Instead of using AI tools owned by corporations that harvest your data, you run your own AI operating system. It works for you, earns for you, and is governed by you. This is what AI-human symbiosis should look like.
