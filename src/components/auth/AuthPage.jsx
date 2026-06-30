"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, User, Phone, Eye, EyeOff, ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function AuthPage({ initialMode = "login" }) {
  const router = useRouter();
  const [mode, setMode] = useState(initialMode); // 'login' or 'signup'
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form States
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    agreeTerms: false,
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (mode === "signup" && !formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (mode === "signup") {
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
      } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[\s-]/g, ""))) {
        newErrors.phone = "Please enter a valid 10-digit phone number";
      }
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    if (mode === "signup" && !formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms and privacy policy";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
      
      // Redirect after success animation
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (err) {
      setErrors({ form: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-[var(--color-background)] pt-28 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center font-inter">
      <div className="w-full max-w-5xl bg-white border border-[var(--color-border-luxury)]/60 rounded-[var(--radius-luxury)] overflow-hidden shadow-soft grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
        {/* Left Column - Beautiful Desktop Banner (Hidden on mobile) */}
        <div className="hidden lg:flex lg:col-span-5 relative flex-col justify-between p-10 overflow-hidden bg-[var(--color-deep-navy)]">
          {/* Background Image with Premium Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/luxury_dining_bg.png"
              alt="Luxury fine dining"
              fill
              className="object-cover object-center opacity-40 scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-navy)] via-[var(--color-deep-navy)]/85 to-transparent z-10" />
            <div className="absolute inset-0 bg-radial-at-t from-[var(--color-luxury-gold)]/10 via-transparent to-transparent z-10" />
          </div>

          {/* Content Overlay */}
          <div className="relative z-20 flex flex-col h-full justify-between">
            <div>{/* Spacing alignment */}</div>

            {/* Inspirational Content */}
            <div className="space-y-5">
              <span className="inline-block px-3 py-1 rounded-full border border-[var(--color-luxury-gold)]/40 bg-[var(--color-luxury-gold)]/10 text-[var(--color-luxury-gold)] text-xs font-semibold tracking-wider uppercase">
                Premium Dining Guide
              </span>
              <h1 className="font-playfair text-3xl xl:text-4xl font-bold text-white leading-tight">
                A Taste of <br />
                <span className="text-[var(--color-luxury-gold)]">Pure Culinary Luxury</span>
              </h1>
              <p className="text-white/80 text-xs xl:text-sm leading-relaxed">
                Unlock Ahmedabad's finest restaurants, hidden cafes, romantic dining rooftops, and exclusive reservation slots. Your table awaits.
              </p>
            </div>

            {/* Footer inside Left Banner */}
            <div className="text-white/40 text-2xs border-t border-white/10 pt-4">
              &copy; {new Date().getFullYear()} DINECODE. Crafted for Connoisseurs.
            </div>
          </div>
        </div>

        {/* Right Column - Elegant Form Panel */}
        <div className="lg:col-span-7 flex items-center justify-center p-6 sm:p-10 md:p-12 relative">
          <div className="w-full max-w-md z-10 my-auto">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form-container"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                {/* Header text */}
                <div className="text-center mb-8">
                  <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
                    {mode === "login" ? "Welcome Back" : "Begin Your Journey"}
                  </h2>
                  <p className="text-[var(--color-subtext)] text-xs sm:text-sm mt-2">
                    {mode === "login"
                      ? "Sign in to access premium reservations and reviews"
                      : "Create a complimentary membership account"}
                  </p>
                </div>

                {/* Animated Tabs */}
                <div className="relative flex p-1 bg-[var(--color-soft-cream)] border border-[var(--color-border-luxury)]/30 rounded-full mb-8">
                  <button
                    type="button"
                    onClick={() => { setMode("login"); setErrors({}); }}
                    className="relative z-10 w-1/2 py-2 text-xs sm:text-sm font-semibold rounded-full focus:outline-none transition-colors"
                    style={{ color: mode === "login" ? "white" : "var(--color-subtext)" }}
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    onClick={() => { setMode("signup"); setErrors({}); }}
                    className="relative z-10 w-1/2 py-2 text-xs sm:text-sm font-semibold rounded-full focus:outline-none transition-colors"
                    style={{ color: mode === "signup" ? "white" : "var(--color-subtext)" }}
                  >
                    Create Account
                  </button>
                  
                  {/* Moving Slider Background */}
                  <motion.div
                    className="absolute top-1 bottom-1 left-1 bg-[var(--color-primary)] rounded-full shadow-sm z-0"
                    layout
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    style={{
                      width: "calc(50% - 4px)",
                      x: mode === "login" ? "0%" : "100%",
                    }}
                  />
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errors.form && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs sm:text-sm">
                      {errors.form}
                    </div>
                  )}

                  {/* Full Name (Sign Up only) */}
                  <AnimatePresence initial={false}>
                    {mode === "signup" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-1.5 pb-1">
                          <label className="text-xs font-semibold text-[var(--color-primary)] tracking-wide flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your name"
                            className={`w-full px-4 py-3 rounded-xl text-sm border bg-[var(--color-soft-cream)] text-[var(--color-primary)] placeholder-gray-400 focus:outline-none transition-all ${
                              errors.name
                                ? "border-red-400 focus:ring-1 focus:ring-red-400"
                                : "border-[var(--color-border-luxury)]/60 focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)]"
                            }`}
                          />
                          {errors.name && (
                            <p className="text-red-500 text-2xs mt-1 pl-1">{errors.name}</p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[var(--color-primary)] tracking-wide flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      className={`w-full px-4 py-3 rounded-xl text-sm border bg-[var(--color-soft-cream)] text-[var(--color-primary)] placeholder-gray-400 focus:outline-none transition-all ${
                        errors.email
                          ? "border-red-400 focus:ring-1 focus:ring-red-400"
                          : "border-[var(--color-border-luxury)]/60 focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)]"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-2xs mt-1 pl-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone (Sign Up only) */}
                  <AnimatePresence initial={false}>
                    {mode === "signup" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-1.5 pb-1">
                          <label className="text-xs font-semibold text-[var(--color-primary)] tracking-wide flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter 10-digit number"
                            className={`w-full px-4 py-3 rounded-xl text-sm border bg-[var(--color-soft-cream)] text-[var(--color-primary)] placeholder-gray-400 focus:outline-none transition-all ${
                              errors.phone
                                ? "border-red-400 focus:ring-1 focus:ring-red-400"
                                : "border-[var(--color-border-luxury)]/60 focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)]"
                            }`}
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-2xs mt-1 pl-1">{errors.phone}</p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Password */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-semibold text-[var(--color-primary)] tracking-wide flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
                        Password
                      </label>
                      {mode === "login" && (
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="text-[var(--color-secondary)] hover:text-[var(--color-accent)] text-2xs font-semibold transition-colors"
                        >
                          Forgot Password?
                        </Link>
                      )}
                    </div>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="••••••••"
                        className={`w-full pl-4 pr-11 py-3 rounded-xl text-sm border bg-[var(--color-soft-cream)] text-[var(--color-primary)] placeholder-gray-400 focus:outline-none transition-all ${
                          errors.password
                            ? "border-red-400 focus:ring-1 focus:ring-red-400"
                            : "border-[var(--color-border-luxury)]/60 focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)]"
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[var(--color-primary)] focus:outline-none transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-2xs mt-1 pl-1">{errors.password}</p>
                    )}
                  </div>

                  {/* Checkbox settings */}
                  {mode === "login" ? (
                    <div className="flex items-center">
                      <label className="flex items-center cursor-pointer select-none text-xs text-[var(--color-subtext)]">
                        <input
                          type="checkbox"
                          name="rememberMe"
                          checked={formData.rememberMe}
                          onChange={handleInputChange}
                          className="w-4 h-4 mr-2 border border-[var(--color-border-luxury)] text-[var(--color-secondary)] rounded focus:ring-0 cursor-pointer"
                        />
                        Remember me on this device
                      </label>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <label className="flex items-start cursor-pointer select-none text-xs text-[var(--color-subtext)] leading-tight">
                        <input
                          type="checkbox"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleInputChange}
                          className="w-4 h-4 mr-2 mt-0.5 border border-[var(--color-border-luxury)] text-[var(--color-secondary)] rounded focus:ring-0 cursor-pointer shrink-0"
                        />
                        <span>
                          I agree to DINECODE's{" "}
                          <Link href="/termsofservice" className="text-[var(--color-secondary)] font-semibold hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacypolicy" className="text-[var(--color-secondary)] font-semibold hover:underline">
                            Privacy Policy
                          </Link>
                          .
                        </span>
                      </label>
                      {errors.agreeTerms && (
                        <p className="text-red-500 text-2xs pl-1">{errors.agreeTerms}</p>
                      )}
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="secondary"
                    className="w-full justify-center rounded-xl shadow-soft hover:shadow-soft-hover"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Verifying details...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        {mode === "login" ? "Sign In to Account" : "Activate Membership"}
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </Button>
                </form>

                {/* Social Integration */}
                <div className="mt-8 space-y-6">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-[var(--color-border-luxury)]/40"></div>
                    </div>
                    <span className="relative px-4 bg-white text-2xs text-[var(--color-subtext)] uppercase font-semibold tracking-wider">
                      Or continue with
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Google Button */}
                    <button
                      type="button"
                      onClick={() => setIsSuccess(true)}
                      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--color-border-luxury)]/60 bg-white hover:bg-[var(--color-soft-cream)] transition-all font-semibold text-xs text-[var(--color-primary)]"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        />
                      </svg>
                      Google
                    </button>

                    {/* Apple Button */}
                    <button
                      type="button"
                      onClick={() => setIsSuccess(true)}
                      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--color-border-luxury)]/60 bg-white hover:bg-[var(--color-soft-cream)] transition-all font-semibold text-xs text-[var(--color-primary)]"
                    >
                      <svg className="w-4 h-4 fill-[var(--color-primary)]" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.56 2.95-1.39" />
                      </svg>
                      Apple
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success-container"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center space-y-6 py-6"
              >
                <div className="flex justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="w-16 h-16 text-[var(--color-success)]" />
                  </motion.div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-playfair text-2xl font-bold text-[var(--color-primary)]">
                    Access Granted
                  </h3>
                  <p className="text-[var(--color-subtext)] text-sm max-w-xs mx-auto">
                    {mode === "login" 
                      ? "Welcome back. Re-entering your luxury dining experience..."
                      : "Welcome to DINECODE. Your luxury dining journey begins now."}
                  </p>
                </div>

                <div className="w-12 h-1 bg-[var(--color-secondary)] mx-auto rounded-full animate-pulse" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  </div>
  );
}
