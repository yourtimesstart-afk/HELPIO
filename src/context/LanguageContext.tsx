import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { langNames, translations, type Lang } from "../i18n/translations";

const STORAGE_KEY = "helpio-lang";

const SUPPORTED: Lang[] = ["en", "es", "hi", "fr", "gu", "de", "pt", "ar", "nl", "it", "ru", "zh", "ja", "ko", "tr"];

// Map browser language codes → supported UI language (device detection first!)
const BROWSER_LANG: Record<string, Lang> = {
  en: "en", "en-us": "en", "en-gb": "en", "en-au": "en", "en-ca": "en",
  es: "es", "es-mx": "es", "es-es": "es", "es-419": "es",
  hi: "hi", "hi-in": "hi",
  fr: "fr", "fr-fr": "fr", "fr-ca": "fr", "fr-be": "fr", "fr-ch": "fr",
  gu: "gu", "gu-in": "gu",
  de: "de", "de-de": "de", "de-at": "de", "de-ch": "de",
  pt: "pt", "pt-br": "pt", "pt-pt": "pt",
  ar: "ar", "ar-sa": "ar", "ar-ae": "ar", "ar-eg": "ar",
  nl: "nl", "nl-nl": "nl", "nl-be": "nl",
  it: "it", "it-it": "it", "it-ch": "it",
  ru: "ru", "ru-ru": "ru",
  zh: "zh", "zh-cn": "zh", "zh-hans": "zh", "zh-hant": "zh", "zh-tw": "zh", "zh-hk": "zh",
  ja: "ja", "ja-jp": "ja",
  ko: "ko", "ko-kr": "ko",
  tr: "tr", "tr-tr": "tr",
};

function isLang(v: string | null): v is Lang {
  return !!v && (SUPPORTED as string[]).includes(v);
}

function detectDeviceLang(): Lang {
  // 1) Saved user preference
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) return saved;
  } catch { /* ignore */ }
  // 2) Device language (navigator.language) — per requirement: detect & show device language
  try {
    const full = (navigator.language || "en").toLowerCase();
    if (isLang(full)) return full;
    if (BROWSER_LANG[full]) return BROWSER_LANG[full];
    const short = full.slice(0, 2);
    if (isLang(short)) return short;
    if (BROWSER_LANG[short]) return BROWSER_LANG[short];
  } catch { /* ignore */ }
  return "en";
}

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof translations)["en"];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectDeviceLang);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch { /* ignore */ }
    document.documentElement.lang = l;
  };

  // Sync <html lang> for accessibility + SEO signals
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LanguageContextValue>(() => ({ lang, setLang, t: translations[lang] }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export { BROWSER_LANG, langNames, SUPPORTED };
