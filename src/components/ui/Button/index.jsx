"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none min-h-[48px]";

  const variants = {
    primary: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90",
    secondary: "bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary)]/90",
    outline: "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",
    ghost: "text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10",
    glass: "bg-white/10 text-white border border-white/30 backdrop-blur-sm hover:bg-white hover:text-[var(--color-primary)] shadow-sm transition-all duration-300",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-8 text-base",
    lg: "h-14 px-10 text-lg",
    icon: "h-10 w-10",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
