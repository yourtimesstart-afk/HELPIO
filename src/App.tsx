import { useEffect, useMemo, useState } from "react";
import { categories, totalHelplines } from "./data/helplines";
import { getCountry } from "./data/countries";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { GeoProvider, useGeo } from "./context/GeoContext";
import Header from "./components/Header";
import GeoNotice from "./components/GeoNotice";
import Hero from "./components/Hero";
import QuickDial from "./components/QuickDial";
import CategoryNav from "./components/CategoryNav";
import CategoryOverview from "./components/CategoryOverview";
import CategorySection from "./components/CategorySection";
import ExploreCountries from "./components/ExploreCountries";
import CountryDesk from "./components/CountryDesk";
import FAQ from "./components/FAQ";
import KeywordResearch from "./components/KeywordResearch";
import About from "./components/About";
import Footer from "./components/Footer";
import FloatingUi from "./components/FloatingUi";
import JsonLd from "./components/JsonLd";
import { buildCountrySchema, buildFaqSchema, buildHelplinesItemList, buildOrganizationSchema, buildWebSiteSchema, SITE_NAME } from "./lib/seo";
import AboutPage from "./pages/AboutPage";
import TermsPage from "./pages/TermsPage";
import ContactPage from "./pages/ContactPage";
import DisclaimerPage from "./pages/DisclaimerPage";
import PrivacyPage from "./pages/PrivacyPage";
import CookiesPage from "./pages/CookiesPage";
import SitemapPage from "./pages/SitemapPage";

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash);
  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return hash.startsWith("#/") ? hash.slice(2).replace(/\/$/, "") : "home";
}

function PageFrame({ children, countryId, pickerOpen, onOpenPicker, onClosePicker, onNavigate, onSelectCountry }: {
  children: React.ReactNode;
  countryId: string;
  pickerOpen: boolean;
  onOpenPicker: () => void;
  onClosePicker: () => void;
  onNavigate: (r: string) => void;
  onSelectCountry: (id: string) => void;
}) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased">
      <Header
        route="page"
        countryId={countryId}
        pickerOpen={pickerOpen}
        onOpenPicker={onOpenPicker}
        onClosePicker={onClosePicker}
        onNavigate={onNavigate}
        onSelectCountry={onSelectCountry}
      />
      {children}
      <Footer onNavigate={onNavigate} />
      <FloatingUi route="page" currentUrl={window.location.href} onGoHome={() => onNavigate("")} />
    </div>
  );
}

