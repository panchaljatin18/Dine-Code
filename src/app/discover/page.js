import HeroBanner from "@/sections/Discover/HeroBanner";
import RestaurantGrid from "@/sections/Discover/RestaurantGrid";
export const metadata = {
  title: "Discover Restaurants | DINECODE",
  description: "Explore our curated list of premium dining establishments and hidden culinary gems in Ahmedabad.",
};

export default function DiscoverPage() {
  return (
    <div className="bg-[var(--color-background)] min-h-screen pb-24">
      <HeroBanner />
      <RestaurantGrid />
    </div>
  );
}
