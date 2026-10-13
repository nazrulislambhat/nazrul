'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Eye,
  Github,
  Globe,
  Layers,
  ShieldCheck,
  Terminal,
  type LucideIcon,
} from 'lucide-react';

type ProjectLogo =
  | { kind: 'favicon'; domain: string }
  | { kind: 'icon'; icon: LucideIcon };

/**
 * Renders a project logo. Uses the site's favicon for live projects and
 * falls back to the project's initial if the image fails to load.
 */
function ProjectMark({
  logo,
  title,
  large = false,
}: {
  logo: ProjectLogo;
  title: string;
  large?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const box = large ? 'w-14 h-14 md:w-16 md:h-16' : 'w-11 h-11 md:w-12 md:h-12';
  const wrapper = `shrink-0 flex items-center justify-center rounded-xl border border-borderGlass bg-surface/80 overflow-hidden ${box}`;

  if (logo.kind === 'icon') {
    const Icon = logo.icon;
    return (
      <div className={wrapper} aria-hidden="true">
        <Icon
          className={
            large
              ? 'w-7 h-7 text-primary dark:text-secondary'
              : 'w-6 h-6 text-primary dark:text-secondary'
          }
        />
      </div>
    );
  }

  if (failed) {
    return (
      <div
        className={`${wrapper} font-mono font-bold text-textMain text-lg`}
        aria-hidden="true"
      >
        {title.charAt(0)}
      </div>
    );
  }

  return (
    <div className={wrapper}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://www.google.com/s2/favicons?domain=${logo.domain}&sz=128`}
        alt={`${title} logo`}
        width={large ? 36 : 24}
        height={large ? 36 : 24}
        loading="lazy"
        onError={() => setFailed(true)}
        className={large ? 'w-9 h-9 md:w-10 md:h-10 rounded-xl' : 'w-7 h-7 md:w-8 md:h-8'}
      />
    </div>
  );
}

interface Project {
  logo: ProjectLogo;
  title: string;
  role?: string;
  category: 'Enterprise Engineering' | 'Open Source & Tools';
  description: string;
  tags: string[];
  link: string;
  type: 'github' | 'live';
  /** Bento placement (applies from md breakpoint up, 6-col grid) */
  span: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    logo: { kind: 'favicon', domain: 'novartis.com' },
    title: 'Novartis',
    role: 'Senior Frontend Engineer',
    category: 'Enterprise Engineering',
    description:
      'Engineered large-scale, multi-brand frontend architecture and design systems across enterprise digital platforms. Focused on performance, WCAG 2.1 AA accessibility, and modular delivery.',
    tags: ['Next.js', 'React', 'TypeScript', 'Design Systems'],
    link: 'https://www.novartis.com',
    type: 'live',
    span: 'md:col-span-4 md:row-span-2',
    featured: true,
  },
  {
    logo: { kind: 'favicon', domain: 'ama-assn.org' },
    title: 'American Medical Association (AMA)',
    role: 'Frontend Engineering',
    category: 'Enterprise Engineering',
    description:
      'Led UI architecture for large-scale medical and clinical information platforms. Optimized internationalization (i18n), zero-compromise Core Web Vitals, and resilient caching under high traffic volumes.',
    tags: ['React', 'Next.js', 'i18n', 'Performance', 'Accessibility'],
    link: 'https://www.ama-assn.org/',
    type: 'live',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    logo: { kind: 'favicon', domain: 'veolia.com' },
    title: 'Veolia',
    role: 'Frontend Engineering',
    category: 'Enterprise Engineering',
    description:
      'Modernized multi-regional utility and sustainability platforms with reusable component libraries, strict build optimizations, and high-fidelity interactive interfaces.',
    tags: ['TypeScript', 'Design Systems', 'Core Web Vitals'],
    link: 'https://www.veolia.com',
    type: 'live',
    span: 'md:col-span-2',
  },
  {
    logo: { kind: 'favicon', domain: 'millboard.com' },
    title: 'Millboard',
    role: 'Frontend Engineering',
    category: 'Enterprise Engineering',
    description:
      'Architected high-performance, asset-heavy digital showcase platforms with sub-second page loads, custom visual configurators, and modern headless integrations.',
    tags: ['Headless CMS', 'Next.js', 'Asset Optimization'],
    link: 'https://www.millboard.com',
    type: 'live',
    span: 'md:col-span-4',
  },
  {
    logo: { kind: 'favicon', domain: 'dhikrly.com' },
    title: 'Dhikrly',
    role: 'Founder & Architect',
    category: 'Open Source & Tools',
    description:
      'A minimalist, privacy-first digital mindfulness and remembrance web app. Built with clean state management, instant offline PWA support, and lightweight reactive UI.',
    tags: ['Next.js', 'Tailwind CSS', 'PWA'],
    link: 'https://dhikrly.com',
    type: 'live',
    span: 'md:col-span-3',
  },
  {
    logo: { kind: 'icon', icon: Eye },
    title: 'Eye Care Timer Chrome',
    role: 'Creator & Developer',
    category: 'Open Source & Tools',
    description:
      'A lightweight browser utility extension engineered to protect user eye health by scheduling structured screen breaks, visual reminders, and resting intervals during intense coding sessions.',
    tags: ['JavaScript', 'Chrome Extension', 'Web APIs'],
    link: 'https://github.com/nazrulislambhat/eye-care-timer-chrome',
    type: 'github',
    span: 'md:col-span-3',
  },
  {
    logo: { kind: 'icon', icon: ShieldCheck },
    title: 'Hostinger Cache Watchdog',
    role: 'Architect',
    category: 'Open Source & Tools',
    description:
      'An automated diagnostic tool designed to monitor edge/server-side caching health, detect edge-cache purge anomalies, and prevent stale payload desyncs on critical e-commerce routes.',
    tags: ['Automation', 'TypeScript', 'Edge Cache'],
    link: 'https://github.com/nazrulislambhat/hostinger-cache-watchdog',
    type: 'github',
    span: 'md:col-span-6',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-background text-textMain py-8 md:py-12 selection:bg-primary selection:text-secondary"
    >
      <div className="max-w-site mx-auto px-4 sm:px-8 md:px-12 xl:px-16">
        {/* Outer glass boundary enclosing both title and project cards */}
        <div className="p-8 md:p-12 xl:p-14 rounded-3xl liquid-glass border border-borderGlass">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 mb-10 pb-6 border-b-2 border-borderGlass">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-textMuted uppercase tracking-widest mb-2">
                <Terminal className="w-4 h-4 text-primary dark:text-secondary" />
                <span>Selected Work &amp; Systems</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-textMain">
                Production Architecture &amp; Tools
              </h2>
            </div>
            <p className="max-w-md text-xs md:text-sm text-textMuted font-mono">
              Inspect &quot;all&quot; repositories on{' '}
              <Link
                href="https://github.com/nazrulislambhat"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:underline text-red transition-colors"
              >
                GitHub
              </Link>
            </p>
          </div>

          {/* Bento Grid: 1 col on mobile, 6-col bento from md up */}
          <div className="grid grid-cols-1 md:grid-cols-6 md:auto-rows-[minmax(14rem,auto)] gap-4 md:gap-5">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`group relative flex flex-col justify-between p-6 md:p-8 rounded-2xl liquid-glass-subtle border border-borderGlass/60 transition-colors hover:border-primary/60 ${project.span}`}
              >
                <div>
                  {/* Category & Role Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3.5 font-mono text-xs text-textMuted">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-borderGlass bg-surface/80 text-textMain">
                      <Layers className="w-3.5 h-3.5 text-primary dark:text-secondary" />
                      {project.category}
                    </span>
                    {project.role && (
                      <span className="text-textMuted/80 font-mono text-[11px]">
                        {project.role}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <ProjectMark
                      logo={project.logo}
                      title={project.title}
                      large={project.featured}
                    />
                    <h3
                      className={`font-bold text-textMain ${
                        project.featured
                          ? 'text-2xl md:text-4xl tracking-tight'
                          : 'text-xl md:text-2xl'
                      }`}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <p
                    className={`text-textMuted leading-relaxed mb-5 font-normal ${
                      project.featured
                        ? 'text-base md:text-lg max-w-2xl'
                        : 'text-sm md:text-base'
                    }`}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Footer: Tags & Link */}
                <div className="pt-4 border-t-2 border-borderGlass flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-0.5 rounded-md bg-surface/80 border border-borderGlass text-textMain"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-red hover:underline shrink-0"
                  >
                    {project.type === 'github' ? (
                      <>
                        <Github className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </>
                    ) : (
                      <>
                        <Globe className="w-3.5 h-3.5" />
                        <span>Live</span>
                      </>
                    )}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
