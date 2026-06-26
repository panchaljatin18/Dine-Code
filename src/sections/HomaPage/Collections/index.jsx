"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Collections() {
  const sectionMobileRef = useRef(null);
  const pinWrapMobileRef = useRef(null);

  const collections = [
    { title: "Best Rooftop Restaurants", count: "12 Places", image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80" },
    { title: "Romantic Dinner", count: "8 Places", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80" },
    { title: "Luxury Dining", count: "15 Places", image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80" },
    { title: "Instagram Worthy Cafes", count: "24 Places", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80" },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Only on mobile/tablet (< 1024px)
    if (window.innerWidth >= 1024) return;

    const pinWrap = pinWrapMobileRef.current;
    if (!pinWrap) return;

    let ctx = gsap.context(() => {
      const horizontalScrollLength = pinWrap.scrollWidth - window.innerWidth;

      gsap.to(pinWrap, {
        scrollTrigger: {
          trigger: sectionMobileRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${horizontalScrollLength}`,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
        x: -horizontalScrollLength,
        ease: "none",
      });
    }, sectionMobileRef);

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);
    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const CardItem = ({ collection }) => (
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
      style={{ backgroundImage: `url(${collection.image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 p-5 w-full">
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
    </div>
  );

  return (
    <div>
      {/* ── MOBILE / TABLET (< lg): GSAP pinned horizontal scroll ── */}
      {/* Outer wrapper div is the GSAP pin target — NOT the section */}
      <div ref={sectionMobileRef} className="lg:hidden">
        <section className="h-screen overflow-hidden bg-[var(--color-soft-cream)] flex flex-col justify-center">
          {/* Header */}
          <div className="text-center mb-8 px-5">
            <h2 className="font-playfair text-fluid-title font-bold text-[var(--color-primary)] mb-3">
              Curated Collections
            </h2>
            <div className="w-20 h-1 bg-[var(--color-secondary)] mx-auto mb-4" />
            <p className="text-[var(--color-subtext)] text-sm max-w-xs mx-auto">
              Explore curated lists of top restaurants, cafes, and bars in Ahmedabad.
            </p>
          </div>

          {/* Horizontal GSAP cards */}
          <div className="w-full overflow-hidden">
            <div ref={pinWrapMobileRef} className="flex items-center w-max px-5 gap-4">
            {collections.map((collection, index) => (
              <div
                key={index}
                className="group relative w-[72vw] max-w-[300px] h-[260px] shrink-0 rounded-[var(--radius-luxury)] overflow-hidden cursor-pointer"
              >
                <CardItem collection={collection} />
              </div>
            ))}
              <div className="w-[5vw] shrink-0" />
            </div>
          </div>
        </section>
      </div>

      {/* ── DESKTOP (lg+): Static section with grid ── */}
      <section className="hidden lg:block section-py bg-warm-ivory overflow-hidden">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-playfair text-fluid-title font-bold text-royal-navy mb-4"
            >
              Curated Collections
            </motion.h2>
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-6"
            />
            <motion.p
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[var(--color-subtext)] max-w-2xl mx-auto"
            >
              Explore curated lists of top restaurants, cafes, and bars in Ahmedabad, based on trends.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {collections.map((collection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative h-[350px] rounded-[var(--radius-luxury)] overflow-hidden cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${collection.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
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
