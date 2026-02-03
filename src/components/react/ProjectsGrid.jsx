import { useMemo, useState } from "react";

/**
 * ProjectsGrid (React)
 * -----------------------------------------------------------------------------
 * Requirement: "Projects section - interactive"
 * - Click a card => opens modal with details
 * - Simple filtering by tag
 * - Clean, professional UI with Tailwind
 */

const DEMO_PROJECTS = [
  {
    id: 1,
    title: "Moodle Analytics Dashboard",
    desc: "Custom UI for course activity, quizzes, and engagement metrics.",
    tags: ["React", "Next.js", "Charts"],
    link: "#",
    bullets: [
      "Responsive cards + charts",
      "Filters by date/course",
      "Prepared for Moodle Web Services",
    ],
  },
  {
    id: 2,
    title: "Supermarket Manager (Android)",
    desc: "Shopping list, wishlist, history, and bilingual content.",
    tags: ["Kotlin", "Room", "Compose"],
    link: "#",
    bullets: ["Offline-first", "Clean architecture", "Localization EN/EL"],
  },
  {
    id: 3,
    title: "Astro Portfolio (This Assignment)",
    desc: "Bilingual portfolio built with Astro + React + Tailwind.",
    tags: ["Astro", "React", "Tailwind"],
    link: "#",
    bullets: [
      "SEO-ready pages",
      "Interactive projects",
      "Bonus API for section data",
    ],
  },
];

function uniqueTags(projects) {
  const set = new Set();
  projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
  return ["All", ...Array.from(set)];
}

export default function ProjectsGrid({ labels }) {
  const projects = useMemo(() => DEMO_PROJECTS, []);
  const tags = useMemo(() => uniqueTags(projects), [projects]);

  const [active, setActive] = useState(null);
  const [selectedTag, setSelectedTag] = useState("All");

  const filtered = useMemo(() => {
    if (selectedTag === "All") return projects;
    return projects.filter((p) => p.tags.includes(selectedTag));
  }, [projects, selectedTag]);

  return (
    <div>
      {/* Filter */}
      <div className="flex flex-wrap items-center gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={[
              "rounded-full border px-3 py-1 text-xs transition",
              selectedTag === tag
                ? "border-white/30 bg-white/10"
                : "border-white/10 hover:border-white/25",
            ].join(" ")}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <button
            key={p.id}
            onClick={() => setActive(p)}
            className="group text-left rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:border-white/25 transition"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <span className="text-xs opacity-60 group-hover:opacity-80">
                {labels?.open ?? "Open"}
              </span>
            </div>

            <p className="mt-2 text-sm opacity-80">{p.desc}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-[11px] rounded-full border border-white/10 px-2 py-1 opacity-80"
                >
                  {t}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="w-full max-w-lg rounded-2xl border border-white/10 bg-zinc-950 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">{active.title}</h3>
                <p className="mt-2 opacity-80">{active.desc}</p>
              </div>
              <button
                className="rounded-lg border border-white/10 px-3 py-1 text-sm hover:border-white/25"
                onClick={() => setActive(null)}
              >
                ✕
              </button>
            </div>

            <ul className="mt-5 space-y-2 text-sm opacity-85">
              {active.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {active.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] rounded-full border border-white/10 px-2 py-1 opacity-80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={active.link}
                className="inline-flex rounded-xl bg-white px-4 py-2 text-sm font-medium text-zinc-900"
              >
                {labels?.visit ?? "Visit"}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
