import { notFound } from "next/navigation";
import Link from "next/link";
import { updates, getUpdateBySlug } from "@/data/updates";
import { getProjectBySlug } from "@/data/projects";
import ASCIIBorder from "@/components/ASCIIBorder";

interface UpdatePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return updates.map((update) => ({
    slug: update.slug,
  }));
}

export function generateMetadata({ params }: UpdatePageProps) {
  const update = getUpdateBySlug(params.slug);
  if (!update) return { title: "Update Not Found" };

  return {
    title: `${update.title} | Rising Sun`,
    description: update.excerpt,
  };
}

export default function UpdatePage({ params }: UpdatePageProps) {
  const update = getUpdateBySlug(params.slug);

  if (!update) {
    notFound();
  }

  const formattedDate = new Date(update.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const relatedProjects = update.projects
    .map((slug) => getProjectBySlug(slug))
    .filter(Boolean);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm">
        <Link
          href="/updates"
          className="text-terminal-white-dim hover:text-terminal-cyan transition-colors"
        >
          ~/updates
        </Link>
        <span className="text-terminal-gray mx-2">/</span>
        <span className="text-terminal-cyan truncate">{update.slug}</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <time className="text-terminal-amber text-sm block mb-2">
          {formattedDate}
        </time>
        <h1 className="text-2xl md:text-3xl font-bold text-terminal-white mb-4">
          {update.title}
        </h1>
        <p className="text-terminal-white-dim text-lg">{update.excerpt}</p>
      </header>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <ASCIIBorder variant="single" className="mb-8">
          <div className="flex items-center gap-3 text-sm">
            <span className="text-terminal-gray">Related:</span>
            {relatedProjects.map((project, index) => (
              <span key={project!.slug}>
                <Link
                  href={`/projects/${project!.slug}`}
                  className="text-terminal-cyan hover:text-terminal-green transition-colors"
                >
                  {project!.name}
                </Link>
                {index < relatedProjects.length - 1 && (
                  <span className="text-terminal-gray ml-2">,</span>
                )}
              </span>
            ))}
          </div>
        </ASCIIBorder>
      )}

      {/* Content */}
      <article className="mb-12">
        <div className="space-y-6">
          {update.content.split("\n\n").map((block, index) => {
            // Heading
            if (block.startsWith("## ")) {
              return (
                <h2
                  key={index}
                  className="text-xl font-semibold text-terminal-amber mt-8 mb-4"
                >
                  {block.replace("## ", "")}
                </h2>
              );
            }
            // Subheading
            if (block.startsWith("### ")) {
              return (
                <h3
                  key={index}
                  className="text-lg font-semibold text-terminal-green mt-6 mb-3"
                >
                  {block.replace("### ", "")}
                </h3>
              );
            }
            // List items
            if (block.startsWith("- ")) {
              const items = block.split("\n");
              return (
                <ul key={index} className="space-y-2">
                  {items.map((item, i) => {
                    const text = item.replace("- ", "");
                    const hasBold = text.includes("**");
                    if (hasBold) {
                      const parts = text.split(/\*\*(.*?)\*\*/);
                      return (
                        <li key={i} className="text-terminal-white-dim flex">
                          <span className="text-terminal-green mr-3">{">"}</span>
                          <span>
                            {parts.map((part, j) =>
                              j % 2 === 1 ? (
                                <span
                                  key={j}
                                  className="text-terminal-white font-semibold"
                                >
                                  {part}
                                </span>
                              ) : (
                                part
                              )
                            )}
                          </span>
                        </li>
                      );
                    }
                    return (
                      <li key={i} className="text-terminal-white-dim flex">
                        <span className="text-terminal-green mr-3">{">"}</span>
                        <span>{text}</span>
                      </li>
                    );
                  })}
                </ul>
              );
            }
            // Numbered list
            if (/^\d+\. /.test(block)) {
              const items = block.split("\n");
              return (
                <ol key={index} className="space-y-2">
                  {items.map((item, i) => {
                    const text = item.replace(/^\d+\. /, "");
                    const hasBold = text.includes("**");
                    if (hasBold) {
                      const parts = text.split(/\*\*(.*?)\*\*/);
                      return (
                        <li key={i} className="text-terminal-white-dim flex">
                          <span className="text-terminal-amber mr-3 w-6">
                            {i + 1}.
                          </span>
                          <span>
                            {parts.map((part, j) =>
                              j % 2 === 1 ? (
                                <span
                                  key={j}
                                  className="text-terminal-white font-semibold"
                                >
                                  {part}
                                </span>
                              ) : (
                                part
                              )
                            )}
                          </span>
                        </li>
                      );
                    }
                    return (
                      <li key={i} className="text-terminal-white-dim flex">
                        <span className="text-terminal-amber mr-3 w-6">
                          {i + 1}.
                        </span>
                        <span>{text}</span>
                      </li>
                    );
                  })}
                </ol>
              );
            }
            // Code block
            if (block.startsWith("```")) {
              const lines = block.split("\n");
              const code = lines.slice(1, -1).join("\n");
              return (
                <pre
                  key={index}
                  className="bg-terminal-dark border border-terminal-gray p-4 overflow-x-auto text-sm text-terminal-white-dim"
                >
                  <code>{code}</code>
                </pre>
              );
            }
            // Regular paragraph
            const hasBold = block.includes("**");
            if (hasBold) {
              const parts = block.split(/\*\*(.*?)\*\*/);
              return (
                <p key={index} className="text-terminal-white-dim leading-relaxed">
                  {parts.map((part, j) =>
                    j % 2 === 1 ? (
                      <span key={j} className="text-terminal-white font-semibold">
                        {part}
                      </span>
                    ) : (
                      part
                    )
                  )}
                </p>
              );
            }
            return (
              <p key={index} className="text-terminal-white-dim leading-relaxed">
                {block}
              </p>
            );
          })}
        </div>
      </article>

      {/* Navigation */}
      <div className="pt-8 border-t border-terminal-gray flex justify-between items-center">
        <Link
          href="/updates"
          className="inline-flex items-center gap-2 text-terminal-white-dim hover:text-terminal-cyan transition-colors"
        >
          <span>{"<"}</span>
          <span>all updates</span>
        </Link>
        {relatedProjects.length > 0 && (
          <Link
            href={`/projects/${relatedProjects[0]!.slug}`}
            className="inline-flex items-center gap-2 text-terminal-white-dim hover:text-terminal-green transition-colors"
          >
            <span>view project</span>
            <span>{">"}</span>
          </Link>
        )}
      </div>
    </div>
  );
}
