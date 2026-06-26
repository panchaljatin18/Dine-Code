"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="bg-[var(--color-primary)] pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6"
        >
          The Culinary Journal
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/70 text-lg font-light mb-10"
        >
          Stories, guides, and insights from the world of luxury dining.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative max-w-xl mx-auto"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search articles..." 
            className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full py-4 pl-12 pr-6 text-white placeholder-white/50 focus:outline-none focus:border-[var(--color-secondary)] transition-colors"
          />
        </motion.div>
      </div>
    </div>
  );
}
