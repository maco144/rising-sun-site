import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import UpdateCard from "@/components/UpdateCard";
import ASCIIBorder from "@/components/ASCIIBorder";
import AnimatedHero from "@/components/AnimatedHero";
import { getFeaturedProjects } from "@/data/projects";
import { getRecentUpdates } from "@/data/updates";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const recentUpdates = getRecentUpdates(3);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Animated Hero Section */}
      <AnimatedHero />

      {/* Status Bar */}
      <ASCIIBorder variant="single" className="mb-12">
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <span className="text-terminal-gray">STATUS:</span>
          <span className="text-terminal-green flex items-center">
            <span className="inline-block w-2 h-2 bg-terminal-green rounded-full mr-2 status-pulse" />
            Online & Building
          </span>
          <span className="text-terminal-gray hidden sm:inline">|</span>
          <span className="text-terminal-white-dim">
            {featuredProjects.length + 5} projects
          </span>
          <span className="text-terminal-gray hidden sm:inline">|</span>
          <span className="text-terminal-white-dim">
            Open for collaboration
          </span>
        </div>
      </ASCIIBorder>

      {/* Featured Projects */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold glitch-hover">
            <span className="text-terminal-gray">{">"}</span>{" "}
            <span className="text-terminal-amber glow-amber">Featured Projects</span>
          </h2>
          <Link
            href="/projects"
            className="text-sm text-terminal-white-dim hover:text-terminal-green hover:glow-green transition-all"
          >
            [view all]
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredProjects.map((project, index) => (
            <div
              key={project.slug}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} featured />
            </div>
          ))}
        </div>
      </section>

      {/* Recent Updates */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold glitch-hover">
            <span className="text-terminal-gray">$</span>{" "}
            <span className="text-terminal-cyan glow-cyan">Recent Updates</span>
          </h2>
          <Link
            href="/updates"
            className="text-sm text-terminal-white-dim hover:text-terminal-cyan transition-all"
          >
            [view all]
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentUpdates.map((update, index) => (
            <div
              key={update.slug}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100 + 300}ms` }}
            >
              <UpdateCard update={update} />
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links / CTA */}
      <section>
        <ASCIIBorder variant="double">
          <div className="text-center py-6">
            <p className="text-terminal-white-dim mb-4">
              Interested in working together or have questions?
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 text-terminal-amber hover:text-terminal-green transition-all duration-300 hover:glow-green"
            >
              <span className="transition-transform group-hover:-translate-x-1">{">>>"}</span>
              <span className="underline underline-offset-4">Get in touch</span>
              <span className="transition-transform group-hover:translate-x-1">{"<<<"}</span>
            </Link>
          </div>
        </ASCIIBorder>
      </section>

      {/* Terminal prompt decoration at bottom */}
      <div className="mt-16 text-center">
        <div className="inline-block text-terminal-gray text-sm">
          <span className="text-terminal-green">visitor@rising-sun</span>
          <span className="text-terminal-white">:</span>
          <span className="text-terminal-cyan">~</span>
          <span className="text-terminal-white">$ </span>
          <span className="text-terminal-white-dim">scroll for more</span>
          <span className="inline-block w-2 h-4 bg-terminal-green ml-1 animate-blink" />
        </div>
      </div>
    </div>
  );
}
