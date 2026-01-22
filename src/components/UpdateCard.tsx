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
      className="group block border border-terminal-gray hover:border-terminal-amber transition-colors p-4"
    >
      {/* Date */}
      <div className="flex items-center gap-2 mb-2 text-xs">
        <span className="text-terminal-gray">$</span>
        <time className="text-terminal-amber">{formattedDate}</time>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-terminal-white group-hover:text-terminal-amber transition-colors mb-2">
        {update.title}
      </h3>

      {/* Excerpt */}
      <p className="text-terminal-white-dim text-sm mb-3 line-clamp-2">
        {update.excerpt}
      </p>

      {/* Related Projects */}
      {update.projects.length > 0 && (
        <div className="flex items-center gap-2 text-xs">
          <span className="text-terminal-gray">{">"}</span>
          <span className="text-terminal-white-dim">related:</span>
          {update.projects.map((project, index) => (
            <span key={project}>
              <span className="text-terminal-cyan">{project}</span>
              {index < update.projects.length - 1 && (
                <span className="text-terminal-gray">,</span>
              )}
            </span>
          ))}
        </div>
      )}

      {/* Hover indicator */}
      <div className="mt-3 text-terminal-gray text-xs opacity-0 group-hover:opacity-100 transition-opacity">
        {"─".repeat(15)} [read more]
      </div>
    </Link>
  );
}
