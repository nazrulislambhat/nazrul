'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logo from '../assets/logo.png';
import EyeTrackerLogo from './ui/eye-tracker-logo';
const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-40 bg-transparent pointer-events-none">
      <div className="max-w-site mx-auto px-6 md:px-12 xl:px-16 pt-5 pointer-events-auto">
        <div className="flex items-center justify-between py-3.5 px-6 md:px-8 rounded-2xl liquid-glass">
          {/* Logo */}
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
