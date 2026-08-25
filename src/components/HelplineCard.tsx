import type { Helpline } from "../data/helplines";
import { useLanguage } from "../context/LanguageContext";

interface CardProps {
  helpline: Helpline;
  accent: string;
}

interface ActionRowProps {
  label: string;
  value: string;
  href?: string;
  note?: string;
  icon: React.ReactNode;
}

function ActionRow({ label, value, href, note, icon }: ActionRowProps) {
  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex items-start gap-2.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 transition hover:border-blue-300 hover:bg-blue-50"
    >
      <span className="mt-0.5 shrink-0 text-slate-400 transition group-hover:text-blue-500">{icon}</span>
      <span className="min-w-0">
        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">{label}</span>
        <span className="block truncate text-sm font-bold text-slate-800 transition group-hover:text-blue-700">{value}</span>
        {note && <span className="mt-0.5 block text-[11px] leading-snug text-slate-500">{note}</span>}
      </span>
    </a>
  );
}

export default function HelplineCard({ helpline: h, accent }: CardProps) {
  const { t } = useLanguage();

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/10">
      {/* Accent bar */}
      <div className={`h-1.5 w-full ${accent}`} />

      <div className="flex flex-1 flex-col p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-extrabold leading-snug text-slate-900">{h.name}</h3>
          <div className="flex shrink-0 flex-col items-end gap-1">
            {h.isUrgent && (
              <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-red-600 ring-1 ring-red-200">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                {t.hour247}
              </span>
            )}
            {h.isFree && (
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-600 ring-1 ring-emerald-200">
                {t.free}
              </span>
            )}
          </div>
        </div>

        <p className="mt-0.5 text-xs font-semibold text-slate-400">{h.org}</p>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">{h.description}</p>

        {/* Contact actions */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          {h.phone && (
            <ActionRow
              label={h.phoneNote ? t.call : t.phone}
              value={h.phone}
              href={h.phoneHref}
              note={h.phoneNote}
              icon={
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              }
            />
          )}
          {h.text && (
            <ActionRow
              label={t.text}
              value={h.text}
              note={h.textNote}
              icon={
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              }
            />
          )}
          {h.email && (
            <ActionRow
              label={t.email}
              value={h.email}
              href={`mailto:${h.email}`}
              icon={
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              }
            />
          )}
          {h.chatUrl && (
            <ActionRow
              label={t.chat}
              value={t.startChat}
              href={h.chatUrl}
              icon={
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  <path d="M8 9h8M8 13h5" />
                </svg>
              }
            />
          )}
        </div>

        {/* Meta footer */}
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-slate-100 pt-3.5 text-[11px] font-medium text-slate-500">
          <span className="inline-flex items-center gap-1">
            <svg className="h-3.5 w-3.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            {h.hours}
          </span>
          {h.isConfidential && (
            <span className="inline-flex items-center gap-1 text-emerald-600">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              {t.confidential}
            </span>
          )}
          {h.languages && h.languages.length > 0 && (
            <span className="inline-flex min-w-0 items-center gap-1">
              <svg className="h-3.5 w-3.5 shrink-0 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span className="truncate">{h.languages.join(" • ")}</span>
            </span>
          )}
        </div>

        {/* Website link */}
        {h.website && (
          <a
            href={h.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 transition hover:text-blue-700"
          >
            {t.website}
            <svg className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
