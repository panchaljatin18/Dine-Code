"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, UtensilsCrossed, Wine, MapPin, Camera, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PreFooterCTA() {
  const pathname = usePathname();

  // Hide on auth pages to keep login/signup screens focused
  const isAuthPage = pathname && (
    pathname.startsWith("/login") ||
    pathname.startsWith("/signup")
  );

  if (isAuthPage) return null;

  const particleVariants = {
    animate: (custom) => ({
      y: [0, -20, 0],
      x: [0, custom.x, 0],
      opacity: [0.2, 0.7, 0.2],
      transition: {
        duration: custom.duration,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  const features = [
    {
      icon: UtensilsCrossed,
      title: "Curated Experiences",
      description: "Handpicked luxury restaurants.",
    },
    {
      icon: Wine,
      title: "Premium Dining",
      description: "Fine dining & chef specials.",
    },
    {
      icon: MapPin,
      title: "Citywide Coverage",
      description: "Explore every premium area.",
    },
    {
      icon: Camera,
      title: "Visual Stories",
      description: "Premium reels & photography.",
    },
    {
      icon: Crown,
      title: "Luxury Lifestyle",
      description: "Curated for elite food lovers.",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-[#0b2348] pt-16 md:pt-24 pb-12 px-4 md:px-8 overflow-hidden">
      <div className="max-w-[90rem] mx-auto relative overflow-hidden rounded-[28px] md:rounded-[32px] border border-[#D4AF37]/35 bg-gradient-to-br from-[#0B2348] via-[#081a38] to-[#040e20] shadow-[0_20px_50px_rgba(212,175,55,0.08)]">
        {/* Background radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.06),transparent_60%)] pointer-events-none" />

        {/* Floating Golden Particles (Very Minimal) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          <motion.div
            custom={{ x: 15, duration: 8 }}
            variants={particleVariants}
            animate="animate"
            className="absolute top-1/4 left-[10%] w-1.5 h-1.5 bg-[#D4AF37]/50 rounded-full blur-[0.5px]"
          />
          <motion.div
            custom={{ x: -10, duration: 11 }}
            variants={particleVariants}
            animate="animate"
            className="absolute top-2/3 left-[35%] w-1 h-1 bg-[#D4AF37]/60 rounded-full blur-[0.2px]"
          />
          <motion.div
            custom={{ x: 18, duration: 9 }}
            variants={particleVariants}
            animate="animate"
            className="absolute top-1/3 right-[30%] w-2.5 h-2.5 bg-[#D4AF37]/25 rounded-full blur-[1px]"
          />
          <motion.div
            custom={{ x: -15, duration: 12 }}
            variants={particleVariants}
            animate="animate"
            className="absolute top-3/4 right-[15%] w-1.5 h-1.5 bg-[#D4AF37]/45 rounded-full blur-[0.5px]"
          />
        </div>

        {/* Background Image on Right (Desktop: half-width, Mobile: full-width texture) */}
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-[48%] overflow-hidden pointer-events-none select-none">
          <Image
            src="/assets/luxury_dining_bg.png"
            alt="Luxury Dining Atmosphere"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover object-center"
          />
          {/* Natural fading overlay gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#ffff] via-[#ffff]/10 md:via-[#ffff]/15 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2348] via-transparent to-transparent z-10" />
        </div>

        {/* Card Content Grid */}
        <div className="relative z-20 px-6 py-10 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-10 lg:mb-16">
            {/* Left Side Content */}
            <div className="md:col-span-7 space-y-5 md:space-y-6 text-left">
              {/* Discover label */}
              <div className="flex items-center gap-3 text-[#D4AF37] tracking-[0.25em] text-xs font-semibold uppercase">
                <span className="h-[1px] w-6 bg-[#D4AF37]/35"></span>
                <span>Discover • Dine • Indulge</span>
                <span className="h-[1px] w-6 bg-[#D4AF37]/35"></span>
              </div>

              {/* Large elegant heading */}
              <h2 className="font-playfair text-2xl sm:text-4xl lg:text-5xl text-[#F5F1E8] font-bold leading-[1.2] md:leading-[1.15] tracking-wide max-w-2xl">
                Ahmedabad's Luxury Dining Guide
              </h2>

              {/* Description */}
              <p className="text-[#F5F1E8]/75 text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-xl">
                Discover handpicked restaurants, luxury cafés, chef experiences and hidden culinary gems across Ahmedabad.
              </p>

              {/* CTA Button */}
              <div className="pt-2">
                <Link href="/discover">
                  <motion.button
                    whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(212,175,55,0.35)" }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center h-12 md:h-14 px-6 md:px-8 rounded-full font-semibold text-xs md:text-base text-[#0B2348] bg-gradient-to-r from-[#D4AF37] via-[#F3D374] to-[#D4AF37] shadow-lg transition-all duration-300 group cursor-pointer"
                  >
                    Explore Restaurants
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>

          {/* Golden Divider Line before features */}
          <div className="h-[1px] bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/25 to-[#D4AF37]/0 mb-8 md:mb-10" />

          {/* Bottom Features Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-0">
            {features.map((feature, index) => {
              const IconComp = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={cn(
                    "px-2 sm:px-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-3 group lg:border-r lg:border-[#D4AF37]/20 last:border-r-0",
                    index === 4 && "col-span-2 md:col-span-1 lg:border-r-0"
                  )}
                >
                  {/* Outline Icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center bg-[#D4AF37]/5 shadow-[0_0_15px_rgba(212,175,55,0.03)] group-hover:border-[#D4AF37]/65 group-hover:bg-[#D4AF37]/15 transition-all duration-300">
                    <IconComp className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  {/* Title */}
                  <h3 className="text-[#F5F1E8] font-semibold text-xs sm:text-sm lg:text-base font-playfair tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  {/* Description */}
                  <p className="text-[#F5F1E8]/60 text-[10px] sm:text-xs lg:text-sm font-light leading-relaxed max-w-[12.5rem]">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
