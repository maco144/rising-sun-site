"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "home" },
  { href: "/manifesto", label: "manifesto" },
  { href: "/roadmap", label: "roadmap" },
  { href: "/projects", label: "projects" },
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
];

const asciiLogo = `
 ╱╲
╱  ╲
────
`;

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-terminal-gray">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <pre className="ascii-art text-terminal-amber text-xs leading-none group-hover:text-terminal-green transition-colors">
              {asciiLogo}
            </pre>
            <div>
              <span className="text-terminal-green font-semibold tracking-wider">
                RISING_SUN
              </span>
              <span className="text-terminal-white-dim text-sm block">
                dev portfolio
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-1">
            <span className="text-terminal-gray mr-1">[</span>
            {navLinks.map((link, index) => (
              <span key={link.href} className="flex items-center">
                <Link
                  href={link.href}
                  className={`px-2 py-1 transition-colors ${
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href))
                      ? "text-terminal-green glow-green"
                      : "text-terminal-white hover:text-terminal-amber"
                  }`}
                >
                  {link.label}
                </Link>
                {index < navLinks.length - 1 && (
                  <span className="text-terminal-gray">|</span>
                )}
              </span>
            ))}
            <span className="text-terminal-gray ml-1">]</span>
          </nav>
        </div>
      </div>
    </header>
  );
}
