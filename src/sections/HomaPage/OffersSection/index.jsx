"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { Tag } from "lucide-react";

export default function OffersSection() {
  const offers = [
    { title: "Special Deals", desc: "Up to 50% off on fine dining", code: "LUX50" },
    { title: "Happy Hours", desc: "1+1 on selected premium beverages", code: "HAPPY2" },
    { title: "Weekend Offers", desc: "Complimentary dessert on weekend dinners", code: "WEEKEND" },
  ];

  return (
    <section className="section-py bg-white relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-secondary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="luxury-container relative z-10">
        <div className="bg-[var(--color-primary)] rounded-[24px] md:rounded-[32px] p-6 sm:p-8 md:p-16 text-white shadow-2xl flex flex-col lg:flex-row items-center gap-8 md:gap-12">

          <div className="lg:w-1/3 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-fluid-title font-bold mb-4">Exclusive <br /> Dining Privileges</h2>
              <p className="text-white/80 mb-8 font-light">
                Unlock premium offers and curated experiences with DINECODE membership.
              </p>
              <Button variant="secondary" className="w-full sm:w-auto">
                Explore All Offers
              </Button>
            </motion.div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full">
            {offers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[24px] p-6 hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center mb-4 text-[var(--color-secondary)]">
                  <Tag className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">{offer.title}</h3>
                <p className="text-white/70 text-sm mb-4">{offer.desc}</p>
                <div className="inline-block bg-white/10 px-3 py-1 rounded text-sm font-mono text-[var(--color-secondary)] border border-[var(--color-secondary)]/30">
                  {offer.code}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
