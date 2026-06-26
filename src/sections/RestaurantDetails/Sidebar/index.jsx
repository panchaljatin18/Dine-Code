import Button from "@/components/ui/Button";
import { MapPin, Phone, Clock } from "lucide-react";

import { restaurant } from "../data";

export default function Sidebar() {
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-[var(--radius-luxury)] p-8 shadow-soft sticky top-32 border border-[var(--color-border)]/50">
        <h3 className="font-playfair text-xl font-bold text-[var(--color-primary)] mb-6">Reserve a Table</h3>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-start">
            <MapPin className="w-5 h-5 mr-3 mt-1 text-[var(--color-secondary)] shrink-0" />
            <span className="text-[var(--color-subtext)] text-sm">{restaurant.address}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-3 text-[var(--color-secondary)] shrink-0" />
            <span className="text-[var(--color-subtext)] text-sm">{restaurant.hours}</span>
          </div>
          <div className="flex items-center">
            <Phone className="w-5 h-5 mr-3 text-[var(--color-secondary)] shrink-0" />
            <span className="text-[var(--color-subtext)] text-sm">{restaurant.phone}</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Button className="w-full">Reserve Table</Button>
          <Button variant="outline" className="w-full">Call Now</Button>
        </div>

        {/* Dummy Map Container */}
        <div className="mt-8 h-48 bg-gray-100 rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
            Interactive Map Integration
          </div>
        </div>
        
      </div>
    </div>
  );
}
