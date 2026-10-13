import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { LANGUAGES, translations } from "./translations.js";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    const saved = localStorage.getItem("lang");
    return LANGUAGES.find((l) => l.code === saved) ? saved : "en";
  });

  const setLang = useCallback((code) => {
    const found = LANGUAGES.find((l) => l.code === code);
    if (!found) return;
    setLangState(code);
    localStorage.setItem("lang", code);
    // Set document direction for Arabic (RTL) / others (LTR)
    document.documentElement.setAttribute("dir", found.dir);
    document.documentElement.setAttribute("lang", code);
  }, []);

  // Apply dir/lang on mount for persisted language
  useEffect(() => {
    const found = LANGUAGES.find((l) => l.code === lang);
    if (found) {
      document.documentElement.setAttribute("dir", found.dir);
      document.documentElement.setAttribute("lang", lang);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /** t("key") — looks up the key in the active language, falls back to English */
  const t = useCallback(
    (key) => translations[lang]?.[key] ?? translations["en"][key] ?? key,
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, languages: LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
