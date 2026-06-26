"use client";


export default function HeroBanner() {
  const pageTitle = "Discover Restaurants";
  return (
    <div className="bg-[var(--color-primary)] pt-32 pb-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
          {pageTitle}
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto font-light">
          Explore our curated list of premium dining establishments. Refine your search using the filters below.
        </p>
      </div>
    </div>
  );
}
