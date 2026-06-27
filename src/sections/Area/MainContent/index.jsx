"use client";

import Image from "next/image";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Star } from "lucide-react";

export default function MainContent() {
  const areaName = "All Areas";
  const restaurants = [
    { id: 1, name: "The Royal Symphony", cuisine: "North Indian", rating: 4.8, image: "/assets/website.webp" },
    { id: 2, name: "Cloud 9 Rooftop", cuisine: "Continental", rating: 4.6, image: "/assets/website1.webp" },
    { id: 3, name: "Elysium Dining", cuisine: "Modern Indian", rating: 4.9, image: "/assets/restimage.webp" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Content */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Top Rated in Area */}
          <section>
            <h2 className="font-playfair text-2xl font-bold text-[var(--color-primary)] mb-6 border-b border-[var(--color-border)] pb-2">Top Rated in {areaName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {restaurants.map((restaurant, index) => (
                <Card key={restaurant.id} className="group cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={restaurant.image} alt={restaurant.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-700" priority={index === 0} />
                    <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded text-sm font-semibold flex items-center">
                      {restaurant.rating} <Star className="w-3 h-3 text-amber-500 fill-amber-500 ml-1" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-[var(--color-primary)]">{restaurant.name}</h3>
                    <p className="text-sm text-[var(--color-subtext)]">{restaurant.cuisine}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

        </div>

        {/* Map Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-[var(--radius-luxury)] p-6 shadow-soft sticky top-32 border border-[var(--color-border)]/50">
            <h3 className="font-playfair text-xl font-bold text-[var(--color-primary)] mb-4">Area Map</h3>
            <div className="h-64 bg-gray-100 rounded-xl overflow-hidden relative mb-4">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                Interactive Map Integration
              </div>
            </div>
            <p className="text-sm text-[var(--color-subtext)] mb-6">
              Explore restaurants on the map to find the perfect location for your next dining experience.
            </p>
            <Button className="w-full">Open Full Map</Button>
          </div>
        </div>

      </div>
    </div>
  );
}
