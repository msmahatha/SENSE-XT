"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const positions = [
  {
    title: "Quantum Metrology Researcher",
    location: "Jadavpur University Hub",
    type: "Full-time",
  },
  {
    title: "AI/ML Biosensor Engineer",
    location: "Kolkata HQ",
    type: "Full-time",
  },
  {
    title: "Electrochemical Systems Analyst",
    location: "Jalpaiguri / Remote",
    type: "Contract",
  },
];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="career" className="relative pb-32 pt-24 w-full flex items-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center lg:text-left"
        >
          <h3 className="text-cyan-500 font-mono tracking-widest uppercase text-sm mb-4">Careers at Sense-XT</h3>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 glow-cyan">Vanguard.</span>
          </h2>
          <p className="text-neutral-400 font-light max-w-2xl text-lg lg:mx-0 mx-auto">
            Become a part of the next generation of precision diagnostic engineering. We are actively looking for visionaries to build India&apos;s deep-tech healthcare future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Open Positions */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-white text-2xl font-semibold mb-8">Active Protocols <span className="text-cyan-500 text-sm align-top ml-2">[3]</span></h4>
            {positions.map((pos, idx) => (
              <div 
                key={idx}
                className="group relative p-6 bg-white/[0.02] border border-white/10 rounded-2xl hover:bg-white/[0.05] hover:border-cyan-500/40 transition-all duration-500 cursor-none"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="text-lg font-medium text-white mb-2 group-hover:text-cyan-300 transition-colors">{pos.title}</h5>
                    <div className="flex gap-4 text-xs font-mono text-neutral-500">
                      <span className="bg-white/5 px-2 py-1 rounded">{pos.location}</span>
                      <span className="bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded">{pos.type}</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/20 transition-all">
                    <svg className="w-4 h-4 text-white group-hover:text-cyan-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: Application Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
             <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
                
                {isSubmitted ? (
                  <div className="relative z-10 flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Transmission Complete</h4>
                    <p className="text-neutral-400">Your coordinates are in our database. We will initiate contact shortly.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 px-6 py-2 bg-white/5 border border-white/10 rounded-full text-xs uppercase tracking-widest text-neutral-300 hover:text-white hover:border-white/30 transition-all"
                    >
                      New Transmission
                    </button>
                  </div>
                ) : (
                  <>
                    <h4 className="text-2xl font-semibold text-white mb-2 relative z-10">Transmit Application</h4>
                    <p className="text-neutral-400 text-sm mb-8 relative z-10">Upload your coordinates into our database.</p>

                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input 
                          type="text" 
                          required
                          placeholder="Transmission Name" 
                          className="w-full bg-[#050505]/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500 focus:bg-white/[0.05] transition-all duration-300"
                        />
                        <input 
                          type="email" 
                          required
                          placeholder="Comm Link (Email)" 
                          className="w-full bg-[#050505]/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500 focus:bg-white/[0.05] transition-all duration-300"
                        />
                      </div>
                      <input 
                          type="url" 
                          placeholder="Portfolio / LinkedIn Uplink" 
                          className="w-full bg-[#050505]/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500 focus:bg-white/[0.05] transition-all duration-300"
                      />
                      <textarea 
                        required
                        placeholder="Why Sense-XT? (Message encrypted)" 
                        rows={4}
                        className="w-full bg-[#050505]/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500 focus:bg-white/[0.05] transition-all duration-300 resize-none"
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl text-white font-medium tracking-widest text-sm uppercase transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-400 hover:glow-cyan hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Transmitting..." : "Initiate Transfer"}
                      </button>
                    </form>
                  </>
                )}
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
