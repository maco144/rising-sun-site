import ASCIIBorder from "@/components/ASCIIBorder";
import Link from "next/link";

export const metadata = {
  title: "About | Rising Sun",
  description: "Learn more about the developer behind Rising Sun projects.",
};

const skills = {
  languages: ["TypeScript", "JavaScript", "Rust", "Python", "Go"],
  frontend: ["React", "Next.js", "Vue", "Tailwind CSS", "HTML/CSS"],
  backend: ["Node.js", "Express", "PostgreSQL", "Redis", "GraphQL"],
  tools: ["Git", "Docker", "AWS", "Linux", "Vim"],
};

const asciiPortrait = `
  ╭──────────╮
  │  ┌───┐   │
  │  │ ◠ ◠│   │
  │  │  ▽  │   │
  │  └───┘   │
  │    ║     │
  │   ╱│╲    │
  ╰──────────╯
`;

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          <span className="text-terminal-gray">~/</span>
          <span className="text-terminal-green">about</span>
        </h1>
      </div>

      {/* Intro Section */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <pre className="ascii-art text-terminal-amber text-xs hidden md:block">
            {asciiPortrait}
          </pre>
          <div className="flex-1">
            <h2 className="text-xl text-terminal-amber mb-4">
              {">"} Hello, World
            </h2>
            <div className="space-y-4 text-terminal-white-dim">
              <p>
                I&apos;m a developer passionate about building tools that are both
                powerful and pleasant to use. My work spans web applications,
                developer tools, games, and open-source libraries.
              </p>
              <p>
                I believe in clean code, thoughtful design, and solving real
                problems. Most of my projects start as scratching my own itch,
                then evolve into something others might find useful too.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new
                technologies, contributing to open source, or optimizing my
                development setup for the hundredth time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-xl text-terminal-amber mb-6">
          {">"} Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <ASCIIBorder key={category} variant="single">
              <h3 className="text-terminal-cyan mb-3 uppercase text-sm">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-terminal-white-dim text-sm"
                  >
                    [{skill}]
                  </span>
                ))}
              </div>
            </ASCIIBorder>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="mb-12">
        <h2 className="text-xl text-terminal-amber mb-6">
          {">"} Development Philosophy
        </h2>
        <ASCIIBorder variant="double">
          <div className="space-y-4">
            <div>
              <h3 className="text-terminal-green mb-2">$ simplicity_first</h3>
              <p className="text-terminal-white-dim text-sm">
                The best code is code that doesn&apos;t exist. I prefer simple,
                maintainable solutions over clever ones. Complexity should be
                justified.
              </p>
            </div>
            <div>
              <h3 className="text-terminal-green mb-2">$ user_focused</h3>
              <p className="text-terminal-white-dim text-sm">
                Every feature should serve the user. I start with the problem,
                not the technology. The best tools disappear into the workflow.
              </p>
            </div>
            <div>
              <h3 className="text-terminal-green mb-2">$ continuous_learning</h3>
              <p className="text-terminal-white-dim text-sm">
                Technology evolves. I stay curious, experiment with new tools,
                and am not afraid to change my mind when better approaches emerge.
              </p>
            </div>
            <div>
              <h3 className="text-terminal-green mb-2">$ open_source</h3>
              <p className="text-terminal-white-dim text-sm">
                I&apos;ve benefited enormously from open source. Contributing back
                is both a responsibility and a joy. Most of my projects are
                open for collaboration.
              </p>
            </div>
          </div>
        </ASCIIBorder>
      </section>

      {/* Journey Section */}
      <section className="mb-12">
        <h2 className="text-xl text-terminal-amber mb-6">{">"} The Journey</h2>
        <div className="space-y-4 text-terminal-white-dim">
          <p>
            My programming journey started with curiosity about how things work.
            What began as tinkering with HTML pages evolved into a deep
            appreciation for software craftsmanship.
          </p>
          <p>
            Over the years, I&apos;ve worked on everything from small scripts to
            large-scale applications. Each project taught me something new about
            building software that matters.
          </p>
          <p>
            Today, I focus on creating tools that solve real problems while
            maintaining a high bar for code quality, user experience, and
            performance.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <ASCIIBorder variant="rounded">
          <div className="text-center py-4">
            <p className="text-terminal-white-dim mb-4">
              Want to collaborate or just chat about tech?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-terminal-green hover:glow-green transition-all"
            >
              <span>{">>>"}</span>
              <span className="underline">Get in touch</span>
              <span>{"<<<"}</span>
            </Link>
          </div>
        </ASCIIBorder>
      </section>
    </div>
  );
}
