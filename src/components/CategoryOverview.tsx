import { categories } from "../data/helplines";
import { useLanguage } from "../context/LanguageContext";

interface Props {
  onNavigate: (id: string) => void;
}

export default function CategoryOverview({ onNavigate }: Props) {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onNavigate(cat.id)}
          className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/10"
        >
          <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl shadow-sm ${cat.accent}`}>
            {cat.icon}
          </span>
          <span className="min-w-0 flex-1">
            <span className="flex items-center justify-between gap-2">
              <span className="text-sm font-extrabold leading-snug text-slate-900">{cat.name}</span>
              <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-bold ${cat.tag}`}>
                {cat.helplines.length}
              </span>
            </span>
            <span className="mt-1 block text-xs leading-relaxed text-slate-500 line-clamp-2">{cat.description}</span>
            <span className="mt-2.5 inline-flex items-center gap-1 text-xs font-bold text-blue-600 opacity-70 transition group-hover:opacity-100">
              {t.viewLines.replace("{n}", String(cat.helplines.length))}
              <svg
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </span>
        </button>
      ))}
    </div>
  );
}
