'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Zap, Layout, Terminal } from 'lucide-react';

const pillars = [
  {
    icon: Layout,
    title: 'Frontend Architecture',
    desc: 'Modular design systems, micro-frontends, and strict TypeScript patterns scaling across multi-brand setups.',
  },
  {
    icon: Zap,
    title: 'Performance & CWV',
    desc: 'Sub-second loads, bundle size discipline, edge caching strategies, and Core Web Vitals optimization.',
  },
  {
    icon: Cpu,
    title: 'Engineering Craft',
    desc: 'Deep focus on web standards, accessible UI (WCAG 2.1 AA), state machine predictability, and modern build tools.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-background text-textMain py-8 md:py-12"
    >
      <div className="max-w-site mx-auto px-4 sm:px-8 md:px-12 xl:px-16">
        <div className="p-8 md:p-12 xl:p-14 rounded-3xl liquid-glass border border-borderGlass">
          {/* Section Eyebrow */}
          <div className="flex items-center gap-2 font-mono text-xs text-textMuted uppercase tracking-widest mb-3">
            <Terminal className="w-4 h-4 text-signal" />
            <span>Background &amp; Focus</span>
          </div>

          {/* Section Narrative */}
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-textMain mb-6 leading-tight">
              Bridging robust engineering with uncompromising interface design.
            </h2>

            <div className="space-y-4 text-base md:text-lg text-textMuted leading-relaxed">
              <p>
                I am a senior frontend engineer and architect with over half a
                decade of experience building production web applications. My
                work centers on the modern{' '}
                <strong className="text-textMain font-semibold">
                  TypeScript, React, and Next.js
                </strong>{' '}
                ecosystems, delivering interfaces that remain maintainable as
                teams and products scale.
              </p>
              <p>
                I value predictable architecture over framework churn: clean
                state modeling, accessible component libraries, and build
                tooling tuned for fast feedback loops.
              </p>
            </div>
          </div>

          {/* Core Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 pt-8 border-t-2 border-borderGlass">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.06 }}
                  className="p-6 rounded-2xl liquid-glass-subtle border border-borderGlass/60 flex flex-col justify-start"
                >
                  <div className="w-9 h-9 rounded-xl border border-borderGlass bg-surface/80 flex items-center justify-center mb-4 text-textMain">
                    <Icon className="w-4 h-4 text-signal" />
                  </div>
                  <h3 className="font-mono text-sm font-bold text-textMain mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs md:text-sm text-textMuted leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
