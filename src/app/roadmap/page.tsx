import ASCIIBorder from "@/components/ASCIIBorder";
import Link from "next/link";

export const metadata = {
  title: "Roadmap | Rising Sun",
  description:
    "From working prototypes to infrastructure for the free internet.",
};

const currentState = [
  {
    name: "Password Palace",
    status: "Full Implementation Private Beta",
    completion: 70,
    url: "https://passwordpalace.com",
  },
  {
    name: "Trove",
    status: "Live Alpha Test",
    completion: 50,
    url: "https://trove.website",
  },
  {
    name: "GameGames",
    status: "Devnet",
    completion: 85,
    url: "https://gamegames.gg",
  },
  {
    name: "Eudaimonia",
    status: "Live Private Testing",
    completion: 60,
    url: "https://aios.design",
  },
  {
    name: "Forgeground",
    status: "Online Version 1",
    completion: 40,
    url: "https://forgeground.online",
  },
];

const q1Milestones = [
  {
    project: "Password Palace",
    items: [
      "Security audit (ZK circuits + contracts)",
      "Browser extension v1.0 (Chrome, Firefox)",
      "Public beta launch",
      "Production mainnet deployment",
    ],
  },
  {
    project: "Eudaimonia",
    items: [
      "Hivemind P2P stability",
      "Bittensor subnet integration",
      "Public alpha release",
      "First API Bridge customers",
    ],
  },
  {
    project: "GameGames",
    items: [
      "AI verification (Claude Vision)",
      "Mainnet deployment (Solana)",
      "Public launch",
    ],
  },
];

const q2Milestones = [
  {
    project: "Trove",
    items: [
      "Piece module + NFT minting",
      "TypeScript SDK v1",
      "Public testnet launch",
    ],
  },
  {
    project: "Password Palace",
    items: [
      "10+ OAuth integrations",
      "Enterprise customers (target: 5)",
      "Mobile app v1.0",
      "API Wallet as a Service",
    ],
  },
  {
    project: "Cross-Project",
    items: [
      "Password Palace ↔ Trove: Shared spatial system",
      "Eudaimonia ↔ All: AI assistance integration",
      "Unified account system",
    ],
  },
];

const targets2026 = [
  { metric: "Password Palace Users", q1: "1k", q2: "5k", q3: "20k", q4: "50k" },
  {
    metric: "GameGames Monthly Wagers",
    q1: "$10k",
    q2: "$50k",
    q3: "$200k",
    q4: "$500k",
  },
  {
    metric: "Eudaimonia Instances",
    q1: "100",
    q2: "500",
    q3: "2k",
    q4: "5k",
  },
  {
    metric: "Forgeground Players",
    q1: "1k",
    q2: "5k",
    q3: "25k",
    q4: "75k",
  },
];

function ProgressBar({ percent }: { percent: number }) {
  const filled = Math.floor(percent / 5);
  const empty = 20 - filled;
  return (
    <span className="font-mono text-xs">
      <span className="text-terminal-green">{"█".repeat(filled)}</span>
      <span className="text-terminal-gray">{"░".repeat(empty)}</span>
      <span className="text-terminal-white-dim ml-2">{percent}%</span>
    </span>
  );
}

