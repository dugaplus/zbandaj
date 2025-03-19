'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { translations, type Language } from "@/utils/translations";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'de' : 'en');
  };

  return (
    <main>
      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
        aria-label="Toggle Language"
      >
        <GlobeAltIcon className="w-6 h-6 text-primary" />
      </button>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/PHOTO-2024-11-07-14-56-48 4.jpg"
            alt="Luxury Villa"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative z-10 text-center text-white">
          <motion.h1 
            className="heading-1 heading-dark mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t.hero.title}
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="#villas" className="btn btn-primary">
              {t.hero.cta}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Villas Section */}
      <section id="villas" className="section bg-secondary">
        <div className="container">
          <h2 className="heading-2 heading-light text-center mb-16">{t.villas.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Villa 1 */}
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64">
                <Image
                  src="/media/PHOTO-2024-11-07-14-56-35.jpg"
                  alt="Villa Adriatica"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="heading-3 heading-light mb-4">{t.villas.villa1.title}</h3>
                <p className="text-neutral-600 mb-4">{t.villas.villa1.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex flex-col space-y-2">
                    <span className="font-semibold text-neutral-700">{t.villas.villa1.details}:</span>
                    <span className="text-neutral-600">• 168 m² {t.villas.propertyDetails.livingArea}</span>
                    <span className="text-neutral-600">• 350 m² {t.villas.propertyDetails.plotSize}</span>
                    <span className="text-neutral-600">• 4 {t.villas.propertyDetails.bedrooms}</span>
                    <span className="text-neutral-600">• {t.villas.propertyDetails.energyClass} A</span>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <span className="font-semibold text-neutral-700">{t.villas.villa1.features}:</span>
                    <span className="text-neutral-600">• {t.villas.features.seaView}</span>
                    <span className="text-neutral-600">• {t.villas.features.pool}</span>
                    <span className="text-neutral-600">• 4 {t.villas.features.parking}</span>
                    <span className="text-neutral-600">• {t.villas.features.balcony}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="relative h-32">
                    <Image 
                      src="/media/PHOTO-2024-11-07-14-56-37 3.jpg" 
                      alt="Villa Interior" 
                      fill 
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover rounded-lg" 
                    />
                  </div>
                  <div className="relative h-32">
                    <Image 
                      src="/media/PHOTO-2024-11-07-14-56-37.jpg" 
                      alt="Villa Exterior" 
                      fill 
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover rounded-lg" 
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-accent">€611,000</span>
                  <Link href="/villa-1" className="btn btn-secondary">
                    {t.villas.villa1.viewDetails}
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Villa 2 */}
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64">
                <Image
                  src="/media/PHOTO-2024-11-07-14-56-39.jpg"
                  alt="Villa Mediterranea"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="heading-3 heading-light mb-4">{t.villas.villa2.title}</h3>
                <p className="text-neutral-600 mb-4">{t.villas.villa2.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex flex-col space-y-2">
                    <span className="font-semibold text-neutral-700">{t.villas.villa2.details}:</span>
                    <span className="text-neutral-600">• 168 m² {t.villas.propertyDetails.livingArea}</span>
                    <span className="text-neutral-600">• 350 m² {t.villas.propertyDetails.plotSize}</span>
                    <span className="text-neutral-600">• 4 {t.villas.propertyDetails.bedrooms}</span>
                    <span className="text-neutral-600">• {t.villas.propertyDetails.energyClass} A</span>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <span className="font-semibold text-neutral-700">{t.villas.villa2.features}:</span>
                    <span className="text-neutral-600">• {t.villas.features.seaView}</span>
                    <span className="text-neutral-600">• {t.villas.features.pool}</span>
                    <span className="text-neutral-600">• 4 {t.villas.features.parking}</span>
                    <span className="text-neutral-600">• {t.villas.features.balcony}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="relative h-32">
                    <Image 
                      src="/media/PHOTO-2024-11-07-14-56-39 2.jpg" 
                      alt="Villa Interior" 
                      fill 
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover rounded-lg" 
                    />
                  </div>
                  <div className="relative h-32">
                    <Image 
                      src="/media/PHOTO-2024-11-07-14-56-40.jpg" 
                      alt="Villa Exterior" 
                      fill 
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover rounded-lg" 
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-accent">€611,000</span>
                  <Link href="/villa-2" className="btn btn-secondary">
                    {t.villas.villa2.viewDetails}
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section">
        <div className="container">
          <h2 className="heading-2 heading-light text-center mb-16">{t.gallery.title}</h2>
          <div className="gallery-grid">
            {[
              "/media/PHOTO-2024-11-07-14-56-47.jpg",
              "/media/PHOTO-2024-11-07-14-56-48.jpg",
              "/media/PHOTO-2024-11-07-14-56-44 2.jpg",
              "/media/PHOTO-2024-11-07-14-56-48 2.jpg",
              "/media/PHOTO-2024-11-07-14-56-48 6.jpg",
              "/media/PHOTO-2024-11-07-14-56-38 3.jpg",
              "/media/PHOTO-2024-11-07-14-56-48 7.jpg",
              "/media/PHOTO-2024-11-07-14-56-16.jpg",
              "/media/PHOTO-2024-11-07-14-56-48 8.jpg"
            ].map((src, index) => (
              <motion.div
                key={index}
                className="gallery-item aspect-square"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Image 
                  src={src} 
                  alt={`Žbandaj Villa Gallery Image ${index + 1}`} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="gallery-image"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section bg-primary">
        <div className="container text-center">
          <h2 className="heading-2 heading-dark mb-6">{t.contact.title}</h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
          <Link href="/contact" className="btn btn-primary bg-white text-primary hover:bg-estate-light">
            {t.contact.cta}
          </Link>
        </div>
      </section>
    </main>
  );
} 