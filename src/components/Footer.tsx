import Link from "next/link";

const asciiDecoration = `
════════════════════════════════════════════════════════════════════════════════
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-terminal-gray">
      <pre className="ascii-art text-terminal-gray text-xs overflow-hidden">
        {asciiDecoration}
      </pre>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-terminal-amber mb-3 text-sm">
              {">"} NAVIGATION
            </h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link
                  href="/projects"
                  className="text-terminal-white-dim hover:text-terminal-green transition-colors"
                >
                  [projects]
                </Link>
              </li>
              <li>
                <Link
                  href="/updates"
                  className="text-terminal-white-dim hover:text-terminal-green transition-colors"
                >
                  [updates]
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-terminal-white-dim hover:text-terminal-green transition-colors"
                >
                  [about]
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-terminal-white-dim hover:text-terminal-green transition-colors"
                >
                  [contact]
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-terminal-amber mb-3 text-sm">
              {">"} FEATURED PROJECTS
            </h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link
                  href="/projects/password-palace"
                  className="text-terminal-white-dim hover:text-terminal-green transition-colors"
                >
                  Password Palace
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/trove"
                  className="text-terminal-white-dim hover:text-terminal-green transition-colors"
                >
                  Trove
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/gamegames"
                  className="text-terminal-white-dim hover:text-terminal-green transition-colors"
                >
                  GameGames
                </Link>
              </li>
            </ul>
          </div>

          {/* Status */}
          <div>
            <h3 className="text-terminal-amber mb-3 text-sm">
              {">"} SYSTEM STATUS
            </h3>
            <div className="text-sm space-y-1">
              <p className="text-terminal-white-dim">
                <span className="text-terminal-green">●</span> All systems
                operational
              </p>
              <p className="text-terminal-white-dim">
                <span className="text-terminal-gray">$</span> Last deploy:{" "}
                {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-4 border-t border-terminal-gray flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-terminal-white-dim">
          <p>
            <span className="text-terminal-gray">{"/*"}</span> {currentYear}{" "}
            Rising Sun <span className="text-terminal-gray">{"*/"}</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-terminal-gray">built with</span>
            <span className="text-terminal-cyan">Next.js</span>
            <span className="text-terminal-gray">+</span>
            <span className="text-terminal-amber">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
