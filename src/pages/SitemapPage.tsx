import { categories } from "../data/helplines";
import { useLanguage } from "../context/LanguageContext";
import { SITE_URL } from "../lib/seo";

interface Props {
  onNavigate: (route: string) => void;
  onGoToSection: (id: string) => void;
}

export default function SitemapPage({ onNavigate, onGoToSection }: Props) {
  const { t } = useLanguage();

  const pages = [
    { label: "Home", route: "#/", desc: "Full helpline directory with search & categories" },
    { label: t.aboutUs, route: "#/about", desc: "About the project, mission and publisher" },
    { label: t.contactUs, route: "#/contact", desc: "Contact form and publisher email" },
    { label: t.terms, route: "#/terms", desc: "Website terms and conditions" },
    { label: t.disclaimer, route: "#/disclaimer", desc: "Medical, legal and financial disclaimer" },
    { label: t.privacy, route: "#/privacy", desc: "How we handle your data" },
    { label: t.cookies, route: "#/cookies", desc: "Cookies and local storage usage" },
  ];

  return (
    <div className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-8 sm:px-10">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm ring-1 ring-slate-100">
                🗺️
              </span>
              <div>
                <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">{t.sitemap}</h1>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {SITE_URL}
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 py-8 sm:px-10">
            <h2 className="text-lg font-extrabold text-slate-900">Main Pages</h2>
            <ul className="mt-4 space-y-3">
              {pages.map((p) => (
                <li key={p.route}>
                  <button
                    onClick={() => (p.route === "#/" ? onNavigate("") : onNavigate(p.route.slice(2)))}
                    className="group w-full rounded-xl border border-slate-100 bg-slate-50/60 px-4 py-3 text-left transition hover:border-blue-200 hover:bg-blue-50/50"
                  >
                    <span className="flex items-center justify-between">
                      <span className="text-sm font-extrabold text-slate-800 group-hover:text-blue-600">{p.label}</span>
                      <span className="text-xs font-medium text-slate-400">{p.route === "#/" ? "/" : p.route}</span>
                    </span>
                    <span className="mt-0.5 block text-xs text-slate-500">{p.desc}</span>
                  </button>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-lg font-extrabold text-slate-900">
              Helpline Categories ({categories.length})
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => onGoToSection(cat.id)}
                  className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/60 px-4 py-3 text-left transition hover:border-blue-200 hover:bg-blue-50/50"
                >
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-lg ${cat.accent}`}>
                    {cat.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-extrabold text-slate-800 group-hover:text-blue-600">
                      {cat.name}
                    </span>
                    <span className="block text-xs text-slate-500">
                      {cat.helplines.length} {t.lines}
                    </span>
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-slate-50 p-4 text-xs leading-relaxed text-slate-500">
              Technical files: <code className="rounded bg-white px-1.5 py-0.5 font-semibold text-slate-700">/robots.txt</code>,{" "}
              <code className="rounded bg-white px-1.5 py-0.5 font-semibold text-slate-700">/sitemap.xml</code>,{" "}
              <code className="rounded bg-white px-1.5 py-0.5 font-semibold text-slate-700">/llms.txt</code>{" "}
              are available at the site root for search engines and AI assistants.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
