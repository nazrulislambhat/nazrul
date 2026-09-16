'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import CityTelemetry from './ui/city-telemetry';
import GithubPulse from './ui/github-pulse';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Reading', href: '#reading' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-40 bg-transparent pointer-events-none">
      <div className="max-w-site mx-auto px-4 sm:px-8 md:px-12 xl:px-16 pt-3 sm:pt-4 pointer-events-auto">
        {/* Top Minimal Info Strip */}
        <div className="flex items-center justify-between px-1 mb-2 select-none">
          <CityTelemetry />
          <GithubPulse />
        </div>

        {/* Floating Glass Navigation Island */}
        <div className="flex items-center justify-between py-2.5 px-5 md:px-7 rounded-2xl liquid-glass border border-borderGlass shadow-xs transition-all duration-300">
          <Link href="/" className="relative block group">
            <Image
              src={logo}
              alt="Nazrul Islam Logo"
              width={36}
              height={36}
              className="rounded-full border-2 border-borderGlass transition-transform duration-200 group-hover:scale-105 group-hover:border-signal-dim/50"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 font-mono text-xs uppercase tracking-wider">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-textMuted hover:text-signal animated-border py-1 transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-borderGlass bg-surface text-textMain hover:bg-volt hover:text-black hover:border-volt transition-all shadow-2xs text-xs font-semibold"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-volt group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-textMain p-1.5 rounded-lg hover:bg-surface transition-colors cursor-pointer"
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
              className="md:hidden mt-2 p-5 rounded-2xl liquid-glass border border-borderGlass shadow-xl"
            >
              <nav className="flex flex-col gap-3 font-mono text-sm">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-textMuted hover:text-signal py-1.5 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between pt-3 mt-1 border-t border-borderGlass text-textMain font-semibold hover:text-signal transition-colors"
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
