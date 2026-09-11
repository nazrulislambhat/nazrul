'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-transparent pointer-events-none">
      {/* 1440px max width container */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-16 pt-4 pointer-events-auto">
        <div className="flex items-center justify-between py-3.5 px-6 md:px-8 border-2 border-white rounded-xl bg-coolWhite/50 backdrop-blur-md shadow-xs">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <Link href="/" className="relative block group">
              <Image
                src={logo}
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full border-2 border-white transition-transform duration-200 group-hover:scale-105"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider">
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.04 * idx }}
              >
                <Link
                  href={link.href}
                  className="text-black/70 hover:text-black animated-border py-0.5 transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {/* Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.04 * navLinks.length }}
            >
              <Link
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border-2 border-white bg-white text-black hover:bg-black hover:text-white hover:border-black transition-all duration-200 shadow-xs text-xs font-semibold"
              >
                <span>Resume</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-black p-1 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 p-5 border-2 border-white rounded-xl bg-coolWhite/95 backdrop-blur-lg shadow-sm"
            >
              <nav className="flex flex-col gap-3 font-mono text-sm">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-black/80 hover:text-black transition-colors py-1"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between pt-3 mt-2 border-t-2 border-white text-black font-semibold"
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
