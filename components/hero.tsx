'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDownRight, Terminal, Sparkles } from 'lucide-react';
import TextReveal from './ui/text-reveal';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background text-textMain py-32 md:pt-44 md:pb-28">
      <div className="max-w-site mx-auto px-6 md:px-12 xl:px-16">
        <div className="relative p-8 md:p-14 xl:p-18 rounded-3xl liquid-glass flex flex-col justify-between">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-2.5 w-fit px-3.5 py-1.5 rounded-full border-2 border-borderGlass bg-white/60 dark:bg-black/40 text-xs font-mono text-textMuted mb-8 shadow-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute bg-black inline-flex h-full w-full rounded-full bg-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green" />
            </span>
            <span>Available for technical discussions &amp; roles</span>
          </motion.div>

          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.08 }}
              className="text-xs md:text-sm font-mono uppercase tracking-widest text-textMuted mb-3"
            >
              Senior Frontend Engineer &amp; Architect
            </motion.p>

            <TextReveal
              tag="h1"
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-textMain leading-[1.08] mb-6"
              animationType="words"
              delay={0.12}
            >
              Crafting resilient systems, fast web apps, and clean UI.
            </TextReveal>

            <TextReveal
              tag="p"
              className="text-base md:text-l text-textMuted max-w-2xl leading-relaxed mb-10 font-normal"
              animationType="fade-down"
              delay={0.2}
            >
              Specializing in React, Next.js, and TypeScript architectures.
              Obsessed with web performance, zero-jank animations, and developer
              tooling.
            </TextReveal>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.28 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t-2 border-borderGlass"
          >
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-bold hover:opacity-90 transition-opacity shadow-xs"
              >
                <span>View Architecture &amp; Code</span>
                <ArrowDownRight className="w-4 h-4" />
              </Link>
              <Link
                href="#experience"
                className="flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-borderGlass bg-white/60 dark:bg-black/40 font-mono text-xs text-textMain hover:border-textMain transition-colors"
              >
                <Terminal className="w-4 h-4" />
                <span>Experience</span>
              </Link>
            </div>

            <div className="flex items-center gap-6 font-mono text-xs text-textMuted">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-textMain" />
                <span>Accessibility &amp; CWV Focused</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
