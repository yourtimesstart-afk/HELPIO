import { useLanguage } from "../context/LanguageContext";

const tipIcons = ["📞", "🔒", "💬", "🌐", "🗺️", "❤️"];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-32 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-600 ring-1 ring-blue-100">
            {t.aboutBadge}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{t.aboutTitle}</h2>
          <p className="mt-3 text-base leading-relaxed text-slate-500">{t.aboutSub}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.tipsT.map((title, i) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6 transition hover:border-blue-100 hover:bg-blue-50/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl shadow-sm ring-1 ring-slate-100">
                {tipIcons[i]}
              </div>
              <h3 className="mt-4 text-base font-extrabold text-slate-900">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{t.tipsD[i]}</p>
            </div>
          ))}
        </div>

        {/* Emergency reminder banner */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-red-600 to-rose-600 p-8 text-white shadow-xl shadow-red-600/20 sm:p-10">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-3xl backdrop-blur">🆘</div>
            <div className="flex-1">
              <h3 className="text-xl font-extrabold sm:text-2xl">{t.emTitle}</h3>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-red-100">{t.emDesc}</p>
            </div>
            <a
              href="tel:911"
              className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-base font-extrabold text-red-600 shadow-lg transition hover:bg-red-50"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              911
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
