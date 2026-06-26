import HeroBanner from "@/sections/Area/HeroBanner";
import MainContent from "@/sections/Area/MainContent";

export const metadata = {
  title: "Explore Areas | DINECODE",
  description: "Discover premium dining establishments across the best neighborhoods and areas in Ahmedabad.",
};

export default function AreaPage() {
  return (
    <div className="bg-[var(--color-background)] min-h-screen pb-24">
      <HeroBanner />
      <MainContent />
    </div>
  );
}
