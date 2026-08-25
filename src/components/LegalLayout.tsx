import type { ReactNode } from "react";
import { useLanguage } from "../context/LanguageContext";

interface Props {
  icon: string;
  title: string;
  updated: string;
  children: ReactNode;
}

export default function LegalLayout({ icon, title, updated, children }: Props) {
  const { t } = useLanguage();
  return (
    <div className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-8 sm:px-10">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm ring-1 ring-slate-100">
                {icon}
              </span>
              <div>
                <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">{title}</h1>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {t.updated}: {updated}
                </p>
              </div>
            </div>
          </div>
          <div className="px-6 py-8 sm:px-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
