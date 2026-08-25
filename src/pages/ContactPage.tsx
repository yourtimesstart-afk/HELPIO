import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { PUBLISHER_EMAIL, PUBLISHER_NAME, PUBLISHER } from "../lib/seo";

export default function ContactPage() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("General inquiry");
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Helpio] ${topic}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${PUBLISHER_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-8 sm:px-10">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm ring-1 ring-slate-100">
                ✉️
              </span>
              <div>
                <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">{t.contactUs}</h1>
                <p className="mt-1 text-sm text-slate-500">
                  {PUBLISHER} • {t.publisher}: {PUBLISHER_NAME}
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 py-8 sm:px-10">
            {/* Emergency note */}
            <div className="rounded-2xl border border-red-100 bg-red-50 p-4 text-sm text-red-700">
              <strong>⚠️ In an emergency, always call your local emergency number (911 / 112 / 999).</strong>{" "}
              This contact form is not monitored 24/7 and is not for crisis support. For crisis help,
              use your country's crisis line listed on the{" "}
              <a href="#/" className="font-bold underline">home page</a>.
            </div>

            <form onSubmit={submit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500">
                    Name
                  </label>
                  <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="topic" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500">
                  Topic
                </label>
                <select
                  id="topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                >
                  <option>General inquiry</option>
                  <option>Report incorrect helpline info</option>
                  <option>Suggest a new helpline</option>
                  <option>Advertising / partnership</option>
                  <option>Privacy concern</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  placeholder="How can we help?"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 sm:w-auto"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 2-7 20-4-9-9-4z" />
                  <path d="M22 2 11 13" />
                </svg>
                Send message
              </button>
            </form>

            <div className="mt-8 rounded-2xl bg-slate-50 p-5 text-sm">
              <p className="font-extrabold text-slate-900">{t.contactEmail}</p>
              <a href={`mailto:${PUBLISHER_EMAIL}`} className="font-semibold text-blue-600 hover:text-blue-700">
                {PUBLISHER_EMAIL}
              </a>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                We typically respond within 2–3 business days. For urgent or crisis matters, please use
                the helplines on the home page instead.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
