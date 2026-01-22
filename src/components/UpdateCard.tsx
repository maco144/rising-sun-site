"use client";

import Link from "next/link";
import type { Update } from "@/data/updates";

interface UpdateCardProps {
  update: Update;
}

export default function UpdateCard({ update }: UpdateCardProps) {
  const formattedDate = new Date(update.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      href={`/updates/${update.slug}`}
      className="group block border border-terminal-gray hover:border-terminal-amber transition-all duration-300 p-4 relative overflow-hidden hover:shadow-[0_0_20px_rgba(255,176,0,0.2)] card-glitch"
    >
      {/* Scan line effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-terminal-amber/5 to-transparent animate-scan" />
      </div>

      {/* Date */}
      <div className="flex items-center gap-2 mb-2 text-xs relative">
        <span className="text-terminal-gray group-hover:text-terminal-amber transition-colors">$</span>
        <time className="text-terminal-amber group-hover:glow-amber transition-all">{formattedDate}</time>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-terminal-white group-hover:text-terminal-amber group-hover:glow-amber transition-all mb-2 relative">
        {update.title}
      </h3>

      {/* Excerpt */}
      <p className="text-terminal-white-dim text-sm mb-3 line-clamp-2 relative">
        {update.excerpt}
      </p>

      {/* Related Projects */}
      {update.projects.length > 0 && (
        <div className="flex items-center gap-2 text-xs relative">
          <span className="text-terminal-gray group-hover:text-terminal-amber transition-colors">{">"}</span>
          <span className="text-terminal-white-dim">related:</span>
          {update.projects.map((project, index) => (
            <span key={project}>
              <span className="text-terminal-cyan group-hover:glow-cyan transition-all">{project}</span>
              {index < update.projects.length - 1 && (
                <span className="text-terminal-gray">,</span>
              )}
            </span>
          ))}
        </div>
      )}

      {/* ASCII decoration with animation */}
      <div className="mt-3 text-terminal-gray text-xs overflow-hidden relative">
        <div className="transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500">
          <span className="text-terminal-amber">{"─".repeat(15)}</span>
          <span className="text-terminal-white ml-2">[read more]</span>
        </div>
      </div>

      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-terminal-gray group-hover:border-terminal-amber transition-colors opacity-50" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-terminal-gray group-hover:border-terminal-amber transition-colors opacity-50" />
    </Link>
  );
}
