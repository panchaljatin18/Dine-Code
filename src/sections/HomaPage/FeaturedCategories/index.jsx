"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import { Utensils, Wine, Coffee, Pizza, IceCream, Star, CakeSlice, Heart, Carrot, Sandwich } from "lucide-react";

export default function FeaturedCategories() {
  const categories = [
    { name: "Fine Dining", icon: <Star className="w-8 h-8" />, color: "text-amber-500" },
    { name: "Rooftop Dining", icon: <Wine className="w-8 h-8" />, color: "text-purple-500" },
    { name: "Cafés", icon: <Coffee className="w-8 h-8" />, color: "text-amber-700" },
    { name: "Street Food", icon: <Pizza className="w-8 h-8" />, color: "text-orange-500" },
    { name: "Desserts", icon: <IceCream className="w-8 h-8" />, color: "text-pink-500" },
    { name: "Date Night", icon: <Heart className="w-8 h-8" />, color: "text-red-500" },
    { name: "Pure Veg", icon: <Carrot className="w-8 h-8" />, color: "text-green-500" },
    { name: "Bakery", icon: <CakeSlice className="w-8 h-8" />, color: "text-yellow-600" },
  ];

  const containerVariants = {
    hidden:  { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const itemVariants = {
    hidden:  { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <section className="section-py bg-[var(--color-pure-white)]">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-fluid-title font-bold text-[var(--color-primary)] mb-4"
          >
            Curated Experiences
          </motion.h2>
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[var(--color-secondary)] mx-auto"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="visible"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6"
        >
          {categories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-center cursor-pointer group bg-white border-2 border-[var(--color-border-luxury)] shadow-[0_4px_20px_rgba(11,35,72,0.08)] hover:shadow-[0_8px_30px_rgba(11,35,72,0.15)] hover:bg-[var(--color-primary)] hover:border-[var(--color-secondary)] transition-all duration-300 min-h-[120px] md:min-h-[150px]">
                <div className="mb-4 p-4 rounded-full bg-[var(--color-warm-ivory)] group-hover:bg-white/10 text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-base md:text-lg text-[var(--color-primary)] group-hover:text-white transition-colors duration-300">{category.name}</h3>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
