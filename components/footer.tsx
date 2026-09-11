'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import AnimatedLink from './ui/animated-link';
import TextReveal from './ui/text-reveal';

// Disable SSR for WebGL context
const ThreeBackground = dynamic(() => import('./ui/three-background'), {
  ssr: false,
});

const marqueeItems = [
  'REACT ARCHITECTURE',
  'TYPESCRIPT',
  'NEXT.JS',
  'DESIGN SYSTEMS',
  'PERFORMANCE',
  'WEBGL / 3D',
  'MICRO-FRONTENDS',
];

const marqueeVariants = {
  animate: {
    x: ['0%', '-50%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 20,
        ease: 'linear',
      },
    },
  },
};

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-black border-t border-white/10 select-none">
      {/* 3D WebGL Canvas Layer */}
      <ThreeBackground />

      {/* Subtle Vignette Gradient to blend Three.js into the edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-transparent to-neutral-950 pointer-events-none" />

      {/* Infinite Scrolling Ticker */}
      <div className="relative z-10 w-full border-b border-white/10 py-3.5 overflow-hidden backdrop-blur-xs">
        <motion.div
          className="flex whitespace-nowrap text-[8px] font-mono tracking-widest text-neutral-400"
          variants={marqueeVariants}
          animate="animate"
        >
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span key={idx} className="flex items-center mx-6">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-green mr-3" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="flex-1 max-w-xl">
          <TextReveal
            tag="h2"
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4"
            animationType="words"
            delay={0.1}
          >
            Let’s talk architecture, systems, or frontend craft.
          </TextReveal>

          <TextReveal
            tag="p"
            className="text-base md:text-lg text-neutral-400 mb-8 leading-relaxed"
            animationType="fade-down"
            delay={0}
          >
            Always down to discuss component architecture, web performance, or
            distributed systems
          </TextReveal>

          {/* Action Links */}
          <div className="flex flex-wrap gap-3">
            <AnimatedLink
              href="mailto:nazrul@nazrulislam.dev"
              icon={Mail}
              className="py-2.5 px-4 border border-white rounded-sm text-[8px] text-white hover:border-secondary hover:text-secondary transition"
            >
              Email
            </AnimatedLink>
            <AnimatedLink
              href="https://github.com/nazrulislambhat"
              icon={Github}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 border border-white rounded-sm text-[8px] text-white hover:border-secondary hover:text-secondary  transition"
            >
              GitHub
            </AnimatedLink>
            <AnimatedLink
              href="https://www.linkedin.com/in/nazrulislambhat"
              icon={Linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 border border-white rounded-sm text-[8px] text-white hover:border-secondary hover:text-secondary transition"
            >
              LinkedIn
            </AnimatedLink>
            <AnimatedLink
              href="tel:+919469444007"
              icon={Phone}
              className="py-2.5 px-4 border border-white rounded-sm text-[8px] text-white hover:border-secondary hover:text-secondary transition"
            >
              Phone
            </AnimatedLink>
          </div>
        </div>

        {/* Quick Links */}
        <nav className="flex flex-col items-start md:items-end gap-3 text-neutral-400 font-mono text-sm">
          {['#about', '#experience', '#projects', '#skills', 'resume'].map(
            (item) => (
              <Link
                key={item}
                href={item === 'resume' ? '/resume' : `/${item}`}
                target={item === 'resume' ? '_blank' : undefined}
                className="hover:text-white transition-colors duration-200"
              >
                {item}
              </Link>
            ),
          )}
        </nav>
      </div>

      {/* Colophon */}
      <div className="relative z-10 border-t border-white/5 py-6 px-6 md:px-12 text-center md:flex md:justify-between text-[8px] text-neutral-400 font-mono max-w-7xl mx-auto">
        <p>© {new Date().getFullYear()} Nazrul Islam. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Built with Next.js, Three.js & Tailwind</p>
      </div>
    </footer>
  );
}
