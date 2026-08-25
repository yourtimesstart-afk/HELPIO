import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { langFlags, langNames, translations, type Lang } from "../i18n/translations";

const LANGS = Object.keys(translations) as Lang[];

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={t.lang}
        className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
      >
        <svg className="h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        {!compact && (
          <span className="hidden sm:inline">
            {langFlags[lang]} {langNames[lang]}
          </span>
        )}
        {compact && <span>{langFlags[lang]}</span>}
        <svg className={`h-3.5 w-3.5 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-2xl border border-slate-200 bg-white py-1.5 shadow-2xl shadow-slate-900/15">
          <p className="px-4 pb-1.5 pt-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            {t.lang}
          </p>
          {LANGS.map((l) => (
            <button
              key={l}
              onClick={() => {
                setLang(l);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between px-4 py-2.5 text-sm font-semibold transition ${
                l === lang ? "bg-blue-50 text-blue-600" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <span>{langFlags[l]}</span>
                {langNames[l]}
              </span>
              {l === lang && (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
