"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Compass, Eye, Sparkles, Utensils, CheckCircle2, Award } from "lucide-react";

export default function StorySection() {
  return (
    <div className="bg-[var(--color-background)] py-24">
      <div className="luxury-container space-y-24">
        {/* Row 1: Brand Story & Curated Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Component with Floating Glass Accent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[350px] sm:h-[450px] lg:h-[550px] rounded-[var(--radius-luxury)] overflow-hidden shadow-2xl group"
          >
            <Image
              src="/assets/restimage.webp"
              alt="DINECODE Luxury Dining Room"
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
            
            {/* Floating Glass Badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl z-20 shadow-lg text-white">
              <Sparkles className="w-5 h-5 text-[var(--color-secondary)] mb-1" />
              <p className="font-playfair text-base italic font-medium leading-relaxed">
                "Curating unforgettable epicurean memories in Ahmedabad."
              </p>
            </div>
          </motion.div>

          {/* Concise Text & Badges Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-3">
              <span className="text-[var(--color-secondary)] font-semibold uppercase tracking-wider text-2xs block">
                The Heritage & Craft
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[var(--color-primary)] leading-tight">
                Our Brand Story
              </h2>
              <div className="w-16 h-1 bg-[var(--color-secondary)]" />
            </div>

            <p className="text-[var(--color-subtext)] font-light leading-relaxed text-base md:text-lg">
              Ahmedabad’s culinary landscape is undergoing a magnificent evolution. DineCode was founded to curate the city's finest gastronomic spaces, ensuring every reservation translates into a beautiful, unforgettable memory.
            </p>

            {/* Curated Checklists */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                { title: "Strict Curation", desc: "Rigorous standards for quality." },
                { title: "Ambience First", desc: "Stunning design & atmospheres." },
                { title: "Verified Hygiene", desc: "Checked for absolute cleanliness." },
                { title: "Expert Service", desc: "Warm and professional hospitality." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center text-[var(--color-secondary)] shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[var(--color-primary)]">{item.title}</h4>
                    <p className="text-2xs text-[var(--color-subtext)]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Row 2: Visual Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-[var(--radius-luxury)] shadow-soft border border-[var(--color-border)]/50 hover:shadow-soft-hover hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-secondary)]" />
            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center shrink-0 text-[var(--color-secondary)] group-hover:scale-110 transition-transform">
                <Compass className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="font-playfair text-2xl font-bold text-[var(--color-primary)]">
                  Our Mission
                </h3>
                <p className="text-[var(--color-subtext)] font-light leading-relaxed text-lg">
                  To connect passionate epicureans with exceptional establishments that represent the absolute peak of local gastronomy.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-[var(--radius-luxury)] shadow-soft border border-[var(--color-border)]/50 hover:shadow-soft-hover hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-secondary)]" />
            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center shrink-0 text-[var(--color-secondary)] group-hover:scale-110 transition-transform">
                <Eye className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="font-playfair text-2xl font-bold text-[var(--color-primary)]">
                  Our Vision
                </h3>
                <p className="text-[var(--color-subtext)] font-light leading-relaxed text-lg">
                  To become India's definitive authority and most trusted platform for premium hospitality discovery in every city.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 3: 3-Pillar Visual Grid */}
        <div className="space-y-10 pt-8">
          <div className="text-center space-y-2">
            <h3 className="font-playfair text-2xl md:text-5xl font-bold text-[var(--color-primary)]">
              Our Core Pillars
            </h3>
            <p className="text-md text-[var(--color-subtext)] uppercase tracking-widest">
              What sets DineCode apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Utensils className="w-5 h-5" />,
                title: "Culinary Refinement",
                desc: "Only restaurants displaying authentic flavor craft and chef mastery make our selection."
              },
              {
                icon: <Award className="w-5 h-5" />,
                title: "Exquisite Ambience",
                desc: "From heritage architecture to minimalist rooftops, we prioritize ambient character."
              },
              {
                icon: <Sparkles className="w-5 h-5" />,
                title: "Absolute Consistency",
                desc: "Every recommendation is regularly verified for service, hygiene, and standards."
              }
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-[var(--color-border)]/50 text-center space-y-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] rounded-full flex items-center justify-center mx-auto group-hover:scale-115 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h4 className="font-playfair font-bold text-2xl text-[var(--color-primary)]">
                  {pillar.title}
                </h4>
                <p className="text-lg text-[var(--color-subtext)] leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
