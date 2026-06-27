import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Calendar, Clock, User, Share2, Bookmark } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

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
      <div className="relative h-[60vh] min-h-[500px] w-full pt-20">
        <Image 
          src="/assets/cover image.webp"
          alt={title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 lg:p-12">
          <div className="max-w-4xl mx-auto text-white">
            <Link href="/blog" className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-6 text-sm uppercase tracking-wider font-semibold">
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
      <div className="max-w-4xl mx-auto px-6 lg:px-12 pt-16 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Social Share Sidebar (Hidden on mobile) */}
        <div className="hidden md:flex flex-col col-span-1 space-y-6 pt-2 sticky top-32 h-fit">
          <button className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-subtext)] hover:text-blue-600 hover:border-blue-600 transition-colors">
            <FaFacebook className="w-4 h-4" />
          </button>
          <button className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-subtext)] hover:text-blue-400 hover:border-blue-400 transition-colors">
            <FaTwitter className="w-4 h-4" />
          </button>
          <button className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-subtext)] hover:text-blue-700 hover:border-blue-700 transition-colors">
            <FaLinkedin className="w-4 h-4" />
          </button>
          <div className="w-full h-[1px] bg-[var(--color-border)] my-2" />
          <button className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-subtext)] hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)] transition-colors">
            <Bookmark className="w-4 h-4" />
          </button>
        </div>

        {/* Article Body */}
        <article className="col-span-1 md:col-span-11 prose prose-lg md:prose-xl max-w-none prose-headings:font-playfair prose-headings:text-[var(--color-primary)] prose-p:text-[var(--color-subtext)] prose-p:font-light prose-p:leading-relaxed">
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
            <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-[var(--color-subtext)] shadow-sm border border-[var(--color-border)]">#FineDining</span>
            <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-[var(--color-subtext)] shadow-sm border border-[var(--color-border)]">#Ahmedabad</span>
            <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-[var(--color-subtext)] shadow-sm border border-[var(--color-border)]">#Gastronomy</span>
            <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-[var(--color-subtext)] shadow-sm border border-[var(--color-border)]">#CulinaryTrends</span>
          </div>
        </article>
      </div>
      
      {/* Mobile Social Share */}
      <div className="md:hidden flex justify-center space-x-6 mt-12 border-t border-b border-[var(--color-border)] py-6 bg-white">
        <button className="text-[var(--color-subtext)] hover:text-blue-600 transition-colors"><FaFacebook className="w-6 h-6" /></button>
        <button className="text-[var(--color-subtext)] hover:text-blue-400 transition-colors"><FaTwitter className="w-6 h-6" /></button>
        <button className="text-[var(--color-subtext)] hover:text-blue-700 transition-colors"><FaLinkedin className="w-6 h-6" /></button>
        <button className="text-[var(--color-subtext)] hover:text-[var(--color-secondary)] transition-colors"><Share2 className="w-6 h-6" /></button>
      </div>

    </div>
  );
}
