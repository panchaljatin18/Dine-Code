import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Calendar, Clock, User, Bookmark } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Button from "@/components/ui/Button";

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  
  // Format slug to Title Case for dummy title
  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="bg-[var(--color-background)] min-h-screen pb-24">
      {/* Article Hero */}
      <div id="blogHero" className="relative h-[60vh] min-h-[500px] w-full pt-20">
        <Image 
          src="/assets/cover image.webp"
          alt={title}
          fill
          priority
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full pb-8 md:pb-16">
          <div className="luxury-container text-white">
            <Link href="/blog" className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-6 text-lg uppercase tracking-wider font-semibold">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to Journal
            </Link>
            
            <div className="mb-4">
              <span className="bg-[var(--color-secondary)] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded">
                Culinary Trends
              </span>
            </div>
            
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {title || "The Evolution of Fine Dining in the Heart of Ahmedabad"}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/80">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                By Chef Vikram
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                October 12, 2026
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                5 min read
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div id="blogDetailsContainer" className="luxury-container pt-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Article Body */}
          <article className="lg:w-2/3 prose prose-lg md:prose-xl max-w-none prose-headings:font-playfair prose-headings:text-[var(--color-primary)] prose-p:text-[var(--color-subtext)] prose-p:font-light prose-p:leading-relaxed">
            <p className="lead text-2xl font-playfair text-[var(--color-primary)] italic mb-10 border-l-4 border-[var(--color-secondary)] pl-6">
              The culinary landscape of Ahmedabad is undergoing a massive transformation. What was once a city known primarily for its traditional thalis and street food is rapidly becoming a hotspot for experimental gastronomy.
            </p>

            <p>
              <span className="float-left text-7xl font-playfair text-[var(--color-primary)] leading-none pr-3 pt-2">A</span>s we walk through the bustling streets of Sindhu Bhavan Road, it's impossible to ignore the towering glass facades of new restaurants. These aren't just eateries; they are experiential spaces designed to tantalize all five senses. The modern diner is no longer just looking for a meal—they are looking for a story on a plate.
            </p>

            <p>
              From deconstructed dhoklas served with liquid nitrogen mint caviar to truffle-infused dal makhani, chefs are pushing boundaries. They are respecting traditional flavor profiles while completely reimagining the textures and presentation.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">The Art of Plating</h2>
            <p>
              You eat with your eyes first. This age-old adage has never been more relevant. In luxury dining, the plate is a canvas. Chefs are utilizing negative space, vibrant edible flowers, and bespoke ceramics to elevate the visual appeal of their dishes. 
            </p>

            <div className="my-12 relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/assets/rest.webp"
                alt="Fine dining presentation"
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Sustainable Sourcing</h2>
            <p>
              Another significant trend is the shift towards hyper-local and sustainable ingredients. Premium restaurants are partnering directly with farmers on the outskirts of Gujarat to source organic heirloom vegetables. This farm-to-table approach not only ensures peak freshness but also supports the local agricultural ecosystem.
            </p>

            <blockquote className="my-12 bg-white p-8 rounded-2xl shadow-soft italic font-playfair text-2xl text-[var(--color-primary)] text-center border-t border-b border-[var(--color-border)]">
              "We are not just serving food; we are curating memories. Every ingredient has a purpose, every technique has a history."
              <footer className="text-sm font-sans font-semibold mt-4 text-[var(--color-subtext)] uppercase tracking-wider not-italic">— Executive Chef Rahul Sharma</footer>
            </blockquote>

            <p>
              As DINECODE continues to map out the best of Ahmedabad, we are thrilled to witness this culinary renaissance. The city is proving that it can hold on to its deep-rooted traditions while gracefully embracing global gastronomic innovations.
            </p>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-[var(--color-border)] flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white rounded-full text-lg font-semibold text-[var(--color-subtext)] shadow-sm border border-[var(--color-border)]">#FineDining</span>
              <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-[var(--color-subtext)] shadow-sm border border-[var(--color-border)]">#Ahmedabad</span>
              <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-[var(--color-subtext)] shadow-sm border border-[var(--color-border)]">#Gastronomy</span>
              <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-[var(--color-subtext)] shadow-sm border border-[var(--color-border)]">#CulinaryTrends</span>
            </div>
          </article>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* Share Card */}
            <div className="bg-white shadow-soft p-6 rounded-2xl border border-gray-100">
              <h3 className="font-playfair text-lg font-bold text-[var(--color-primary)] mb-4">Share Article</h3>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-subtext)] hover:text-blue-600 hover:border-blue-600 transition-colors cursor-pointer">
                  <FaFacebook className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-subtext)] hover:text-blue-400 hover:border-blue-400 transition-colors cursor-pointer">
                  <FaTwitter className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-subtext)] hover:text-blue-700 hover:border-blue-700 transition-colors cursor-pointer">
                  <FaLinkedin className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-subtext)] hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)] transition-colors cursor-pointer">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-[var(--color-primary)] rounded-2xl p-8 shadow-soft text-white text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-secondary)]/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <h3 className="font-playfair text-xl font-bold mb-3 relative z-10">Subscribe to our Newsletter</h3>
              <p className="text-white/80 text-xs mb-6 relative z-10 leading-relaxed">
                Join our exclusive circle of food connoisseurs in Ahmedabad.
              </p>
              <div className="space-y-3 relative z-10">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm placeholder-white/50 focus:outline-none focus:border-white/40"
                />
                <Button className="w-full bg-white text-black hover:bg-gray-100 border-none py-2.5">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white shadow-soft p-6 rounded-2xl border border-gray-100">
              <h3 className="font-playfair text-lg font-bold text-[var(--color-primary)] mb-4 pb-2 border-b border-[var(--color-border)]">
                Categories
              </h3>
              <ul className="space-y-3">
                {["Trends", "Guides", "Education", "Culture", "Chef Interviews", "Reviews"].map((cat, i) => (
                  <li key={cat}>
                    <Link href="#" className="flex justify-between items-center text-[var(--color-subtext)] hover:text-[var(--color-secondary)] transition-colors group">
                      <span className="text-sm">{cat}</span>
                      <span className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center text-xs group-hover:bg-[var(--color-secondary)]/10">
                        {(i * 3 + 2) % 10 + 1}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
