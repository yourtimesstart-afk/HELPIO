import type { Country } from "../data/countries";
import { useLanguage } from "../context/LanguageContext";

interface Props {
  country: Country;
}

export default function QuickDial({ country }: Props) {
  const { t } = useLanguage();

  const isUs = country.id === "us";

  // US: showcase the 4 most important national lines
  const usLines = [
    { number: "911", label: "Emergency", sub: "Police • Fire • Medical", href: "tel:911", cls: "from-red-500 to-rose-600 shadow-red-600/30", urgent: true },
    { number: "988", label: "Suicide & Crisis", sub: "Call or text, 24/7", href: "tel:988", cls: "from-indigo-500 to-violet-600 shadow-indigo-600/30", urgent: true },
    { number: "741741", label: "Crisis Text Line", sub: "Text HOME, 24/7", href: "sms:741741", cls: "from-teal-500 to-emerald-600 shadow-teal-600/30" },
    { number: "1-800-222-1222", label: "Poison Control", sub: "24/7 expert help", href: "tel:18002221222", cls: "from-orange-500 to-amber-600 shadow-orange-600/30" },
  ];

  // Other countries: emergency numbers + top crisis line
  const otherLines = [
    ...country.emergency.slice(0, 3).map((e) => ({
      number: e.number,
      label: e.label,
      sub: `${t.emergencyNumbers} · ${country.name}`,
      href: e.href,
      cls: "from-red-500 to-rose-600 shadow-red-600/30",
      urgent: true,
    })),
    ...country.helplines
      .filter((h) => h.cat === "crisis" && h.phone)
      .slice(0, 1)
      .map((h) => ({
        number: h.phone!,
        label: h.name,
        sub: t.quickDialSub,
        href: `tel:${h.phone!.replace(/[^+\d]/g, "")}`,
        cls: "from-indigo-500 to-violet-600 shadow-indigo-600/30",
        urgent: !!h.isUrgent,
      })),
  ].slice(0, 4);

  const lines = isUs ? usLines : otherLines;

  return (
    <div className="relative z-10 mx-auto -mt-8 max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-900/10 sm:p-6">
        <div className="mb-4 flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <h2 className="text-sm font-extrabold uppercase tracking-widest text-slate-800">
            {t.quickDialTitle} {isUs ? "" : `· ${country.flag} ${country.name}`}
          </h2>
          <span className="hidden text-xs text-slate-400 sm:inline">— {t.quickDialSub}</span>
        </div>
        <div className={`grid grid-cols-2 gap-3 ${lines.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {lines.map((l) => (
            <a
              key={l.number}
              href={l.href}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br p-4 text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl ${l.cls}`}
            >
              {l.urgent && (
                <span className="absolute right-2.5 top-2.5 rounded-full bg-white/25 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide">
                  24/7
                </span>
              )}
              <div className="text-xl font-extrabold tracking-tight drop-shadow-sm sm:text-2xl">{l.number}</div>
              <div className="mt-1 text-sm font-bold leading-snug">{l.label}</div>
              <div className="mt-0.5 text-xs font-medium text-white/85">{l.sub}</div>
              <div className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-white/90 opacity-0 transition group-hover:opacity-100">
                {t.dial} →
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
