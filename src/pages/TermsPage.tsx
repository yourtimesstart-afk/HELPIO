import LegalLayout from "../components/LegalLayout";
import { useLanguage } from "../context/LanguageContext";
import { LAST_UPDATED, TermsContent } from "./legalContent";

export default function TermsPage() {
  const { t } = useLanguage();
  return (
    <LegalLayout icon="📜" title={t.terms} updated={LAST_UPDATED}>
      <TermsContent />
    </LegalLayout>
  );
}
