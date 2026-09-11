'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Cpu, ShieldCheck, Wrench } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    category: 'Core & Languages',
    skills: [
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5 / Semantic Web',
      'CSS3 / Modern Layouts',
      'Node.js',
      'SQL / PostgreSQL',
    ],
  },
  {
    icon: Cpu,
    category: 'Frameworks & Frontend',
    skills: [
      'React.js',
      'Next.js (App Router)',
      'Framer Motion',
      'Tailwind CSS',
      'Redux Toolkit / Zustand',
      'Three.js / WebGL',
    ],
  },
  {
    icon: ShieldCheck,
    category: 'Architecture & Standards',
    skills: [
      'Design Systems',
      'Micro-Frontends',
      'Core Web Vitals',
      'WCAG 2.1 AA Accessibility',
      'RESTful & GraphQL APIs',
      'State Machines',
    ],
  },
  {
    icon: Wrench,
    category: 'Tooling & Infrastructure',
    skills: [
      'Webpack / Vite',
      'Git & GitHub Actions',
      'Cloudflare Workers / Pages',
      'Vercel / AWS',
      'Linux Environments',
      'Docker / CI/CD',
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden bg-background text-textMain py-16 md:py-24 selection:bg-volt selection:text-black"
    >
      <div className="max-w-site mx-auto px-6 md:px-12 xl:px-16">
        <div className="p-8 md:p-14 xl:p-16 rounded-3xl liquid-glass">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12 pb-6 border-b-2 border-borderGlass">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-textMuted uppercase tracking-widest mb-3">
                <Terminal className="w-4 h-4 text-signal" />
                <span>Technical Stack</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-textMain">
                Skills &amp; Capabilities
              </h2>
            </div>
            <p className="font-mono text-xs md:text-sm text-textMuted">
              Continuous iteration on frontend craft &amp; tooling
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((group, idx) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  className="p-6 md:p-8 rounded-2xl liquid-glass-subtle flex flex-col justify-between"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-lg border border-borderGlass bg-surface flex items-center justify-center text-signal">
                      <Icon className="w-4 h-4 text-signal" />
                    </div>
                    <h3 className="font-mono text-sm font-bold text-textMain uppercase tracking-wider">
                      {group.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-3 py-1.5 rounded-lg border border-borderGlass bg-surface text-textMain"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
