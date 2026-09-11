'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
      className="relative w-full overflow-hidden bg-background text-textMain py-16 md:py-24"
    >
      <div className="max-w-site mx-auto px-6 md:px-12 xl:px-16">
        <div className="p-8 md:p-14 xl:p-16 rounded-3xl liquid-glass">
          <div className="flex items-center gap-2 font-mono text-xs text-textMuted uppercase tracking-widest mb-6">
            <Terminal className="w-4 h-4 text-green" />
            <span>Background &amp; Focus</span>
          </div>

          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-textMain mb-8 leading-tight">
              Bridging robust engineering with uncompromising interface design.
            </h2>

            <div className="space-y-5 text-base md:text-lg text-textMuted leading-relaxed">
              <p>
                I am a senior frontend engineer and architect with over half a
                decade of experience building production web applications. My
                work centers on the modern
                <strong> TypeScript, React, and Next.js</strong> ecosystems,
                delivering interfaces that remain maintainable as teams and
                products scale.
              </p>
              <p>
                I value predictable architecture over framework churn: clean
                state modeling, accessible component libraries, and build
                tooling tuned for fast feedback loops.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-10 border-t-2 border-borderGlass">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  className="p-6 rounded-2xl liquid-glass-subtle flex flex-col justify-start"
                >
                  <div className="w-9 h-9 rounded-xl border-2 border-borderGlass bg-surface flex items-center justify-center mb-4 text-textMain">
                    <Icon className="w-4 h-4 text-green" />
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
