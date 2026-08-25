/**
 * Geolocation detection utilities for Helpio.
 *
 * Detection priority (when no saved user preference exists):
 *   1. IP address geo-lookup (most accurate "home country") — async with fallbacks
 *   2. Device locale / timezone (instant, no network)
 *
 * The device signal is used immediately for first paint; the IP result then
 * refines/overrides it as the authoritative "home country" signal.
 */

/** Maps ISO-3166 country codes → Helpio country desk IDs. */
export const COUNTRY_TO_ID: Record<string, string> = {
  // Americas
  US: "us", CA: "ca", MX: "mx", BR: "br", CO: "co", CL: "cl", GL: "gl",
  // Europe
  GB: "gb", DE: "de", FR: "fr", NL: "nl", BE: "be", CH: "ch", AT: "at",
  ES: "es", IT: "it", IE: "ie", SE: "se", NO: "no", DK: "dk", FI: "fi",
  LU: "lu", PL: "pl", RO: "ro", MD: "md", UA: "ua", BY: "by", TR: "tr",
  RU: "ru",
  // Asia-Pacific
  AU: "au", NZ: "nz", SG: "sg", MY: "my", ID: "id", PH: "ph", JP: "jp",
  KR: "kr", CN: "cn", HK: "hk", VN: "vn", IN: "in", TH: "th", FJ: "fj",
  // Middle East & Africa
  AE: "ae", SA: "sa", QA: "qa", KW: "kw", BH: "bh", YE: "ye", OM: "om",
  IL: "il", EG: "eg", ZA: "za",
};

/** Maps ISO country codes → best UI language for that country. */
export const COUNTRY_LANG: Record<string, string> = {
  // English-speaking
  US: "en", GB: "en", AU: "en", CA: "en", NZ: "en", IE: "en", ZA: "en",
  NG: "en", GH: "en", KE: "en", PH: "en", SG: "en", MY: "en", JM: "en",
  FJ: "en", GL: "en",
  // Spanish-speaking
  MX: "es", ES: "es", AR: "es", CO: "es", PE: "es", VE: "es", CL: "es",
  EC: "es", GT: "es", CU: "es", BO: "es", DO: "es", HN: "es", PY: "es",
  SV: "es", NI: "es", CR: "es", PA: "es", UY: "es", PR: "es",
  // French-speaking
  FR: "fr", BE: "fr", MC: "fr", LU: "fr", CH: "fr", SN: "fr", CI: "fr",
  MA: "fr", DZ: "fr", TN: "fr", CM: "fr", ML: "fr", BF: "fr", NE: "fr",
  GA: "fr", BJ: "fr", CD: "fr", HT: "fr", MG: "fr", RW: "fr",
  // Hindi / India
  IN: "hi", NP: "hi",
  // German
  DE: "de", AT: "de",
  // Portuguese
  BR: "pt", PT: "pt", AO: "pt", MZ: "pt",
  // Arabic
  SA: "ar", AE: "ar", QA: "ar", KW: "ar", BH: "ar", YE: "ar", OM: "ar",
  EG: "ar", IQ: "ar", JO: "ar", LB: "ar", SY: "ar", LY: "ar", SD: "ar",
  // Dutch / Italian / Russian
  NL: "nl", IT: "it", RU: "ru", BY: "ru", KZ: "ru", UZ: "ru",
  // CJK
  CN: "zh", HK: "zh", TW: "zh", JP: "ja", KR: "ko", TR: "tr",
};

/** Maps IANA timezones → ISO country codes (device fallback). */
const TZ_TO_COUNTRY: Record<string, string> = {
  // North America
  "America/New_York": "US", "America/Chicago": "US", "America/Denver": "US",
  "America/Los_Angeles": "US", "America/Phoenix": "US", "America/Anchorage": "US",
  "America/Juneau": "US", "America/Detroit": "US", "America/Indiana/Indianapolis": "US",
  "America/Toronto": "CA", "America/Vancouver": "CA", "America/Montreal": "CA",
  "America/Edmonton": "CA", "America/Winnipeg": "CA", "America/Halifax": "CA",
  "America/Mexico_City": "MX", "America/Sao_Paulo": "BR", "America/Rio_Branco": "BR",
  "America/Bogota": "CO", "America/Santiago": "CL", "America/Nuuk": "GL",
  "America/Godthab": "GL",
  // Europe
  "Europe/London": "GB", "Europe/Edinburgh": "GB", "Europe/Belfast": "GB",
  "Europe/Berlin": "DE", "Europe/Frankfurt": "DE", "Europe/Munich": "DE",
  "Europe/Busingen": "DE", "Europe/Paris": "FR", "Europe/Strasbourg": "FR",
  "Europe/Amsterdam": "NL", "Europe/Brussels": "BE", "Europe/Zurich": "CH",
  "Europe/Vienna": "AT", "Europe/Madrid": "ES", "Europe/Barcelona": "ES",
  "Europe/Rome": "IT", "Europe/Milan": "IT", "Europe/Dublin": "IE",
  "Europe/Stockholm": "SE", "Europe/Oslo": "NO", "Europe/Copenhagen": "DK",
  "Europe/Helsinki": "FI", "Europe/Luxembourg": "LU", "Europe/Warsaw": "PL",
  "Europe/Bucharest": "RO", "Europe/Chisinau": "MD", "Europe/Kyiv": "UA",
  "Europe/Kiev": "UA", "Europe/Minsk": "BY", "Europe/Istanbul": "TR",
  "Europe/Moscow": "RU", "Europe/Kaliningrad": "RU", "Europe/Samara": "RU",
  // Asia-Pacific
  "Asia/Tokyo": "JP", "Asia/Seoul": "KR", "Asia/Shanghai": "CN",
  "Asia/Hong_Kong": "HK", "Asia/Singapore": "SG", "Asia/Kuala_Lumpur": "MY",
  "Asia/Jakarta": "ID", "Asia/Makassar": "ID", "Asia/Manila": "PH",
  "Asia/Ho_Chi_Minh": "VN", "Asia/Bangkok": "TH", "Asia/Kolkata": "IN",
  "Asia/Calcutta": "IN", "Asia/Dubai": "AE", "Asia/Riyadh": "SA",
  "Asia/Qatar": "QA", "Asia/Kuwait": "KW", "Asia/Bahrain": "BH",
  "Asia/Aden": "YE", "Asia/Muscat": "OM", "Asia/Jerusalem": "IL",
  "Asia/Cairo": "EG", "Asia/Tehran": "IR",
  // Africa
  "Africa/Johannesburg": "ZA", "Africa/Cairo": "EG", "Africa/Lagos": "NG",
  "Africa/Nairobi": "KE", "Africa/Accra": "GH",
  // Oceania
  "Australia/Sydney": "AU", "Australia/Melbourne": "AU", "Australia/Brisbane": "AU",
  "Australia/Perth": "AU", "Australia/Adelaide": "AU", "Australia/Darwin": "AU",
  "Pacific/Auckland": "NZ", "Pacific/Fiji": "FJ",
};

