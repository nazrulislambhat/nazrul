'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import AnimatedLink from './ui/animated-link';
import TextReveal from './ui/text-reveal';

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
        duration: 22,
        ease: 'linear',
      },
    },
  },
};

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-background border-2 border-white select-none">
      {/* 3D Wave Canvas Layer */}
      <ThreeBackground />

      {/* Infinite Scrolling Marquee */}
      <div className="relative z-10 w-full border-b-2 border-white py-3.5 overflow-hidden bg-white backdrop-blur-xs">
        <motion.div
          className="flex whitespace-nowrap text-xs font-mono tracking-widest text-black/60 font-semibold"
          variants={marqueeVariants}
          animate="animate"
        >
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span key={idx} className="flex items-center mx-6">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-black/40 mr-3" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Constrained Main Section Content (1440px) */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 xl:px-16 py-16 md:py-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        {/* Left Column */}
        <div className="flex-1 max-w-xl">
          <TextReveal
            tag="h2"
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-black mb-4 selection:bg-secondary selection:text-black"
            animationType="words"
            delay={0.1}
          >
            Let’s talk craft, code, and systems.
          </TextReveal>

          <TextReveal
            tag="p"
            className="text-base md:text-lg text-black/70 mb-8 leading-relaxed selection:bg-secondary selection:text-black"
            animationType="fade-down"
            delay={0}
          >
            Open for engineering roles, technical chats, or geeking out over
            component design and frontend internals.
          </TextReveal>

          {/* Social / Contact Links */}
          <div className="flex flex-wrap gap-3">
            <AnimatedLink
              href="mailto:nazrul@nazrulislam.dev"
              icon={Mail}
              className="py-2.5 px-4 border-2 border-white bg-white/80 rounded-md text-sm text-black hover:bg-black hover:text-white hover:border-black transition-all duration-200"
            >
              Email
            </AnimatedLink>
            <AnimatedLink
              href="https://github.com/nazrulislambhat"
              icon={Github}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 border-2 border-white bg-white/80 rounded-md text-sm text-black hover:bg-black hover:text-white hover:border-black transition-all duration-200"
            >
              GitHub
            </AnimatedLink>
            <AnimatedLink
              href="https://www.linkedin.com/in/nazrulislambhat"
              icon={Linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 border-2 border-white bg-white/80 rounded-md text-sm text-black hover:bg-black hover:text-white hover:border-black transition-all duration-200"
            >
              LinkedIn
            </AnimatedLink>
            <AnimatedLink
              href="tel:+919469444007"
              icon={Phone}
              className="py-2.5 px-4 border-2 border-white bg-white/80 rounded-md text-sm text-black hover:bg-black hover:text-white hover:border-black transition-all duration-200"
            >
              Phone
            </AnimatedLink>
          </div>
        </div>

        {/* Right Section Navigation */}
        <nav className="flex flex-col items-start md:items-end gap-3 text-black/70 font-mono text-sm">
          {['#about', '#experience', '#projects', '#skills', 'resume'].map(
            (item) => (
              <Link
                key={item}
                href={item === 'resume' ? '/resume' : `/${item}`}
                target={item === 'resume' ? '_blank' : undefined}
                className="hover:text-black transition-colors duration-150"
              >
                {item}
              </Link>
            ),
          )}
        </nav>
      </div>

      {/* Colophon Bar (1440px) */}
      <div className="relative z-10 border-t-2 border-white">
        <div className="max-w-[1440px] mx-auto py-6 px-6 md:px-12 xl:px-16 text-center md:flex md:justify-between text-xs text-black/60 font-mono">
          <p>© {new Date().getFullYear()} Nazrul Islam. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Built with Next.js, Three.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
