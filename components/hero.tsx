'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowDownRight, Terminal, Sparkles, Zap } from 'lucide-react';
import TextReveal from './ui/text-reveal';
import { TechInline } from '@/components/tech-in-line';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-40 md:pt-36 pb-12 md:pb-16 selection:bg-primary selection:text-secondary">
      <div className="max-w-site mx-auto px-4 sm:px-8 md:px-12 xl:px-16">
        <div className="relative p-8 md:p-12 xl:p-14 rounded-3xl liquid-glass border border-borderGlass flex flex-col justify-between transition-all duration-300 shadow-2xl">
          {/* Availability Status Badge with Micro Pulse */}
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2.5 w-fit px-4 py-1.5 rounded-full border border-primary bg-surface/90 text-xs font-mono shadow-xs mb-6 cursor-default backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
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
              className="text-base text-textMuted max-w-4xl leading-[2.1] mb-8 font-normal"
            >
              Specializing in <TechInline tech="js" delay={0.6} />,{' '}
              <TechInline tech="react" delay={0.75} />,{' '}
              <TechInline tech="next" delay={0.9} />, and{' '}
              <TechInline tech="ts" delay={1.05} /> architectures, styled with{' '}
              <TechInline tech="tailwind" delay={1.2} />, powered by{' '}
              <TechInline tech="redux" delay={1.35} />,{' '}
              <TechInline tech="graphql" delay={1.5} /> and{' '}
              <TechInline tech="node" delay={1.65} />. Obsessed with web
              performance, zero-jank micro-animations, and AI-augmented
              developer tooling.
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
                  className="group flex items-center gap-2 px-5 py-2.5 rounded-md hover:bg-primary hover:text-secondary dark:hover:bg-primary dark:hover:text-secondary bg-black text-white dark:bg-secondary dark:text-primary  font-mono text-xs font-bold  transition-all shadow-md cursor-pointer"
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
                  className="group flex items-center gap-2 px-5 py-2.5 rounded-md border border-borderGlass bg-surface/60 font-mono text-xs text-textMain hover:border-primary hover:text-primary transition-all cursor-pointer shadow-sm"
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
