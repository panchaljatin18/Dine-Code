import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Button from "@/components/ui/Button";

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-white pt-16 pb-10">
      <div className="luxury-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-10 mb-12 md:mb-16">
          {/* Brand Info */}
          <div className="space-y-6 text-center sm:text-left">
            <Link href="/" className="inline-block mb-2 mx-auto sm:mx-0">
              <Image
                src="/assets/icon.png"
                alt="DINECODE Logo"
                width={400}
                height={100}
                className="object-contain w-auto h-20"
              />
            </Link>
            <p className="text-white/80 leading-relaxed">
              Premium luxury dining guide curated in Ahmedabad. Discover the finest restaurants, cafes, and hidden culinary gems across the city.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start text-white/80">
                <Phone className="w-5 h-5 mr-3 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>+91 90303 48383</span>
              </div>
              <div className="flex items-start text-white/80">
                <Mail className="w-5 h-5 mr-3 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>dinecodeahmedabad@gmail.com</span>
              </div>
              <div className="flex items-start text-white/80">
                <MapPin className="w-5 h-5 mr-3 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>DineCode, Money Plant High Street, A-531, Jagatpur Rd, nr. BSNL Office, Gota, Ahmedabad, Gujarat 382470</span>
              </div>
            </div>

            <div className="flex space-x-4 pt-2 justify-center sm:justify-start">
              <a href="#" className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--color-secondary)] hover:border-[var(--color-secondary)] transition-all">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--color-secondary)] hover:border-[var(--color-secondary)] transition-all">
                <FaFacebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--color-secondary)] hover:border-[var(--color-secondary)] transition-all">
                <FaTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links + Popular Areas — side-by-side on mobile, separate columns on sm+ */}
          <div className="grid grid-cols-2 sm:contents gap-6">
            {/* Quick Links */}
            <div className="xl:pl-16">
              <h3 className="text-lg font-semibold mb-6 font-playfair tracking-wide">Quick Links</h3>
              <ul className="space-y-4">
                {[
                  { name: "About Us", href: "/about" },
                  { name: "Contact", href: "/contact" },
                  { name: "Blog", href: "/blog" },
                  { name: "Add Restaurant", href: "#" },
                  { name: "Privacy Policy", href: "/privacypolicy" },
                  { name: "Terms of Service", href: "/termsofservice" }
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-white/80 hover:text-[var(--color-secondary)] transition-colors text-sm sm:text-base">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Areas */}
            <div className="xl:pl-14">
              <h3 className="text-lg font-semibold mb-6 font-playfair tracking-wide">Popular Areas</h3>
              <ul className="space-y-4">
                {["SG Highway", "Sindhu Bhavan", "Bodakdev", "Satellite", "CG Road", "Prahlad Nagar"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-white/80 hover:text-[var(--color-secondary)] transition-colors text-sm sm:text-base">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-luxury-gold rounded-2xl md:rounded-[24px] p-5 md:p-6 text-deep-navy shadow-lg mt-0 sm:col-span-2 xl:col-span-1">
            <h3 className="text-lg font-semibold mb-4 font-playfair tracking-wide">Newsletter</h3>
            <p className="text-deep-navy/80 mb-6 text-sm">
              Subscribe to get exclusive offers and recommendations.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-deep-navy/60" />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-white/20 border border-white/30 rounded-full py-3 pl-12 pr-4 text-deep-navy placeholder-deep-navy/60 focus:outline-none focus:border-white transition-colors text-sm"
                />
              </div>
              <Button className="w-full bg-deep-navy text-white hover:bg-deep-navy/90 border-none shadow-none text-sm h-11">
                Subscribe <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col items-center md:flex-row md:justify-between text-sm text-white/80 text-center gap-2">
          <p>© {new Date().getFullYear()} DINECODE. All rights reserved.</p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span>Made with luxury in mind.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