function Shell() {
  const route = useHashRoute();
  const { t, lang } = useLanguage();
  const { countryId, setCountryId } = useGeo();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [pickerOpen, setPickerOpen] = useState(false);

  const country = getCountry(countryId);

  const navigate = (r: string) => (window.location.hash = r ? `#/${r}` : "#/");

  const selectCountry = (id: string) => {
    setCountryId(id);
    setQuery("");
    setActiveCategory(null);
    setPickerOpen(false);
    // After render, scroll to the desk
    setTimeout(() => {
      if (id !== "us") document.getElementById("country-desk")?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  // Scroll to top on page change
  useEffect(() => {
    if (route !== "home") window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [route]);

  // Dynamic <title> for SEO (per country + language)
  useEffect(() => {
    if (route !== "home") {
      document.title = `${route === "about" ? t.aboutUs : route === "contact" ? t.contactUs : SITE_NAME} | ${SITE_NAME}`;
      return;
    }
    document.title =
      countryId === "us"
        ? `${SITE_NAME} — Global Helpline Directory: Crisis, Suicide & Support Hotlines`
        : `${country.name} Helplines — Emergency Numbers & Support Lines | ${SITE_NAME}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route, countryId, lang]);

  // Meta description per country
  useEffect(() => {
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      countryId === "us"
        ? "Helpio — free global helpline directory. 988 Suicide & Crisis Lifeline, domestic violence, addiction, veterans, LGBTQ+, seniors & more across 50+ countries. Free, confidential, 24/7."
        : `Verified emergency numbers and helplines in ${country.name} — crisis, domestic violence, children, addiction & more. Free & confidential support.`
    );
  }, [countryId, lang, country.name]);

  const normalized = query.trim().toLowerCase();
  const matches = (haystack: string | undefined) => !!haystack && haystack.toLowerCase().includes(normalized);

  const filteredCategories = useMemo(() => {
    if (!normalized && !activeCategory) return categories;
    return categories
      .map((cat) => {
        if (activeCategory && cat.id !== activeCategory) return { ...cat, helplines: [] };
        if (!normalized) return cat;
        return {
          ...cat,
          helplines: cat.helplines.filter(
            (h) =>
              matches(h.name) || matches(h.org) || matches(h.description) || matches(h.phone) ||
              matches(h.text) || matches(h.email) || matches(cat.name) || matches(cat.shortName)
          ),
        };
      })
      .filter((cat) => cat.helplines.length > 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [normalized, activeCategory]);

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    categories.forEach((cat) => {
      c[cat.id] = normalized
        ? cat.helplines.filter(
            (h) =>
              matches(h.name) || matches(h.org) || matches(h.description) || matches(h.phone) ||
              matches(h.text) || matches(h.email) || matches(cat.name) || matches(cat.shortName)
          ).length
        : cat.helplines.length;
    });
    return c;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [normalized]);

  const visibleCount = filteredCategories.reduce((sum, c) => sum + c.helplines.length, 0);

  const handleQuickSearch = (q: string) => {
    setActiveCategory(null);
    setQuery(q);
    document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSelectCategory = (id: string | null) => {
    setActiveCategory(id);
    setQuery("");
  };

  const toggleExpanded = (id: string) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  const handleOverviewNavigate = (id: string) =>
    document.getElementById(`cat-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });

  const goToSection = (id: string) => {
    if (route !== "home") {
      navigate("");
      setTimeout(() => document.getElementById(`cat-${id}`)?.scrollIntoView({ behavior: "smooth" }), 80);
    } else {
      document.getElementById(`cat-${id}`)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openPicker = () => setPickerOpen(true);
  const closePicker = () => setPickerOpen(false);

  // ----- Legal / page routes -----
  const frame = (children: React.ReactNode) => (
    <PageFrame
      countryId={countryId}
      pickerOpen={pickerOpen}
      onOpenPicker={openPicker}
      onClosePicker={closePicker}
      onNavigate={navigate}
      onSelectCountry={selectCountry}
    >
      {children}
    </PageFrame>
  );

  if (route === "about") return frame(<AboutPage />);
  if (route === "terms") return frame(<TermsPage />);
  if (route === "contact") return frame(<ContactPage />);
  if (route === "disclaimer") return frame(<DisclaimerPage />);
  if (route === "privacy") return frame(<PrivacyPage />);
  if (route === "cookies") return frame(<CookiesPage />);
  if (route === "sitemap") return frame(<SitemapPage onNavigate={navigate} onGoToSection={goToSection} />);

  // ----- Home -----
  return (
    <div id="top" className="min-h-screen bg-slate-50 font-sans antialiased">
      {/* Structured data for SEO / AEO / GEO / LLM */}
      <JsonLd id="ld-website" data={buildWebSiteSchema()} />
      <JsonLd id="ld-org" data={buildOrganizationSchema()} />
      <JsonLd id="ld-faq" data={buildFaqSchema(t)} />
      <JsonLd id="ld-list" data={buildHelplinesItemList()} />
      {countryId !== "us" && buildCountrySchema(countryId) && (
        <JsonLd id="ld-country" data={buildCountrySchema(countryId)!} />
      )}

      <Header
        route="home"
        countryId={countryId}
        pickerOpen={pickerOpen}
        onOpenPicker={openPicker}
        onClosePicker={closePicker}
        onNavigate={navigate}
        onSelectCountry={selectCountry}
      />

      {/* Auto geo-detection notice */}
      <GeoNotice onOpenPicker={openPicker} />

      {countryId === "us" ? (
        <>
          <Hero query={query} onQueryChange={setQuery} onQuickSearch={handleQuickSearch} />
          <QuickDial country={country} />

          <main id="categories" className="scroll-mt-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-start justify-between gap-3 pb-6 pt-12 sm:flex-row sm:items-end">
                <div>
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-600 ring-1 ring-blue-100">
                    {t.dirBadge}
                  </span>
                  <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                    {activeCategory ? categories.find((c) => c.id === activeCategory)?.name : t.browseAll}
                  </h1>
                </div>
                <p className="text-sm font-medium text-slate-500">
                  {normalized ? (
                    <>
                      <span className="font-bold text-slate-800">{visibleCount}</span> {t.resultsFor}{" "}
                      <span className="font-bold text-blue-600">“{query.trim()}”</span>
                    </>
                  ) : (
                    <>
                      <span className="font-bold text-slate-800">{totalHelplines}</span> {t.verified}{" "}
                      <span className="font-bold text-slate-800">{categories.length}</span> {t.sCategories.toLowerCase()}
                    </>
                  )}
                </p>
              </div>
            </div>

            <CategoryNav active={activeCategory} onSelect={handleSelectCategory} counts={counts} visibleCount={visibleCount} />

            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
              {filteredCategories.length === 0 ? (
                <div className="mx-auto max-w-md rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-3xl">🔍</div>
                  <h3 className="mt-4 text-lg font-extrabold text-slate-900">{t.noResTitle}</h3>
                  <p className="mt-2 text-sm text-slate-500">{t.noResDesc}</p>
                  <button
                    onClick={() => { setQuery(""); setActiveCategory(null); }}
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-600/25 transition hover:bg-blue-700"
                  >
                    {t.clear}
                  </button>
                </div>
              ) : (
                <div className="space-y-14">
                  {!normalized && !activeCategory && (
                    <div>
                      <div className="mb-5 flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-xl">🗂️</span>
                        <div>
                          <h2 className="text-lg font-extrabold tracking-tight text-slate-900">{t.jumpTitle}</h2>
                          <p className="text-sm text-slate-500">{t.jumpDesc}</p>
                        </div>
                      </div>
                      <CategoryOverview onNavigate={handleOverviewNavigate} />
                    </div>
                  )}
                  {filteredCategories.map((cat) => (
                    <CategorySection key={cat.id} category={cat} isExpanded={!!expanded[cat.id]} onToggle={toggleExpanded} />
                  ))}
                </div>
              )}
            </div>
          </main>
        </>
      ) : (
        <>
          <Hero query={query} onQueryChange={setQuery} onQuickSearch={handleQuickSearch} />
          <QuickDial country={country} />
          <CountryDesk country={country} onBackToUs={() => selectCountry("us")} />
        </>
      )}

      <ExploreCountries currentId={countryId} onSelect={selectCountry} />
      <FAQ />
      <KeywordResearch />
      <About />
      <Footer onNavigate={navigate} />
      <FloatingUi route={route} currentUrl={window.location.href} onGoHome={() => navigate("")} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <GeoProvider>
        <Shell />
      </GeoProvider>
    </LanguageProvider>
  );
}
