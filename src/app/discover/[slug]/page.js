import { restaurants } from "@/data/restaurants";
import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, Clock, CheckCircle2, ChefHat, ArrowLeft, Phone, Calendar } from "lucide-react";
import Button from "@/components/ui/Button";

// Generate static params for all known slugs at build time
export function generateStaticParams() {
  return restaurants.map((restaurant) => ({
    slug: restaurant.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const restaurant = restaurants.find(r => r.slug === slug);
  if (!restaurant) return { title: "Restaurant Not Found" };
  
  return {
    title: `${restaurant.name} | DineCode`,
    description: restaurant.description,
  };
}

export default async function RestaurantDetailPage({ params }) {
  const { slug } = await params;
  const restaurant = restaurants.find(r => r.slug === slug);

  if (!restaurant) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-background)]">
        <h1 className="text-4xl font-playfair font-bold text-[var(--color-primary)] mb-4">Restaurant Not Found</h1>
        <p className="text-gray-500 mb-8">We couldn't find the restaurant you were looking for.</p>
        <Link href="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-background)] pb-24">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full">
        <Image 
          src={restaurant.image} 
          alt={restaurant.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute top-40 left-8 md:left-12 z-10">
          <Link href="/discover" className="flex items-center text-white/80 hover:text-white transition-colors bg-black/40 hover:bg-black/60 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="font-medium">Back to Discover</span>
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 lg:px-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium">
                  {restaurant.cuisine}
                </span>
                <div className="flex items-center text-amber-400 font-bold bg-black/30 backdrop-blur-md px-3 py-1 rounded-full">
                  {restaurant.rating} <Star className="w-4 h-4 ml-1 fill-amber-400" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-2 shadow-sm">
                {restaurant.name}
              </h1>
              <div className="flex items-center text-white/90 text-lg">
                <MapPin className="w-5 h-5 mr-2 shrink-0" />
                {restaurant.location}, Ahmedabad
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl md:min-w-[300px]">
              <p className="text-white/80 text-sm mb-1">Average Cost</p>
              <p className="text-3xl font-bold text-white mb-6">{restaurant.priceForTwo} <span className="text-base font-normal text-white/80">for two</span></p>
              <Button className="w-full h-12 text-lg">Book a Table</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-24 mt-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Details */}
          <div className="lg:w-2/3">
            <section className="mb-12">
              <h2 className="text-3xl font-playfair font-bold text-[var(--color-primary)] mb-6">About</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {restaurant.description}
                <br/><br/>
                Nestled in the heart of {restaurant.location}, {restaurant.name} offers an unparalleled dining experience that brings together world-class culinary techniques and exquisite presentation. Whether you're planning a romantic dinner or a celebratory feast, our dedicated team ensures every moment is memorable.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-playfair font-bold text-[var(--color-primary)] mb-6">Chef's Recommendation</h2>
              <div className="bg-[var(--color-secondary)]/5 border border-[var(--color-secondary)]/20 p-6 rounded-2xl flex items-start">
                <ChefHat className="w-8 h-8 text-[var(--color-secondary)] mr-4 shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">{restaurant.chefRecommendation}</h3>
                  <p className="text-gray-600">A signature creation by our executive chef, perfectly balancing flavors and textures for an unforgettable bite. Highly recommended for first-time visitors.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-playfair font-bold text-[var(--color-primary)] mb-6">Amenities & Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {restaurant.features.map(feature => (
                  <div key={feature} className="flex items-center text-gray-700 bg-white shadow-soft p-4 rounded-xl border border-gray-50">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
                <div className="flex items-center text-gray-700 bg-white shadow-soft p-4 rounded-xl border border-gray-50">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                  <span className="font-medium">Air Conditioned</span>
                </div>
                <div className="flex items-center text-gray-700 bg-white shadow-soft p-4 rounded-xl border border-gray-50">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                  <span className="font-medium">Accepts Credit Cards</span>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white shadow-soft p-6 rounded-2xl border border-gray-100">
                <h3 className="font-bold text-[var(--color-primary)] text-lg mb-6 border-b border-gray-100 pb-4">Info</h3>
                
                <div className="flex items-start mb-6">
                  <Clock className="w-5 h-5 text-[var(--color-secondary)] mr-4 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Opening Hours</p>
                    <p className="text-gray-600 text-sm">{restaurant.timings}</p>
                    <p className="text-green-600 text-sm font-medium mt-1">Open Now</p>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <MapPin className="w-5 h-5 text-[var(--color-secondary)] mr-4 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Address</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{restaurant.location}, Ahmedabad, Gujarat, India</p>
                    <button className="text-[var(--color-secondary)] text-sm font-semibold mt-2 hover:underline">Get Directions</button>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-[var(--color-secondary)] mr-4 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Contact</p>
                    <p className="text-gray-600 text-sm">+91 98765 43210</p>
                  </div>
                </div>
              </div>

              <div className="bg-black text-white p-8 rounded-2xl text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80')] opacity-20 bg-cover bg-center" />
                <div className="relative z-10">
                  <Calendar className="w-8 h-8 mx-auto mb-4 text-[var(--color-secondary)]" />
                  <h3 className="font-playfair text-2xl font-bold mb-2">Reserve Your Table</h3>
                  <p className="text-white/80 text-sm mb-6">Secure your spot at {restaurant.name} for an unforgettable dining experience.</p>
                  <Button variant="primary" className="w-full bg-white text-black hover:bg-gray-100 border-none">Reserve Now</Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