export default function RoadmapPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          <span className="text-terminal-gray">~/</span>
          <span className="text-terminal-green">roadmap</span>
        </h1>
        <p className="text-terminal-white-dim">
          From working prototypes to infrastructure for the free internet
        </p>
      </div>

      {/* Current State */}
      <section className="mb-12">
        <h2 className="text-xl text-terminal-amber mb-6">
          {">"} Current State
        </h2>
        <div className="space-y-4">
          {currentState.map((project) => (
            <ASCIIBorder key={project.name} variant="single">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-4">
                  <Link
                    href={project.url}
                    target="_blank"
                    className="text-terminal-green hover:glow-green transition-all"
                  >
                    {project.name}
                  </Link>
                  <span
                    className={`text-xs px-2 py-0.5 border ${
                      project.status === "Live"
                        ? "border-terminal-green text-terminal-green"
                        : project.status === "Private Beta" ||
                          project.status === "Beta"
                        ? "border-terminal-amber text-terminal-amber"
                        : "border-terminal-cyan text-terminal-cyan"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <ProgressBar percent={project.completion} />
              </div>
            </ASCIIBorder>
          ))}
        </div>
      </section>

      {/* Q1 2026 */}
      <section className="mb-12">
        <h2 className="text-xl text-terminal-amber mb-6">
          {">"} Q1 2026: Foundation
        </h2>
        <p className="text-terminal-white-dim mb-4">
          Solidify core products, prepare for public launch
        </p>
        <div className="space-y-4">
          {q1Milestones.map((group) => (
            <ASCIIBorder key={group.project} variant="single">
              <h3 className="text-terminal-cyan mb-3">{group.project}</h3>
              <ul className="space-y-2">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-terminal-gray">[ ]</span>
                    <span className="text-terminal-white-dim">{item}</span>
                  </li>
                ))}
              </ul>
            </ASCIIBorder>
          ))}
        </div>
      </section>

      {/* Q2 2026 */}
      <section className="mb-12">
        <h2 className="text-xl text-terminal-amber mb-6">
          {">"} Q2 2026: Expansion
        </h2>
        <p className="text-terminal-white-dim mb-4">
          Scale user base, cross-project integration
        </p>
        <div className="space-y-4">
          {q2Milestones.map((group) => (
            <ASCIIBorder key={group.project} variant="single">
              <h3 className="text-terminal-cyan mb-3">{group.project}</h3>
              <ul className="space-y-2">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-terminal-gray">[ ]</span>
                    <span className="text-terminal-white-dim">{item}</span>
                  </li>
                ))}
              </ul>
            </ASCIIBorder>
          ))}
        </div>
      </section>

      {/* Q3-Q4 Summary */}
      <section className="mb-12">
        <h2 className="text-xl text-terminal-amber mb-6">
          {">"} Q3-Q4 2026: Network Effects
        </h2>
        <ASCIIBorder variant="double">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-terminal-cyan mb-3">Q3: Token Launch</h3>
              <ul className="space-y-2 text-sm text-terminal-white-dim">
                <li>
                  <span className="text-terminal-gray">-</span> Trove mainnet
                  launch
                </li>
                <li>
                  <span className="text-terminal-gray">-</span> $TROVE token
                  live
                </li>
                <li>
                  <span className="text-terminal-gray">-</span> First brand
                  partnership
                </li>
                <li>
                  <span className="text-terminal-gray">-</span> Forgeground
                  tournaments
                </li>
                <li>
                  <span className="text-terminal-gray">-</span> Eudaimonia
                  public beta
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-terminal-cyan mb-3">Q4: Maturity</h3>
              <ul className="space-y-2 text-sm text-terminal-white-dim">
                <li>
                  <span className="text-terminal-gray">-</span> Rising Sun DAO
                  formation
                </li>
                <li>
                  <span className="text-terminal-gray">-</span> Ecosystem grants
                  program
                </li>
                <li>
                  <span className="text-terminal-gray">-</span> Cross-chain
                  identity
                </li>
                <li>
                  <span className="text-terminal-gray">-</span> First profitable
                  quarter
                </li>
                <li>
                  <span className="text-terminal-gray">-</span> Community
                  governance
                </li>
              </ul>
            </div>
          </div>
        </ASCIIBorder>
      </section>

      {/* 2026 Targets */}
      <section className="mb-12">
        <h2 className="text-xl text-terminal-amber mb-6">
          {">"} 2026 Targets
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-terminal-gray">
                <th className="text-left py-2 text-terminal-cyan">Metric</th>
                <th className="text-right py-2 text-terminal-white-dim">Q1</th>
                <th className="text-right py-2 text-terminal-white-dim">Q2</th>
                <th className="text-right py-2 text-terminal-white-dim">Q3</th>
                <th className="text-right py-2 text-terminal-green">Q4</th>
              </tr>
            </thead>
            <tbody>
              {targets2026.map((row) => (
                <tr
                  key={row.metric}
                  className="border-b border-terminal-gray/30"
                >
                  <td className="py-2 text-terminal-white-dim">{row.metric}</td>
                  <td className="text-right py-2 text-terminal-white-dim">
                    {row.q1}
                  </td>
                  <td className="text-right py-2 text-terminal-white-dim">
                    {row.q2}
                  </td>
                  <td className="text-right py-2 text-terminal-white-dim">
                    {row.q3}
                  </td>
                  <td className="text-right py-2 text-terminal-green">
                    {row.q4}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 2027+ Vision */}
      <section className="mb-12">
        <h2 className="text-xl text-terminal-amber mb-6">{">"} 2027+ Vision</h2>
        <ASCIIBorder variant="double">
          <div className="space-y-4">
            <pre className="ascii-art text-terminal-cyan text-xs overflow-x-auto">
              {`
                    ┌─────────────────┐
                    │  RISING SUN ID  │
                    │ (Password Palace)│
                    └────────┬────────┘
                             │
         ┌───────────────────┼───────────────────┐
         │                   │                   │
         ▼                   ▼                   ▼
  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
  │    TROVE    │◄──►│  GAMEGAMES  │◄──►│ FORGEGROUND │
  └─────────────┘    └─────────────┘    └─────────────┘
         └───────────────────┼───────────────────┘
                             │
                    ┌────────▼────────┐
                    │   EUDAIMONIA    │
                    │  AI Assistance  │
                    └─────────────────┘
`}
            </pre>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-terminal-white-dim">
              <div>
                <h4 className="text-terminal-green mb-2">2027 H1</h4>
                <ul className="space-y-1">
                  <li>• Rising Sun ID: 100+ integrations</li>
                  <li>• Trove: $10M+ TVL</li>
                  <li>• GameGames: $1M+ monthly volume</li>
                  <li>• Forgeground: 100k MAU</li>
                </ul>
              </div>
              <div>
                <h4 className="text-terminal-green mb-2">2027 H2+</h4>
                <ul className="space-y-1">
                  <li>• Cross-chain identity standard</li>
                  <li>• Enterprise identity pilot</li>
                  <li>• AI agent marketplace</li>
                  <li>• Physical-world Trove (AR)</li>
                </ul>
              </div>
            </div>
          </div>
        </ASCIIBorder>
      </section>

      {/* North Star */}
      <section className="mb-12">
        <h2 className="text-xl text-terminal-amber mb-6">
          {">"} North Star Metrics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ASCIIBorder variant="single">
            <div className="text-center">
              <p className="text-3xl text-terminal-green mb-1">10,000</p>
              <p className="text-terminal-white-dim text-sm">
                Sovereign Identities
              </p>
              <p className="text-terminal-gray text-xs mt-1">
                PP accounts used for auth elsewhere
              </p>
            </div>
          </ASCIIBorder>
          <ASCIIBorder variant="single">
            <div className="text-center">
              <p className="text-3xl text-terminal-green mb-1">$1M</p>
              <p className="text-terminal-white-dim text-sm">
                Trustless Value Transferred
              </p>
              <p className="text-terminal-gray text-xs mt-1">
                Combined through GG + Trove
              </p>
            </div>
          </ASCIIBorder>
          <ASCIIBorder variant="single">
            <div className="text-center">
              <p className="text-3xl text-terminal-green mb-1">100k</p>
              <p className="text-terminal-white-dim text-sm">
                AI-Assisted Hours
              </p>
              <p className="text-terminal-gray text-xs mt-1">
                Time users spend with Eudaimonia
              </p>
            </div>
          </ASCIIBorder>
          <ASCIIBorder variant="single">
            <div className="text-center">
              <p className="text-3xl text-terminal-green mb-1">75k</p>
              <p className="text-terminal-white-dim text-sm">
                Browser-Native Players
              </p>
              <p className="text-terminal-gray text-xs mt-1">Forgeground MAU</p>
            </div>
          </ASCIIBorder>
        </div>
      </section>

      {/* CTA */}
      <section>
        <ASCIIBorder variant="double">
          <div className="text-center py-4">
            <p className="text-terminal-white-dim mb-4">
              This roadmap is a commitment. We publish monthly progress and
              explain any delays.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/manifesto"
                className="inline-flex items-center gap-2 text-terminal-amber hover:text-terminal-green hover:glow-green transition-all"
              >
                <span>{">"}</span>
                <span className="underline">Read the Manifesto</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-terminal-cyan hover:text-terminal-green hover:glow-green transition-all"
              >
                <span>{">"}</span>
                <span className="underline">Get Involved</span>
              </Link>
            </div>
          </div>
        </ASCIIBorder>
      </section>
    </div>
  );
}
