import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

interface Props {
  route: string;
  currentUrl: string;
  onGoHome: () => void;
}

const SHARE_TITLE = "Helpio — Every Helpline in Every Country";

export default function FloatingUi({ route, currentUrl, onGoHome }: Props) {
  const { t } = useLanguage();
  const [showTop, setShowTop] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Show back-to-top after scrolling
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 350);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Click-outside + Escape for share panel
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setShareOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setShareOpen(false);
    if (shareOpen) {
      document.addEventListener("mousedown", onClick);
      document.addEventListener("keydown", onKey);
    }
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [shareOpen]);

  const url = currentUrl || window.location.href;
  const title = SHARE_TITLE;
  const enc = (s: string) => encodeURIComponent(s);

  const platforms = [
    {
      id: "whatsapp",
      label: "WhatsApp",
      color: "bg-[#25D366]",
      href: `https://wa.me/?text=${enc(`${title} ${url}`)}`,
    },
    {
      id: "facebook",
      label: "Facebook",
      color: "bg-[#1877F2]",
      href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`,
    },
    {
      id: "x",
      label: "X / Twitter",
      color: "bg-slate-900",
      href: `https://twitter.com/intent/tweet?text=${enc(title)}&url=${enc(url)}`,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      color: "bg-[#0A66C2]",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`,
    },
    {
      id: "telegram",
      label: "Telegram",
      color: "bg-[#229ED9]",
      href: `https://t.me/share/url?url=${enc(url)}&text=${enc(title)}`,
    },
    {
      id: "email",
      label: "Email",
      color: "bg-slate-500",
      href: `mailto:?subject=${enc(title)}&body=${enc(`${title}\n\n${url}`)}`,
    },
  ];

  const openShare = (href: string) => {
    // Open as a centered popup for social platforms; email opens mail client
    if (href.startsWith("mailto:")) {
      window.location.href = href;
    } else {
      window.open(href, "_blank", "noopener,noreferrer,width=640,height=560,menubar=no,toolbar=no,location=no");
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = url;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const nativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text: title, url });
        setShareOpen(false);
      } catch { /* user cancelled */ }
    } else {
      setShareOpen(true);
    }
  };

  const goTop = () => {
    if (route !== "home") {
      // Go home, then scroll to top
      onGoHome();
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 60);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div ref={ref} className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      {/* Share panel */}
      {shareOpen && (
        <div className="w-64 origin-bottom-right overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/20">
          <div className="border-b border-slate-100 px-4 py-3">
            <p className="text-sm font-extrabold text-slate-800">{t.share}</p>
          </div>
          <div className="grid grid-cols-2 gap-2 p-3">
            {platforms.map((p) => (
              <button
                key={p.id}
                onClick={() => openShare(p.href)}
                className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-xs font-bold text-slate-700 transition hover:bg-slate-50"
              >
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white ${p.color}`}>
                  {p.id === "whatsapp" && (
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 14.3c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .2-3.3-.7-2.8-1.1-4.6-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5s.7 1.7.8 1.9c.1.1.1.3 0 .5s-.4.5-.5.7c-.2.2-.3.4-.1.7.2.3.9 1.5 2 2.4 1.4 1.2 2.6 1.5 2.9 1.7.3.1.5.1.7-.1s.8-.9 1-1.2c.2-.3.4-.3.7-.2s1.8.8 2.1 1c.3.2.5.3.6.4.1.2.1.6-.2 1.2z"/></svg>
                  )}
                  {p.id === "facebook" && (
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3l.4-3H14V4.5c0-.9.3-1.5 1.6-1.5H17V.2C16.6.1 15.6 0 14.5 0 12 0 10.3 1.5 10.3 4.2V6H7.5v3h2.8v9h3.7z"/></svg>
                  )}
                  {p.id === "x" && (
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 3h3.1l-6.8 7.8L21.8 21h-6.3l-4.9-6.4L5 21H1.9l7.3-8.3L2.2 3h6.4l4.4 5.9zm-1.1 16.1h1.7L7.6 4.8H5.8z"/></svg>
                  )}
                  {p.id === "linkedin" && (
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v15h-4V8zm7.5 0h3.8v2.1h.1c.5-.9 1.7-2 3.5-2 3.7 0 4.4 2.4 4.4 5.6V23h-4v-7.9c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V23H8V8z"/></svg>
                  )}
                  {p.id === "telegram" && (
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M21.9 3.5L2.2 11.2c-1.3.5-1.3 1.3-.2 1.6l5 1.6 1.9 5.9c.2.7.1 1 .8 1 .5 0 .7-.2 1-.5l2.4-2.3 5 3.7c.9.5 1.6.2 1.8-.9l3.3-15.6c.3-1.3-.5-1.9-1.5-1.5z"/></svg>
                  )}
                  {p.id === "email" && (
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  )}
                </span>
                {p.label}
              </button>
            ))}
            <button
              onClick={copyLink}
              className="col-span-2 flex items-center justify-center gap-2 rounded-xl bg-blue-50 px-3 py-2.5 text-xs font-bold text-blue-600 transition hover:bg-blue-100"
            >
              {copied ? (
                <>
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  {t.copied}
                </>
              ) : (
                <>
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                  {t.copyLink}
                </>
              )}
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col items-end gap-3">
        {/* Back to top / home */}
        {showTop && (
          <button
            onClick={goTop}
            aria-label={route !== "home" ? t.backToHome : t.backToTop}
            title={route !== "home" ? t.backToHome : t.backToTop}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-xl shadow-slate-900/15 backdrop-blur transition hover:scale-105 hover:text-blue-600"
          >
            {route !== "home" ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 10v10h14V10"/></svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>
            )}
          </button>
        )}

        {/* Share button */}
        <button
          onClick={() => (shareOpen ? setShareOpen(false) : nativeShare())}
          aria-label={t.share}
          title={t.share}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl shadow-blue-600/30 transition hover:scale-105 hover:shadow-blue-600/40"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
            <path d="m8.6 13.5 6.8 4M15.4 6.7l-6.8 4"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
