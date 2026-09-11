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
  isExternal: boolean;
  type: 'github' | 'live';
}

const projects: Project[] = [
  {
    title: 'Novartis',
    role: 'Senior Frontend Engineer',
    category: 'Enterprise Engineering',
    description:
      'Engineered large-scale, multi-brand frontend architecture and design systems across enterprise digital platforms. Focused on high-performance rendering, strict accessibility (WCAG 2.1 AA), and robust modular component delivery.',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'Design Systems',
      'Micro-Frontends',
    ],
    link: 'https://www.novartis.com',
    isExternal: true,
    type: 'live',
  },
  {
    title: 'Doctors Without Borders (MSF)',
    role: 'Frontend Architect / Tech Lead',
    category: 'Enterprise Engineering',
    description:
      'Led UI architecture for mission-critical humanitarian content platforms. Optimized internationalization (i18n), zero-compromise Core Web Vitals, and resilient caching under unpredictable bandwidth.',
    tags: ['React', 'Next.js', 'i18n', 'Performance', 'Accessibility'],
    link: 'https://www.doctorswithoutborders.org',
    isExternal: true,
    type: 'live',
  },
  {
    title: 'Veolia',
    role: 'Frontend Engineering',
    category: 'Enterprise Engineering',
    description:
      'Modernized multi-regional utility and sustainability platforms. Implemented reusable component libraries, rigorous build optimizations, and high-fidelity interactive interfaces.',
    tags: ['TypeScript', 'Design Systems', 'Core Web Vitals', 'Modular UI'],
    link: 'https://www.veolia.com',
    isExternal: true,
    type: 'live',
  },
  {
    title: 'Millboard',
    role: 'Frontend Engineering',
    category: 'Enterprise Engineering',
    description:
      'Architected high-performance, asset-heavy digital showcase platforms with sub-second page loads, custom visual configurators, and modern headless integrations.',
    tags: [
      'Headless CMS',
      'Webpack to Next.js',
      'Fluid UI',
      'Asset Optimization',
    ],
    link: 'https://www.millboard.com',
    isExternal: true,
    type: 'live',
  },
  {
    title: 'Hostinger Cache Watchdog',
    category: 'Open Source & Tools',
    description:
      'An automated diagnostic tool designed to monitor edge/server-side caching health, detect edge-cache purge anomalies, and prevent stale payload desyncs on critical e-commerce routes.',
    tags: ['Automation', 'TypeScript', 'Edge Cache', 'DevOps Tooling'],
    link: 'https://github.com/nazrulislambhat/hostinger-cache-watchdog',
    isExternal: true,
    type: 'github',
  },
  {
    title: 'Dhikrly',
    category: 'Open Source & Tools',
    description:
      'A minimalist, privacy-first digital mindfulness and remembrance web app. Built with clean state management, instant offline PWA support, and lightweight reactive UI.',
    tags: ['Next.js', 'Tailwind CSS', 'PWA', 'State Management'],
    link: 'https://github.com/nazrulislambhat/dhikrly',
    isExternal: true,
    type: 'github',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-background text-black selection:bg-secondary selection:text-black py-20 md:py-28"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 pb-6 border-b-2 border-white">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-black/60 uppercase tracking-widest mb-3">
              <Terminal className="w-4 h-4" />
              <span>Selected Work & Systems</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black">
              Production Architecture &amp; Tools
            </h2>
          </div>

          <p className="max-w-md text-sm md:text-base text-black/70 font-mono">
            A blend of large-scale enterprise engineering platforms and
            open-source tooling. Inspect all repositories on{' '}
            <Link
              href="https://github.com/nazrulislambhat"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline text-black hover:text-primary transition-colors"
            >
              GitHub
            </Link>
            .
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="group relative flex flex-col justify-between p-7 md:p-8 border-2 border-white rounded-xl bg-coolWhite/40 backdrop-blur-xs hover:bg-white/80 transition-all duration-200"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-4 mb-4 font-mono text-xs text-black/60">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border-2 border-white bg-white/70">
                    <Layers className="w-3.5 h-3.5" />
                    {project.category}
                  </span>

                  {project.role && (
                    <span className="text-black/50 hidden sm:inline-block">
                      {project.role}
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-xl md:text-2xl font-bold text-black group-hover:text-primary transition-colors flex items-center gap-2 mb-3">
                  <span>{project.title}</span>
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-black/70 leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>
              </div>

              {/* Tags & Action Link */}
              <div className="pt-6 border-t-2 border-white/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-1 rounded-sm bg-white/70 border border-white text-black/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.link}
                  target={project.isExternal ? '_blank' : undefined}
                  rel={project.isExternal ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-black hover:text-primary transition-colors shrink-0"
                >
                  {project.type === 'github' ? (
                    <>
                      <Github className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </>
                  ) : (
                    <>
                      <Globe className="w-3.5 h-3.5" />
                      <span>Live Platform</span>
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
