import { categories } from "../data/helplines";
import { useLanguage } from "../context/LanguageContext";

interface CategoryNavProps {
  active: string | null;
  onSelect: (id: string | null) => void;
  counts: Record<string, number>;
  visibleCount: number;
}

export default function CategoryNav({ active, onSelect, counts, visibleCount }: CategoryNavProps) {
  const { t } = useLanguage();

  return (
    <div className="sticky top-[104px] z-40 border-b border-slate-200 bg-white/90 py-3 backdrop-blur-md lg:top-[68px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 [scrollbar-width:thin]">
          <button
            onClick={() => onSelect(null)}
            className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition ${
              active === null
                ? "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-600/25"
                : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
            }`}
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
            {t.allCats}
            <span className={`rounded-full px-1.5 text-xs ${active === null ? "bg-white/25" : "bg-slate-100"}`}>
              {visibleCount}
            </span>
          </button>

          {categories.map((cat) => {
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelect(isActive ? null : cat.id)}
                className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-600/25"
                    : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                <span aria-hidden>{cat.icon}</span>
                {cat.shortName}
                {counts[cat.id] > 0 && (
                  <span className={`rounded-full px-1.5 text-xs ${isActive ? "bg-white/25" : "bg-slate-100 text-slate-500"}`}>
                    {counts[cat.id]}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
