import LegalLayout from "../components/LegalLayout";
import { useLanguage } from "../context/LanguageContext";
import { CookiesContent, LAST_UPDATED } from "./legalContent";

export default function CookiesPage() {
  const { t } = useLanguage();
  return (
    <LegalLayout icon="🍪" title={t.cookies} updated={LAST_UPDATED}>
      <CookiesContent />
    </LegalLayout>
  );
}
