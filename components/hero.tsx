'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDownRight, Terminal, Sparkles } from 'lucide-react';
import TextReveal from './ui/text-reveal';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background text-black selection:bg-secondary selection:text-black">
      {/* Container constrained to max 1440px */}
      <div className="mx-auto px-6 md:px-12 xl:px-16 pt-32 pb-16 md:pt-32 md:pb-24">
        {/* Main Hero Card with crisp border-2 border-white */}
        <div className="relative p-8 md:p-14 xl:p-18 border-2 border-white rounded-2xl bg-coolWhite/40 backdrop-blur-xs flex flex-col justify-between">
          {/* Top Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2.5 w-fit px-3 py-1.5 rounded-full border-2 border-white bg-white/80 text-xs font-mono text-black/70 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green" />
            </span>
            <span>Available for technical discussions & engineering roles</span>
          </motion.div>

          {/* Core Intro Headings */}
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-sm md:text-base font-mono uppercase tracking-widest text-black/60 mb-3"
            >
              Senior Frontend Engineer &amp; Architect
            </motion.p>

            <TextReveal
              tag="h1"
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-black leading-[1.08] mb-6"
              animationType="words"
              delay={0.15}
            >
              Crafting resilient systems, fast web apps, and clean UI.
            </TextReveal>

            <TextReveal
              tag="p"
              className="text-lg md:text-xl text-black/70 max-w-2xl leading-relaxed mb-10 font-normal"
              animationType="fade-down"
              delay={0.25}
            >
              Specializing in React, Next.js, and TypeScript architectures.
              Obsessed with web performance, zero-jank animations, and developer
              tooling.
            </TextReveal>
          </div>

          {/* Quick Action CTAs & Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t-2 border-white"
          >
            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className="flex items-center gap-2 px-5 py-3 rounded-md bg-black text-white font-mono text-sm hover:bg-black/80 transition-colors shadow-xs"
              >
                <span>View Architecture &amp; Code</span>
                <ArrowDownRight className="w-4 h-4" />
              </Link>

              <Link
                href="#experience"
                className="flex items-center gap-2 px-5 py-3 rounded-md border-2 border-white bg-white/80 font-mono text-sm text-black hover:bg-black hover:text-white hover:border-black transition-all"
              >
                <Terminal className="w-4 h-4" />
                <span>Experience</span>
              </Link>
            </div>

            {/* Quick Metrics / Philosophy Indicator */}
            <div className="flex items-center gap-6 font-mono text-xs text-black/60">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-black/80" />
                <span>Accessibility &amp; CWV Focused</span>
              </div>
              <div className="hidden md:block">
                <span>Next.js • TypeScript • Design Systems</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
