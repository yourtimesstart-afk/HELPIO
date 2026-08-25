import { useMemo, useState } from "react";
import type { Country, CountryHelpline, HelplineCat } from "../data/countries";
import { useLanguage } from "../context/LanguageContext";

interface Props {
  country: Country;
  onBackToUs: () => void;
}

const CAT_ORDER: HelplineCat[] = [
  "emergency", "police", "ambulance", "fire",
  "mental", "women", "child",
  "cyber", "railway", "disaster",
  "addiction", "health", "general",
];

/** Normalize legacy category names to the new canonical set. */
function normCat(c: HelplineCat): string {
  switch (c) {
    case "crisis": return "mental";
    case "domestic": return "women";
    case "children": return "child";
    default: return c;
  }
}

function catKey(c: string, t: (typeof import("../i18n/translations"))["en"]) {
  switch (c) {
    case "emergency": return t.catEmergency;
    case "police": return t.catPolice ?? "Police";
    case "ambulance": return t.catAmbulance ?? "Ambulance";
    case "fire": return t.catFire ?? "Fire & Rescue";
    case "mental": return t.catCrisis;
    case "women": return t.catDomestic;
    case "child": return t.catChildren;
    case "cyber": return t.catCyber ?? "Cyber Crime";
    case "railway": return t.catRailway ?? "Railway Helpline";
    case "disaster": return t.catDisaster ?? "Disaster Management";
    case "addiction": return t.catAddiction;
    case "health": return t.catHealth;
    case "general": return t.catGeneral;
    default: return c;
  }
}

function DeskCard({ h }: { h: CountryHelpline }) {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/10">
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-base font-extrabold leading-snug text-slate-900">{h.name}</h4>
        <div className="flex shrink-0 flex-col items-end gap-1">
          {h.isUrgent && (
            <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-red-600 ring-1 ring-red-200">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
              {t.hour247}
            </span>
          )}
          {h.isFree && (
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-600 ring-1 ring-emerald-200">
              {t.free}
            </span>
          )}
        </div>
      </div>
      {h.org && <p className="mt-0.5 text-xs font-semibold text-slate-400">{h.org}</p>}
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{h.description}</p>

      <div className="mt-4 grid grid-cols-1 gap-2">
        {h.phone && (
          <a
            href={`tel:${h.phone.replace(/[^+\d]/g, "")}`}
            className="group flex items-center justify-between gap-2 rounded-xl bg-blue-600 px-4 py-3 text-white shadow-md shadow-blue-600/25 transition hover:bg-blue-700"
          >
            <span className="flex items-center gap-2 text-sm font-extrabold">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {t.call}: {h.phone}
            </span>
            <svg className="h-4 w-4 opacity-70 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        )}
        <div className="grid grid-cols-2 gap-2">
          {h.text && (
            <a href={`sms:${h.text.replace(/[^+\d]/g, "")}`} className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700">
              💬 {t.text}: {h.text}
            </a>
          )}
          {h.email && (
            <a href={`mailto:${h.email}`} className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700">
              ✉️ {t.email}
            </a>
          )}
          {h.website && (
            <a href={h.website} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 ${h.text || h.email ? "" : "col-span-2"}`}>
              🌐 {t.website}
            </a>
          )}
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 border-t border-slate-100 pt-3 text-[11px] font-medium text-slate-500">
        <svg className="h-3.5 w-3.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
        {h.hours}
        {h.languages && h.languages.length > 0 && (
          <span className="truncate text-slate-400">· {h.languages.join(" • ")}</span>
        )}
      </div>
    </div>
  );
}

export default function CountryDesk({ country, onBackToUs }: Props) {
  const { t } = useLanguage();
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();

  const groups = useMemo(() => {
    const byCat: Record<string, CountryHelpline[]> = {};
    country.helplines.forEach((h) => {
      if (q && !(h.name + " " + h.description + " " + (h.org ?? "")).toLowerCase().includes(q)) return;
      const norm = normCat(h.cat);
      (byCat[norm] = byCat[norm] || []).push(h);
    });
    return CAT_ORDER.filter((c) => byCat[c]).map((c) => ({ cat: c, items: byCat[c] }));
  }, [country, q]);

  const total = groups.reduce((s, g) => s + g.items.length, 0);

  return (
    <main id="country-desk" className="scroll-mt-32">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Country hero */}
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-700 text-white shadow-xl shadow-indigo-900/20">
          <div className="relative p-8 sm:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-white/15 text-5xl backdrop-blur">
                {country.flag}
              </span>
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-200">
                  {t.helplinesIn} · {country.name}
                </p>
                <h1 className="mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  {country.name} Helplines
                </h1>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-blue-100">
                  Verified emergency numbers and support lines for {country.name}. Free, confidential help — call, text or chat.
                </p>
              </div>
              <button
                onClick={onBackToUs}
                className="shrink-0 self-start rounded-xl border border-white/25 bg-white/10 px-4 py-2.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20 sm:self-center"
              >
                ← {t.backToUs}
              </button>
            </div>

            {/* Emergency numbers */}
            {country.emergency.length > 0 && (
              <div className="mt-7">
                <p className="mb-2.5 text-xs font-bold uppercase tracking-widest text-blue-200">
                  🚨 {t.emergencyNumbers}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {country.emergency.map((e) => (
                    <a
                      key={e.label}
                      href={e.href}
                      className="group inline-flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 text-slate-900 shadow-lg transition hover:-translate-y-0.5"
                    >
                      <span className="text-2xl font-extrabold tracking-tight">{e.number}</span>
                      <span className="text-left">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">{t.dial}</span>
                        <span className="block text-xs font-bold">{e.label}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Search within country */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-extrabold tracking-tight text-slate-900">
            {t.helplinesIn} {country.name}
            <span className="ml-2 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-bold text-blue-600 ring-1 ring-blue-100">
              {total} {t.lines}
            </span>
          </h2>
          <div className="relative w-full sm:w-72">
            <svg className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.searchPh}
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* Grouped helplines */}
        {groups.length === 0 ? (
          <div className="mx-auto mt-10 max-w-md rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-3xl">🔍</div>
            <h3 className="mt-4 text-lg font-extrabold text-slate-900">{t.noCountryRes}</h3>
          </div>
        ) : (
          <div className="mt-8 space-y-12">
            {groups.map((g) => (
              <section key={g.cat}>
                <div className="mb-4 flex items-center gap-3">
                  <h3 className="text-lg font-extrabold text-slate-900">{catKey(g.cat, t)}</h3>
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-bold text-slate-500">
                    {g.items.length}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {g.items.map((h) => (
                    <DeskCard key={h.id} h={h} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
