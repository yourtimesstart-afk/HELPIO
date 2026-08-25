import { useGeo } from "../context/GeoContext";
import { useLanguage } from "../context/LanguageContext";
import { COUNTRY_TO_ID } from "../lib/geolocation";
import { getCountry } from "../data/countries";

interface Props {
  onOpenPicker: () => void;
}

/**
 * Slim banner shown once after geo-detection resolves, telling the visitor
 * which home country we detected and that we're showing its local helplines.
 */
export default function GeoNotice({ onOpenPicker }: Props) {
  const { noticeVisible, detectedCode, dismissNotice } = useGeo();
  const { t } = useLanguage();

  if (!noticeVisible || !detectedCode) return null;

  const id = COUNTRY_TO_ID[detectedCode] ?? "us";
  const country = getCountry(id);

  return (
    <div className="border-b border-blue-100 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />
        </span>
        <div className="flex min-w-0 flex-1 items-center gap-2.5">
          <span className="text-xl sm:text-2xl">{country.flag}</span>
          <p className="min-w-0 truncate text-sm font-bold text-slate-800">
            {t.coverage} · {country.name}
            <span className="ml-2 hidden font-medium text-slate-500 sm:inline">
              — {t.exploreSub}
            </span>
          </p>
        </div>
        <button
          onClick={onOpenPicker}
          className="shrink-0 rounded-lg border border-blue-200 bg-white px-3 py-1.5 text-xs font-bold text-blue-700 shadow-sm transition hover:bg-blue-50"
        >
          {t.navCountries}
        </button>
        <button
          onClick={dismissNotice}
          aria-label="Dismiss"
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-200/60 hover:text-slate-600"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
