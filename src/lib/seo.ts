import { categories, type Helpline } from "../data/helplines";
import { COUNTRIES } from "../data/countries";
import type { T } from "../i18n/translations";

/** Canonical deployed domain. */
export const SITE_URL = "https://www.helpio.online";
export const SITE_NAME = "Helpio";
export const PUBLISHER = "Cropzeq Technologies";
export const PUBLISHER_EMAIL = "yourtimesstart@gmail.com";
export const PUBLISHER_NAME = "Mr. Mukeshkumar Parmar";

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Helpio — free global helpline directory. Verified emergency numbers and support lines in 50+ countries: mental health, domestic violence, addiction, veterans, LGBTQ+, seniors and more. Call, text, chat or email. Free & confidential.",
    inLanguage: ["en", "es", "hi", "fr", "gu", "de", "pt", "ar", "nl", "it", "ru", "zh", "ja", "ko", "tr"],
    publisher: buildOrganizationSchema(),
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: PUBLISHER,
    url: SITE_URL,
    email: PUBLISHER_EMAIL,
    founder: { "@type": "Person", name: PUBLISHER_NAME },
    publisher: { "@type": "Organization", name: PUBLISHER },
    description: "Publisher of Helpio — a free public-service directory of verified global helplines.",
  };
}

export function buildFaqSchema(t: T) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqQ.map((q, i) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: t.faqA[i] },
    })),
  };
}

export function buildHelplinesItemList() {
  const items: Helpline[] = categories.flatMap((c) => c.helplines);
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Verified U.S. Helplines",
    numberOfItems: items.length,
    itemListElement: items.map((h, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: h.name,
        description: h.description,
        provider: { "@type": "Organization", name: h.org },
        ...(h.phone ? { telephone: h.phone } : {}),
        ...(h.email ? { email: h.email } : {}),
        ...(h.website ? { url: h.website } : {}),
        areaServed: "US",
      },
    })),
  };
}

export function buildCountrySchema(countryId: string) {
  const c = COUNTRIES.find((x) => x.id === countryId);
  if (!c) return null;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${c.name} Helplines & Emergency Numbers`,
    description: `Verified emergency numbers and support helplines in ${c.name}.`,
    numberOfItems: c.helplines.length,
    itemListElement: c.helplines.map((h, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: h.name,
        description: h.description,
        ...(h.org ? { provider: { "@type": "Organization", name: h.org } } : {}),
        ...(h.phone ? { telephone: h.phone } : {}),
        ...(h.email ? { email: h.email } : {}),
        ...(h.website ? { url: h.website } : {}),
        areaServed: c.name,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
