import HeroSection from "@/sections/HomaPage/HeroSection";
import FeaturedCategories from "@/sections/HomaPage/FeaturedCategories";
import TrendingRestaurants from "@/sections/HomaPage/TrendingRestaurants";
import Collections from "@/sections/HomaPage/Collections";
import PopularAreas from "@/sections/HomaPage/PopularAreas";
import OffersSection from "@/sections/HomaPage/OffersSection";
import WhyChooseUs from "@/sections/HomaPage/WhyChooseUs";
import Testimonials from "@/sections/HomaPage/Testimonials";

export const metadata = {
  title: "DINECODE | Ahmedabad's Luxury Dining Guide",
  description: "Discover Ahmedabad's finest dining experiences. Explore luxury restaurants, cafés, rooftop dining, romantic places, and hidden food gems.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <TrendingRestaurants />
      <Collections />
      <PopularAreas />
      <OffersSection />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}
