"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Card({ 
  children, 
  className, 
  hoverEffect = true,
  glassmorphism = false,
  ...props 
}) {
  const baseStyles = "bg-[var(--color-card)] rounded-[var(--radius-luxury)] overflow-hidden transition-all duration-300";
  const hoverStyles = hoverEffect ? "hover:shadow-soft-hover hover:-translate-y-1" : "";
  const glassStyles = glassmorphism ? "glassmorphism" : "shadow-soft border border-[var(--color-border)]/50";

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(baseStyles, hoverStyles, glassStyles, className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
