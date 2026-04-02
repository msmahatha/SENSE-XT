"use client";

import { motion } from "framer-motion";
import { ParticleBackground } from "../3d/ParticleBackground";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 drop-shadow-lg"
        >
          Precision Diagnostics <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 glow-cyan">
            at the Quantum Scale
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-2xl text-neutral-300 max-w-2xl mb-12 font-light tracking-wide"
        >
          Advancing next-generation sensor fabrication and AI for ultra-early disease detection.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link
            href="/product"
            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium tracking-widest text-sm uppercase transition-all duration-300 hover:bg-white/20 hover:border-cyan-500 hover:glow-cyan hover:scale-105"
          >
            Explore
          </Link>
          <Link
            href="/rnd"
            className="px-8 py-4 bg-cyan-600/20 backdrop-blur-md border border-cyan-500/50 rounded-full text-cyan-50 font-medium tracking-widest text-sm uppercase transition-all duration-300 hover:bg-cyan-500/40 hover:glow-cyan hover:scale-105"
          >
            Enter Nano World
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest text-neutral-500 uppercase">Scroll to Discover</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-16 bg-gradient-to-b from-cyan-500/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
