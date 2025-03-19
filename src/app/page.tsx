'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  // Function to get random images from the media folder
  const getRandomImage = (excludeImages: string[] = []): string => {
    const newImages = [
      "PHOTO-2024-11-07-14-56-39 2.jpg",
      "PHOTO-2024-11-07-14-56-39 3.jpg",
      "PHOTO-2024-11-07-14-56-40 2.jpg",
      "PHOTO-2024-11-07-14-56-44.jpg",
      "PHOTO-2024-11-07-14-56-47.jpg",
      "PHOTO-2024-11-07-14-56-48 3.jpg",
      "PHOTO-2024-11-07-14-56-48 6.jpg",
      "PHOTO-2024-11-07-14-56-48 7.jpg",
      "PHOTO-2024-11-07-14-56-48 8.jpg",
      "PHOTO-2024-11-07-14-56-48.jpg",
      "PHOTO-2024-11-07-14-56-49.jpg",
      "PHOTO-2024-11-07-14-56-38 3.jpg",
      "PHOTO-2024-11-07-14-56-39.jpg",
      "PHOTO-2024-11-07-14-56-40.jpg",
      "PHOTO-2024-11-07-14-56-44 2.jpg",
      "PHOTO-2024-11-07-14-56-48 2.jpg",
      "PHOTO-2024-11-07-14-56-48 4.jpg",
      "PHOTO-2024-11-07-14-56-48 5.jpg",
      "PHOTO-2024-11-07-14-56-16.jpg",
      "PHOTO-2024-11-07-14-56-35 2.jpg",
      "PHOTO-2024-11-07-14-56-35.jpg"
    ].filter(img => !excludeImages.includes(img));
    
    const randomIndex = Math.floor(Math.random() * newImages.length);
    return `/media/${newImages[randomIndex]}`;
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/PHOTO-2024-11-07-14-56-48 4.jpg"
            alt="Luxury Villa"
            fill
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
            Luxury Living in Croatia
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our exclusive collection of modern villas, where Mediterranean charm meets contemporary design.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="#villas" className="btn btn-primary">
              Explore Our Villas
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Villas Section */}
      <section id="villas" className="section bg-secondary">
        <div className="container">
          <h2 className="heading-2 heading-light text-center mb-16">Our Exclusive Villas</h2>
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
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="heading-3 heading-light mb-4">Villa Adriatica</h3>
                <p className="text-neutral-600 mb-4">
                  A stunning 4-bedroom villa with panoramic sea views, infinity pool, and modern amenities.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="relative h-32">
                    <Image src="/media/PHOTO-2024-11-07-14-56-37 3.jpg" alt="Villa Interior" fill className="object-cover rounded-lg" />
                  </div>
                  <div className="relative h-32">
                    <Image src="/media/PHOTO-2024-11-07-14-56-37.jpg" alt="Villa Exterior" fill className="object-cover rounded-lg" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-accent">€1,200,000</span>
                  <Link href="/villa-1" className="btn btn-secondary">
                    View Details
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
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="heading-3 heading-light mb-4">Villa Mediterranea</h3>
                <p className="text-neutral-600 mb-4">
                  A luxurious 5-bedroom villa featuring a private beach access, spa, and smart home technology.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="relative h-32">
                    <Image src="/media/PHOTO-2024-11-07-14-56-39 2.jpg" alt="Villa Interior" fill className="object-cover rounded-lg" />
                  </div>
                  <div className="relative h-32">
                    <Image src="/media/PHOTO-2024-11-07-14-56-40.jpg" alt="Villa Exterior" fill className="object-cover rounded-lg" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-accent">€1,500,000</span>
                  <Link href="/villa-2" className="btn btn-secondary">
                    View Details
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
          <h2 className="heading-2 heading-light text-center mb-16">Gallery</h2>
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
          <h2 className="heading-2 heading-dark mb-6">Interested in Our Villas?</h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Contact us to schedule a private viewing or learn more about our exclusive properties.
          </p>
          <Link href="/contact" className="btn btn-primary bg-white text-primary hover:bg-estate-light">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
} 