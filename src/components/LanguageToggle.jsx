import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="border border-saffron text-saffron px-3 py-1 rounded
                 hover:bg-saffron hover:text-navy transition text-sm"
      aria-label="Toggle language"
    >
      {language === "en" ? "ਪੰਜਾਬੀ" : "English"}
    </button>
  );
}
