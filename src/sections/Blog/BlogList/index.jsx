"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Link from "next/link";

export default function BlogList() {
  const blogs = [
    {
      id: 1,
      slug: "molecular-gastronomy-ahmedabad",
      title: "The Rise of Molecular Gastronomy in Ahmedabad",
      category: "Trends",
      date: "Oct 12, 2026",
      image: "/assets/cover image.webp",
      excerpt: "Explore how local chefs are bringing science into the kitchen to create mind-bending culinary experiences."
    },
    {
      id: 2,
      slug: "romantic-rooftop-restaurants",
      title: "Top 5 Romantic Rooftop Restaurants for Anniversary",
      category: "Guides",
      date: "Oct 08, 2026",
      image: "/assets/website1.webp",
      excerpt: "Planning a special evening? We have curated the most romantic spots with breathtaking city views."
    },
    {
      id: 3,
      slug: "wine-pairing-indian-cuisine",
      title: "Decoding the Perfect Wine Pairing for Indian Cuisine",
      category: "Education",
      date: "Sep 28, 2026",
      image: "/assets/photo2.webp",
      excerpt: "A sommelier's guide to pairing rich, spicy Indian curries with the perfect glass of wine."
    },
    {
      id: 4,
      slug: "heritage-dining-ahmedabad",
      title: "Heritage Dining: Restaurants in Century-Old Havelis",
      category: "Culture",
      date: "Sep 15, 2026",
      image: "/assets/photo3.webp",
      excerpt: "Step back in time and dine like royalty in restored heritage properties across the old city."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Main Blog List */}
        <div className="lg:col-span-2 space-y-10">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blog/${blog.slug}`} className="block h-full cursor-pointer">
                <Card className="overflow-hidden group flex flex-col md:flex-row h-full md:h-64">
                  <div className="relative w-full md:w-2/5 h-48 md:h-full shrink-0 overflow-hidden">
                    <Image 
                      src={blog.image} 
                      alt={blog.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute top-4 left-4 bg-[var(--color-primary)] text-[var(--color-secondary)] text-xs font-bold px-3 py-1 uppercase tracking-wider rounded">
                      {blog.category}
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center text-sm text-[var(--color-subtext)] mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {blog.date}
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-[var(--color-primary)] mb-3 group-hover:text-[var(--color-secondary)] transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-[var(--color-subtext)] text-sm mb-6 line-clamp-2 font-light">
                      {blog.excerpt}
                    </p>
                    <div className="inline-flex items-center text-sm font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors">
                      Read Article <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}

          <div className="flex justify-center mt-12">
            <Button variant="outline">Load More Articles</Button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white rounded-[var(--radius-luxury)] p-8 shadow-soft border border-[var(--color-border)]/50">
            <h3 className="font-playfair text-xl font-bold text-[var(--color-primary)] mb-6 pb-2 border-b border-[var(--color-border)]">
              Categories
            </h3>
            <ul className="space-y-3">
              {["Trends", "Guides", "Education", "Culture", "Chef Interviews", "Reviews"].map((cat, i) => (
                <li key={cat}>
                  <Link href="#" className="flex justify-between items-center text-[var(--color-subtext)] hover:text-[var(--color-secondary)] transition-colors group">
                    <span>{cat}</span>
                    <span className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center text-xs group-hover:bg-[var(--color-secondary)]/10">
                      {(i * 3 + 2) % 10 + 1}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[var(--color-primary)] rounded-[var(--radius-luxury)] p-8 shadow-soft text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-secondary)]/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <h3 className="font-playfair text-2xl font-bold mb-4 relative z-10">Subscribe to our Newsletter</h3>
            <p className="text-white/70 text-sm mb-6 font-light relative z-10">
              Get the latest articles, exclusive restaurant offers, and culinary guides directly to your inbox.
            </p>
            <div className="relative z-10">
              <input type="email" placeholder="Your email address" className="w-full bg-white/10 border border-white/20 rounded-full py-3 px-4 text-white placeholder-white/50 focus:outline-none focus:border-[var(--color-secondary)] mb-3" />
              <Button className="w-full" variant="secondary">Subscribe Now</Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
