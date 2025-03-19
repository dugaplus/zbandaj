'use client';

import { useState } from "react";
import { type Language } from "@/utils/translations";
import Navigation from "./Navigation";
import LanguageToggle from "./LanguageToggle";

export default function NavigationWrapper() {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'de' : 'en');
  };

  return (
    <>
      <Navigation language={language} onLanguageChange={toggleLanguage} />
      <LanguageToggle language={language} onLanguageChange={toggleLanguage} />
    </>
  );
} 