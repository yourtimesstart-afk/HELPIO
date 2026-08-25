import { useEffect } from "react";

interface Props {
  data: Record<string, unknown>;
  id: string;
}

/**
 * Injects JSON-LD structured data into <head>.
 * Supports SEO, AEO (Answer Engine Optimization), GEO (Generative Engine
 * Optimization) and LLM SEO — search engines & AI models read this directly.
 */
export default function JsonLd({ data, id }: Props) {
  useEffect(() => {
    const existing = document.getElementById(id);
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, [data, id]);

  return null;
}
