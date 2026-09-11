'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDownRight, Terminal, Sparkles } from 'lucide-react';
import TextReveal from './ui/text-reveal';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-40 md:pt-36 pb-12 md:pb-16">
      <div className="max-w-site mx-auto px-4 sm:px-8 md:px-12 xl:px-16">
        <div className="relative p-8 md:p-12 xl:p-14 rounded-3xl liquid-glass border border-borderGlass flex flex-col justify-between transition-all duration-300">
          {/* Availability Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2.5 w-fit px-3.5 py-1.5 rounded-full border border-signal-dim/30 bg-surface/80 text-xs font-mono text-signal shadow-xs mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-volt opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal shadow-[0_0_8px_#CCF380]" />
            </span>
            <span className="font-semibold text-textMain">
              Available for technical discussions &amp; roles
            </span>
          </motion.div>

          {/* Main Headline Group */}
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="text-xs md:text-sm font-mono uppercase tracking-widest text-textMuted mb-2"
            >
              Senior Frontend Engineer &amp; Architect
            </motion.p>

            <TextReveal
              tag="h1"
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-textMain leading-[1.08] mb-6"
              animationType="words"
              delay={0.1}
            >
              Crafting resilient systems, fast web apps, and clean UI.
            </TextReveal>

            <TextReveal
              tag="p"
              className="text-base md:text-lg text-textMuted max-w-2xl leading-relaxed mb-8 font-normal"
              animationType="fade-down"
              delay={0.18}
            >
              Specializing in React, Next.js, and TypeScript architectures.
              Obsessed with web performance, zero-jank animations, and developer
              tooling.
            </TextReveal>
          </div>

          {/* Bottom Action Footer */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.25 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-6 border-t-2 border-borderGlass"
          >
            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                href="#projects"
                className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-bold hover:bg-volt hover:text-black dark:hover:bg-volt dark:hover:text-black transition-all shadow-xs"
              >
                <span>View Architecture &amp; Code</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="#experience"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-borderGlass bg-surface/60 font-mono text-xs text-textMain hover:border-signal-dim hover:text-signal-dim transition-all"
              >
                <Terminal className="w-4 h-4 text-signal" />
                <span>Experience</span>
              </Link>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-textMuted">
              <Sparkles className="w-4 h-4 text-signal shrink-0" />
              <span className="font-medium text-textMain">
                Accessibility &amp; CWV Focused
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
