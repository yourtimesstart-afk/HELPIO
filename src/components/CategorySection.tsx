import type { Category } from "../data/helplines";
import HelplineCard from "./HelplineCard";
import { useLanguage } from "../context/LanguageContext";

interface Props {
  category: Category;
  isExpanded: boolean;
  onToggle: (id: string) => void;
}

export default function CategorySection({ category, isExpanded, onToggle }: Props) {
  const { t } = useLanguage();
  const { helplines } = category;
  const visible = isExpanded ? helplines : helplines.slice(0, 4);
  const hasMore = helplines.length > 4;

  return (
    <section id={`cat-${category.id}`} className="scroll-mt-40">
      {/* Category header */}
      <div className="mb-5 flex items-center gap-3.5">
        <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-2xl shadow-sm ${category.accent}`}>
          {category.icon}
        </span>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">{category.name}</h2>
            <span className={`rounded-full border px-2.5 py-0.5 text-xs font-bold ${category.tag}`}>
              {helplines.length} {t.lines}
            </span>
          </div>
          <p className="mt-0.5 text-sm text-slate-500">{category.description}</p>
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((h) => (
          <HelplineCard key={h.id} helpline={h} accent={category.bar} />
        ))}
      </div>

      {hasMore && (
        <button
          onClick={() => onToggle(category.id)}
          className="mt-4 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-600 transition hover:border-blue-300 hover:text-blue-600"
        >
          {isExpanded ? t.showFewer : t.showAll.replace("{n}", String(helplines.length))}
          <svg
            className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      )}
    </section>
  );
}
