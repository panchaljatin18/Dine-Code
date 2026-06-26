"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function StatsSection() {
  const stats = [
    { label: "Premium Restaurants", value: 120, suffix: "+" },
    { label: "Verified Reviews", value: 15000, suffix: "+" },
    { label: "Active Connoisseurs", value: 50, suffix: "K+" },
    { label: "Michelin Level Chefs", value: 25, suffix: "" },
  ];

  return (
    <div className="bg-[var(--color-primary)] py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-3"
            >
              <div className="text-4xl md:text-5xl font-playfair font-bold text-[var(--color-secondary)]">
                <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                {stat.suffix}
              </div>
              <div className="text-white/80 font-light text-sm tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
