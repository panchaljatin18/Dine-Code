"use client";


import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function HeroBanner() {
  const areaName = "All Areas";
  return (
    <div className="bg-[var(--color-primary)] pt-32 pb-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center justify-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
        >
          {areaName}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/80 max-w-2xl text-lg font-light flex items-center justify-center mx-auto"
        >
          <MapPin className="w-5 h-5 mr-2 text-[var(--color-secondary)]" />
          Discover 120+ premium dining places in this area.
        </motion.p>
      </div>
    </div>
  );
}
