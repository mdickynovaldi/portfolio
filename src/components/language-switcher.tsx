"use client";

import { useI18n } from "@/lib/i18n/i18n-context";

export function LanguageSwitcher() {
  const { activeLocale, setLocale } = useI18n();

  const toggleLanguage = () => {
    setLocale(activeLocale === "en" ? "id" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 rounded-md bg-primary text-primary-foreground"
    >
      {activeLocale === "en" ? "EN" : "ID"}
    </button>
  );
}
