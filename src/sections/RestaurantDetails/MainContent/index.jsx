import Image from "next/image";
import Button from "@/components/ui/Button";
import { Car, Music, Accessibility, Dog, Baby } from "lucide-react";

import { restaurant } from "../data";

export default function MainContent() {
  return (
    <div className="lg:col-span-2 space-y-12">
      
      {/* About */}
      <section>
        <h2 className="font-playfair text-2xl font-bold text-[var(--color-primary)] mb-6">About</h2>
        <p className="text-[var(--color-subtext)] leading-relaxed font-light">
          Experience the grandeur of royalty at {restaurant.name}. We offer an exquisite culinary journey through the rich heritage of {restaurant.cuisine} cuisines, crafted by master chefs using authentic recipes passed down through generations.
        </p>
      </section>

      {/* Gallery Slider (Static Grid for now) */}
      <section>
        <h2 className="font-playfair text-2xl font-bold text-[var(--color-primary)] mb-6">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {restaurant.gallery.map((img, i) => (
            <div key={i} className="relative h-48 rounded-[var(--radius-luxury)] overflow-hidden cursor-pointer group">
              <Image src={img} alt="Gallery" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Amenities */}
      <section>
        <h2 className="font-playfair text-2xl font-bold text-[var(--color-primary)] mb-6">Amenities</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex items-center text-[var(--color-subtext)]"><Car className="w-5 h-5 mr-3 text-[var(--color-secondary)]" /> Valet Parking</div>
          <div className="flex items-center text-[var(--color-subtext)]"><Music className="w-5 h-5 mr-3 text-[var(--color-secondary)]" /> Live Music</div>
          <div className="flex items-center text-[var(--color-subtext)]"><Accessibility className="w-5 h-5 mr-3 text-[var(--color-secondary)]" /> Wheelchair</div>
          <div className="flex items-center text-[var(--color-subtext)]"><Dog className="w-5 h-5 mr-3 text-[var(--color-secondary)]" /> Pet Friendly</div>
          <div className="flex items-center text-[var(--color-subtext)]"><Baby className="w-5 h-5 mr-3 text-[var(--color-secondary)]" /> Kids Friendly</div>
        </div>
      </section>

      {/* Menu PDF Viewer Placeholder */}
      <section>
        <h2 className="font-playfair text-2xl font-bold text-[var(--color-primary)] mb-6">Menu</h2>
        <div className="h-64 bg-gray-100 rounded-[var(--radius-luxury)] flex flex-col items-center justify-center border border-dashed border-gray-300">
          <span className="text-gray-500 mb-4">PDF Menu Viewer</span>
          <Button variant="outline">Download Menu</Button>
        </div>
      </section>

    </div>
  );
}
