"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="bg-[var(--color-primary)] pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      <div className="max-w-4xl mx-auto relative z-10 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-playfair text-4xl md:text-5xl font-bold mb-6"
        >
          Get in Touch
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/70 text-lg font-light"
        >
          Have a question, feedback, or want to list your restaurant? We'd love to hear from you.
        </motion.p>
      </div>
    </div>
  );
}
