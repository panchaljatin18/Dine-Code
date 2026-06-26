import Image from "next/image";
import { Star } from "lucide-react";

import { restaurant } from "../data";

export default function HeroSection() {
  return (
    <div className="relative h-[50vh] min-h-[400px] w-full">
      <Image 
        src={restaurant.image}
        alt={restaurant.name}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      
      <div className="absolute bottom-0 left-0 w-full p-6 lg:p-12 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">{restaurant.name}</h1>
          <div className="flex flex-wrap items-center gap-6 text-sm md:text-base">
            <div className="flex items-center bg-green-600/90 backdrop-blur-sm px-3 py-1 rounded font-semibold">
              {restaurant.rating} <Star className="w-4 h-4 ml-1 fill-white" />
            </div>
            <span className="text-white/80">{restaurant.reviews} Reviews</span>
            <span className="text-white/80">•</span>
            <span className="text-white/80">{restaurant.cuisine}</span>
            <span className="text-white/80">•</span>
            <span className="text-white/80">{restaurant.priceForTwo} for two</span>
          </div>
        </div>
      </div>
    </div>
  );
}
