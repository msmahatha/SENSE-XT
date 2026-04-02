import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the vanguard at Sense-XT Innovations. Explore open positions in quantum metrology, AI biosensor engineering, and electrochemical systems analysis.",
};


export default function CareerPage() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 mb-12 relative z-20">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Portal</span>
        </h1>
        <p className="text-xl text-neutral-400 font-light max-w-3xl leading-relaxed">
          At Sense-XT, you aren&apos;t just taking a job—you&apos;re making a commitment to advance the horizon of human health and diagnostic precision. Explore our active protocols and submit your transmission below.
        </p>
      </div>

      <ContactSection />
    </div>
  );
}
