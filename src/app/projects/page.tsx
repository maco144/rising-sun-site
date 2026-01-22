"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects, type Project } from "@/data/projects";

type StatusFilter = "all" | Project["status"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<StatusFilter>("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.status === filter);

  const statusCounts = {
    all: projects.length,
    active: projects.filter((p) => p.status === "active").length,
    beta: projects.filter((p) => p.status === "beta").length,
    "coming-soon": projects.filter((p) => p.status === "coming-soon").length,
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          <span className="text-terminal-gray">~/</span>
          <span className="text-terminal-green">projects</span>
        </h1>
        <p className="text-terminal-white-dim">
          A collection of tools, apps, and experiments.
        </p>
      </div>

      {/* Filter */}
      <div className="mb-8 flex flex-wrap items-center gap-2">
        <span className="text-terminal-gray text-sm">filter:</span>
        {(["all", "active", "beta", "coming-soon"] as StatusFilter[]).map(
          (status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-3 py-1 text-sm border transition-colors ${
                filter === status
                  ? "border-terminal-green text-terminal-green"
                  : "border-terminal-gray text-terminal-white-dim hover:border-terminal-amber hover:text-terminal-amber"
              }`}
            >
              {status === "coming-soon" ? "soon" : status} ({statusCounts[status]}
              )
            </button>
          )
        )}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-terminal-white-dim">
            No projects match the selected filter.
          </p>
        </div>
      )}

      {/* ASCII Decoration */}
      <div className="mt-16 text-center">
        <pre className="ascii-art text-terminal-gray text-xs inline-block">
{`
╭─────────────────────────────────╮
│  More projects in development   │
│        Stay tuned...            │
╰─────────────────────────────────╯
`}
        </pre>
      </div>
    </div>
  );
}
