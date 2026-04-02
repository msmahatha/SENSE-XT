import { AboutSection } from "@/components/sections/AboutSection";

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Mission</span>
        </h1>
        <p className="text-xl text-neutral-400 font-light max-w-3xl leading-relaxed">
          Sense-XT Innovations Private Limited is a deep-tech startup born out of Jalpaiguri and Kolkata, fiercely committed to delivering indigenous, "Make in India" healthcare solutions with an unbreakable foundation in scientific rigor.
        </p>
      </div>
      
      <div className="mt-[-150px]">
        <AboutSection />
      </div>
    </div>
  );
}
