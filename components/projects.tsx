'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Globe, Layers, Terminal } from 'lucide-react';

interface Project {
  title: string;
  role?: string;
  category: 'Enterprise Engineering' | 'Open Source & Tools';
  description: string;
  tags: string[];
  link: string;
  type: 'github' | 'live';
}

const projects: Project[] = [
  {
    title: 'Novartis',
    role: 'Senior Frontend Engineer',
    category: 'Enterprise Engineering',
    description:
      'Engineered large-scale, multi-brand frontend architecture and design systems across enterprise digital platforms. Focused on performance, WCAG 2.1 AA accessibility, and modular delivery.',
    tags: ['Next.js', 'React', 'TypeScript', 'Design Systems'],
    link: 'https://www.novartis.com',
    type: 'live',
  },
  {
    title: 'Doctors Without Borders (MSF)',
    role: 'Frontend Architect / Tech Lead',
    category: 'Enterprise Engineering',
    description:
      'Led UI architecture for mission-critical humanitarian content platforms. Optimized internationalization (i18n), zero-compromise Core Web Vitals, and resilient caching under low bandwidth.',
    tags: ['React', 'Next.js', 'i18n', 'Performance', 'Accessibility'],
    link: 'https://www.doctorswithoutborders.org',
    type: 'live',
  },
  {
    title: 'Veolia',
    role: 'Frontend Engineering',
    category: 'Enterprise Engineering',
    description:
      'Modernized multi-regional utility and sustainability platforms with reusable component libraries, strict build optimizations, and high-fidelity interactive interfaces.',
    tags: ['TypeScript', 'Design Systems', 'Core Web Vitals'],
    link: 'https://www.veolia.com',
    type: 'live',
  },
  {
    title: 'Millboard',
    role: 'Frontend Engineering',
    category: 'Enterprise Engineering',
    description:
      'Architected high-performance, asset-heavy digital showcase platforms with sub-second page loads, custom visual configurators, and modern headless integrations.',
    tags: ['Headless CMS', 'Next.js', 'Asset Optimization'],
    link: 'https://www.millboard.com',
    type: 'live',
  },
  {
    title: 'Hostinger Cache Watchdog',
    category: 'Open Source & Tools',
    description:
      'An automated diagnostic tool designed to monitor edge/server-side caching health, detect edge-cache purge anomalies, and prevent stale payload desyncs on critical e-commerce routes.',
    tags: ['Automation', 'TypeScript', 'Edge Cache'],
    link: 'https://github.com/nazrulislambhat/hostinger-cache-watchdog',
    type: 'github',
  },
  {
    title: 'Dhikrly',
    category: 'Open Source & Tools',
    description:
      'A minimalist, privacy-first digital mindfulness and remembrance web app. Built with clean state management, instant offline PWA support, and lightweight reactive UI.',
    tags: ['Next.js', 'Tailwind CSS', 'PWA'],
    link: 'https://github.com/nazrulislambhat/dhikrly',
    type: 'github',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-background text-textMain py-16 md:py-24"
    >
      <div className="max-w-site mx-auto px-6 md:px-12 xl:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 pb-6 border-b-2 border-borderGlass">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-textMuted uppercase tracking-widest mb-3">
              <Terminal className="w-4 h-4 text-signal" />
              <span>Selected Work &amp; Systems</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-textMain">
              Production Architecture &amp; Tools
            </h2>
          </div>
          <p className="max-w-md text-sm text-textMuted font-mono">
            Inspect all repositories on{' '}
            <Link
              href="https://github.com/nazrulislambhat"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline text-textMain"
            >
              GitHub
            </Link>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="relative flex flex-col justify-between p-7 md:p-8 rounded-2xl liquid-glass"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4 font-mono text-xs text-textMuted">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-borderGlass bg-surface text-textMain">
                    <Layers className="w-3.5 h-3.5 text-signal" />
                    {project.category}
                  </span>
                  {project.role && (
                    <span className="text-textMuted/80 font-mono text-[11px]">
                      {project.role}
                    </span>
                  )}
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-textMain mb-3">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-textMuted leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>
              </div>

              <div className="pt-6 border-t-2 border-borderGlass flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-1 rounded-md bg-surface border border-borderGlass text-textMain"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-signal shrink-0"
                >
                  {project.type === 'github' ? (
                    <>
                      <Github className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </>
                  ) : (
                    <>
                      <Globe className="w-3.5 h-3.5" />
                      <span>Platform</span>
                    </>
                  )}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
