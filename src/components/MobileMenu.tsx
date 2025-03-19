'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { translations, type Language } from '@/utils/translations';

interface MobileMenuProps {
  language: Language;
}

export default function MobileMenu({ language }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[language];

  // Close menu when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? (
          <XMarkIcon className="w-7 h-7 text-primary" />
        ) : (
          <Bars3Icon className="w-7 h-7 text-primary" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              className="bg-white w-4/5 max-w-md p-6 rounded-lg shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-primary">Menu</h3>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <XMarkIcon className="w-6 h-6 text-primary" />
                </button>
              </div>
              
              <nav className="space-y-4">
                <motion.div variants={itemVariants}>
                  <Link 
                    href="/" 
                    className="block py-2 text-lg font-medium text-neutral-800 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Link 
                    href="/#villas" 
                    className="block py-2 text-lg font-medium text-neutral-800 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.villas.title}
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Link 
                    href="/#gallery" 
                    className="block py-2 text-lg font-medium text-neutral-800 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.gallery.title}
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants} className="pt-4">
                  <Link 
                    href="/contact" 
                    className="block w-full py-3 text-center bg-primary text-white rounded-md hover:bg-estate-dark transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.contact.cta}
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 