import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Navbar } from "@/components/shared/Navbar";
import { CursorEffect } from "@/components/shared/CursorEffect";
import { Footer } from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Sense-XT Innovations | Deep-Tech Diagnostics",
  description: "Advancing next-generation sensor fabrication and AI for ultra-early disease detection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-[#050505] text-white selection:bg-cyan-500/30">
        <Navbar />
        <CursorEffect />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
