import HeroSection from "@/sections/Contact/HeroSection";
import ContactForm from "@/sections/Contact/ContactForm";
export const metadata = {
  title: "Contact Us | DINECODE",
  description: "Get in touch with the DINECODE team for inquiries, restaurant partnerships, and support.",
};

export default function ContactPage() {
  return (
    <div className="bg-[var(--color-background)] min-h-screen pb-24">
      <HeroSection />
      <ContactForm />
    </div>
  );
}
