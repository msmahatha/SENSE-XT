"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const applications = [
  { name: "Dengue Detection", metric: "99.9%", desc: "Ultra-early stage identification of Dengue virus and other mosquito-borne infections." },
  { name: "Viral Biomarkers", metric: "fg/mL", desc: "Quantum-level sensitivity detecting extremely low concentrations of viral biomarkers in blood." },
  { name: "Neurodegenerative", metric: "Next", desc: "Expanding applications to complex brain disorders and the future of precision healthcare." },
  { name: "Make in India", metric: "100%", desc: "Indigenously developed, world-class precision healthcare solutions." },
];

export function ApplicationsSection() {
  return (
    <section id="applications" className="relative py-24 w-full bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Applied at <br/> <span className="text-cyan-500 glow-cyan">Clinical Scale.</span>
          </h2>
          <p className="text-neutral-400 font-light leading-relaxed mb-8 max-w-lg">
            From eradicating mosquito-borne diseases to charting the future of neuro-diagnostics, our nanoscale developments enable rapid, reliable, and ultra-early medical interventions.
          </p>
          <Link
            href="/rnd"
            className="inline-flex items-center text-cyan-400 font-medium tracking-wide hover:text-cyan-300 transition-colors group"
          >
            Explore the whitepapers
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {applications.map((app, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-8 border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent rounded-2xl hover:border-cyan-500/50 transition-colors"
            >
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-blue-600 mb-2">
                {app.metric}
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{app.name}</h4>
              <p className="text-sm text-neutral-500 font-light">{app.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
