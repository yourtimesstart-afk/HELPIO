import { useMemo, useState } from "react";
import { COUNTRIES } from "../data/countries";
import { useLanguage } from "../context/LanguageContext";

interface Props {
  currentId: string;
  onSelect: (id: string) => void;
}

const REGIONS: { name: string; filter: (n: string) => boolean }[] = [
  { name: "North America", filter: (n) => ["United States", "Canada", "Mexico", "Greenland"].includes(n) },
  { name: "Europe", filter: (n) => ["United Kingdom", "Germany", "France", "Netherlands", "Belgium", "Switzerland", "Austria", "Spain", "Italy", "Ireland", "Sweden", "Norway", "Denmark", "Finland", "Luxembourg", "Poland", "Romania", "Moldova", "Ukraine", "Belarus", "Türkiye"].includes(n) },
  { name: "Asia-Pacific", filter: (n) => ["Australia", "New Zealand", "Singapore", "Malaysia", "Indonesia", "Philippines", "Japan", "South Korea", "China", "Hong Kong", "Vietnam", "Thailand", "India"].includes(n) },
  { name: "Middle East & Africa", filter: (n) => ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Yemen", "Oman", "Israel", "Egypt", "South Africa"].includes(n) },
  { name: "South America", filter: (n) => ["Brazil", "Colombia", "Chile"].includes(n) },
  { name: "Oceania", filter: (n) => ["Fiji"].includes(n) },
];

export default function ExploreCountries({ currentId, onSelect }: Props) {
  const { t } = useLanguage();
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();

  const groups = useMemo(() => {
    const list = q ? COUNTRIES.filter((c) => c.name.toLowerCase().includes(q)) : COUNTRIES;
    return REGIONS.map((r) => ({ ...r, items: list.filter((c) => r.filter(c.name)) })).filter((r) => r.items.length > 0);
  }, [q]);

  return (
    <section id="countries" className="scroll-mt-32 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-indigo-600 ring-1 ring-indigo-100">
              🌍 {t.coverage}: {COUNTRIES.length}
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {t.exploreTitle}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-500">{t.exploreSub}</p>
          </div>
          <div className="relative w-full sm:w-72">
            <svg className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.countrySearch}
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            />
          </div>
        </div>

        <div className="mt-10 space-y-10">
          {groups.map((region) => (
            <div key={region.name}>
              <h3 className="mb-4 text-sm font-extrabold uppercase tracking-widest text-slate-400">
                {region.name}
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {region.items.map((c) => {
                  const active = c.id === currentId;
                  const count = c.helplines.length + c.emergency.length;
                  return (
                    <button
                      key={c.id}
                      onClick={() => onSelect(c.id)}
                      className={`group flex items-center gap-3 rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-900/10 ${
                        active
                          ? "border-blue-500 bg-blue-50 shadow-md shadow-blue-600/10"
                          : "border-slate-200 bg-white hover:border-blue-300"
                      }`}
                    >
                      <span className="text-3xl">{c.flag}</span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-extrabold text-slate-900">
                          {c.name}
                          {active && <span className="ml-1 text-blue-500">✓</span>}
                        </span>
                        <span className="block text-xs text-slate-500">
                          {count > 0 ? `${count} ${t.lines}` : t.emergencyNumbers}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {groups.length === 0 && (
          <p className="mt-8 rounded-2xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-400">
            {t.noResTitle}
          </p>
        )}
      </div>
    </section>
  );
}
