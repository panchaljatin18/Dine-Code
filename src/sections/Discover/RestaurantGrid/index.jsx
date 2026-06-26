"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { Star, MapPin, SlidersHorizontal, Clock, CheckCircle2, ChefHat } from "lucide-react";

import { restaurants } from "@/data/restaurants";

function RestaurantGridContent() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [quickViewRestaurant, setQuickViewRestaurant] = useState(null);
  const searchParams = useSearchParams();

  const query = searchParams.get("q")?.toLowerCase() || "";
  const areaQuery = searchParams.get("area")?.toLowerCase() || "";
  const cuisineQuery = searchParams.get("cuisine")?.toLowerCase() || "";

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesQuery = query ? restaurant.name.toLowerCase().includes(query) : true;
    const matchesArea = areaQuery ? restaurant.location.toLowerCase().includes(areaQuery) : true;
    const matchesCuisine = cuisineQuery ? restaurant.cuisine.toLowerCase().includes(cuisineQuery) : true;
    return matchesQuery && matchesArea && matchesCuisine;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-4">
          <Button variant="outline" className="w-full" onClick={() => setIsFilterOpen(!isFilterOpen)}>
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Sidebar Filters */}
        <div className={`lg:w-1/4 ${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
          <div className="bg-white p-6 rounded-[var(--radius-luxury)] shadow-soft sticky top-32 border border-[var(--color-border)]/50">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--color-border)]">
              <h3 className="font-bold text-[var(--color-primary)] text-lg">Filters</h3>
              <span className="text-sm text-[var(--color-secondary)] cursor-pointer">Clear All</span>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[var(--color-primary)] mb-3">Cuisine</h4>
                <div className="space-y-2 text-sm text-[var(--color-subtext)]">
                  {["North Indian", "Italian", "Chinese", "Continental", "Gujarati"].map(c => (
                    <label key={c} className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-[var(--color-secondary)] focus:ring-[var(--color-secondary)]" />
                      <span>{c}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[var(--color-primary)] mb-3">Area</h4>
                <div className="space-y-2 text-sm text-[var(--color-subtext)]">
                  {["SG Highway", "Sindhu Bhavan", "Bodakdev", "Prahlad Nagar"].map(a => (
                    <label key={a} className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-[var(--color-secondary)] focus:ring-[var(--color-secondary)]" />
                      <span>{a}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[var(--color-primary)] mb-3">Features</h4>
                <div className="space-y-2 text-sm text-[var(--color-subtext)]">
                  {["Pure Veg", "Rooftop", "Outdoor Seating", "Parking Available"].map(f => (
                    <label key={f} className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-[var(--color-secondary)] focus:ring-[var(--color-secondary)]" />
                      <span>{f}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            
            <Button className="w-full mt-8">Apply Filters</Button>
          </div>
        </div>

        {/* Restaurant Grid */}
        <div className="lg:w-3/4">
          {filteredRestaurants.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredRestaurants.map((restaurant, index) => (
                <motion.div
                  key={restaurant.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <Card className="h-full flex flex-col group bg-white shadow-soft">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image 
                        src={restaurant.image} 
                        alt={restaurant.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        priority={index === 0}
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center shadow-sm">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500 mr-1" />
                        <span className="font-semibold text-sm text-gray-900">{restaurant.rating}</span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-grow bg-white">
                      <h3 className="font-playfair text-xl font-bold text-[var(--color-primary)] mb-2 group-hover:text-[var(--color-secondary)] transition-colors line-clamp-1">
                        {restaurant.name}
                      </h3>
                      <p className="text-[var(--color-subtext)] text-sm mb-4 line-clamp-1">
                        {restaurant.cuisine}
                      </p>
                      <div className="flex items-center text-sm text-[var(--color-subtext)] mb-6">
                        <MapPin className="w-4 h-4 mr-1 text-[var(--color-secondary)] shrink-0" />
                        <span className="line-clamp-1">{restaurant.location}</span>
                        <span className="mx-2">•</span>
                        <span className="whitespace-nowrap">{restaurant.priceForTwo} for two</span>
                      </div>
                      <div className="mt-auto flex gap-2">
                        <Button 
                          variant="outline" 
                          className="flex-1 whitespace-nowrap text-[13px] md:text-sm px-1 py-2.5 w-full"
                          onClick={() => setQuickViewRestaurant(restaurant)}
                        >
                          Quick View
                        </Button>
                        <Link href={`/discover/${restaurant.slug}`} className="flex-1">
                          <Button className="w-full whitespace-nowrap text-[13px] md:text-sm px-1 py-2.5 w-full h-full">View Details</Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <h3 className="text-2xl font-playfair font-bold text-[var(--color-primary)] mb-2">No restaurants found</h3>
              <p className="text-[var(--color-subtext)]">Try adjusting your search criteria</p>
            </div>
          )}

          {/* Pagination */}
          {filteredRestaurants.length > 0 && (
            <div className="flex justify-center mt-12 space-x-2">
              {[1, 2, 3, 4].map(page => (
                <button 
                  key={page} 
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${page === 1 ? 'bg-[var(--color-primary)] text-white' : 'bg-white text-[var(--color-primary)] hover:bg-gray-100 border border-[var(--color-border)]'}`}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Quick View Modal */}
      <Modal isOpen={!!quickViewRestaurant} onClose={() => setQuickViewRestaurant(null)}>
        {quickViewRestaurant && (
          <div className="flex flex-col md:flex-row h-full">
            <div className="relative w-full md:w-2/5 h-64 md:h-auto shrink-0">
              <Image 
                src={quickViewRestaurant.image} 
                alt={quickViewRestaurant.name}
                fill
                className="object-cover rounded-t-[var(--radius-luxury)] md:rounded-tr-none md:rounded-l-[var(--radius-luxury)]"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <div className="flex items-start justify-between mb-2">
                <h2 className="font-playfair text-3xl font-bold text-[var(--color-primary)]">
                  {quickViewRestaurant.name}
                </h2>
                <div className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full flex items-center font-bold">
                  {quickViewRestaurant.rating} <Star className="w-4 h-4 ml-1 fill-amber-700" />
                </div>
              </div>
              
              <p className="text-[var(--color-secondary)] font-medium mb-4">
                {quickViewRestaurant.cuisine}
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {quickViewRestaurant.description}
              </p>

              <div className="space-y-4 mb-8 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="flex items-center text-sm">
                  <MapPin className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
                  <span className="font-medium text-gray-700">{quickViewRestaurant.location}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
                  <span className="font-medium text-gray-700">{quickViewRestaurant.timings}</span>
                </div>
                <div className="flex items-center text-sm">
                  <ChefHat className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
                  <span className="font-medium text-gray-700">Chef Recommends: <span className="text-[var(--color-secondary)]">{quickViewRestaurant.chefRecommendation}</span></span>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">Features</h4>
                <div className="flex flex-wrap gap-2">
                  {quickViewRestaurant.features.map(feature => (
                    <span key={feature} className="flex items-center bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-green-600" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex gap-4 pt-4 border-t border-gray-100">
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">Average Cost</p>
                  <p className="text-xl font-bold text-gray-900">{quickViewRestaurant.priceForTwo} <span className="text-sm font-normal text-gray-500">for two</span></p>
                </div>
                <Link href={`/discover/${quickViewRestaurant.slug}`} className="flex-1">
                  <Button className="w-full h-full text-lg">Book a Table</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Modal>

    </div>
  );
}

export default function RestaurantGrid() {
  return (
    <Suspense fallback={<div className="flex justify-center p-12">Loading restaurants...</div>}>
      <RestaurantGridContent />
    </Suspense>
  );
}
