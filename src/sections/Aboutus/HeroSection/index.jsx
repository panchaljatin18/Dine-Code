"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="bg-[var(--color-primary)] pt-32 pb-20 px-6 lg:px-12 relative overflow-hidden text-center">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6"
        >
          About DineCode
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-8"
        />
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white/80 text-lg max-w-3xl mx-auto font-light leading-relaxed"
        >
          DINECODE is the premier guide to the finest culinary experiences in the city. We believe that dining is not just about food—it's about the ambiance, the service, the presentation, and the unforgettable moments created around the table.
        </motion.p>
      </div>
    </div>
  );
}
