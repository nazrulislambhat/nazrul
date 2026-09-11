'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Layout, Terminal } from 'lucide-react';

const pillars = [
  {
    icon: Layout,
    title: 'Frontend Architecture',
    desc: 'Modular design systems, micro-frontends, and strict TypeScript patterns that scale cleanly across multi-brand enterprise platforms.',
  },
  {
    icon: Zap,
    title: 'Performance & CWV',
    desc: 'Sub-second loads, bundle size discipline, edge caching strategies, and Core Web Vitals optimization without UX degradation.',
  },
  {
    icon: Cpu,
    title: 'Engineering Craft',
    desc: 'Deep focus on web standards, accessible UI (WCAG 2.1 AA), state machine predictability, and resilient build tooling.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-background text-black selection:bg-secondary selection:text-black py-16 md:py-24"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-16">
        <div className="p-8 md:p-14 xl:p-16 border-2 border-white rounded-2xl bg-coolWhite/40 backdrop-blur-xs">
          {/* Section Header */}
          <div className="flex items-center gap-2 font-mono text-xs text-black/60 uppercase tracking-widest mb-6">
            <Terminal className="w-4 h-4" />
            <span>Background &amp; Focus</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-8 leading-tight">
              Bridging robust engineering with uncompromising interface design.
            </h2>

            <div className="space-y-5 text-base md:text-lg text-black/80 leading-relaxed font-normal">
              <p>
                I am a senior frontend engineer and architect with over half a
                decade of experience designing and scaling production web
                applications. My work centers on the modern{' '}
                <strong>TypeScript, React, and Next.js</strong> ecosystems,
                building interfaces that remain maintainable through rapid team
                and code growth.
              </p>

              <p>
                I prioritize predictable architecture over framework hype:
                deterministic state patterns, accessible component foundations,
                and build tooling tuned for fast developer feedback loops.
                Whether migrating legacy pipelines or untangling enterprise
                monorepos, my focus remains steady on delivering resilient user
                experiences.
              </p>
            </div>
          </motion.div>

          {/* Technical Focus Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-10 border-t-2 border-white">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.1 }}
                  className="p-6 border-2 border-white rounded-xl bg-white/70 flex flex-col justify-start"
                >
                  <div className="w-9 h-9 rounded-lg border-2 border-white bg-coolWhite flex items-center justify-center mb-4 text-black">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-mono text-sm font-bold text-black mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs md:text-sm text-black/70 leading-relaxed">
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
