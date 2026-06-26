import HeroSection from "@/sections/RestaurantDetails/HeroSection";
import MainContent from "@/sections/RestaurantDetails/MainContent";
import Sidebar from "@/sections/RestaurantDetails/Sidebar";

export const metadata = {
  title: "Restaurant Details | DINECODE",
  description: "View detailed information, menus, reviews, and booking options for premium dining establishments in Ahmedabad.",
};

export default function RestaurantDetails() {
  return (
    <div className="bg-[var(--color-background)] min-h-screen pb-24">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <MainContent />
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
