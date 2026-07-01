import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-[#F5F1E8]"
      style={{
        background: "linear-gradient(160deg, #0B2348 0%, #081E46 55%, #060f2a 100%)",
        borderTop: "1px solid rgba(212,175,55,0.22)",
        borderBottom: "1px solid rgba(212,175,55,0.10)",
      }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,175,55,0.04) 0%, transparent 50%)",
        }}
      />

      {/* ── LEFT IMAGE ── */}
      <div
        className="absolute top-0 left-[-2px] pointer-events-none z-0 md:block"
        style={{
          width: "18vw",
          bottom: "4.5vw",
          backgroundImage: "url('/assets/footer.png')",
          backgroundSize: "cover",
          backgroundPosition: "left bottom",
          backgroundRepeat: "no-repeat",
          mixBlendMode: "screen",
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 30%, rgba(0,0,0,0.9) 65%, rgba(0,0,0,0.3) 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 30%, rgba(0,0,0,0.9) 65%, rgba(0,0,0,0.3) 70%, transparent 100%)",
          opacity: 0.75,
        }}
      />

      {/* ── RIGHT IMAGE ── */}
      <div
        className="absolute -top-16 bottom-0 right-0 pointer-events-none z-0 hidden lg:block"
        style={{
          width: "clamp(240px, 18vw, 380px)",
          height: "24vw",
          backgroundImage: "url('/assets/footer2.png')",
          backgroundSize: "contain",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          mixBlendMode: "screen",
          maskImage:
            "linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.3) 75%, transparent 100%), linear-gradient(to top, rgba(0,0,0,1) 20%, transparent 80%)",
          WebkitMaskImage:
            "linear-gradient(to left, rgba(0,0,0,1) 30%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.3) 75%, transparent 100%), linear-gradient(to top, rgba(0,0,0,1) 20%, transparent 80%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
          opacity: 0.65,
        }}
      />

      {/* Floating gold particles */}
      <div className="absolute bottom-6 left-[22%] w-[3px] h-[3px] rounded-full bg-[#D4AF37]/25 blur-[1px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-4 left-[54%] w-[2px] h-[2px] rounded-full bg-[#E7C56A]/20 blur-[1px] animate-pulse pointer-events-none" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-8 right-[38%] w-[2px] h-[2px] rounded-full bg-[#D4AF37]/18 blur-[1px] animate-pulse pointer-events-none" style={{ animationDelay: "2.8s" }} />

      {/* ══ MAIN CONTENT ══ */}
      <div
        className="relative z-10 w-full"
        style={{ padding: "clamp(30px, 2.5vw, 80px) clamp(24px, 5vw, 140px) 0 clamp(24px, 5vw, 150px)" }}
      >
        {/* ── RESPONSIVE GRID: Stacks on mobile, 2-column on tablet, custom on desktop ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_3fr_1.5fr] gap-10 lg:gap-0 items-start"
          style={{
            columnGap: "clamp(20px, 3.5vw, 70px)",
          }}
        >

          {/* COL 1 — Brand */}
          <div
            className="flex flex-col items-center lg:items-start text-center lg:text-left md:col-span-1 pl-0 lg:pl-[4.5vw]"
            style={{ gap: "0.25vw", paddingBottom: "0.24vw" }}
          >
            <div className="flex flex-col items-center lg:items-start pl-0 lg:pl-[4.5vw]" style={{ gap: "0.25vw" }}>
              <Link href="/" className="inline-block hover:opacity-80 transition-opacity duration-200 mx-auto">
                <Image
                  src="/assets/logo1.png"
                  alt="DINECODE"
                  width={188}
                  height={40}
                  style={{
                    height: "3.5vw",
                    width: "auto",
                    maxWidth: "15vw",
                    minHeight: "44px",
                    marginBottom: "0.5vw",
                  }}
                  className="object-contain"
                  priority
                />
              </Link>

              <p
                style={{
                  color: "#D4AF37",
                  fontSize: "clamp(10px, 0.78vw, 20px)",
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  fontWeight: 200,
                  fontFamily: "var(--font-playfair, serif)",
                  whiteSpace: "nowrap",
                  marginBottom: "0.2vw",
                  textAlign: "center",
                }}
              >
                Ahmedabad's Luxury Dining Guide
              </p>

              <div 
                className="flex items-center justify-center w-full animate-fade-in" 
                style={{ 
                  gap: "0.4vw", 
                  marginBottom: "0.2vw",
                }}
              >
                <span style={{ height: "1px", width: "3vw", background: "rgba(212,175,55,0.30)", display: "inline-block" }} />
                <span style={{ color: "#D4AF37", fontSize: "clamp(8px, 0.6vw, 15px)", lineHeight: 1 }}>✦</span>
                <span style={{ height: "1px", width: "3vw", background: "rgba(212,175,55,0.30)", display: "inline-block" }} />
              </div>
            </div>

            <p
              className="pl-4 lg:-pr-[4.5vw]"
              style={{
                color: "rgba(245,241,232,0.66)",
                fontSize: "clamp(13.5px, 0.98vw, 20px)",
                fontWeight: 300,
                lineHeight: 1.78,
                maxWidth: "18vw",
                textAlign: "center",
                padding:"4px"
              }}
            >
              Your guide to Ahmedabad's finest dining destinations, luxury cafés and curated culinary experiences.
            </p>
          </div>

          {/* COL 2 — 3 link sections (stacks on mobile, side-by-side on tablet/desktop) */}
          <div
            className="flex flex-col sm:flex-row flex-wrap justify-between w-full lg:justify-center md:col-span-1"
            style={{ gap: "clamp(12px, 2.5vw, 85px)", paddingRight: "2vw" }}
          >
            <FooterCol title="Quick Links">
              {[
                { label: "About Us",     href: "/about" },
                { label: "Restaurants",  href: "/discover" },
                { label: "Luxury Cafés", href: "/discover" },
                { label: "Collections",  href: "/discover" },
                { label: "Events",       href: "#" },
                { label: "Blog",         href: "/blog" },
                { label: "Contact",      href: "/contact" },
              ].map(({ label, href }) => (
                <FooterLink key={label} href={href}>{label}</FooterLink>
              ))}
            </FooterCol>

            <FooterCol title="Resources">
              {[
                { label: "Advertise With Us", href: "#" },
                { label: "Privacy Policy",    href: "/privacypolicy" },
                { label: "Terms of Service",  href: "/termsofservice" },
                { label: "Sitemap",           href: "#" },
                { label: "Refund Policy",     href: "#" },
                { label: "Careers",           href: "#" },
              ].map(({ label, href }) => (
                <FooterLink key={label} href={href}>{label}</FooterLink>
              ))}
            </FooterCol>

            <FooterCol title="Popular Areas">
              {["SG Highway", "Sindhu Bhavan", "Bodakdev", "Satellite", "CG Road", "Prahlad Nagar"].map((area) => (
                <FooterLink key={area} href="/discover">{area}</FooterLink>
              ))}
            </FooterCol>
          </div>

          {/* COL 3 — Newsletter card */}
          <div
            className="flex flex-col w-full md:col-span-2 lg:col-span-1 items-center lg:items-start"
            style={{ paddingRight: "clamp(0px, 5.5vw, 80px)" }}
          >
            <div
              className="w-full max-w-[400px] lg:max-w-none rounded-[18px] flex flex-col transition-shadow duration-250 hover:shadow-[0_0_22px_rgba(212,175,55,0.09)] ml-0 lg:-ml-[3vw]"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(212,175,55,0.22)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                padding: "clamp(16px, 1.1vw, 28px)",
                gap: "0.8vw",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5vw" }}>
                <h4
                  style={{
                    color: "#D4AF37",
                    fontSize: "clamp(10px, 0.74vw, 19px)",
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-playfair, serif)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Let's Stay Connected
                </h4>
                <p
                  style={{
                    color: "rgba(245,241,232,0.66)",
                    fontSize: "clamp(11.5px, 0.78vw, 20px)",
                    fontWeight: 300,
                    lineHeight: 1.7,
                    marginBottom: "0.2vw",
                  }}
                >
                  Get curated recommendations and exclusive dining updates.
                </p>
              </div>
              <NewsletterForm />
            </div>
          </div>

        </div>

        {/* ── BOTTOM BAR ── */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 sm:gap-0"
          style={{
            borderTop: "1px solid rgba(212,175,55,0.16)",
            marginTop: "2vw",
            paddingTop: "1vw",
            paddingBottom: "1.2vw",
            color: "rgba(245,241,232,0.46)",
            fontWeight: 300,
          }}
        >
          <span style={{ fontSize: "clamp(11.5px, 0.72vw, 18px)" }}>© 2026 DINECODE.</span>
          <span
            className="hover:text-[#D4AF37] transition-colors duration-250 cursor-default"
            style={{ fontSize: "clamp(11.5px, 0.72vw, 18px)" }}
          >
            Managed by Ft Nexavvy
          </span>
        </div>

      </div>
    </footer>
  );
}

/* ─── Sub-components with vw-scaled sizing ─── */

function FooterCol({ title, children }) {
  return (
    <div className="flex flex-col shrink-0 min-w-[120px]" style={{ gap: "0.85vw" }}>
      <h3
        style={{
          color: "#D4AF37",
          fontSize: "clamp(11px, 0.74vw, 19px)",
          fontWeight: 700,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          fontFamily: "var(--font-playfair, serif)",
        }}
      >
        {title}
      </h3>
      <ul className="flex flex-col" style={{ gap: "0.55vw" }}>
        {children}
      </ul>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center transition-all duration-250 ease-in-out"
        style={{
          fontSize: "clamp(12px, 0.78vw, 20px)",
          fontWeight: 300,
          color: "rgba(245,241,232,0.66)",
          gap: "0.35vw",
          textDecoration: "none",
        }}
      >
        <span
          className="shrink-0 font-bold transition-transform duration-250 ease-in-out group-hover:translate-x-[3px]"
          style={{ color: "#D4AF37", fontSize: "clamp(9px, 0.6vw, 15px)", lineHeight: 1 }}
        >
          ›
        </span>
        <span className="relative" style={{ whiteSpace: "nowrap" }}>
          <span className="group-hover:text-[#E7C56A] transition-colors duration-250">
            {children}
          </span>
          <span className="absolute left-0 -bottom-[1px] h-[1px] w-0 bg-[#D4AF37] transition-all duration-250 ease-in-out group-hover:w-full" />
        </span>
      </Link>
    </li>
  );
}
