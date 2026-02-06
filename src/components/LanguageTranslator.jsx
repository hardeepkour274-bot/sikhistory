import { useEffect, useState } from "react";

export default function LanguageTranslator() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const scriptId = "google-translate-script";

    window.googleTranslateInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,pa",
          autoDisplay: false,
        },
        "google_translate_element"
      );
      setLoaded(true);
    };

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateInit";
      script.async = true;
      document.body.appendChild(script);
    } else {
      setLoaded(true);
    }
  }, []);

  const translate = (lang) => {
    const select = document.querySelector(".goog-te-combo");
    if (!select) return;

    select.value = lang;
    select.dispatchEvent(new Event("change"));
  };

  return (
    <>
      {/* Hidden Google element */}
      <div id="google_translate_element" className="hidden" />

      {/* VISIBLE BUTTON (BOTTOM-LEFT) */}
      {loaded && (
        <div
          className="
            fixed bottom-12 left-6 z-50
            bg-black/70 backdrop-blur-xl
            border border-white/20
            rounded-full px-1 py-1
            flex items-center gap-1
            shadow-2xl
          "
        >
          <button
            onClick={() => translate("en")}
            className="
              px-4 py-2 text-sm font-medium text-white
              border border-cyan-400/50
              rounded-full
              backdrop-blur-md
              hover:bg-cyan-400/10
              hover:shadow-[0_0_15px_cyan]
              transition-all duration-300
              transform hover:scale-105
            "
          >
            EN
          </button>

          <button
            onClick={() => translate("pa")}
            className="
              px-4 py-2 text-sm font-medium text-white
              border border-purple-400/50
              rounded-full
              backdrop-blur-md
              hover:bg-purple-400/10
              hover:shadow-[0_0_15px_purple]
              transition-all duration-300
              transform hover:scale-105
            "
          >
            ਪੰਜਾਬੀ
          </button>
        </div>
      )}
    </>
  );
}
