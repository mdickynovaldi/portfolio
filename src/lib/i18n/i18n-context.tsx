"use client";

import { createContext, useContext, useState } from "react";
import rosetta from "rosetta";
import { translations, Language, TranslationKey } from "./translations";

const i18n = rosetta();

// Load translations
Object.entries(translations).forEach(([locale, translations]) => {
  i18n.set(locale, translations);
});

type I18nContextType = {
  activeLocale: Language;
  t: (key: TranslationKey, params?: Record<string, string | number>) => string;
  setLocale: (locale: Language) => void;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [activeLocale, setActiveLocale] = useState<Language>("en");

  i18n.locale(activeLocale);

  const t = (key: TranslationKey, params?: Record<string, string | number>) => {
    return i18n.t(key, params);
  };

  const setLocale = (locale: Language) => {
    setActiveLocale(locale);
  };

  return (
    <I18nContext.Provider value={{ activeLocale, t, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === null) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
