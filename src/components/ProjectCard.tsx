import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const statusColors = {
  active: "text-terminal-green",
  beta: "text-terminal-amber",
  "coming-soon": "text-terminal-cyan",
};

const statusLabels = {
  active: "ACTIVE",
  beta: "BETA",
  "coming-soon": "SOON",
};

export default function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group block border border-terminal-gray hover:border-terminal-green transition-colors ${
        featured ? "p-6" : "p-4"
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-terminal-gray">{">"}</span>
          <h3
            className={`font-semibold text-terminal-white group-hover:text-terminal-green transition-colors ${
              featured ? "text-lg" : "text-base"
            }`}
          >
            {project.name}
          </h3>
        </div>
        <span
          className={`text-xs px-2 py-0.5 border border-current ${
            statusColors[project.status]
          }`}
        >
          {statusLabels[project.status]}
        </span>
      </div>

      {/* Tagline */}
      <p className="text-terminal-amber text-sm mb-2">{project.tagline}</p>

      {/* Description */}
      <p className="text-terminal-white-dim text-sm mb-4 line-clamp-2">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.slice(0, featured ? 5 : 3).map((tag) => (
          <span
            key={tag}
            className="text-xs text-terminal-gray border border-terminal-gray px-2 py-0.5"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* ASCII decoration */}
      <div className="mt-4 text-terminal-gray text-xs opacity-0 group-hover:opacity-100 transition-opacity">
        {"─".repeat(20)} [view project]
      </div>
    </Link>
  );
}
