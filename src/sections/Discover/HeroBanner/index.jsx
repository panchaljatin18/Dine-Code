"use client";

import { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, MapPin, Utensils } from "lucide-react";
import Button from "@/components/ui/Button";

function SearchForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [area, setArea] = useState(searchParams.get("area") || "");
  const [cuisine, setCuisine] = useState(searchParams.get("cuisine") || "");

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (area.trim()) params.set("area", area.trim());
    if (cuisine.trim()) params.set("cuisine", cuisine.trim());
    router.push(`/discover?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="bg-white p-2 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-stretch md:items-center gap-0 max-w-3xl mx-auto mt-8"
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
    </form>
  );
}

export default function HeroBanner() {
  return (
    <div className="bg-[var(--color-primary)] pt-32 pb-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
          Discover Restaurants
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto font-light">
          Explore our handpicked selections of premium dining establishments. Refine your search using the searchbar or side filters.
        </p>
        <Suspense fallback={<div className="text-white/60 mt-8">Loading search...</div>}>
          <SearchForm />
        </Suspense>
      </div>
    </div>
  );
}
