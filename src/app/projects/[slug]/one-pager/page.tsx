import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { getProjectBySlug } from "@/data/projects";
import ASCIIBorder from "@/components/ASCIIBorder";

interface OnePagerPageProps {
  params: { slug: string };
}

const onePagerSlugs = [
  "password-palace",
  "trove",
  "gamegames",
  "eudaimonia",
  "forgeground",
  "entity-identity",
  "rising-sun",
];

export function generateStaticParams() {
  return onePagerSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: OnePagerPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "One-Pager Not Found" };

  return {
    title: `${project.name} One-Pager | Rising Sun`,
    description: `Investment overview and business summary for ${project.name}`,
  };
}

function parseMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Skip empty lines
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Horizontal rule
    if (line.trim() === "---") {
      elements.push(
        <hr key={key++} className="border-terminal-gray my-6" />
      );
      i++;
      continue;
    }

    // H1
    if (line.startsWith("# ")) {
      elements.push(
        <h1 key={key++} className="text-2xl md:text-3xl font-bold text-terminal-green mb-2">
          {line.replace("# ", "")}
        </h1>
      );
      i++;
      continue;
    }

    // H2
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-xl font-semibold text-terminal-amber mt-8 mb-4">
          {line.replace("## ", "")}
        </h2>
      );
      i++;
      continue;
    }

    // Bold subtitle (like **Self-Sovereign Identity...**)
    if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={key++} className="text-terminal-cyan text-lg mb-4">
          {line.replace(/\*\*/g, "")}
        </p>
      );
      i++;
      continue;
    }

    // Code block
    if (line.startsWith("```")) {
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <ASCIIBorder key={key++} variant="single">
          <pre className="text-terminal-green text-sm overflow-x-auto whitespace-pre-wrap">
            {codeLines.join("\n")}
          </pre>
        </ASCIIBorder>
      );
      i++;
      continue;
    }

    // Table
    if (line.startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      const rows = tableLines.filter((r) => !r.includes("---"));
      elements.push(
        <div key={key++} className="overflow-x-auto my-4">
          <table className="w-full text-sm">
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={rowIndex === 0 ? "border-b border-terminal-gray" : "border-b border-terminal-gray/30"}
                >
                  {row
                    .split("|")
                    .filter(Boolean)
                    .map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`px-4 py-2 ${
                          rowIndex === 0
                            ? "text-terminal-amber font-semibold"
                            : "text-terminal-white-dim"
                        }`}
                        dangerouslySetInnerHTML={{
                          __html: cell.trim().replace(/\*\*(.*?)\*\*/g, '<span class="text-terminal-white font-semibold">$1</span>')
                        }}
                      />
                    ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Bullet list
    if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].replace("- ", ""));
        i++;
      }
      elements.push(
        <ul key={key++} className="space-y-2 my-4">
          {listItems.map((item, itemIndex) => (
            <li key={itemIndex} className="flex items-start gap-2 text-terminal-white-dim">
              <span className="text-terminal-green">{">"}</span>
              <span dangerouslySetInnerHTML={{
                __html: item.replace(/\*\*(.*?)\*\*/g, '<span class="text-terminal-white font-semibold">$1</span>')
              }} />
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={key++} className="text-terminal-white-dim mb-4">
        {line}
      </p>
    );
    i++;
  }

  return elements;
}

export default function OnePagerPage({ params }: OnePagerPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project || !onePagerSlugs.includes(params.slug)) {
    notFound();
  }

  // Read the markdown file
  const filePath = path.join(process.cwd(), "docs", "one-pagers", `${params.slug}.md`);

  let content: string;
  try {
    content = fs.readFileSync(filePath, "utf-8");
  } catch {
    notFound();
  }

  const parsedContent = parseMarkdown(content);

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
        <Link
          href={`/projects/${params.slug}`}
          className="text-terminal-white-dim hover:text-terminal-green transition-colors"
        >
          {params.slug}
        </Link>
        <span className="text-terminal-gray mx-2">/</span>
        <span className="text-terminal-green">one-pager</span>
      </nav>

      {/* Content */}
      <article className="mb-12">
        {parsedContent}
      </article>

      {/* Back Link */}
      <div className="pt-8 border-t border-terminal-gray">
        <Link
          href={`/projects/${params.slug}`}
          className="inline-flex items-center gap-2 text-terminal-white-dim hover:text-terminal-green transition-colors"
        >
          <span>{"<"}</span>
          <span>back to {project.name}</span>
        </Link>
      </div>
    </div>
  );
}
