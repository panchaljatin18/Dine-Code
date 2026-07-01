"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Collections() {
  const collections = [
    { title: "Best Rooftop Restaurants", count: "12 Places", image: "/assets/website1.webp" },
    { title: "Romantic Dinner", count: "8 Places", image: "/assets/photo3.webp" },
    { title: "Luxury Dining", count: "15 Places", image: "/assets/website.webp" },
    { title: "Instagram Worthy Cafes", count: "24 Places", image: "/assets/image.webp" },
  ];

  const CardItem = ({ collection }) => (
    <>
      <Image
        src={collection.image}
        alt={collection.title}
        fill
        sizes="(max-width: 640px) 72vw, 300px"
        className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 p-5 w-full z-20">
        <h3 className="font-playfair text-lg font-bold text-white mb-1 group-hover:text-[var(--color-secondary)] transition-colors">
          {collection.title}
        </h3>
        <div className="flex items-center justify-between text-white/80 text-sm">
          <span>{collection.count}</span>
          <span className="flex items-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            Explore <ArrowRight className="w-4 h-4 ml-1" />
          </span>
        </div>
      </div>
    </>
  );

  return (
    <div>
      {/* ── MOBILE / TABLET (< lg): Native touch snap scroll ── */}
      <div className="lg:hidden">
        <section className="h-screen overflow-hidden bg-[var(--color-soft-cream)] flex flex-col justify-center">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 px-5"
          >
            <h2 className="font-playfair text-fluid-title font-bold text-[var(--color-primary)] mb-3">
              Best of the City
            </h2>
            <div className="w-20 h-1 bg-[var(--color-secondary)] mx-auto mb-4" />
            <p className="text-[var(--color-subtext)] text-sm max-w-xs mx-auto">
              Explore curated lists of top restaurants, cafes, and bars in Ahmedabad.
            </p>
          </motion.div>

          {/* Horizontal scroll cards container */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
          >
            <div className="flex items-center w-max px-5 gap-4">
              {collections.map((collection, index) => (
                <div
                  key={index}
                  className="group relative w-[72vw] max-w-[300px] h-[260px] shrink-0 rounded-[var(--radius-luxury)] overflow-hidden cursor-pointer snap-center snap-always"
                >
                  <CardItem collection={collection} />
                </div>
              ))}
              <div className="w-[5vw] shrink-0" />
            </div>
          </motion.div>
        </section>
      </div>

      {/* ── DESKTOP (lg+): Static section with grid ── */}
      <section id="collectionsSection" className="hidden lg:block min-h-screen flex flex-col justify-center section-py bg-warm-ivory overflow-hidden">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-playfair text-fluid-title font-bold text-royal-navy mb-4"
            >
              Best of the City
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[var(--color-subtext)] max-w-2xl mx-auto"
            >
              Explore curated lists of top restaurants, cafes, and bars in Ahmedabad, based on trends.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {collections.map((collection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative h-[350px] rounded-[var(--radius-luxury)] overflow-hidden cursor-pointer"
              >
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 p-6 w-full z-20">
                  <h3 className="font-playfair text-xl font-bold text-white mb-1 group-hover:text-[var(--color-secondary)] transition-colors">
                    {collection.title}
                  </h3>
                  <div className="flex items-center justify-between text-white/80 text-sm">
                    <span>{collection.count}</span>
                    <span className="flex items-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Explore <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
