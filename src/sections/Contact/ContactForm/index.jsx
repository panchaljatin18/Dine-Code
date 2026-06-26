"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // In a real app, you would send this to your API
    alert("Message sent successfully!");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 mt-[-80px] relative z-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[var(--radius-luxury)] p-8 md:p-12 shadow-soft border border-[var(--color-border)]/50"
        >
          <h2 className="font-playfair text-3xl font-bold text-[var(--color-primary)] mb-8">Send a Message</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">First Name</label>
                <input 
                  {...register("firstName", { required: true })} 
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition-all"
                  placeholder="John"
                />
                {errors.firstName && <span className="text-red-500 text-xs mt-1">This field is required</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">Last Name</label>
                <input 
                  {...register("lastName", { required: true })} 
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition-all"
                  placeholder="Doe"
                />
                {errors.lastName && <span className="text-red-500 text-xs mt-1">This field is required</span>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">Email Address</label>
              <input 
                type="email"
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })} 
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
              {errors.email && <span className="text-red-500 text-xs mt-1">Valid email is required</span>}
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">Subject</label>
              <select 
                {...register("subject")} 
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition-all"
              >
                <option value="general">General Inquiry</option>
                <option value="support">Customer Support</option>
                <option value="partnership">Partnership & Listing</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">Message</label>
              <textarea 
                {...register("message", { required: true })} 
                rows="5"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition-all resize-none"
                placeholder="How can we help you?"
              />
              {errors.message && <span className="text-red-500 text-xs mt-1">This field is required</span>}
            </div>

            <Button type="submit" className="w-full lg:w-auto h-12 px-8">
              Send Message <Send className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </motion.div>

        {/* Contact Info & Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-8"
        >
          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[var(--radius-luxury)] p-6 shadow-sm border border-[var(--color-border)] flex items-start">
              <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-[var(--color-secondary)] mr-4 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-primary)] mb-1">Office</h4>
                <p className="text-sm text-[var(--color-subtext)] leading-relaxed">
                  Level 12, Titanium Square, SG Highway, Ahmedabad, Gujarat 380054
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[var(--radius-luxury)] p-6 shadow-sm border border-[var(--color-border)] flex items-start">
              <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-[var(--color-secondary)] mr-4 shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-primary)] mb-1">Phone</h4>
                <p className="text-sm text-[var(--color-subtext)] leading-relaxed">
                  +91 79 1234 5678<br/>
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[var(--radius-luxury)] p-6 shadow-sm border border-[var(--color-border)] flex items-start">
              <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-[var(--color-secondary)] mr-4 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-primary)] mb-1">Email</h4>
                <p className="text-sm text-[var(--color-subtext)] leading-relaxed">
                  hello@dinecode.com<br/>
                  support@dinecode.com
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[var(--radius-luxury)] p-6 shadow-sm border border-[var(--color-border)] flex items-start">
              <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-[var(--color-secondary)] mr-4 shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-primary)] mb-1">Hours</h4>
                <p className="text-sm text-[var(--color-subtext)] leading-relaxed">
                  Mon-Fri: 9AM - 6PM<br/>
                  Sat: 10AM - 2PM
                </p>
              </div>
            </div>
          </div>

          {/* Dummy Map Integration */}
          <div className="bg-white rounded-[var(--radius-luxury)] p-2 shadow-soft border border-[var(--color-border)] h-80">
            <div className="w-full h-full bg-gray-100 rounded-[calc(var(--radius-luxury)-8px)] flex flex-col items-center justify-center text-gray-400">
              <MapPin className="w-10 h-10 mb-2 opacity-50" />
              <span>Google Map Integration</span>
            </div>
          </div>

        </motion.div>

      </div>
    </div>
  );
}
