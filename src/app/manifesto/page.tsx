import ASCIIBorder from "@/components/ASCIIBorder";
import Link from "next/link";

export const metadata = {
  title: "Manifesto | Rising Sun",
  description:
    "An internet where users are safe, AIs are allies, and power flows from big tech to the people.",
};

export default function ManifestoPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          <span className="text-terminal-gray">~/</span>
          <span className="text-terminal-green">manifesto</span>
        </h1>
        <p className="text-terminal-white-dim">
          The philosophy behind Rising Sun
        </p>
      </div>

      {/* The Internet We Were Promised */}
      <section className="mb-12">
        <h2 className="text-xl text-terminal-amber mb-6">
          {">"} The Internet We Were Promised
        </h2>
        <div className="space-y-4 text-terminal-white-dim">
          <p>
            The early internet promised liberation. Information wants to be
            free. Anyone can publish. Connect with anyone, anywhere. Build
            anything.
          </p>
          <p className="text-terminal-cyan">That internet is dying.</p>
          <p>
            Today, five companies control what you see, what you can say, and
            increasingly, what you can think. Your passwords are stored in
            databases waiting to be breached. Your AI assistant reports to a
            corporation, not to you. Your digital identity exists at the
            pleasure of platforms that can revoke it without appeal.
          </p>
          <p>
            We traded the open web for convenience. We traded privacy for
            &quot;free&quot; services. We traded ownership for access.
          </p>
          <p className="text-terminal-amber">It was a bad deal.</p>
        </div>
      </section>

      {/* The Internet We're Building */}
      <section className="mb-12">
        <h2 className="text-xl text-terminal-amber mb-6">
          {">"} The Internet We&apos;re Building
        </h2>
        <ASCIIBorder variant="double">
          <div className="space-y-4">
            <p className="text-terminal-white-dim">
              We believe another path is possible. Not backward to some
              nostalgic past, but forward to something better:
            </p>
            <div>
              <h3 className="text-terminal-green mb-1">$ users_are_safe</h3>
              <p className="text-terminal-white-dim text-sm">
                Not because companies promise to protect them, but because the
                mathematics make exploitation impossible.
              </p>
            </div>
            <div>
              <h3 className="text-terminal-green mb-1">$ ai_is_ally</h3>
              <p className="text-terminal-white-dim text-sm">
                Not a surveillance system, not a manipulation engine, but
                genuine intelligence that works <em>for</em> you.
              </p>
            </div>
            <div>
              <h3 className="text-terminal-green mb-1">$ power_distributed</h3>
              <p className="text-terminal-white-dim text-sm">
                Not concentrated in data centers controlled by billionaires, but
                spread across networks that no one can shut down.
              </p>
            </div>
          </div>
        </ASCIIBorder>
        <p className="text-terminal-cyan mt-4">
          This isn&apos;t idealism. This is engineering. The technology exists.
          We&apos;re building it.
        </p>
      </section>

      {/* Three Principles */}
      <section className="mb-12">
        <h2 className="text-xl text-terminal-amber mb-6">
          {">"} Three Principles
        </h2>

        {/* Principle I */}
        <div className="mb-8">
          <h3 className="text-lg text-terminal-cyan mb-4">
            I. Safety Through Mathematics
          </h3>
          <div className="space-y-4 text-terminal-white-dim">
            <p>Trust is expensive. Trust is fragile. Trust is exploited.</p>
            <p>
              The old model: &quot;Trust us with your password. Trust us with
              your data. Trust us not to get hacked, go bankrupt, or turn
              evil.&quot;
            </p>
            <p className="text-terminal-green">
              The new model: Don&apos;t trust. Verify.
            </p>
            <p>
              Zero-knowledge proofs let you prove you know a secret without
              revealing it. When safety comes from mathematics rather than
              promises, it doesn&apos;t matter if the company is trustworthy. It
              doesn&apos;t matter if the server is compromised. The math
              protects you regardless.
            </p>
            <ASCIIBorder variant="single">
              <p className="text-terminal-amber text-sm">
                We build systems where being evil is not just wrong, but
                impossible.
              </p>
            </ASCIIBorder>
          </div>
        </div>

        {/* Principle II */}
        <div className="mb-8">
          <h3 className="text-lg text-terminal-cyan mb-4">
            II. AI as Ally, Not Adversary
          </h3>
          <div className="space-y-4 text-terminal-white-dim">
            <p>The current AI paradigm is extraction. Companies build AI to:</p>
            <ul className="list-none space-y-1 ml-4">
              <li>
                <span className="text-terminal-gray">-</span> Keep you scrolling
                longer (engagement)
              </li>
              <li>
                <span className="text-terminal-gray">-</span> Show you ads
                you&apos;ll click (targeting)
              </li>
              <li>
                <span className="text-terminal-gray">-</span> Predict your
                behavior (surveillance)
              </li>
              <li>
                <span className="text-terminal-gray">-</span> Replace your labor
                (automation)
              </li>
            </ul>
            <p>
              The AI doesn&apos;t work for you. You work for it - generating
              training data, providing feedback, creating the content it learns
              from. And then it&apos;s used against you.
            </p>
            <p className="text-terminal-cyan">We reject this entirely.</p>
            <ASCIIBorder variant="single">
              <p className="text-terminal-amber text-sm">
                We build AI that you own, that serves you, that makes you more
                capable.
              </p>
            </ASCIIBorder>
          </div>
        </div>

        {/* Principle III */}
        <div className="mb-8">
          <h3 className="text-lg text-terminal-cyan mb-4">
            III. Decentralization as Insurance
          </h3>
          <div className="space-y-4 text-terminal-white-dim">
            <p>
              Centralization is efficient. It&apos;s also fragile, corruptible,
              and ultimately tyrannical.
            </p>
            <p>Every centralized system eventually:</p>
            <ul className="list-none space-y-1 ml-4">
              <li>
                <span className="text-terminal-gray">-</span> Gets hacked (data
                breaches)
              </li>
              <li>
                <span className="text-terminal-gray">-</span> Gets corrupted
                (enshittification)
              </li>
              <li>
                <span className="text-terminal-gray">-</span> Gets captured
                (regulatory or political pressure)
              </li>
              <li>
                <span className="text-terminal-gray">-</span> Gets abandoned
                (company fails, pivots, or loses interest)
              </li>
            </ul>
            <p>
              Decentralization isn&apos;t about ideology. It&apos;s about
              resilience. When no single point can fail, the system survives.
              When no single entity can censor, speech remains free.
            </p>
            <ASCIIBorder variant="single">
              <p className="text-terminal-amber text-sm">
                We build systems that survive us, that can&apos;t be corrupted
                by us, that don&apos;t require trusting us.
              </p>
            </ASCIIBorder>
          </div>
        </div>
      </section>

      {/* The Identity Problem */}
      <section className="mb-12">
        <h2 className="text-xl text-terminal-amber mb-6">
          {">"} The Identity Problem
        </h2>
        <div className="space-y-4 text-terminal-white-dim">
          <p className="text-terminal-cyan">
            Before there can be a free internet, there must be sovereign
            identity.
          </p>
          <p>
            Every freedom online depends on proving who you are. Access to your
            money, your data, your communications, your reputation - all gated
            by identity. Whoever controls identity controls everything.
          </p>
          <p>Today&apos;s identity solutions all fail the sovereignty test:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <ASCIIBorder variant="single">
              <h4 className="text-terminal-amber mb-2">Passwords</h4>
              <p className="text-sm">
                Stored in databases you don&apos;t control. Phished. Leaked.
                Breached.
              </p>
            </ASCIIBorder>
            <ASCIIBorder variant="single">
              <h4 className="text-terminal-amber mb-2">Biometrics</h4>
              <p className="text-sm">
                Can&apos;t be changed if compromised. Captured without consent.
                Enables surveillance.
              </p>
            </ASCIIBorder>
            <ASCIIBorder variant="single">
              <h4 className="text-terminal-amber mb-2">Hardware Tokens</h4>
              <p className="text-sm">
                Can be stolen, lost, or backdoored. Your identity becomes a
                confiscatable object.
              </p>
            </ASCIIBorder>
            <ASCIIBorder variant="single">
              <h4 className="text-terminal-amber mb-2">Voice/Face Rec</h4>
              <p className="text-sm">
                Trivially spoofable with AI deepfakes. Normalizes biometric
                surveillance.
              </p>
            </ASCIIBorder>
          </div>

          <p>
            <Link
              href="https://passwordpalace.com"
              className="text-terminal-green hover:glow-green"
              target="_blank"
            >
              Password Palace
            </Link>{" "}
            is different. It&apos;s built on a simple insight: the most secure
            secret is one that exists only in your mind, in a form that
            can&apos;t be extracted, photographed, or coerced.
          </p>
          <p>
            Spatial memory - the way you remember where you put things, how your
            childhood home was arranged - is deeply human. When your
            &quot;password&quot; is a 3D room you designed, with objects you
            placed, in an arrangement only you know - that&apos;s identity no
            one can steal.
          </p>
          <ASCIIBorder variant="double">
            <p className="text-terminal-green text-center">
              You are not your biometrics. You are not your hardware.
              <br />
              You are your memories, your knowledge, your secrets.
              <br />
              <span className="text-terminal-amber">Own them.</span>
            </p>
          </ASCIIBorder>
        </div>
      </section>

      {/* The Bet We're Making */}
      <section className="mb-12">
        <h2 className="text-xl text-terminal-amber mb-6">
          {">"} The Bet We&apos;re Making
        </h2>
        <div className="space-y-4 text-terminal-white-dim">
          <p>We&apos;re betting that people want technology that respects them.</p>
          <p>
            We&apos;re betting that &quot;free&quot; services funded by
            surveillance will eventually be rejected when better alternatives
            exist.
          </p>
          <p>
            We&apos;re betting that ownership matters - that people will choose
            to actually own their digital lives rather than rent them from
            corporations.
          </p>
          <p>We might be wrong. But we don&apos;t think so.</p>
          <p className="text-terminal-cyan">
            Every breach erodes trust in the old model. Every AI scandal reveals
            the misalignment between corporate AI and human flourishing. Every
            deplatforming demonstrates the fragility of building on rented land.
          </p>
          <p>
            The demand for something better is growing. We&apos;re building the
            supply.
          </p>
        </div>
      </section>

      {/* An Invitation */}
      <section className="mb-12">
        <h2 className="text-xl text-terminal-amber mb-6">{">"} An Invitation</h2>
        <div className="space-y-4 text-terminal-white-dim">
          <p>
            This isn&apos;t a company. It&apos;s not a DAO. It&apos;s not a
            movement with membership cards.
          </p>
          <p>
            It&apos;s a set of tools and a set of principles. Use them. Extend
            them. Build on them. Disagree with them and build something better.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <ASCIIBorder variant="single">
              <h4 className="text-terminal-cyan mb-2">For Developers</h4>
              <p className="text-sm">
                ZK circuits, smart contracts, AI architectures - building blocks
                for a thousand applications.
              </p>
            </ASCIIBorder>
            <ASCIIBorder variant="single">
              <h4 className="text-terminal-cyan mb-2">For Users</h4>
              <p className="text-sm">
                Try the tools. Experience authentication without passwords. See
                what AI looks like when it works for you.
              </p>
            </ASCIIBorder>
            <ASCIIBorder variant="single">
              <h4 className="text-terminal-cyan mb-2">For Investors</h4>
              <p className="text-sm">
                This is infrastructure. Identity, AI assistants, digital assets,
                gaming - foundational layers for the next internet.
              </p>
            </ASCIIBorder>
            <ASCIIBorder variant="single">
              <h4 className="text-terminal-cyan mb-2">For Skeptics</h4>
              <p className="text-sm">
                Good. Skepticism is healthy. But try the products. Read the
                code. The proof is in the implementation.
              </p>
            </ASCIIBorder>
          </div>
        </div>
      </section>

      {/* The Rising Sun */}
      <section className="mb-12">
        <h2 className="text-xl text-terminal-amber mb-6">{">"} The Rising Sun</h2>
        <div className="space-y-4 text-terminal-white-dim">
          <p>
            We named this project Rising Sun because dawn follows darkness.
          </p>
          <p>
            The current internet is in twilight - the promises of the open web
            fading into the long night of platform capitalism, surveillance
            infrastructure, and digital serfdom.
          </p>
          <p className="text-terminal-green">But the sun rises.</p>
          <p>
            New technologies enable new possibilities. New architectures escape
            old traps. New systems can be built that embody different values
            from their foundations.
          </p>
          <p>
            We&apos;re not fighting the old internet. We&apos;re building the
            new one.
          </p>
          <p>One line of code at a time. One user at a time. One proof at a time.</p>
        </div>

        <ASCIIBorder variant="double">
          <div className="text-center py-4">
            <p className="text-terminal-green text-lg mb-4">The sun is rising.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-terminal-amber hover:text-terminal-green hover:glow-green transition-all"
            >
              <span>{">>>"}</span>
              <span className="underline">Join us</span>
              <span>{"<<<"}</span>
            </Link>
          </div>
        </ASCIIBorder>
      </section>

      {/* Live Products */}
      <section>
        <h2 className="text-xl text-terminal-amber mb-6">{">"} Live Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "Password Palace", url: "https://passwordpalace.com", desc: "Self-sovereign identity" },
            { name: "Trove", url: "https://trove.website", desc: "Spatial puzzle protocol" },
            { name: "GameGames", url: "https://gamegames.gg", desc: "Decentralized wagering" },
            { name: "Eudaimonia", url: "https://aios.design", desc: "AI operating system" },
            { name: "Forgeground", url: "https://forgeground.online", desc: "Browser-native shooter" },
          ].map((product) => (
            <Link
              key={product.name}
              href={product.url}
              target="_blank"
              className="block group"
            >
              <ASCIIBorder variant="single">
                <div className="text-center">
                  <p className="text-terminal-green group-hover:glow-green transition-all">
                    {product.name}
                  </p>
                  <p className="text-terminal-white-dim text-xs mt-1">
                    {product.desc}
                  </p>
                </div>
              </ASCIIBorder>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
