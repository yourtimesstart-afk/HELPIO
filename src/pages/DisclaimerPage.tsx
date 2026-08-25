import LegalLayout from "../components/LegalLayout";
import { useLanguage } from "../context/LanguageContext";
import { DisclaimerContent, LAST_UPDATED } from "./legalContent";

export default function DisclaimerPage() {
  const { t } = useLanguage();
  return (
    <LegalLayout icon="⚠️" title={t.disclaimer} updated={LAST_UPDATED}>
      <DisclaimerContent />
    </LegalLayout>
  );
}
