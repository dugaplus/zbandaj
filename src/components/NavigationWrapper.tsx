'use client';

import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "./Navigation";
import LanguageToggle from "./LanguageToggle";

export default function NavigationWrapper() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <>
      <Navigation language={language} onLanguageChange={toggleLanguage} />
      <LanguageToggle language={language} onLanguageChange={toggleLanguage} />
    </>
  );
} 