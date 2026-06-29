"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { Star, MapPin, Clock, CheckCircle2, ChefHat } from "lucide-react";
import Image from "next/image";

import { restaurants } from "@/data/restaurants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TrendingRestaurants() {
  const sectionRef = useRef(null);
  const pinWrapRef = useRef(null);
  const [quickViewRestaurant, setQuickViewRestaurant] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mm = gsap.matchMedia();

    // Only apply horizontal scroll-pinning on desktop viewports (1024px and up)
    mm.add("(min-width: 1024px)", () => {
      const pinWrap = pinWrapRef.current;
      if (!pinWrap) return;

      const horizontalScrollLength = pinWrap.scrollWidth - window.innerWidth;

      gsap.to(pinWrap, {
        x: -horizontalScrollLength,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1.5,
          start: "top top",
          end: () => `+=${horizontalScrollLength}`,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      mm.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="gsap-scroll-trigger-wrapper">
      {/* Outer div is the GSAP pin target — NOT the section itself */}
      <div ref={sectionRef} id="sectionPin">
        <section className="min-h-screen overflow-hidden bg-[var(--color-primary)] flex flex-col justify-center">
        {/* Header */}
        <div className="w-full z-10 mb-6 md:mb-15">
          <div className="luxury-container w-full">
            <div className="flex flex-row justify-between items-end">
              <div>
                <h2 className="font-playfair text-fluid-title font-bold text-white mb-3 md:mb-6">
                  Trending Now
                </h2>
                <div className="w-20 md:w-24 h-1 bg-[var(--color-secondary)]" />
              </div>
              <Button
                variant="secondary"
                className="shadow-soft hover:shadow-soft-hover transition-all border-none text-sm md:text-base"
              >
                View All Trending
              </Button>
            </div>
          </div>
        </div>

        {/* Horizontally sliding cards row */}
        <div className="w-full overflow-x-auto lg:overflow-x-hidden scrollbar-hide scroll-smooth snap-x snap-mandatory">
          <div
            ref={pinWrapRef}
            className="pin-wrap flex justify-start items-center w-max carousel-align-left pr-[10vw]"
            style={{ willChange: "transform" }}
          >
            {restaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="w-[78vw] sm:w-[60vw] md:w-[42vw] lg:w-[30vw] xl:w-[28vw] max-w-[420px] shrink-0 h-[58vh] max-h-[520px] min-h-[360px] mr-4 md:mr-6 lg:mr-8 snap-center snap-always"
              >
                <Card className="h-full flex flex-col group bg-white shadow-soft">
                  {/* Image */}
                  <div className="relative h-[52%] overflow-hidden">
                    <Image
                      src={restaurant.image}
                      alt={restaurant.name}
                      fill
                      sizes="(max-width: 640px) 78vw, (max-width: 1024px) 42vw, 30vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center shadow-sm">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 mr-1" />
                      <span className="font-semibold text-xs text-gray-900">{restaurant.rating}</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4 md:p-5 flex flex-col flex-grow bg-white">
                    <h3 className="font-playfair text-lg md:text-xl font-bold text-[var(--color-primary)] mb-1 group-hover:text-[var(--color-secondary)] transition-colors line-clamp-1">
                      {restaurant.name}
                    </h3>
                    <p className="text-[var(--color-subtext)] text-xs md:text-sm mb-3 line-clamp-1">
                      {restaurant.cuisine}
                    </p>
                    <div className="flex items-center text-xs text-[var(--color-subtext)] mb-4">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-[var(--color-secondary)] shrink-0" />
                      <span className="truncate">{restaurant.location}</span>
                      <span className="mx-1.5">•</span>
                      <span className="whitespace-nowrap">{restaurant.priceForTwo} for two</span>
                    </div>

                    {/* Buttons */}
                    <div className="mt-auto flex gap-2 pt-3 border-t border-[var(--color-border)]/30">
                      <Button
                        variant="outline"
                        className="flex-1 text-xs md:text-sm px-2 py-2 whitespace-nowrap"
                        onClick={() => setQuickViewRestaurant(restaurant)}
                      >
                        Quick View
                      </Button>
                      <Link href={`/discover/${restaurant.slug}?from=home`} className="flex-1">
                        <Button className="w-full text-xs md:text-sm px-2 py-2 shadow-soft hover:shadow-soft-hover transition-all whitespace-nowrap">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
            {/* trailing spacer */}
            <div className="w-[5vw] shrink-0" />
          </div>
        </div>
        </section>
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
                <Link href={`/discover/${quickViewRestaurant.slug}?from=home`} className="flex-1">
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
