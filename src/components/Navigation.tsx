'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <Link 
            href="/" 
            className={`text-2xl font-bold transition-colors duration-300 ${
              scrolled ? "text-estate-dark hover:text-primary" : "text-white hover:text-estate-light"
            }`}
          >
            Žbandaj Villas
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
              Villas
            </Link>
            <Link href="/contact" className="btn btn-primary">
              Contact
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              scrolled ? "text-estate-dark hover:text-primary" : "text-white hover:text-estate-light"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg rounded-lg mt-4 p-4"
          >
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#villas"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Villas
              </Link>
              <Link
                href="/contact"
                className="btn btn-primary w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
} 