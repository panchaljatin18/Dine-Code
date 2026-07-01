"use client";
import { Mail, ArrowRight } from "lucide-react";

export default function NewsletterForm() {
  return (
    <form
      className="flex items-center gap-0 rounded-full overflow-hidden transition-all duration-250 ease-in-out focus-within:shadow-[0_0_0_1px_#D4AF37]"
      style={{
        background: "rgba(0,0,0,0.28)",
        border: "1px solid rgba(212,175,55,0.18)",
      }}
      onSubmit={(e) => e.preventDefault()}
    >
      <div 
        className="flex items-center shrink-0"
        style={{
          paddingLeft: "clamp(12px, 0.97vw, 24px)",
          paddingRight: "clamp(3px, 0.28vw, 8px)",
        }}
      >
        <Mail 
          style={{ 
            color: "#D4AF37",
            width: "clamp(13px, 0.97vw, 20px)",
            height: "clamp(13px, 0.97vw, 20px)",
          }} 
        />
      </div>
      <input
        type="email"
        placeholder="Your email address"
        required
        className="flex-1 bg-transparent font-light text-white placeholder-[rgba(245,241,232,0.38)] focus:outline-none"
        style={{
          fontSize: "clamp(11px, 0.76vw, 20px)",
          paddingTop: "clamp(8px, 0.69vw, 18px)",
          paddingBottom: "clamp(8px, 0.69vw, 18px)",
          paddingRight: "clamp(6px, 0.56vw, 14px)",
          minWidth: "0",
        }}
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="shrink-0 rounded-full flex items-center justify-center transition-transform duration-250 ease-in-out hover:scale-110"
        style={{
          background: "linear-gradient(135deg,#D4AF37,#B3922E)",
          boxShadow: "0 0 12px rgba(212,175,55,0.35)",
          margin: "clamp(3px, 0.28vw, 8px)",
          width: "clamp(26px, 2.22vw, 56px)",
          height: "clamp(26px, 2.22vw, 56px)",
        }}
      >
        <ArrowRight 
          style={{ 
            color: "#081E46",
            width: "clamp(13px, 0.97vw, 24px)",
            height: "clamp(13px, 0.97vw, 24px)",
          }} 
        />
      </button>
    </form>
  );
}
