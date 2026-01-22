import UpdateCard from "@/components/UpdateCard";
import { updates } from "@/data/updates";

export const metadata = {
  title: "Updates | Rising Sun",
  description: "Development news, releases, and announcements.",
};

export default function UpdatesPage() {
  const sortedUpdates = [...updates].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Group updates by year
  const updatesByYear = sortedUpdates.reduce((acc, update) => {
    const year = new Date(update.date).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(update);
    return acc;
  }, {} as Record<number, typeof updates>);

  const years = Object.keys(updatesByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          <span className="text-terminal-gray">~/</span>
          <span className="text-terminal-cyan">updates</span>
        </h1>
        <p className="text-terminal-white-dim">
          Development news, releases, and announcements.
        </p>
      </div>

      {/* Updates by Year */}
      {years.map((year) => (
        <section key={year} className="mb-12">
          <h2 className="text-lg font-semibold mb-6 flex items-center gap-3">
            <span className="text-terminal-amber">{year}</span>
            <span className="flex-1 h-px bg-terminal-gray" />
            <span className="text-terminal-white-dim text-sm">
              {updatesByYear[year].length} updates
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {updatesByYear[year].map((update) => (
              <UpdateCard key={update.slug} update={update} />
            ))}
          </div>
        </section>
      ))}

      {/* ASCII Decoration */}
      <div className="mt-8 text-center">
        <pre className="ascii-art text-terminal-gray text-xs inline-block">
{`
┌──────────────────────────────┐
│   Subscribe for updates?     │
│   Coming soon...             │
└──────────────────────────────┘
`}
        </pre>
      </div>
    </div>
  );
}
