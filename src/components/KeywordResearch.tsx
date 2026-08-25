import { useMemo, useState } from "react";
import { formatVolume, keywordTotalVolume, keywords } from "../data/keywords";
import { useLanguage } from "../context/LanguageContext";

type SortKey = "volume" | "difficulty";

const difficultyColor: Record<string, string> = {
  Low: "bg-emerald-50 text-emerald-600 ring-emerald-200",
  Medium: "bg-amber-50 text-amber-600 ring-amber-200",
  High: "bg-orange-50 text-orange-600 ring-orange-200",
  "Very High": "bg-red-50 text-red-600 ring-red-200",
};

const cats = ["All", ...Array.from(new Set(keywords.map((k) => k.category)))];

function difficultyRank(d: string) {
  return d === "Very High" ? 4 : d === "High" ? 3 : d === "Medium" ? 2 : 1;
}

export default function KeywordResearch() {
  const { t } = useLanguage();
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("volume");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = keywords.filter(
      (k) =>
        (category === "All" || k.category === category) &&
        (!q || k.keyword.toLowerCase().includes(q) || k.category.toLowerCase().includes(q))
    );
    return [...list].sort((a, b) =>
      sort === "volume" ? b.volume - a.volume : difficultyRank(a.difficulty) - difficultyRank(b.difficulty)
    );
  }, [query, sort, category]);

  return (
    <section id="keyword-research" className="scroll-mt-32 bg-slate-950 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-blue-500/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-300 ring-1 ring-blue-500/30">
            {t.kwBadge}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{t.kwTitle}</h2>
          <p className="mt-3 text-base leading-relaxed text-slate-400">{t.kwSub}</p>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur">
            <div className="text-2xl font-extrabold text-white sm:text-3xl">{formatVolume(keywordTotalVolume)}+</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">{t.kwStats[0]}</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur">
            <div className="text-2xl font-extrabold text-white sm:text-3xl">{keywords.length}</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">{t.kwStats[1]}</div>
          </div>
          <div className="col-span-2 rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur sm:col-span-1">
            <div className="text-2xl font-extrabold text-white sm:text-3xl">{cats.length - 1}</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">{t.kwStats[2]}</div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-10 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative max-w-md flex-1">
            <svg
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.kwSearch}
              className="w-full rounded-xl border border-white/10 bg-white/10 py-3 pl-11 pr-4 text-sm text-white placeholder-slate-500 backdrop-blur transition focus:border-blue-400/50 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-bold transition ${
                  category === c
                    ? "border-blue-400 bg-blue-500/20 text-blue-200"
                    : "border-white/10 bg-white/5 text-slate-400 hover:border-blue-400/40 hover:text-slate-200"
                }`}
              >
                {c === "All" ? t.kwAll : c}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs font-bold uppercase tracking-wider text-slate-400">
                  <th className="px-5 py-4">Keyword</th>
                  <th className="px-5 py-4">Category</th>
                  <th className="px-5 py-4">
                    <button onClick={() => setSort("volume")} className="inline-flex items-center gap-1 transition hover:text-white">
                      {t.kwSortVol}
                      {sort === "volume" && <span className="text-blue-400">▼</span>}
                    </button>
                  </th>
                  <th className="px-5 py-4">
                    <button onClick={() => setSort("difficulty")} className="inline-flex items-center gap-1 transition hover:text-white">
                      {t.kwSortDiff}
                      {sort === "difficulty" && <span className="text-blue-400">▼</span>}
                    </button>
                  </th>
                  <th className="hidden px-5 py-4 lg:table-cell">{t.kwIntent}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filtered.map((k) => (
                  <tr key={k.keyword} className="transition hover:bg-white/5">
                    <td className="px-5 py-3.5">
                      <div className="font-bold text-white">{k.keyword}</div>
                      {k.note && <div className="mt-0.5 max-w-xs text-xs leading-snug text-slate-500">{k.note}</div>}
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold text-slate-300">
                        {k.category}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2.5">
                        <span className="w-14 font-extrabold text-blue-300">{formatVolume(k.volume)}</span>
                        <div className="h-1.5 w-24 overflow-hidden rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-blue-400 to-fuchsia-400"
                            style={{ width: `${Math.min(100, (k.volume / 1000000) * 100)}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-bold ring-1 ${difficultyColor[k.difficulty]}`}>
                        {k.difficulty}
                      </span>
                    </td>
                    <td className="hidden px-5 py-3.5 text-xs font-medium text-slate-400 lg:table-cell">{k.intent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filtered.length === 0 && (
            <div className="p-10 text-center text-sm text-slate-400">{t.kwNoRes}</div>
          )}
        </div>

        {/* Tips */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {t.kwTipsT.map((title, i) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-lg">{["🎯", "🧩", "📈"][i]}</div>
              <h4 className="mt-2 text-sm font-extrabold text-white">{title}</h4>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">{t.kwTipsD[i]}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">{t.kwNote}</p>
      </div>
    </section>
  );
}
