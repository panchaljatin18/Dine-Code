"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Search, MapPin, Utensils } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [area, setArea] = useState("");
  const [cuisine, setCuisine] = useState("");

  const popularSearches = ["Fine Dining", "Buffet", "Rooftop", "Cafe", "Gujarati", "Italian", "Chinese"];

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (area.trim()) params.set("area", area.trim());
    if (cuisine.trim()) params.set("cuisine", cuisine.trim());
    router.push(`/discover?${params.toString()}`);
  };

  const handlePopularSearchClick = (search) => {
    setQuery(search);
    router.push(`/discover?q=${encodeURIComponent(search)}`);
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80")' }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 md:pt-28">
        {/* H1 — always visible, no opacity:0 initial */}
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
          className="text-fluid-body text-[var(--color-warm-ivory)]/90 mb-10 max-w-2xl mx-auto font-light"
        >
          Explore luxury restaurants, cafés, rooftop dining, romantic places and hidden food gems.
        </motion.p>

        {/* Search Bar */}
        <motion.form
          onSubmit={handleSearch}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="bg-white p-2 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-stretch md:items-center gap-0 max-w-3xl mx-auto mb-6"
        >
          <div className="flex items-center w-full px-4 py-3 border-b md:border-b-0 md:border-r border-gray-100">
            <Search className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
            <input
              type="text"
              placeholder="Search Restaurant"
              className="w-full bg-transparent border-none focus:outline-none text-gray-800 placeholder-gray-400"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center w-full px-4 py-3 border-b md:border-b-0 md:border-r border-gray-100">
            <MapPin className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
            <input
              type="text"
              placeholder="Search Area"
              className="w-full bg-transparent border-none focus:outline-none text-gray-800 placeholder-gray-400"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </div>
          <div className="flex items-center w-full px-4 py-3">
            <Utensils className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
            <input
              type="text"
              placeholder="Search Cuisine"
              className="w-full bg-transparent border-none focus:outline-none text-gray-800 placeholder-gray-400"
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            className="w-full md:w-auto rounded-xl md:rounded-full px-6 py-3 h-auto text-base shrink-0 group mt-1 md:mt-0"
          >
            Search
            <Search className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
          </Button>
        </motion.form>

        {/* Popular Searches */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-white/70 text-xs sm:text-sm font-medium">Popular:</span>
          {popularSearches.map((search) => (
            <span
              key={search}
              onClick={() => handlePopularSearchClick(search)}
              className="text-xs px-3 py-1.5 rounded-full border border-white/20 text-white/90 hover:bg-white/20 hover:border-white/40 cursor-pointer transition-all glassmorphism-dark"
            >
              {search}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
