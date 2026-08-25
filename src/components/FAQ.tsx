import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-32 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-indigo-600 ring-1 ring-indigo-100">
            {t.faqBadge}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{t.faqTitle}</h2>
          <p className="mt-3 text-base leading-relaxed text-slate-500">{t.faqSub}</p>
        </div>

        <div className="mt-10 space-y-3">
          {t.faqQ.map((q, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl border transition ${
                  isOpen ? "border-blue-200 bg-white shadow-md shadow-blue-900/5" : "border-slate-200 bg-white hover:border-blue-200"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-sm font-extrabold leading-snug text-slate-900 sm:text-base">{q}</h3>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition ${
                      isOpen ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <svg
                      className={`h-4 w-4 transition-transform ${isOpen ? "rotate-45" : ""}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-slate-100 px-5 py-4 text-sm leading-relaxed text-slate-600 sm:px-6">
                    {t.faqA[i]}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
