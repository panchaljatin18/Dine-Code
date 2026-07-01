"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Card from "@/components/ui/Card";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Aarav Patel",
      role: "Food Enthusiast",
      content: "DINECODE has completely changed how I discover luxury dining in Ahmedabad. The recommendations are always spot on and the booking process is seamless.",
      image: "/assets/small.webp"
    },
    {
      name: "Priya Sharma",
      role: "Lifestyle Blogger",
      content: "The curated lists for romantic dinners and rooftop cafes are incredible. It feels like having a personal luxury concierge in my pocket.",
      image: "/assets/small1.webp"
    },
    {
      name: "Vikram Desai",
      role: "Business Executive",
      content: "When hosting clients, I only trust DINECODE to find the finest fine-dining establishments. Their top-rated section has never disappointed me.",
      image: "/assets/small2.webp"
    },
    {
      name: "Ananya Iyer",
      role: "Fine Dining Connoisseur",
      content: "The exclusive table reservations through DineCode are a lifesaver. I've discovered hidden culinary gems that I now frequent weekly.",
      image: "/assets/ananya_avatar.png"
    },
    {
      name: "Rohan Mehta",
      role: "Tech Entrepreneur",
      content: "Impeccable recommendations and outstanding user experience. DINECODE is my go-to guide whenever I want to impress partners or celebrate milestones.",
      image: "/assets/rohan_avatar.png"
    },
    {
      name: "Neha Gupta",
      role: "Culinary Critic",
      content: "As someone who reviews food for a living, I find DINECODE's selections to be highly curated and authentic. It truly represents the pinnacle of dining.",
      image: "/assets/neha_avatar.png"
    }
  ];

  return (
    <section id="testimonialsSection" className="min-h-screen flex flex-col justify-center section-py bg-[var(--color-card)]">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-fluid-title font-bold text-[var(--color-primary)] mb-4"
          >
            What Our Patrons Say
          </motion.h2>
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[var(--color-secondary)] mx-auto"
          />
        </div>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Desktop Grid Layout (lg+) - 3 columns, 2 rows */}
          <div className="hidden lg:grid grid-cols-3 gap-6 testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 h-full flex flex-col relative group bg-white border border-[#E7E3DA] rounded-[24px] shadow-[0_12px_35px_rgba(11,35,72,0.06)] hover:shadow-[0_20px_50px_rgba(11,35,72,0.12)] hover:border-[var(--color-secondary)] hover:-translate-y-2 transition-all duration-400 ease-out">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-[var(--color-border)] opacity-50 group-hover:text-[var(--color-secondary)]/20 transition-colors duration-350" />

                <div className="flex text-[var(--color-secondary)] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[var(--color-secondary)]" />
                  ))}
                </div>

                <p className="text-[var(--color-subtext)] italic flex-grow mb-8 font-light leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-primary)]">{testimonial.name}</h4>
                    <p className="text-sm text-[var(--color-subtext)]">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Mobile Swiper Layout (< lg) */}
          <div className="lg:hidden">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
              }}
              autoplay={{ delay: 1500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="!pb-16 !pt-4"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className="!h-auto">
                  <Card className="p-8 h-full flex flex-col relative group bg-white border border-[#E7E3DA] rounded-[24px] shadow-[0_12px_35px_rgba(11,35,72,0.06)] hover:shadow-[0_20px_50px_rgba(11,35,72,0.12)] hover:border-[var(--color-secondary)] hover:-translate-y-2 transition-all duration-400 ease-out">
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-[var(--color-border)] opacity-50 group-hover:text-[var(--color-secondary)]/20 transition-colors duration-350" />

                    <div className="flex text-[var(--color-secondary)] mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[var(--color-secondary)]" />
                      ))}
                    </div>

                    <p className="text-[var(--color-subtext)] italic flex-grow mb-8 font-light leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center mt-auto">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 relative">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-[var(--color-primary)]">{testimonial.name}</h4>
                        <p className="text-sm text-[var(--color-subtext)]">{testimonial.role}</p>
                      </div>
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