/** Fallback: Europe/<City> timezones → country for well-known cities. */
const EUROPE_CITY_TO_COUNTRY: Record<string, string> = {
  London: "GB", Berlin: "DE", Paris: "FR", Amsterdam: "NL", Brussels: "BE",
  Zurich: "CH", Vienna: "AT", Madrid: "ES", Rome: "IT", Dublin: "IE",
  Stockholm: "SE", Oslo: "NO", Copenhagen: "DK", Helsinki: "FI",
  Luxembourg: "LU", Warsaw: "PL", Bucharest: "RO", Chisinau: "MD",
  Kyiv: "UA", Kiev: "UA", Minsk: "BY", Istanbul: "TR", Moscow: "RU",
  Lisbon: "PT", Prague: "CZ", Budapest: "HU", Athens: "GR", Reykjavik: "IS",
  Sofia: "BG", Zagreb: "HR", Belgrade: "RS", Bratislava: "SK",
};

/** Instant, network-free detection from the device (locale region → timezone). */
export function detectCountryFromDevice(): string | null {
  // 1) Full locale tag region: "en-US" → US, "pt-BR" → BR, "fr-FR" → FR
  try {
    const lang = navigator.language || "";
    const parts = lang.split("-");
    if (parts.length >= 2 && /^[A-Za-z]{2}$/.test(parts[1])) {
      const code = parts[1].toUpperCase();
      if (COUNTRY_TO_ID[code]) return code;
    }
  } catch { /* ignore */ }

  // 2) Intl.Locale region API (more robust)
  try {
    const locale = new Intl.Locale(navigator.language || "en");
    const region = locale.region;
    if (region && COUNTRY_TO_ID[region]) return region;
  } catch { /* ignore */ }

  // 3) Timezone → country
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (!tz) return null;
    if (TZ_TO_COUNTRY[tz]) return TZ_TO_COUNTRY[tz];
    const parts = tz.split("/");
    if (parts.length >= 2 && parts[0] === "Europe") {
      const city = parts[1];
      if (EUROPE_CITY_TO_COUNTRY[city]) return EUROPE_CITY_TO_COUNTRY[city];
    }
  } catch { /* ignore */ }

  return null;
}

/** IP-based detection with multiple free services as fallbacks. */
export async function detectCountryFromIp(): Promise<string | null> {
  const services: { url: string; parse: (d: any) => string | undefined | null }[] = [
    { url: "https://ipapi.co/json/", parse: (d) => d?.country_code },
    { url: "https://ipwho.is/", parse: (d) => d?.country_code },
    { url: "https://ipinfo.io/json", parse: (d) => d?.country },
    { url: "https://api.country.is/", parse: (d) => d?.country },
    { url: "https://geo.geojs.io/v1/ip/geo.json", parse: (d) => d?.country_code },
    { url: "https://ip-api.com/json/", parse: (d) => d?.countryCode },
  ];

  for (const s of services) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 4500);
      const res = await fetch(s.url, { signal: controller.signal });
      clearTimeout(timeout);
      if (!res.ok) continue;
      const data = await res.json();
      const code = s.parse(data);
      if (code && COUNTRY_TO_ID[code]) return code.toUpperCase();
    } catch {
      /* try next service */
    }
  }
  return null;
}

/** Combined detection: device immediately, then IP refinement. */
export async function detectHomeCountry(): Promise<{ device: string | null; ip: string | null; best: string | null }> {
  const device = detectCountryFromDevice();
  const ip = await detectCountryFromIp();
  // IP (physical location) is the authoritative "home country"; device is the fallback.
  const best = ip || device;
  return { device, ip, best };
}
