import HeroSection from "@/sections/Blog/HeroSection";
import BlogList from "@/sections/Blog/BlogList";
export const metadata = {
  title: "The Culinary Journal | DINECODE Blog",
  description: "Read our latest stories, guides, and insights from the world of luxury dining in Ahmedabad.",
};

export default function BlogPage() {
  return (
    <div className="bg-[var(--color-background)] min-h-screen pb-24">
      <HeroSection />
      <BlogList />
    </div>
  );
}
