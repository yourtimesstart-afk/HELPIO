import LegalLayout from "../components/LegalLayout";
import { useLanguage } from "../context/LanguageContext";
import { AboutContent, LAST_UPDATED } from "./legalContent";

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <LegalLayout icon="ℹ️" title={t.aboutUs} updated={LAST_UPDATED}>
      <AboutContent />
    </LegalLayout>
  );
}
