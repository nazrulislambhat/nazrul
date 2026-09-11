'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, MapPin, Clock } from 'lucide-react';
import EyeTrackerLogo from './ui/eye-tracker-logo';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

/* Clean inline SVG flags */
function IndiaFlag() {
  return (
    <svg
      className="w-3.5 h-2.5 rounded-[2px] shadow-xs overflow-hidden shrink-0"
      viewBox="0 0 640 480"
    >
      <path fill="#f93" d="M0 0h640v160H0z" />
      <path fill="#fff" d="M0 160h640v160H0z" />
      <path fill="#128807" d="M0 320h640v160H0z" />
      <circle cx="320" cy="240" r="50" fill="#008" />
      <circle cx="320" cy="240" r="40" fill="#fff" />
      <circle cx="320" cy="240" r="10" fill="#008" />
    </svg>
  );
}

function AustraliaFlag() {
  return (
    <svg
      className="w-3.5 h-2.5 rounded-[2px] shadow-xs overflow-hidden shrink-0"
      viewBox="0 0 640 480"
    >
      <path fill="#00008b" d="M0 0h640v480H0z" />
      <path fill="#fff" d="M0 0h320v240H0z" />
      <path fill="#cc0000" d="M120 0h80v240h-80zM0 80h320v80H0z" />
      <path
        fill="#fff"
        d="M0 0l320 240m0-240L0 240"
        stroke="#fff"
        strokeWidth="25"
      />
      <path
        fill="#cc0000"
        d="M0 0l320 240m0-240L0 240"
        stroke="#cc0000"
        strokeWidth="15"
      />
      <circle cx="480" cy="360" r="14" fill="#fff" />
      <circle cx="540" cy="200" r="14" fill="#fff" />
      <circle cx="420" cy="180" r="14" fill="#fff" />
      <circle cx="480" cy="120" r="14" fill="#fff" />
    </svg>
  );
}

function NewZealandFlag() {
  return (
    <svg
      className="w-3.5 h-2.5 rounded-[2px] shadow-xs overflow-hidden shrink-0"
      viewBox="0 0 640 480"
    >
      <path fill="#00247d" d="M0 0h640v480H0z" />
      <path fill="#fff" d="M0 0h320v240H0z" />
      <path fill="#cc142b" d="M120 0h80v240h-80zM0 80h320v80H0z" />
      <circle
        cx="480"
        cy="120"
        r="12"
        fill="#cc142b"
        stroke="#fff"
        strokeWidth="3"
      />
      <circle
        cx="550"
        cy="200"
        r="12"
        fill="#cc142b"
        stroke="#fff"
        strokeWidth="3"
      />
      <circle
        cx="480"
        cy="340"
        r="14"
        fill="#cc142b"
        stroke="#fff"
        strokeWidth="3"
      />
      <circle
        cx="420"
        cy="230"
        r="10"
        fill="#cc142b"
        stroke="#fff"
        strokeWidth="3"
      />
    </svg>
  );
}
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState({
    ist: '--:--:--',
    au: '--:--:--',
    nz: '--:--:--',
  });

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();

      const formatTime = (timeZone: string) =>
        new Intl.DateTimeFormat('en-GB', {
          timeZone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now);

      setTime({
        ist: formatTime('Asia/Kolkata'),
        au: formatTime('Australia/Sydney'),
        nz: formatTime('Pacific/Auckland'),
      });
    };

    updateClocks();
    const intervalId = setInterval(updateClocks, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-40 bg-transparent pointer-events-none">
      <div className="max-w-site mx-auto px-6 md:px-12 xl:px-16 pt-2.5 pointer-events-auto">
        {/* Top Minimal Info Strip: Location & Multi-Timezone Ticker */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-1 mb-1.5 font-mono text-[10px] text-textMuted/80 select-none">
          {/* Current Location */}
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
            </span>
            <MapPin className="w-2.5 h-2.5 text-textMuted" />
            <span>Bengaluru, IN</span>
          </div>

          {/* Timezones */}
          {/* Times with Flag Badges */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-1.5">
              <span className="text-textMain font-medium">{time.ist}</span>
            </div>
          </div>
        </div>

        {/* Floating Glass Navigation Island */}
        <div className="flex items-center justify-between py-3 px-6 md:px-8 rounded-2xl liquid-glass">
          <Link href="/" className="relative block group">
            <Image
              src={logo}
              alt="Logo"
              width={38}
              height={38}
              className="rounded-full border-2 border-borderGlass transition-transform duration-200 group-hover:scale-105"
              priority
            />
          </Link>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-textMuted hover:text-textMain animated-border py-0.5 transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border-2 border-borderGlass bg-white/70 dark:bg-black/40 text-textMain hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all shadow-xs text-xs font-semibold"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </nav>
          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-textMain p-1"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 p-5 rounded-2xl liquid-glass shadow-lg"
            >
              <nav className="flex flex-col gap-3 font-mono text-sm">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-textMuted hover:text-textMain py-1"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between pt-3 mt-2 border-t border-borderGlass text-textMain font-semibold"
                >
                  <span>Resume</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
