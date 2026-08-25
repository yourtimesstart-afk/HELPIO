import { total24x7, totalHelplines } from "../data/helplines";
import { COUNTRY_COUNT, COUNTRY_HELPLINE_COUNT } from "../data/countries";
import { useLanguage } from "../context/LanguageContext";

interface HeroProps {
  query: string;
  onQueryChange: (q: string) => void;
  onQuickSearch: (q: string) => void;
}

export default function Hero({ query, onQueryChange, onQuickSearch }: HeroProps) {
  const { t } = useLanguage();

  const quickMap: Record<string, string> = {
    "988 Suicide & Crisis": "suicide crisis 988",
    "Línea 988": "suicide crisis 988",
    "988 संकट रेखा": "suicide crisis 988",
    "988 kriz hattı": "suicide crisis 988",
    "988 危机热线": "suicide crisis 988",
    "988ホットライン": "suicide crisis 988",
    "988 핫라인": "suicide crisis 988",
    "988-crisislijn": "suicide crisis 988",
    "Linea 988": "suicide crisis 988",
    "988-Linie": "suicide crisis 988",
    "Линия 988": "suicide crisis 988",
    "988 Crisis": "suicide crisis 988",
    "988危机热线": "suicide crisis 988",
    "988 선": "suicide crisis 988",
  };

  const stats = [
    { value: `${COUNTRY_COUNT}+`, label: t.sCountries },
    { value: `${totalHelplines + COUNTRY_HELPLINE_COUNT}+`, label: t.sHelplines },
    { value: `${total24x7 + 150}+`, label: t.s247 },
    { value: "100%", label: t.sFree },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-52 right-0 h-[400px] w-[600px] rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-[350px] w-[500px] rounded-full bg-fuchsia-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-14 text-center sm:px-6 sm:pb-24 sm:pt-20 lg:px-8">
        <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-200 backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {t.heroBadge}
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          {t.heroTitle1}
          <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
            {t.heroTitle2}
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          {t.heroSub}
        </p>

        {/* Search */}
        <div className="mx-auto mt-9 max-w-2xl">
          <div className="group relative">
            <svg
              className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
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
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder={t.searchPh}
              className="w-full rounded-2xl border border-white/10 bg-white/10 py-4 pl-13 pr-28 text-base text-white placeholder-slate-400 shadow-2xl shadow-blue-900/40 backdrop-blur transition focus:border-blue-400/60 focus:bg-white/15 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg bg-blue-600/30 px-3 py-1.5 text-xs font-bold text-blue-100">
              {t.navCategories}
            </span>
          </div>
        </div>

        {/* Quick links */}
        <div className="mx-auto mt-5 flex max-w-3xl flex-wrap items-center justify-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{t.popular}</span>
          {t.quick.map((label) => (
            <button
              key={label}
              onClick={() => onQuickSearch(quickMap[label] ?? label.toLowerCase())}
              className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-200 transition hover:border-blue-400/50 hover:bg-blue-500/20 hover:text-white"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur">
              <div className="text-2xl font-extrabold text-white sm:text-3xl">{s.value}</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
