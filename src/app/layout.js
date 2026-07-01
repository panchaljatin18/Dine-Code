import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import PreFooterCTA from "@/components/layout/PreFooterCTA";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "DINECODE | Ahmedabad's Luxury Dining Guide",
  description: "Discover Ahmedabad's finest dining experiences. Explore luxury restaurants, cafés, rooftop dining, romantic places, and hidden food gems.",
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-inter bg-[var(--color-background)] text-[var(--color-text)] selection:bg-[var(--color-secondary)] selection:text-white">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <PreFooterCTA />
        <Footer />
      </body>
    </html>
  );
}
