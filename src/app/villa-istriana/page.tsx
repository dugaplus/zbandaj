'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { translations } from "@/utils/translations";
import { useLanguage } from "@/contexts/LanguageContext";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function VillaIstrianaPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const features = [
    { name: '4 Bedrooms', icon: '🛏️' },
    { name: '2 Bathrooms', icon: '🚿' },
    { name: 'Sea View', icon: '🌊' },
    { name: 'Private Pool', icon: '🏊' },
    { name: 'Garden', icon: '🌳' },
    { name: 'Parking (4)', icon: '🚗' },
    { name: 'Balcony', icon: '🏠' },
    { name: 'Terrace', icon: '☀️' },
    { name: 'Year Built: 2025', icon: '📅' },
    { name: 'Energy Class A', icon: '⚡' },
  ];

  return (
    <main>
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
              <h1 className="heading-1 heading-light text-primary mb-6">Villa Istriana</h1>
              <div className="text-xl font-bold text-accent mb-6">€611,000</div>
              <p className="text-neutral-600 mb-8">
                A stunning new build villa with panoramic sea views, private pool, and modern amenities. 
                Features spacious living areas with fireplace and seamless indoor-outdoor living. Located 
                in the peaceful area of Žbandaj near Poreč, this villa offers the perfect balance of privacy
                and convenience.
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
                  src="/media/zbandaj02.jpg"
                  alt="Villa Istriana"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="relative h-24 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/media/zbandaj07.jpg"
                    alt="Villa Interior"
                    fill
                    sizes="(max-width: 1024px) 33vw, 16vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-24 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/media/zbandaj04.jpg"
                    alt="Villa Exterior"
                    fill
                    sizes="(max-width: 1024px) 33vw, 16vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-24 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/media/zbandaj01.jpg"
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
            "/media/zbandaj02.jpg",
            "/media/zbandaj07.jpg",
            "/media/zbandaj04.jpg",
            "/media/zbandaj01.jpg",
            "/media/PHOTO-2024-11-07-14-56-48.jpg",
            "/media/PHOTO-2024-11-07-14-56-44 2.jpg",
            "/media/PHOTO-2024-11-07-14-56-37 5.jpg",
            "/media/PHOTO-2024-11-07-14-56-40.jpg",
          ].map((src, index) => (
            <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <Image 
                src={src} 
                alt={`Villa Istriana Image ${index + 1}`} 
                fill 
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-300" 
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-primary text-white py-12 mb-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 heading-dark mb-6">{language === 'en' ? 'Interested in Villa Istriana?' : 'Interesse an Villa Istriana?'}</h2>
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
                    ? 'Žbandaj is a charming residential area that combines rural tranquility with easy access to the Istrian coast. The location is perfect for those seeking privacy without sacrificing convenience.'
                    : 'Žbandaj ist ein charmantes Wohngebiet, das ländliche Ruhe mit einfachem Zugang zur istrischen Küste verbindet. Die Lage ist perfekt für diejenigen, die Privatsphäre suchen, ohne auf Komfort zu verzichten.'}
                </p>
                <p className="text-neutral-700">
                  {language === 'en'
                    ? 'The surrounding area offers numerous attractions including historic sites, beautiful beaches, and world-class culinary experiences that Istria is famous for.'
                    : 'Die Umgebung bietet zahlreiche Attraktionen, darunter historische Stätten, schöne Strände und erstklassige kulinarische Erlebnisse, für die Istrien berühmt ist.'}
                </p>
              </div>
            </div>
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
                We are selling a new building in Žbandaj, a modern house with an unforgettable sea view. Located in a peaceful environment, this home offers the perfect combination of privacy and proximity to all important amenities.
              </p>
              <p>
                The house is spread over a spacious plot of land and was designed with special emphasis on open space and natural light. The spacious living room with fireplace blends perfectly with the outdoor space, providing a carefree transition between indoor and outdoor living. Large glass surfaces allow uninterrupted views of the sea and the nature surrounding the house, creating a sense of tranquility and connection with the environment.
              </p>
              <p>
                This two-story home features solid brick construction built to the highest standards. With 168 square meters of living space on a 350 square meter plot, the villa includes 4 bedrooms, spacious common areas, and modern features throughout.
              </p>
              <p>
                The property includes a private pool, 4 parking spaces, and both balcony and terrace spaces perfect for outdoor entertaining. Built with energy efficiency in mind, the home carries an Energy Class A rating.
              </p>
              <p>
                Video call tours available for remote viewing. Property exchange options may be considered.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 