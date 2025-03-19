'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { translations, type Language } from "@/utils/translations";
import Navigation from "@/components/Navigation";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function VillaMediterraneaPage() {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'de' : 'en');
  };

  const features = [
    { name: '4 Bedrooms', icon: '🛏️' },
    { name: '3 Bathrooms', icon: '🚿' },
    { name: 'Sea View', icon: '🌊' },
    { name: 'Private Pool', icon: '🏊' },
    { name: 'Garden', icon: '🌳' },
    { name: 'Parking (4)', icon: '🚗' },
    { name: 'Balcony', icon: '🏠' },
    { name: 'Terrace', icon: '☀️' },
    { name: 'Year Built: 2025', icon: '📅' },
    { name: 'Energy Class A', icon: '⚡' },
    { name: 'Smart Home', icon: '📱' },
    { name: 'Fireplace', icon: '🔥' },
  ];

  return (
    <main>
      {/* Navigation */}
      <Navigation language={language} onLanguageChange={toggleLanguage} />

      {/* Hero Section */}
      <section className="relative pt-20 mb-12">
        <div className="container pt-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-primary hover:text-estate-dark transition-colors mb-6"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            {language === 'en' ? 'Back to Home' : 'Zurück zur Startseite'}
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="order-2 lg:order-1">
              <h1 className="heading-1 heading-light text-primary mb-6">Villa Mediterranea</h1>
              <div className="text-xl font-bold text-accent mb-6">€611,000</div>
              <p className="text-neutral-600 mb-8">
                A luxurious new build featuring a private pool, spacious living areas, and stunning sea views. 
                Built in 2025 with modern design and premium finishes. This Mediterranean-inspired villa 
                combines traditional Istrian architecture with contemporary comfort.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-primary mb-4">{t.villas.propertyDetails.livingArea}</h3>
                  <p className="text-4xl font-light text-estate-dark">168 m²</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-primary mb-4">{t.villas.propertyDetails.plotSize}</h3>
                  <p className="text-4xl font-light text-estate-dark">350 m²</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mb-12">
                <h3 className="font-bold text-primary mb-6">{language === 'en' ? 'Features' : 'Ausstattung'}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-xl">{feature.icon}</span>
                      <span className="text-neutral-700">{feature.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative h-96 lg:h-[600px] rounded-lg overflow-hidden shadow-xl mb-4">
                <Image
                  src="/media/zbandaj08.jpg"
                  alt="Villa Mediterranea"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="relative h-24 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/media/zbandaj06.jpg"
                    alt="Villa Interior"
                    fill
                    sizes="(max-width: 1024px) 33vw, 16vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-24 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/media/PHOTO-2024-11-07-14-56-47.jpg"
                    alt="Villa Exterior"
                    fill
                    sizes="(max-width: 1024px) 33vw, 16vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-24 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/media/zbandaj07.jpg"
                    alt="Villa Pool"
                    fill
                    sizes="(max-width: 1024px) 33vw, 16vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mb-20">
        <h2 className="heading-2 heading-light mb-10">{language === 'en' ? 'Photo Gallery' : 'Fotogalerie'}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "/media/zbandaj08.jpg",
            "/media/zbandaj06.jpg",
            "/media/PHOTO-2024-11-07-14-56-47.jpg",
            "/media/zbandaj07.jpg",
            "/media/PHOTO-2024-11-07-14-56-48 2.jpg",
            "/media/PHOTO-2024-11-07-14-56-48 5.jpg",
            "/media/PHOTO-2024-11-07-14-56-38 2.jpg",
            "/media/PHOTO-2024-11-07-14-56-35.jpg",
          ].map((src, index) => (
            <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <Image 
                src={src} 
                alt={`Villa Mediterranea Image ${index + 1}`} 
                fill 
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-300" 
              />
            </div>
          ))}
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="container mb-20">
        <div className="bg-secondary rounded-lg shadow-xl overflow-hidden">
          <div className="p-8">
            <h2 className="heading-2 heading-light mb-6">{language === 'en' ? 'Location Highlights' : 'Lage-Highlights'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">{language === 'en' ? 'Distances' : 'Entfernungen'}</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-center"><span className="text-primary mr-2">•</span> {language === 'en' ? 'Beach: 3 km' : 'Strand: 3 km'}</li>
                  <li className="flex items-center"><span className="text-primary mr-2">•</span> {language === 'en' ? 'Poreč center: 6 km' : 'Zentrum von Poreč: 6 km'}</li>
                  <li className="flex items-center"><span className="text-primary mr-2">•</span> {language === 'en' ? 'Restaurants: 2 km' : 'Restaurants: 2 km'}</li>
                  <li className="flex items-center"><span className="text-primary mr-2">•</span> {language === 'en' ? 'Shopping: 3 km' : 'Einkaufsmöglichkeiten: 3 km'}</li>
                  <li className="flex items-center"><span className="text-primary mr-2">•</span> {language === 'en' ? 'Airport: 60 km (Pula)' : 'Flughafen: 60 km (Pula)'}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">{language === 'en' ? 'Area Information' : 'Informationen zur Umgebung'}</h3>
                <p className="text-neutral-700 mb-4">
                  {language === 'en' 
                    ? 'Žbandaj is a tranquil residential area located just a short drive from the historic city of Poreč. The location offers a perfect blend of countryside tranquility and coastal proximity.'
                    : 'Žbandaj ist ein ruhiges Wohngebiet, das nur eine kurze Fahrt von der historischen Stadt Poreč entfernt liegt. Die Lage bietet eine perfekte Mischung aus ländlicher Ruhe und Küstennähe.'}
                </p>
                <p className="text-neutral-700">
                  {language === 'en'
                    ? 'The Istrian peninsula is known for its excellent cuisine, wineries, olive oil producers, and beautiful beaches.'
                    : 'Die istrische Halbinsel ist bekannt für ihre ausgezeichnete Küche, Weingüter, Olivenölproduzenten und schönen Strände.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-primary text-white py-12 mb-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 heading-dark mb-6">{language === 'en' ? 'Interested in Villa Mediterranea?' : 'Interesse an Villa Mediterranea?'}</h2>
            <p className="text-lg mb-8">
              {language === 'en' 
                ? 'Contact us to schedule a viewing or request more information about this property.' 
                : 'Kontaktieren Sie uns, um eine Besichtigung zu vereinbaren oder weitere Informationen über diese Immobilie anzufordern.'}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <a 
                href="mailto:info@dugaplus.com" 
                className="flex items-center text-white hover:text-estate-light transition-colors"
              >
                <EnvelopeIcon className="w-5 h-5 mr-2" />
                info@dugaplus.com
              </a>
              <a 
                href="tel:+385996386738" 
                className="flex items-center text-white hover:text-estate-light transition-colors"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                +385 99 638 6738
              </a>
              <div className="flex items-center">
                <MapPinIcon className="w-5 h-5 mr-2" />
                Žbandaj, Poreč, Croatia
              </div>
            </div>
            <Link 
              href="/contact" 
              className="btn btn-primary bg-white text-primary hover:bg-estate-light inline-block"
            >
              {t.contact.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="container mb-20">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-8">
            <h2 className="heading-2 heading-light mb-6">{language === 'en' ? 'Property Description' : 'Immobilienbeschreibung'}</h2>
            <div className="prose prose-estate max-w-none">
              <p>
                Villa Mediterranea is a stunning new property located in the tranquil area of Žbandaj near Poreč. Inspired by Mediterranean architecture but featuring all modern conveniences, this villa represents the perfect blend of tradition and luxury.
              </p>
              <p>
                The villa is designed around an open concept living area that seamlessly connects to the outdoor spaces through large sliding glass doors. The spacious living room features a contemporary fireplace as its focal point, creating a warm and inviting atmosphere.
              </p>
              <p>
                With 168 square meters of living space spread across two floors, the property includes 4 bedrooms, 3 bathrooms, and generous communal areas. The master bedroom features an en-suite bathroom and a private balcony with sea views.
              </p>
              <p>
                Outside, the 350 square meter plot includes a private swimming pool, landscaped gardens, and multiple terraces for dining and relaxation. The property is equipped with smart home technology for climate control, lighting, and security.
              </p>
              <p>
                Built to the highest standards, Villa Mediterranea features energy-efficient design achieving an Energy Class A rating. The property includes 4 parking spaces, with convenient access to the main road while maintaining privacy.
              </p>
              <p>
                Video call viewings are available, and the property may be considered for exchange arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 