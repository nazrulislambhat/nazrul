'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowDownRight, Terminal, Sparkles, Zap } from 'lucide-react';
import TextReveal from './ui/text-reveal';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-40 md:pt-36 pb-12 md:pb-16 selection:bg-primary selection:text-black">
      <div className="max-w-site mx-auto px-4 sm:px-8 md:px-12 xl:px-16">
        <div className="relative p-8 md:p-12 xl:p-14 rounded-3xl liquid-glass border border-borderGlass flex flex-col justify-between transition-all duration-300 shadow-2xl">
          {/* Availability Status Badge with Micro Pulse */}
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2.5 w-fit px-4 py-1.5 rounded-full border border-signal bg-surface/90 text-xs font-mono shadow-xs mb-6 cursor-default backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
            </span>
            <span className="font-semibold text-textMain tracking-wide">
              Available for new opportunities
            </span>
          </motion.div>

          {/* Main Headline Group */}
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-xs md:text-sm font-mono uppercase tracking-widest text-textMuted mb-3 flex items-center gap-2"
            >
              <Zap className="w-3.5 h-3.5 text-primary animate-pulse" />
              <span>Senior Software Engineer • Frontend Specialist</span>
            </motion.div>

            {/* Headline with highlighted target text */}
            <TextReveal
              tag="h1"
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-textMain leading-[1.08] mb-6"
              animationType="words"
              delay={0.2}
            >
              Crafting{' '}
              <span className="text-primary font-extrabold">
                resilient systems
              </span>
              ,{' '}
              <span className="text-primary font-extrabold">fast web apps</span>
              , and clean UI.
            </TextReveal>

            {/* Subtitle matching site's global font stack */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-base text-textMuted max-w-4xl leading-relaxed mb-8 font-normal"
            >
              Specializing in{' '}
              <strong className="text-textMain font-semibold underline decoration-signal underline-offset-4">
                React.js
              </strong>
              ,{' '}
              <strong className="text-textMain font-semibold underline decoration-signal underline-offset-4">
                Next.js
              </strong>
              , and{' '}
              <strong className="text-textMain font-semibold underline decoration-signal underline-offset-4">
                TypeScript
              </strong>{' '}
              architectures. Obsessed with web performance, zero-jank
              micro-animations, and AI-augmented developer tooling.
            </motion.p>
          </div>

          {/* Bottom Action Footer with Micro Interactions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-6 border-t-2 border-borderGlass"
          >
            <div className="flex flex-wrap items-center gap-3.5">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="#projects"
                  className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-bold hover:bg-volt hover:text-black dark:hover:bg-volt dark:hover:text-black transition-all shadow-md cursor-pointer"
                >
                  <span>View Architecture &amp; Code</span>
                  <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-200" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="#contact"
                  className="group flex items-center gap-2 px-5 py-2.5 rounded-xl border border-borderGlass bg-surface/60 font-mono text-xs text-textMain hover:border-signal hover:text-primary transition-all cursor-pointer shadow-sm"
                >
                  <Terminal className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform duration-200" />
                  <span>Explore Experience</span>
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 font-mono text-xs text-textMuted cursor-default"
            >
              <Sparkles className="w-4 h-4 text-primary shrink-0 animate-spin-slow" />
              <span className="font-medium text-textMain">
                Accessibility &amp; CWV Focused
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
