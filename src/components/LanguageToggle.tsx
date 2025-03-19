'use client';

import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { type Language } from "@/utils/translations";

interface LanguageToggleProps {
  language: Language;
  onLanguageChange: () => void;
}

export default function LanguageToggle({ language, onLanguageChange }: LanguageToggleProps) {
  return (
    <button
      onClick={onLanguageChange}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
      aria-label="Toggle Language"
    >
      <div className="flex items-center">
        <GlobeAltIcon className="w-5 h-5" />
        <span className="ml-2 font-medium">{language === 'en' ? 'DE' : 'EN'}</span>
      </div>
    </button>
  );
} 