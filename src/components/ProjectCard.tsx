"use client";

import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const statusColors = {
  active: "text-terminal-green border-terminal-green",
  beta: "text-terminal-amber border-terminal-amber",
  "coming-soon": "text-terminal-cyan border-terminal-cyan",
};

const statusGlow = {
  active: "group-hover:shadow-[0_0_10px_rgba(0,255,65,0.5)]",
  beta: "group-hover:shadow-[0_0_10px_rgba(255,176,0,0.5)]",
  "coming-soon": "group-hover:shadow-[0_0_10px_rgba(0,212,255,0.5)]",
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
      className={`group block border border-terminal-gray hover:border-terminal-green transition-all duration-300 card-glitch relative overflow-hidden ${
        featured ? "p-6" : "p-4"
      } hover:shadow-[0_0_20px_rgba(0,255,65,0.2)]`}
    >
      {/* Scan line effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-terminal-green/5 to-transparent animate-scan" />
      </div>

      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-3 relative">
        <div className="flex items-center gap-2">
          <span className="text-terminal-gray group-hover:text-terminal-green transition-colors">
            {">"}
          </span>
          <h3
            className={`font-semibold text-terminal-white group-hover:text-terminal-green group-hover:glow-green transition-all ${
              featured ? "text-lg" : "text-base"
            }`}
          >
            {project.name}
          </h3>
        </div>
        <span
          className={`text-xs px-2 py-0.5 border transition-all ${
            statusColors[project.status]
          } ${statusGlow[project.status]}`}
        >
          {statusLabels[project.status]}
        </span>
      </div>

      {/* Tagline */}
      <p className="text-terminal-amber text-sm mb-2 relative">{project.tagline}</p>

      {/* Description */}
      <p className="text-terminal-white-dim text-sm mb-4 line-clamp-2 relative">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 relative">
        {project.tags.slice(0, featured ? 5 : 3).map((tag) => (
          <span
            key={tag}
            className="text-xs text-terminal-gray border border-terminal-gray px-2 py-0.5 group-hover:border-terminal-green/50 transition-colors"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* ASCII decoration with animation */}
      <div className="mt-4 text-terminal-gray text-xs overflow-hidden relative">
        <div className="transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500">
          <span className="text-terminal-green">{"─".repeat(15)}</span>
          <span className="text-terminal-white ml-2">[view project]</span>
        </div>
      </div>

      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-terminal-gray group-hover:border-terminal-green transition-colors opacity-50" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-terminal-gray group-hover:border-terminal-green transition-colors opacity-50" />
    </Link>
  );
}
