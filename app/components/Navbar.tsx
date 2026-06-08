"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="sticky top-0 z-50 h-16 flex items-center px-6 md:px-16 lg:px-24"
      style={{
        background: "rgba(255,255,255,0.95)",
        borderBottom: "1px solid #e8e2d9",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
      }}
      animate={{
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        boxShadow: scrolled
          ? "0 1px 24px rgba(15,39,68,0.07)"
          : "0 0px 0px rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="max-w-5xl w-full mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/derm_nexus_logo.png"
            alt="DermNexus"
            height={32}
            width={32}
            className="object-contain"
          />
          <span
            className="font-heading font-semibold text-xl tracking-tight hidden sm:block"
            style={{ color: "#0f2744", letterSpacing: "-0.01em" }}
          >
            DermNexus
          </span>
        </a>

        {/* Nav */}
        <nav className="flex items-center gap-4 md:gap-8">
          <a href="#about" className="nav-link hidden md:block">Teknoloji</a>
          <a href="#team" className="nav-link hidden md:block">Ekip</a>
          <a
            href="mailto:info@dermnexus.com.tr"
            className="btn-contact flex items-center gap-2 px-3.5 py-2 rounded-md whitespace-nowrap text-xs font-semibold"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 7 10 6 10-6" />
            </svg>
            info@dermnexus.com.tr
          </a>
          <a
            href="#waitlist"
            className="btn-teal px-5 py-2.5 text-xs font-semibold rounded-md"
            style={{ letterSpacing: "0.04em" }}
          >
            Beta&apos;ya Katıl
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
