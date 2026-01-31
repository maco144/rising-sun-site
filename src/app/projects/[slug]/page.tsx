import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/data/projects";
import { getUpdatesByProject } from "@/data/updates";
import UpdateCard from "@/components/UpdateCard";
import ASCIIBorder from "@/components/ASCIIBorder";

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} | Rising Sun`,
    description: project.description,
  };
}

const statusColors = {
  active: "text-terminal-green border-terminal-green",
  beta: "text-terminal-amber border-terminal-amber",
  "coming-soon": "text-terminal-cyan border-terminal-cyan",
};

const statusLabels = {
  active: "ACTIVE",
  beta: "BETA",
  "coming-soon": "COMING SOON",
};

const projectsWithOnePagers = [
  "password-palace",
  "trove",
  "gamegames",
  "eudaimonia",
  "forgeground",
  "entity-identity",
  "rising-sun",
];

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const relatedUpdates = getUpdatesByProject(project.slug);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm">
        <Link
          href="/projects"
          className="text-terminal-white-dim hover:text-terminal-green transition-colors"
        >
          ~/projects
        </Link>
        <span className="text-terminal-gray mx-2">/</span>
        <span className="text-terminal-green">{project.slug}</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-terminal-white">
            {project.name}
          </h1>
          <span
            className={`px-3 py-1 text-sm border ${statusColors[project.status]}`}
          >
            {statusLabels[project.status]}
          </span>
        </div>
        <p className="text-terminal-amber text-lg mb-4">{project.tagline}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-terminal-gray border border-terminal-gray px-2 py-1"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      {/* One-Pager Link */}
      {projectsWithOnePagers.includes(project.slug) && (
        <Link
          href={`/projects/${project.slug}/one-pager`}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-terminal-cyan text-terminal-cyan hover:bg-terminal-cyan hover:text-terminal-black transition-all"
        >
          <span>{">"}</span>
          <span>View One-Pager</span>
        </Link>
      )}

      {/* Links */}
      {project.links.length > 0 && (
        <ASCIIBorder variant="single" className="mb-8">
          <div className="flex flex-wrap gap-4">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-terminal-cyan hover:text-terminal-green transition-colors"
              >
                <span>{"["}</span>
                <span>{link.label}</span>
                <span>{"]"}</span>
                <span className="text-terminal-gray">→</span>
              </a>
            ))}
          </div>
        </ASCIIBorder>
      )}

      {/* Long Description */}
      <article className="mb-12">
        <div className="prose prose-invert prose-terminal max-w-none">
          {project.longDescription.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2
                  key={index}
                  className="text-xl font-semibold text-terminal-amber mt-8 mb-4"
                >
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("- ")) {
              const items = paragraph.split("\n");
              return (
                <ul key={index} className="list-none space-y-2 my-4">
                  {items.map((item, i) => (
                    <li key={i} className="text-terminal-white-dim">
                      <span className="text-terminal-green mr-2">{">"}</span>
                      {item.includes("**") ? (
                        <>
                          <span className="text-terminal-white font-semibold">
                            {item.match(/\*\*(.*?)\*\*/)?.[1]}
                          </span>
                          :{item.split("**:")[1] || item.split("**: ")[1]}
                        </>
                      ) : (
                        item.replace("- ", "")
                      )}
                    </li>
                  ))}
                </ul>
              );
            }
            if (paragraph.startsWith("1. ")) {
              const items = paragraph.split("\n");
              return (
                <ol key={index} className="list-none space-y-2 my-4">
                  {items.map((item, i) => (
                    <li key={i} className="text-terminal-white-dim">
                      <span className="text-terminal-amber mr-2">{i + 1}.</span>
                      {item.replace(/^\d+\. \*\*(.*?)\*\*:/, "")}
                      {item.includes("**") && (
                        <>
                          <span className="text-terminal-white font-semibold">
                            {item.match(/\*\*(.*?)\*\*/)?.[1]}
                          </span>
                          :{item.split("**:")[1] || item.split("**: ")[1]}
                        </>
                      )}
                      {!item.includes("**") && item.replace(/^\d+\. /, "")}
                    </li>
                  ))}
                </ol>
              );
            }
            if (paragraph.startsWith("|")) {
              const rows = paragraph.split("\n").filter((r) => !r.includes("---"));
              return (
                <div key={index} className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <tbody>
                      {rows.map((row, i) => (
                        <tr
                          key={i}
                          className={i === 0 ? "border-b border-terminal-gray" : ""}
                        >
                          {row
                            .split("|")
                            .filter(Boolean)
                            .map((cell, j) => (
                              <td
                                key={j}
                                className={`px-4 py-2 ${
                                  i === 0
                                    ? "text-terminal-amber font-semibold"
                                    : "text-terminal-white-dim"
                                }`}
                              >
                                {cell.trim()}
                              </td>
                            ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }
            return (
              <p key={index} className="text-terminal-white-dim mb-4">
                {paragraph}
              </p>
            );
          })}
        </div>
      </article>

      {/* Related Updates */}
      {relatedUpdates.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">
            <span className="text-terminal-gray">$</span>{" "}
            <span className="text-terminal-cyan">Related Updates</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedUpdates.map((update) => (
              <UpdateCard key={update.slug} update={update} />
            ))}
          </div>
        </section>
      )}

      {/* Back Link */}
      <div className="pt-8 border-t border-terminal-gray">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-terminal-white-dim hover:text-terminal-green transition-colors"
        >
          <span>{"<"}</span>
          <span>back to projects</span>
        </Link>
      </div>
    </div>
  );
}
