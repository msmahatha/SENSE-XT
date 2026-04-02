"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger glassmorphism after scrolling past 50px from the hero section
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to check initial scroll position
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div 
        className="fixed top-0 left-0 h-[2px] bg-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.8)] z-[60] transition-all duration-150 ease-out" 
        style={{ width: `${scrollProgress}%` }}
      />
      <nav 
        className={`fixed left-0 right-0 w-full z-50 transition-all duration-500 flex justify-center ${
          isScrolled ? "top-3 sm:top-4 px-3 sm:px-6" : "top-0 px-4 sm:px-6 lg:px-8 py-4 sm:py-6"
        }`}
      >
        <div 
          className={`w-full max-w-7xl flex items-center justify-between transition-all duration-500 ${
            isScrolled 
              ? "bg-[#050505]/70 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/50 rounded-2xl px-4 sm:px-6 py-3" 
              : "bg-transparent border border-transparent px-0 py-0"
          }`}
        >
          <Link href="/" className="flex items-center gap-3 group relative cursor-none z-50">
            <div className={`relative overflow-hidden group-hover:scale-105 transition-all duration-500 ${isScrolled ? 'w-[120px] sm:w-[150px]' : 'w-[140px] sm:w-[160px]'}`}>
              <Image
                src="/logo.png"
                alt="Sense-XT Logo"
                width={180}
                height={54}
                className="object-contain w-full h-auto"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-wrap items-center gap-4 lg:gap-6 text-xs lg:text-sm font-medium tracking-widest uppercase text-white/70">
            <Link href="/" className="hover:text-cyan-400 transition-colors cursor-none">Home</Link>
            <Link href="/rnd" className="hover:text-cyan-400 transition-colors cursor-none">R&D</Link>
            <Link href="/product" className="hover:text-cyan-400 transition-colors cursor-none">Product</Link>
            <Link href="/about" className="hover:text-cyan-400 transition-colors cursor-none">About</Link>
            <Link href="/publications" className="hover:text-cyan-400 transition-colors cursor-none">Publications</Link>
            <Link href="/blogs" className="hover:text-cyan-400 transition-colors cursor-none">Blogs</Link>
            <Link href="/career" className="border border-white/20 hover:border-cyan-400 px-4 py-2 flex items-center gap-2 rounded-full hover:text-cyan-400 transition-colors cursor-none">Career</Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="lg:hidden flex flex-col items-center justify-center gap-1.5 p-2 rounded-full hover:bg-white/5 transition-colors cursor-none z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 origin-center ${isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 origin-center ${isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-2xl flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-xl font-bold tracking-widest uppercase text-white/80">
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/" className="hover:text-cyan-400 transition-colors cursor-none">Home</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/rnd" className="hover:text-cyan-400 transition-colors cursor-none">R&D</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/product" className="hover:text-cyan-400 transition-colors cursor-none">Product</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/about" className="hover:text-cyan-400 transition-colors cursor-none">About</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/publications" className="hover:text-cyan-400 transition-colors cursor-none">Publications</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/blogs" className="hover:text-cyan-400 transition-colors cursor-none">Blogs</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/career" className="text-cyan-400 border border-cyan-400 px-8 py-3 mt-4 rounded-full hover:bg-cyan-400/10 transition-colors cursor-none">Career</Link>
        </div>
      </div>
    </>
  );
}
