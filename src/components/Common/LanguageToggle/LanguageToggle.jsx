import { useLanguage } from "../../../i18n/LanguageContext";
import "./LanguageToggle.scss";

function LanguageToggle({ className = "" }) {
  const { language, toggleLanguage } = useLanguage();

  const nextLanguage = language === "en" ? "DA" : "EN";

  return (
    <button
      className={'language-toggle ${className}' }
      type="button"
      onClick={toggleLanguage}
      aria-label={
        language === "en"
          ? "Skift sprog til dansk"
          : "Switch language to English"
      }
      title={
        language === "en"
          ? "Skift til dansk"
          : "Switch to English"
      }
    >
      {nextLanguage}
    </button>
  );
}

export default LanguageToggle;