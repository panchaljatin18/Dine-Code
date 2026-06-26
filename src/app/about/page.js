import HeroSection from "@/sections/Aboutus/HeroSection";
import StorySection from "@/sections/Aboutus/StorySection";
import StatsSection from "@/sections/Aboutus/StatsSection";
export const metadata = {
  title: "About Us | DINECODE",
  description: "Learn more about DINECODE, the premier guide to Ahmedabad's finest luxury dining experiences and culinary discoveries.",
};

export default function AboutPage() {
  return (
    <div className="bg-[var(--color-background)] min-h-screen pb-24">
      <HeroSection />
      <StorySection />
      <StatsSection />
    </div>
  );
}
