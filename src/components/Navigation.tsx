'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { translations, type Language } from "@/utils/translations";
import MobileMenu from "./MobileMenu";

interface NavigationProps {
  language: Language;
  onLanguageChange: () => void;
}

export default function Navigation({ language, onLanguageChange }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${
              scrolled ? "text-estate-dark hover:text-primary" : "text-white hover:text-estate-light"
            }`}
          >
            Žbandaj Villas
          </Link>

          <div className="flex items-center">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                href="/" 
                className={`transition-colors duration-300 ${
                  scrolled ? "text-neutral-600 hover:text-primary" : "text-white hover:text-estate-light"
                }`}
              >
                Home
              </Link>
              <Link 
                href="/#villas" 
                className={`transition-colors duration-300 ${
                  scrolled ? "text-neutral-600 hover:text-primary" : "text-white hover:text-estate-light"
                }`}
              >
                {t.villas.title}
              </Link>
              <Link 
                href="/#gallery" 
                className={`transition-colors duration-300 ${
                  scrolled ? "text-neutral-600 hover:text-primary" : "text-white hover:text-estate-light"
                }`}
              >
                {t.gallery.title}
              </Link>
              <Link 
                href="/contact" 
                className="btn btn-primary"
              >
                {t.contact.cta}
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className={scrolled ? "text-primary" : "text-white"}>
              <MobileMenu language={language} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 