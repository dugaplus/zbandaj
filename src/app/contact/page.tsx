'use client';

import Link from "next/link";
import { useState } from "react";
import { translations, type Language } from "@/utils/translations";
import Navigation from "@/components/Navigation";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function ContactPage() {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'de' : 'en');
  };

  return (
    <main>
      {/* Navigation */}
      <Navigation language={language} onLanguageChange={toggleLanguage} />

      {/* Contact Section */}
      <section className="pt-32 pb-20">
        <div className="container">
          <Link 
            href="/" 
            className="inline-flex items-center text-primary hover:text-estate-dark transition-colors mb-6"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            {language === 'en' ? 'Back to Home' : 'Zurück zur Startseite'}
          </Link>
          
          <div className="max-w-3xl mx-auto">
            <h1 className="heading-1 heading-light text-primary mb-6 text-center">
              {language === 'en' ? 'Contact Us' : 'Kontaktieren Sie Uns'}
            </h1>
            <p className="text-neutral-600 mb-12 text-center text-lg">
              {language === 'en' 
                ? 'We\'re here to help you find your dream property in Croatia. Get in touch with our team today.' 
                : 'Wir helfen Ihnen, Ihre Traumimmobilie in Kroatien zu finden. Kontaktieren Sie noch heute unser Team.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-xl font-bold text-primary mb-6">
                  {language === 'en' ? 'Contact Information' : 'Kontaktinformationen'}
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <EnvelopeIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold text-neutral-700">{language === 'en' ? 'Email' : 'E-Mail'}</h3>
                      <a 
                        href="mailto:info@dugaplus.com" 
                        className="text-primary hover:underline transition-colors"
                      >
                        info@dugaplus.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <PhoneIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold text-neutral-700">{language === 'en' ? 'Phone' : 'Telefon'}</h3>
                      <a 
                        href="tel:+385996386738" 
                        className="text-primary hover:underline transition-colors"
                      >
                        +385 99 638 6738
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPinIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold text-neutral-700">{language === 'en' ? 'Location' : 'Standort'}</h3>
                      <address className="not-italic text-neutral-600">
                        Žbandaj, Poreč<br />
                        Istria, Croatia
                      </address>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-xl font-bold text-primary mb-6">
                  {language === 'en' ? 'Quick Contact' : 'Schnellkontakt'}
                </h2>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-neutral-700 mb-1">
                      {language === 'en' ? 'Your Name' : 'Ihr Name'}
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder={language === 'en' ? 'Enter your name' : 'Geben Sie Ihren Namen ein'}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-neutral-700 mb-1">
                      {language === 'en' ? 'Email Address' : 'E-Mail-Adresse'}
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder={language === 'en' ? 'Enter your email' : 'Geben Sie Ihre E-Mail ein'}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-neutral-700 mb-1">
                      {language === 'en' ? 'Message' : 'Nachricht'}
                    </label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder={language === 'en' ? 'How can we help you?' : 'Wie können wir Ihnen helfen?'}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary w-full"
                  >
                    {language === 'en' ? 'Send Message' : 'Nachricht senden'}
                  </button>
                </form>
              </div>
            </div>
            
            <div className="bg-primary rounded-lg shadow-lg p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">
                {language === 'en' ? 'Schedule a Viewing' : 'Besichtigung vereinbaren'}
              </h2>
              <p className="mb-6">
                {language === 'en' 
                  ? 'Interested in seeing our villas in person? Contact us to arrange a private tour.' 
                  : 'Interesse unsere Villen persönlich zu besichtigen? Kontaktieren Sie uns für eine private Führung.'}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="tel:+385996386738" 
                  className="btn btn-primary bg-white text-primary hover:bg-estate-light"
                >
                  {language === 'en' ? 'Call Us' : 'Rufen Sie uns an'}
                </a>
                <a 
                  href="mailto:info@dugaplus.com" 
                  className="btn btn-primary border border-white hover:bg-white/10"
                >
                  {language === 'en' ? 'Email Us' : 'Schreiben Sie uns'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 