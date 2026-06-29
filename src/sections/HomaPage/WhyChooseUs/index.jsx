"use client";

import { motion } from "framer-motion";
import { Video, Utensils, Star, MapPin } from "lucide-react";
import Card from "@/components/ui/Card";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Professional Reel Production",
      description: "Luxury cinematic storytelling.",
      icon: <Video className="w-10 h-10 text-[#D4AF37]" />,
    },
    {
      title: "Premium Restaurant Discovery",
      description: "Only carefully selected luxury restaurants and cafés.",
      icon: <Utensils className="w-10 h-10 text-[#D4AF37]" />,
    },
    {
      title: "Curated Recommendations",
      description: "Every recommendation is thoughtfully selected for quality and experience.",
      icon: <Star className="w-10 h-10 text-[#D4AF37]" />,
    },
    {
      title: "Ahmedabad Focused",
      description: "Dedicated exclusively to discovering Ahmedabad's finest dining destinations.",
      icon: <MapPin className="w-10 h-10 text-[#D4AF37]" />,
    },
  ];

  const itemVariants = {
    hidden:  { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <section id="whyChooseUsSection" className="section-py bg-[var(--color-primary)]">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-fluid-title font-bold text-[var(--color-warm-ivory)] mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Why Choose DINECODE
          </motion.h2>
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-[var(--color-warm-ivory)]/80 max-w-2xl mx-auto text-lg font-light"
          >
            Ahmedabad's trusted luxury dining discovery platform, connecting premium restaurants with discerning diners.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
          initial="visible"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6 md:p-8 h-full flex flex-col bg-white rounded-lg border border-transparent shadow-soft hover:shadow-soft-hover hover:border-[var(--color-secondary)] hover:-translate-y-2 transition-all duration-300 ease-out">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-xl text-[var(--color-primary)] mb-3 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-[var(--color-subtext)] leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
