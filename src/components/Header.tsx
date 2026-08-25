import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import CountrySelector from "./CountrySelector";
import { getCountry } from "../data/countries";

interface Props {
  route: string;
  countryId: string;
  pickerOpen: boolean;
  onOpenPicker: () => void;
  onClosePicker: () => void;
  onNavigate: (route: string) => void;
  onSelectCountry: (id: string) => void;
}

export default function Header({
  route,
  countryId,
  pickerOpen,
  onOpenPicker,
  onClosePicker,
  onNavigate,
  onSelectCountry,
}: Props) {
  const { t } = useLanguage();
  const country = getCountry(countryId);

  const go = (target: string) => {
    if (target.startsWith("#/")) {
      onNavigate(target.slice(2));
      return;
    }
    const id = target.slice(1);
    if (route !== "home") {
      onNavigate("");
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 60);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Emergency strip — shows current country's emergency number */}
      <div className="bg-red-600 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-1 px-4 py-2 text-center sm:flex-row sm:gap-2">
          <span className="inline-flex items-center gap-1.5 text-sm font-bold">
            <svg className="h-4 w-4 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.4 7.2H22l-6 4.4 2.3 7.2-6.3-4.6-6.3 4.6L8 13.6 2 9.2h7.6z" />
            </svg>
            {country.id === "us" ? t.emergency : `${t.emergencyNumbers} · ${country.name}`}
          </span>
          <span className="hidden text-red-200 sm:inline">•</span>
          <span className="text-sm text-red-100">
            <a href={country.emergency[0]?.href ?? "tel:911"} className="font-extrabold underline decoration-red-300 underline-offset-2">
              {country.emergency[0]?.number ?? "911"}
            </a>{" "}
            — {t.helpNow}
          </span>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <button onClick={() => go("#/")} className="flex items-center gap-2.5 text-left">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-lg shadow-blue-600/25">
              <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-extrabold tracking-tight text-slate-900">
                Help<span className="text-blue-600">io</span>
              </span>
              <span className="block text-[11px] font-medium uppercase tracking-widest text-slate-400">
                {t.tagline}
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 lg:flex">
            <button onClick={() => go("#categories")} className="transition hover:text-blue-600">{t.navCategories}</button>
            <button onClick={() => go("#countries")} className="transition hover:text-blue-600">{t.navCountries}</button>
            <button onClick={() => go("#/about")} className="transition hover:text-blue-600">{t.navAbout}</button>
            <button onClick={() => go("#/contact")} className="transition hover:text-blue-600">{t.navContact}</button>
          </nav>

          <div className="flex items-center gap-2">
            {/* Country selector */}
            <button
              onClick={onOpenPicker}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
            >
              <span className="text-base">{country.flag}</span>
              <span className="hidden max-w-[90px] truncate md:inline">{country.name}</span>
              <svg className="h-3.5 w-3.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <LanguageSwitcher />

            <a
              href={country.emergency[0]?.href ?? "tel:911"}
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-3.5 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-600/25 transition hover:bg-red-700 sm:px-4"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {country.emergency[0]?.number ?? "911"}
            </a>
          </div>
        </div>

        {/* Mobile nav */}
        <div className="flex items-center gap-1 overflow-x-auto border-t border-slate-100 px-3 py-2 lg:hidden">
          {[
            { label: t.navCategories, target: "#categories" },
            { label: t.navCountries, target: "#countries" },
            { label: t.navAbout, target: "#/about" },
            { label: t.navContact, target: "#/contact" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => go(item.target)}
              className="shrink-0 rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-bold text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>

      <CountrySelector
        open={pickerOpen}
        currentId={countryId}
        onClose={onClosePicker}
        onSelect={onSelectCountry}
      />
    </>
  );
}
