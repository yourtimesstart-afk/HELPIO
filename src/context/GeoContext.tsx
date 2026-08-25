import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { COUNTRY_TO_ID, detectCountryFromDevice, detectCountryFromIp } from "../lib/geolocation";

const AUTO_COUNTRY_KEY = "helpio-country-auto";
const MANUAL_COUNTRY_KEY = "helpio-country-manual";
const LEGACY_COUNTRY_KEY = "helpio-country";

interface GeoContextValue {
  /** Currently selected country desk ID (auto-detected or user-picked). */
  countryId: string;
  /** ISO country code detected from device/IP (e.g. "FR"). */
  detectedCode: string | null;
  /** True once detection has finished (success or failure). */
  geoDone: boolean;
  /** True if the user explicitly chose a country (not auto-detected). */
  isManual: boolean;
  /** Whether the "we detected your location" notice should show. */
  noticeVisible: boolean;
  /** Select a country (marks as manual choice, persists). */
  setCountryId: (id: string) => void;
  /** Hide the detection notice. */
  dismissNotice: () => void;
  /** Forget the saved country so detection can run again. */
  resetDetection: () => void;
}

const GeoContext = createContext<GeoContextValue | null>(null);

export function GeoProvider({ children }: { children: ReactNode }) {
  const [countryId, setCountryIdState] = useState<string>(() => {
    try {
      const manual = localStorage.getItem(MANUAL_COUNTRY_KEY);
      if (manual) return manual;
      const auto = localStorage.getItem(AUTO_COUNTRY_KEY);
      if (auto) return auto;
    } catch { /* ignore */ }
    const deviceCode = detectCountryFromDevice();
    if (deviceCode && COUNTRY_TO_ID[deviceCode]) return COUNTRY_TO_ID[deviceCode];
    return "us";
  });
  const [isManual, setIsManual] = useState<boolean>(() => {
    try { return !!localStorage.getItem(MANUAL_COUNTRY_KEY); } catch { return false; }
  });
  const [detectedCode, setDetectedCode] = useState<string | null>(null);
  const [geoDone, setGeoDone] = useState(false);
  const [noticeVisible, setNoticeVisible] = useState(false);
  const ranRef = useRef(false);

  const applyCountry = (code: string, showNotice: boolean) => {
    const id = COUNTRY_TO_ID[code];
    if (!id) return false;
    setDetectedCode(code);
    setCountryIdState(id);
    try { localStorage.setItem(AUTO_COUNTRY_KEY, id); } catch { /* ignore */ }
    if (showNotice) {
      setNoticeVisible(true);
      setTimeout(() => setNoticeVisible(false), 12000);
    }
    return true;
  };

  // Auto-detect the visitor's home country ONCE on first open.
  useEffect(() => {
    if (ranRef.current) return;
    ranRef.current = true;

    // If the user already has a saved country choice, respect it — no detection.
    if (isManual) {
      setGeoDone(true);
      return;
    }

    // Remove the old mixed auto/manual key so legacy values don't block redetection.
    try { localStorage.removeItem(LEGACY_COUNTRY_KEY); } catch { /* ignore */ }

    let cancelled = false;

    // Phase 1 — instant device signal (locale region / timezone) for first paint.
    const deviceCode = detectCountryFromDevice();
    if (deviceCode) {
      applyCountry(deviceCode, true);
    }

    // Phase 2 — IP lookup (authoritative "home country"), refines the device result.
    (async () => {
      const ipCode = await detectCountryFromIp();
      if (cancelled) return;

      if (ipCode && ipCode !== deviceCode) {
        applyCountry(ipCode, !deviceCode); // show notice only if device gave nothing
      } else if (!deviceCode && ipCode) {
        applyCountry(ipCode, true);
      }
      setGeoDone(true);
    })();

    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setCountryId = (id: string) => {
    setCountryIdState(id);
    setIsManual(true);
    setNoticeVisible(false);
    try { localStorage.setItem(MANUAL_COUNTRY_KEY, id); } catch { /* ignore */ }
  };

  const value = useMemo<GeoContextValue>(
    () => ({
      countryId,
      detectedCode,
      geoDone,
      isManual,
      noticeVisible,
      setCountryId,
      dismissNotice: () => setNoticeVisible(false),
      resetDetection: () => {
        try {
          localStorage.removeItem(MANUAL_COUNTRY_KEY);
          localStorage.removeItem(AUTO_COUNTRY_KEY);
          localStorage.removeItem(LEGACY_COUNTRY_KEY);
        } catch { /* ignore */ }
        setIsManual(false);
        setNoticeVisible(false);
      },
    }),
    [countryId, detectedCode, geoDone, isManual, noticeVisible]
  );

  return <GeoContext.Provider value={value}>{children}</GeoContext.Provider>;
}

export function useGeo() {
  const ctx = useContext(GeoContext);
  if (!ctx) throw new Error("useGeo must be used within GeoProvider");
  return ctx;
}
