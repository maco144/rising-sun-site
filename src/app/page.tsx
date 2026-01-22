import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import UpdateCard from "@/components/UpdateCard";
import ASCIIBorder from "@/components/ASCIIBorder";
import { getFeaturedProjects } from "@/data/projects";
import { getRecentUpdates } from "@/data/updates";

const heroAscii = `
    ╱╲    ╱╲    ╱╲
   ╱  ╲  ╱  ╲  ╱  ╲
  ╱    ╲╱    ╲╱    ╲
  ──────────────────
       RISING SUN
    dev  portfolio
`;

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const recentUpdates = getRecentUpdates(3);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          {/* ASCII Art */}
          <pre className="ascii-art text-terminal-amber text-xs md:text-sm">
            {heroAscii}
          </pre>

          {/* Hero Text */}
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-terminal-green mb-4">
              Welcome, traveler.
            </h1>
            <p className="text-terminal-white-dim mb-6 max-w-xl">
              This is a collection of projects built with passion for clean code,
              thoughtful design, and solving interesting problems. Browse around,
              explore the source, and feel free to reach out.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-4 py-2 border border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-terminal-black transition-colors"
              >
                <span>{">"}</span>
                <span>view_projects</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-4 py-2 border border-terminal-gray text-terminal-white hover:border-terminal-amber hover:text-terminal-amber transition-colors"
              >
                <span>$</span>
                <span>about_me</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Status Bar */}
      <ASCIIBorder variant="single" className="mb-12">
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <span className="text-terminal-gray">STATUS:</span>
          <span className="text-terminal-green">
            <span className="inline-block w-2 h-2 bg-terminal-green rounded-full mr-2 animate-pulse" />
            Online & Building
          </span>
          <span className="text-terminal-gray">|</span>
          <span className="text-terminal-white-dim">
            {featuredProjects.length + 5} projects
          </span>
          <span className="text-terminal-gray">|</span>
          <span className="text-terminal-white-dim">
            Open for collaboration
          </span>
        </div>
      </ASCIIBorder>

      {/* Featured Projects */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">
            <span className="text-terminal-gray">{">"}</span>{" "}
            <span className="text-terminal-amber">Featured Projects</span>
          </h2>
          <Link
            href="/projects"
            className="text-sm text-terminal-white-dim hover:text-terminal-green transition-colors"
          >
            [view all]
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} featured />
          ))}
        </div>
      </section>

      {/* Recent Updates */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">
            <span className="text-terminal-gray">$</span>{" "}
            <span className="text-terminal-cyan">Recent Updates</span>
          </h2>
          <Link
            href="/updates"
            className="text-sm text-terminal-white-dim hover:text-terminal-cyan transition-colors"
          >
            [view all]
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentUpdates.map((update) => (
            <UpdateCard key={update.slug} update={update} />
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <ASCIIBorder variant="double">
          <div className="text-center py-4">
            <p className="text-terminal-white-dim mb-4">
              Interested in working together or have questions?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-terminal-amber hover:text-terminal-green transition-colors"
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
