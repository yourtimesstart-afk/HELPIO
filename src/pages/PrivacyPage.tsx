import LegalLayout from "../components/LegalLayout";
import { useLanguage } from "../context/LanguageContext";
import { LAST_UPDATED, PrivacyContent } from "./legalContent";

export default function PrivacyPage() {
  const { t } = useLanguage();
  return (
    <LegalLayout icon="🔒" title={t.privacy} updated={LAST_UPDATED}>
      <PrivacyContent />
    </LegalLayout>
  );
}
