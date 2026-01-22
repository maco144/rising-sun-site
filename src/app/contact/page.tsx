import ASCIIBorder from "@/components/ASCIIBorder";

export const metadata = {
  title: "Contact | Rising Sun",
  description: "Get in touch - links and contact information.",
};

const socialLinks = [
  {
    label: "GitHub",
    url: "https://github.com/rising-sun",
    handle: "@rising-sun",
    icon: "◉",
  },
  {
    label: "Twitter/X",
    url: "https://twitter.com/risingsundev",
    handle: "@risingsundev",
    icon: "◈",
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/risingsun",
    handle: "/in/risingsun",
    icon: "◇",
  },
  {
    label: "Email",
    url: "mailto:hello@risingsun.dev",
    handle: "hello@risingsun.dev",
    icon: "◆",
  },
];

const asciiMail = `
    ╭───────────────────╮
    │ ╲               ╱ │
    │   ╲           ╱   │
    │     ╲       ╱     │
    │       ╲   ╱       │
    │         ╳         │
    │       ╱   ╲       │
    │     ╱       ╲     │
    ╰───────────────────╯
`;

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          <span className="text-terminal-gray">~/</span>
          <span className="text-terminal-amber">contact</span>
        </h1>
        <p className="text-terminal-white-dim">
          Let&apos;s connect. Here&apos;s how to reach me.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* ASCII Art */}
        <div className="hidden md:flex items-center justify-center">
          <pre className="ascii-art text-terminal-amber text-xs">
            {asciiMail}
          </pre>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg text-terminal-green mb-4">{">"} Connect</h2>
          <div className="space-y-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 border border-terminal-gray hover:border-terminal-green transition-colors group"
              >
                <span className="text-terminal-amber text-lg">{link.icon}</span>
                <div className="flex-1">
                  <span className="text-terminal-white group-hover:text-terminal-green transition-colors">
                    {link.label}
                  </span>
                  <span className="text-terminal-white-dim text-sm block">
                    {link.handle}
                  </span>
                </div>
                <span className="text-terminal-gray group-hover:text-terminal-green transition-colors">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Availability Section */}
      <section className="mb-12">
        <ASCIIBorder variant="double">
          <h2 className="text-terminal-cyan mb-4">$ availability_status</h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-terminal-green rounded-full animate-pulse" />
              <span className="text-terminal-white-dim">
                Open to interesting projects and collaborations
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-terminal-amber rounded-full" />
              <span className="text-terminal-white-dim">
                Available for consulting on web development and security
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-terminal-cyan rounded-full" />
              <span className="text-terminal-white-dim">
                Always happy to chat about open source contributions
              </span>
            </div>
          </div>
        </ASCIIBorder>
      </section>

      {/* Response Time */}
      <section className="mb-12">
        <h2 className="text-lg text-terminal-amber mb-4">
          {">"} Response Time
        </h2>
        <div className="text-terminal-white-dim space-y-2">
          <p>
            I typically respond within 24-48 hours. For urgent matters, Twitter
            DMs tend to get the quickest response.
          </p>
          <p className="text-sm text-terminal-gray">
            Timezone: UTC-8 (Pacific Time)
          </p>
        </div>
      </section>

      {/* What I'm Looking For */}
      <section>
        <h2 className="text-lg text-terminal-green mb-4">
          {">"} What I&apos;m Interested In
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ASCIIBorder variant="single">
            <h3 className="text-terminal-amber mb-2">Open Source</h3>
            <p className="text-terminal-white-dim text-sm">
              Contributions to developer tools, security projects, and creative
              coding experiments.
            </p>
          </ASCIIBorder>
          <ASCIIBorder variant="single">
            <h3 className="text-terminal-amber mb-2">Collaborations</h3>
            <p className="text-terminal-white-dim text-sm">
              Building products with passionate teams who care about craft and
              user experience.
            </p>
          </ASCIIBorder>
          <ASCIIBorder variant="single">
            <h3 className="text-terminal-amber mb-2">Speaking</h3>
            <p className="text-terminal-white-dim text-sm">
              Talks about web security, developer experience, and creative
              coding.
            </p>
          </ASCIIBorder>
          <ASCIIBorder variant="single">
            <h3 className="text-terminal-amber mb-2">Consulting</h3>
            <p className="text-terminal-white-dim text-sm">
              Security audits, architecture reviews, and technical mentorship.
            </p>
          </ASCIIBorder>
        </div>
      </section>

      {/* ASCII Footer */}
      <div className="mt-12 text-center">
        <pre className="ascii-art text-terminal-gray text-xs inline-block">
{`
╔════════════════════════════════════════╗
║  Looking forward to hearing from you!  ║
╚════════════════════════════════════════╝
`}
        </pre>
      </div>
    </div>
  );
}
