'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { translations } from "@/utils/translations";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/zbandaj01.jpg"
            alt="Luxury Villa Exterior"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="gradient-overlay" />
        </div>
        <div className="container relative z-10 text-center text-white">
          <motion.div
            className="mb-4 inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm uppercase tracking-wider border border-white/20 shadow-glow-light">
              Luxury Properties
            </span>
          </motion.div>
          <motion.h1 
            className="heading-1 heading-dark mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t.hero.title}
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto drop-shadow-md"
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
            className="space-x-4"
          >
            <Link href="#villas" className="btn btn-primary shadow-glow">
              {t.hero.cta}
            </Link>
            <Link href="/contact" className="btn btn-outline">
              {language === 'en' ? 'Contact Us' : 'Kontaktieren Sie uns'}
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              delay: 1,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Link href="#villas" className="flex flex-col items-center text-white">
              <span className="text-sm mb-2 drop-shadow-md">{language === 'en' ? 'Scroll Down' : 'Nach unten scrollen'}</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Villas Section */}
      <section id="villas" className="section section-light">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
        <div className="container relative">
          <div className="text-center mb-16">
            <motion.span
              className="inline-block px-3 py-1 text-xs uppercase tracking-wider rounded-full bg-estate-light/30 text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {language === 'en' ? 'Premium Selection' : 'Premium-Auswahl'}
            </motion.span>
            <motion.h2 
              className="heading-2 heading-light mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {t.villas.title}
            </motion.h2>
            <motion.p
              className="text-neutral-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {language === 'en' 
                ? 'Discover our exclusive collection of luxury villas in the beautiful region of Istria, Croatia.'
                : 'Entdecken Sie unsere exklusive Kollektion von Luxusvillen in der wunderschönen Region Istrien, Kroatien.'
              }
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Villa 1 */}
            <motion.div 
              className="glass-effect overflow-hidden shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64">
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs uppercase tracking-wider rounded-full">
                    {language === 'en' ? 'Featured' : 'Empfohlen'}
                  </span>
                </div>
                <Image
                  src="/media/zbandaj02.jpg"
                  alt="Villa Adriatica Main View"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="heading-3 heading-light mb-2 text-gradient">{language === 'en' ? 'Villa Istriana' : 'Villa Istriana'}</h3>
                <div className="flex items-center mb-4">
                  <div className="flex text-estate-gold">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-neutral-600">{language === 'en' ? 'Luxury Property' : 'Luxusimmobilie'}</span>
                </div>
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
                      src="/media/zbandaj07.jpg" 
                      alt="Villa Interior" 
                      fill 
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover rounded-lg" 
                    />
                  </div>
                  <div className="relative h-32">
                    <Image 
                      src="/media/zbandaj04.jpg" 
                      alt="Villa Exterior" 
                      fill 
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover rounded-lg" 
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-accent">€611,000</span>
                  <Link href="/villa-istriana" className="btn btn-secondary">
                    {t.villas.villa1.viewDetails}
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Villa 2 */}
            <motion.div 
              className="glass-effect overflow-hidden shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64">
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs uppercase tracking-wider rounded-full">
                    {language === 'en' ? 'New' : 'Neu'}
                  </span>
                </div>
                <Image
                  src="/media/zbandaj08.jpg"
                  alt="Villa Mediterranea Main View"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="heading-3 heading-light mb-2 text-gradient">{language === 'en' ? 'Villa Mediterranea' : 'Villa Mediterranea'}</h3>
                <div className="flex items-center mb-4">
                  <div className="flex text-estate-gold">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-neutral-600">{language === 'en' ? 'Luxury Property' : 'Luxusimmobilie'}</span>
                </div>
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
                      src="/media/zbandaj06.jpg" 
                      alt="Villa Interior" 
                      fill 
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover rounded-lg" 
                    />
                  </div>
                  <div className="relative h-32">
                    <Image 
                      src="/media/zbandaj07.jpg" 
                      alt="Villa Exterior" 
                      fill 
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover rounded-lg" 
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-accent">€611,000</span>
                  <Link href="/villa-mediterranea" className="btn btn-secondary">
                    {t.villas.villa2.viewDetails}
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Sea View Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/view.jpg"
            alt="Sea View"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.span
              className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm uppercase tracking-wider border border-white/20 mb-6 shadow-glow-light"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {language === 'en' ? 'Breathtaking Views' : 'Atemberaubende Aussichten'}
            </motion.span>
            <motion.h2 
              className="heading-2 heading-dark mb-3 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t.seaView.title}
            </motion.h2>
            <motion.p
              className="text-2xl font-light mb-6 drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {t.seaView.subtitle}
            </motion.p>
            <motion.p
              className="mb-10 text-lg drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t.seaView.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact" className="btn btn-primary shadow-glow">
                {t.seaView.cta}
              </Link>
              <Link href="/#gallery" className="btn btn-outline">
                {language === 'en' ? 'View Gallery' : 'Galerie ansehen'}
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section section-light">
        <div className="container">
          <div className="text-center mb-16">
            <motion.span
              className="inline-block px-3 py-1 text-xs uppercase tracking-wider rounded-full bg-estate-light/30 text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {language === 'en' ? 'Visual Tour' : 'Visuelle Tour'}
            </motion.span>
            <motion.h2 
              className="heading-2 heading-light text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {t.gallery.title}
            </motion.h2>
            <motion.p
              className="text-neutral-600 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {language === 'en' 
                ? 'Explore our luxurious villas through these stunning images capturing the beauty and elegance of our properties.'
                : 'Erkunden Sie unsere Luxusvillen durch diese atemberaubenden Bilder, die die Schönheit und Eleganz unserer Immobilien einfangen.'
              }
            </motion.p>
          </div>
          
          <div className="gallery-grid">
            {[
              "/media/zbandaj08.jpg",
              "/media/zbandaj01.jpg",
              "/media/zbandaj06.jpg",
              "/media/PHOTO-2024-11-07-14-56-48.jpg",
              "/media/PHOTO-2024-11-07-14-56-44 2.jpg",
              "/media/PHOTO-2024-11-07-14-56-48 2.jpg",
              "/media/PHOTO-2024-11-07-14-56-48 6.jpg",
              "/media/PHOTO-2024-11-07-14-56-38 3.jpg",
              "/media/PHOTO-2024-11-07-14-56-40 2.jpg",
              "/media/PHOTO-2024-11-07-14-56-47.jpg",
              "/media/PHOTO-2024-11-07-14-56-37 5.jpg",
              "/media/PHOTO-2024-11-07-14-56-35 2.jpg",
              "/media/zbandaj02.jpg",
              "/media/zbandaj04.jpg",
              "/media/zbandaj07.jpg"
            ].map((src, index) => (
              <motion.div
                key={index}
                className="gallery-item shadow-glow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-10 flex items-end justify-center pb-4">
                  <span className="text-white text-sm font-medium drop-shadow-md px-3 py-1 rounded-full bg-primary/80 backdrop-blur-sm">
                    {language === 'en' ? 'View Larger' : 'Größer ansehen'}
                  </span>
                </div>
                <div className="w-full h-full relative">
                  <Image 
                    src={src} 
                    alt={`Žbandaj Villa Gallery Image ${index + 1}`} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="gallery-image"
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link href="/contact" className="btn btn-primary shadow-glow">
                {language === 'en' ? 'Request More Photos' : 'Weitere Fotos anfordern'}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section animated-bg">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
        <div className="container text-center relative z-10">
          <motion.div
            className="max-w-3xl mx-auto py-8 px-6 md:p-12 glass-effect border border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block px-4 py-1 rounded-full bg-primary/10 text-sm uppercase tracking-wider text-primary mb-6 shadow-glow"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {language === 'en' ? 'Get In Touch' : 'Kontaktieren Sie Uns'}
            </motion.span>
            <motion.h2 
              className="heading-2 heading-light mb-6 text-gradient"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {t.contact.title}
            </motion.h2>
            <motion.p 
              className="text-neutral-700 text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t.contact.description}
            </motion.p>
            <motion.div 
              className="text-neutral-700 mb-8 space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@dugaplus.com" className="text-primary hover:text-estate-dark transition-colors">info@dugaplus.com</a>
              </p>
              <p className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+385996386738" className="text-primary hover:text-estate-dark transition-colors">+385 99 638 6738</a>
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/contact" className="btn btn-primary shadow-glow">
                {t.contact.cta}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 