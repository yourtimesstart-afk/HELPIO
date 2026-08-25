import { useLanguage } from "../context/LanguageContext";
import { PUBLISHER, PUBLISHER_EMAIL, PUBLISHER_NAME } from "../lib/seo";

interface Props {
  onNavigate: (route: string) => void;
}

export default function Footer({ onNavigate }: Props) {
  const { t } = useLanguage();

  const legalLinks = [
    { label: t.aboutUs, route: "#/about" },
    { label: t.terms, route: "#/terms" },
    { label: t.contactUs, route: "#/contact" },
    { label: t.disclaimer, route: "#/disclaimer" },
    { label: t.privacy, route: "#/privacy" },
    { label: t.cookies, route: "#/cookies" },
    { label: t.sitemap, route: "#/sitemap" },
  ];

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600">
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span className="text-lg font-extrabold tracking-tight text-white">
                Help<span className="text-blue-400">io</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              {t.tagline}. Find the right number, text line, chat or email in 50+ countries — quickly
              and privately.
            </p>
            <div className="mt-4 space-y-1 text-xs">
              <p className="font-bold text-slate-300">{t.copyright}</p>
              <p>{t.publisher}: {PUBLISHER_NAME}</p>
              <p>
                {t.contactEmail}:{" "}
                <a href={`mailto:${PUBLISHER_EMAIL}`} className="font-semibold text-blue-400 hover:text-blue-300">
                  {PUBLISHER_EMAIL}
                </a>
              </p>
            </div>
          </div>

          {/* Crisis quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">{t.crisisLines}</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="tel:988" className="inline-flex items-center gap-2 font-semibold text-slate-300 transition hover:text-white">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-500/20 text-xs">988</span>
                  US & Canada Crisis Lifeline — 24/7
                </a>
              </li>
              <li>
                <a href="tel:116123" className="inline-flex items-center gap-2 font-semibold text-slate-300 transition hover:text-white">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/20 text-xs">116</span>
                  UK & Europe Samaritans — 24/7
                </a>
              </li>
              <li>
                <a href="tel:131114" className="inline-flex items-center gap-2 font-semibold text-slate-300 transition hover:text-white">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-sky-500/20 text-xs">13</span>
                  Australia Lifeline — 24/7
                </a>
              </li>
              <li>
                <a href="tel:911" className="inline-flex items-center gap-2 font-semibold text-slate-300 transition hover:text-white">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-red-500/20 text-xs">☠</span>
                  {t.emergencyNumbers} — 911 / 112 / 999
                </a>
              </li>
            </ul>
          </div>

          {/* Legal pages */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">{t.sitemap}</h4>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 text-sm">
              {legalLinks.map((l) => (
                <li key={l.route}>
                  <button onClick={() => onNavigate(l.route.slice(2))} className="font-semibold text-slate-300 transition hover:text-blue-400">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Notice */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">{t.notice}</h4>
            <p className="mt-4 text-sm leading-relaxed">
              This directory is for informational purposes only and is not a substitute for
              professional medical, legal or financial advice. Helpline details may change — always
              confirm on the official website. In immediate danger, call your local emergency number
              right away.
            </p>
            <p className="mt-4 text-xs text-slate-500">
              © {new Date().getFullYear()} Helpio — {PUBLISHER}. All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-6 text-xs sm:flex-row">
          <p>{t.made}</p>
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            {legalLinks.slice(0, 3).map((l) => (
              <button key={l.route} onClick={() => onNavigate(l.route.slice(2))} className="transition hover:text-white">
                {l.label}
              </button>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
