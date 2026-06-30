"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import { MapPin } from "lucide-react";
import Image from "next/image";

export default function PopularAreas() {
  const areas = [
    { name: "SG Highway", count: "120+ Places", image: "/assets/photo.webp" },
    { name: "Sindhu Bhavan", count: "85+ Places", image: "/assets/image1.webp" },
    { name: "Bodakdev", count: "95+ Places", image: "/assets/photo1.webp" },
    { name: "Satellite", count: "110+ Places", image: "/assets/photo3.webp" },
    { name: "CG Road", count: "70+ Places", image: "/assets/website2.webp" },
    { name: "Prahlad Nagar", count: "65+ Places", image: "/assets/website.webp" },
  ];

  return (
    <div>
      {/* ── MOBILE / TABLET (< lg): Native touch snap scroll ── */}
      <div className="lg:hidden">
        <section className="min-h-screen overflow-hidden bg-[var(--color-royal-navy)] flex flex-col justify-center">
          {/* Header */}
          <div className="text-center mb-8 px-5">
            <h2 className="font-playfair text-fluid-title font-bold text-[var(--color-warm-ivory)] mb-3">
              Explore Popular Areas
            </h2>
            <div className="w-20 h-1 bg-[var(--color-secondary)] mx-auto" />
          </div>

          {/* Horizontal scroll cards container */}
          <div className="w-full overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory">
            <div className="flex items-center w-max px-5 gap-4">
              {areas.map((area, index) => (
                <div
                  key={index}
                  className="group relative w-[72vw] max-w-[300px] h-[220px] shrink-0 rounded-[16px] overflow-hidden cursor-pointer snap-center snap-always"
                >
                  <Image
                    src={area.image}
                    alt={area.name}
                    fill
                    sizes="(max-width: 640px) 72vw, 300px"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10" />
                  <div className="absolute inset-0 p-5 flex flex-col justify-end z-20">
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
      <section id="popularAreasSection" className="hidden min-h-screen lg:block flex flex-col justify-center section-py bg-[var(--color-royal-navy)] overflow-hidden">
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
                  <Image
                    src={area.image}
                    alt={area.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
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
