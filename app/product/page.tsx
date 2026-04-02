import type { Metadata } from "next";
import { InnovationsSection } from "@/components/sections/InnovationsSection";

export const metadata: Metadata = {
  title: "Diagnostic Products",
  description:
    "Discover Sense-XT's next-generation hardware platforms: the Dengue Detection electrochemical sensor and AI Diagnostic Hardware backed by India's National Quantum Mission.",
};


export default function ProductPage() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Diagnostic <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Products</span>
        </h1>
        <p className="text-xl text-neutral-400 font-light max-w-3xl leading-relaxed">
          Explore our next-generation hardware platforms. Our flagship Dengue Detection Platform utilizes rapid electrochemical sensors to provide unprecedented accuracy. Coupled with our AI Diagnostic Hardware, we bring the power of the National Quantum Mission directly into clinical applications.
        </p>
      </div>
      
      <InvitationsWrapper />
    </div>
  );
}

function InvitationsWrapper() {
  return (
    <div className="mt-[-100px]">
      <InnovationsSection />
    </div>
  );
}
