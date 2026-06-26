"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import { MapPin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PopularAreas() {
  const sectionMobileRef = useRef(null);
  const pinWrapMobileRef = useRef(null);

  const areas = [
    { name: "SG Highway", count: "120+ Places", image: "https://images.unsplash.com/photo-1574097486827-0248439df686?w=800&q=80" },
    { name: "Sindhu Bhavan", count: "85+ Places", image: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=800&q=80" },
    { name: "Bodakdev", count: "95+ Places", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80" },
    { name: "Satellite", count: "110+ Places", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80" },
    { name: "CG Road", count: "70+ Places", image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80" },
    { name: "Prahlad Nagar", count: "65+ Places", image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80" },
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

  return (
    <div>
      {/* ── MOBILE / TABLET (< lg): GSAP pinned horizontal scroll ── */}
      {/* Outer wrapper div is the GSAP pin target — NOT the section */}
      <div ref={sectionMobileRef} className="lg:hidden">
        <section className="h-screen overflow-hidden bg-[var(--color-royal-navy)] flex flex-col justify-center">
          {/* Header */}
          <div className="text-center mb-8 px-5">
            <h2 className="font-playfair text-fluid-title font-bold text-[var(--color-warm-ivory)] mb-3">
              Explore Popular Areas
            </h2>
            <div className="w-20 h-1 bg-[var(--color-secondary)] mx-auto" />
          </div>

          {/* Horizontal GSAP cards */}
          <div className="w-full overflow-hidden">
            <div ref={pinWrapMobileRef} className="flex items-center w-max px-5 gap-4">
            {areas.map((area, index) => (
              <div
                key={index}
                className="group relative w-[72vw] max-w-[300px] h-[220px] shrink-0 rounded-[16px] overflow-hidden cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${area.image})` }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <h3 className="font-playfair text-lg font-bold text-white mb-1 flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-[var(--color-secondary)] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    {area.name}
                  </h3>
                  <p className="text-white/80 text-sm">{area.count}</p>
                </div>
              </div>
            ))}
              <div className="w-[5vw] shrink-0" />
            </div>
          </div>
        </section>
      </div>

      {/* ── DESKTOP (lg+): Static section with grid ── */}
      <section className="hidden lg:block section-py bg-[var(--color-royal-navy)] overflow-hidden">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-playfair text-fluid-title font-bold text-[var(--color-warm-ivory)] mb-4"
            >
              Explore Popular Areas
            </motion.h2>
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-[var(--color-secondary)] mx-auto"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {areas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="group relative h-64 overflow-hidden cursor-pointer">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${area.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="font-playfair text-xl md:text-2xl font-bold text-white mb-1 flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-[var(--color-secondary)] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {area.name}
                    </h3>
                    <p className="text-white/80 text-sm">{area.count}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
