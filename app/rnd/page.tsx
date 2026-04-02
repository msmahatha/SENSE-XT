import { OverviewSection } from "@/components/sections/OverviewSection";
import { ApplicationsSection } from "@/components/sections/ApplicationsSection";

export default function RNDPage() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Development</span>
        </h1>
        <p className="text-xl text-neutral-400 font-light max-w-3xl leading-relaxed">
          At Sense-XT, our R&D wing is the engine of our innovation. We are pioneering ultra-early viral tracking by fabricating high-precision electrochemical biosensors and engineering quantum fluorescence nanodiamonds. 
          Discover the profound science driving our next-generation healthcare platforms.
        </p>
      </div>
      
      <OverviewSection />
      
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />
      
      <ApplicationsSection />
    </div>
  );
}
