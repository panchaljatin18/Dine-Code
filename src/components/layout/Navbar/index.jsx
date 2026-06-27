"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isLightPage = pathname && (
    pathname.startsWith("/privacypolicy") ||
    pathname.startsWith("/termsofservice") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/signup")
  );
  const isTransparent = !isLightPage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        0;
      setIsScrolled(scrollPos > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Discover", href: "/discover" },
    { name: "Areas", href: "/area" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isTransparent
            ? "py-4 md:py-6 bg-transparent"
            : "py-3 md:py-4 bg-[var(--color-primary)] border-b border-white/10 shadow-lg"
        )}
      >
        <div className="luxury-container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group relative z-50 flex items-center shrink-0">
            <Image
              src="/assets/logo1.png"
              alt="DINECODE Logo"
              width={1000}
              height={1000}
              className="object-contain w-auto h-9 sm:h-10 md:h-12 transition-all duration-300"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors relative group whitespace-nowrap",
                  isActive(link.href)
                    ? "text-[var(--color-secondary)]"
                    : "text-white hover:text-[var(--color-secondary)]"
                )}
              >
                {link.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-[2px] bg-[var(--color-secondary)] transition-all duration-300",
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop Sign In */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/login"
              className={["/login", "/signup"].includes(pathname) ? "invisible pointer-events-none" : ""}
            >
              <Button
                variant="glass"
                size="sm"
                className="rounded-full"
              >
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            </Link>
          </div>

          {/* Mobile / Tablet Hamburger */}
          <button
            className="lg:hidden z-50 w-10 h-10 flex items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              key="menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[80vw] max-w-xs bg-[var(--color-primary)] shadow-2xl flex flex-col lg:hidden overflow-y-auto"
            >
              {/* Panel Header */}
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <Image
                  src="/assets/logo1.png"
                  alt="DINECODE"
                  width={200}
                  height={60}
                  className="h-8 w-auto object-contain"
                  unoptimized
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-9 h-9 flex items-center justify-center text-white hover:text-[var(--color-secondary)] transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 px-5 py-6 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center py-3 px-4 rounded-xl text-base font-medium transition-all",
                        isActive(link.href)
                          ? "bg-[var(--color-secondary)]/20 text-[var(--color-secondary)]"
                          : "text-white/90 hover:bg-white/10 hover:text-white"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Panel Footer */}
              {!["/login", "/signup"].includes(pathname) && (
                <div className="p-5 border-t border-white/10">
                  <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="w-full block">
                    <Button
                      variant="secondary"
                      className="w-full justify-center"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Sign In
                    </Button>
                  </Link>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
