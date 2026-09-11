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
  'PERFORMANCE OPTIMIZATION',
  'WEBGL / THREE.JS',
  'CORE WEB VITALS',
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
    <footer className="relative w-full overflow-hidden bg-background text-textMain border-t-2 border-borderGlass select-none">
      <ThreeBackground />

      {/* Infinite Marquee Ticker */}
      <div className="relative z-10 w-full border-b-2 border-borderGlass py-3.5 overflow-hidden bg-surface backdrop-blur-xs">
        <motion.div
          className="flex whitespace-nowrap text-xs font-mono tracking-widest text-textMuted font-semibold"
          variants={marqueeVariants}
          animate="animate"
        >
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span key={idx} className="flex items-center mx-6">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-textMuted mr-3" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Main Footer Body */}
      <div className="relative z-10 max-w-site mx-auto px-6 md:px-12 xl:px-16 py-16 md:py-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="flex-1 max-w-xl">
          <TextReveal
            tag="h2"
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-textMain mb-4"
            animationType="words"
            delay={0.1}
          >
            Solving hard problems, one commit at a time.
          </TextReveal>

          <TextReveal
            tag="p"
            className="text-base md:text-lg text-textMuted mb-8 leading-relaxed font-normal"
            animationType="fade-down"
            delay={0}
          >
            Always up for talking web performance, large-scale frontend
            architecture, or exploring interesting open-source ideas.
          </TextReveal>

          <div className="flex flex-wrap gap-3">
            <AnimatedLink
              href="mailto:nazrul@nazrulislam.dev"
              icon={Mail}
              className="py-2.5 px-4 rounded-xl border-2 border-borderGlass bg-white/60 dark:bg-black/40 text-textMain hover:border-textMain"
            >
              Email
            </AnimatedLink>
            <AnimatedLink
              href="https://github.com/nazrulislambhat"
              icon={Github}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl border-2 border-borderGlass bg-white/60 dark:bg-black/40 text-textMain hover:border-textMain"
            >
              GitHub
            </AnimatedLink>
            <AnimatedLink
              href="https://www.linkedin.com/in/nazrulislambhat"
              icon={Linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl border-2 border-borderGlass bg-white/60 dark:bg-black/40 text-textMain hover:border-textMain"
            >
              LinkedIn
            </AnimatedLink>
            <AnimatedLink
              href="tel:+919469444007"
              icon={Phone}
              className="py-2.5 px-4 rounded-xl border-2 border-borderGlass bg-white/60 dark:bg-black/40 text-textMain hover:border-textMain"
            >
              Phone
            </AnimatedLink>
          </div>
        </div>

        {/* Right Nav */}
        <nav className="flex flex-col items-start md:items-end gap-3 text-textMuted font-mono text-sm">
          {[
            '#about',
            '#experience',
            '#projects',
            '#skills',
            '#contact',
            'resume',
          ].map((item) => (
            <Link
              key={item}
              href={item === 'resume' ? '/resume' : `/${item}`}
              target={item === 'resume' ? '_blank' : undefined}
              className="hover:text-textMain transition-colors duration-150"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>

      {/* Colophon */}
      <div className="relative z-10 border-t-2 border-borderGlass">
        <div className="max-w-site mx-auto py-6 px-6 md:px-12 xl:px-16 text-center md:flex md:justify-between text-xs text-textMuted font-mono">
          <p>© {new Date().getFullYear()} Nazrul Islam. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Built with Next.js, Three.js &amp; Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
