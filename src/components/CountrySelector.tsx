import { useEffect, useMemo, useState } from "react";
import { COUNTRIES } from "../data/countries";
import { useLanguage } from "../context/LanguageContext";
import { useGeo } from "../context/GeoContext";

interface Props {
  open: boolean;
  currentId: string;
  onClose: () => void;
  onSelect: (id: string) => void;
}

export default function CountrySelector({ open, currentId, onClose, onSelect }: Props) {
  const { t } = useLanguage();
  const { detectedCode } = useGeo();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (open) setQuery("");
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q
      ? COUNTRIES.filter((c) => c.name.toLowerCase().includes(q) || c.id.toLowerCase().includes(q))
      : COUNTRIES;
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-slate-950/70 p-4 backdrop-blur-sm sm:items-center">
      <div className="my-8 w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <div>
            <h3 className="text-lg font-extrabold text-slate-900">{t.selectCountry}</h3>
            <p className="text-xs text-slate-500">
              {t.coverage}: {COUNTRIES.length} · {t.exploreSub}
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200"
            aria-label="Close"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Search */}
        <div className="px-6 py-4">
          <div className="relative">
            <svg
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.countrySearch}
              className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* Detected country highlight */}
        {detectedCode && (
          <div className="mx-6 mb-2 rounded-xl bg-blue-50 px-4 py-2.5 text-xs font-semibold text-blue-700">
            📍 {t.coverage} — {detectedCode}
          </div>
        )}

        {/* List */}
        <div className="max-h-[50vh] overflow-y-auto px-3 pb-4">
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
            {filtered.map((c) => {
              const active = c.id === currentId;
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    onSelect(c.id);
                    onClose();
                  }}
                  className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-left text-sm font-bold transition ${
                    active
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                      : "text-slate-700 hover:bg-blue-50"
                  }`}
                >
                  <span className="inline-flex items-center gap-2.5">
                    <span className="text-xl">{c.flag}</span>
                    {c.name}
                  </span>
                  {active && (
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
          {filtered.length === 0 && (
            <p className="p-8 text-center text-sm text-slate-400">{t.noResTitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}
