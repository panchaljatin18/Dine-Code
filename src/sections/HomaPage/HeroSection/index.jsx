"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/photo3.webp"
          alt="Luxury dining atmosphere"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 md:pt-28">
        <motion.h1
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-playfair text-fluid-hero font-bold text-[var(--color-warm-ivory)] mb-6 tracking-tight leading-tight"
        >
          Discover Ahmedabad's Finest <br className="hidden md:block" /> Dining Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-fluid-body text-[var(--color-warm-ivory)] mb-10 max-w-2xl mx-auto font-normal"
        >
          <span className="text-[var(--color-secondary)] font-semibold">Explore luxury restaurants</span>, <span className="text-[var(--color-secondary)] font-semibold">cafés</span>, <span className="text-[var(--color-secondary)] font-semibold">rooftop dining</span>, <span className="text-[var(--color-secondary)] font-semibold">romantic places and </span><span className="text-[var(--color-secondary)] font-semibold">hidden food gems</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 max-w-md mx-auto"
        >
          <Button
            onClick={() => router.push("/discover")}
            className="w-full sm:w-auto px-8 py-4 h-auto text-base rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Explore Restaurants
          </Button>
          <Button
            onClick={() => router.push("/contact")}
            variant="glass"
            className="w-full sm:w-auto px-8 py-4 h-auto text-base rounded-full"
          >
            Partner With Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
