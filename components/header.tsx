'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

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
        {/* Top Minimal Info Strip: Location & Multi-Timezone Flags Ticker */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-1 mb-1.5 font-mono text-[10px] text-textMuted/80 select-none">
          {/* Current Location */}
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-volt opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal shadow-[0_0_8px_#CCF380]" />
            </span>
            <MapPin className="w-3 h-3 text-textMuted" />
            <span className="text-textMain font-medium">Bengaluru, IN</span>
          </div>

          {/* Times with Flag Badges */}
          <div className="flex items-center gap-3 sm:gap-4 font-medium">
            <div className="flex items-center gap-1.5">
              <span className="text-textMain">{time.ist}</span>
            </div>
          </div>
        </div>

        {/* Floating Glass Navigation Island */}
        <div className="flex items-center justify-between py-3 px-6 md:px-8 rounded-2xl liquid-glass transition-all duration-300 ">
          <Link href="/" className="relative block group">
            <Image
              src={logo}
              alt="Nazrul Islam Logo"
              width={38}
              height={38}
              className="rounded-full border-2 border-borderGlass transition-transform duration-200 group-hover:scale-105 group-hover:border-signal-dim/50"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-textMuted hover:text-signal animated-border py-0.5 transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-borderGlass bg-surface text-textMain hover:bg-volt hover:text-black hover:border-volt transition-all shadow-xs text-xs font-semibold"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-signal group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
                <X className="w-5 h-5 text-signal" />
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
                    className="text-textMuted hover:text-signal py-1 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between pt-3 mt-2 border-t border-borderGlass text-textMain font-semibold hover:text-signal transition-colors"
                >
                  <span>Resume</span>
                  <ArrowUpRight className="w-4 h-4 text-signal" />
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
