"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function StorySection() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-[var(--radius-luxury)] overflow-hidden"
          >
            <Image
              src="/assets/restimage.webp"
              alt="DINECODE Team"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">Our Brand Story</h2>
              <p className="text-[var(--color-subtext)] font-light leading-relaxed">
                Born from a passion for exquisite gastronomy and elegant hospitality, DINECODE was created to bridge the gap between discerning diners and extraordinary restaurants. In a city brimming with culinary talent, we curate only those establishments that meet our rigorous standards for luxury, quality, and service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[var(--color-border)]">
              <div>
                <h3 className="font-bold text-xl text-[var(--color-primary)] mb-3">Our Mission</h3>
                <p className="text-[var(--color-subtext)] font-light text-sm">
                  To elevate the dining culture by connecting connoisseurs with unforgettable epicurean adventures, while empowering premium restaurants to showcase their artistry.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl text-[var(--color-primary)] mb-3">Our Vision</h3>
                <p className="text-[var(--color-subtext)] font-light text-sm">
                  To be the definitive authority and most trusted platform for luxury hospitality discovery across India, starting with the vibrant heart of Ahmedabad.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
