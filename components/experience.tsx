'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Terminal, Building2 } from 'lucide-react';

interface SubProject {
  name: string;
  points: string[];
}

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  subProject?: SubProject;
  points: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    period: 'Dec 2024 — Present',
    role: 'Senior Software Engineer',
    company: 'HCLTech',
    companyUrl: 'https://www.hcltech.com',
    subProject: {
      name: 'Novartis Global Digital Ecosystem',
      points: [
        'Spearheaded production frontend architecture for multi-brand healthcare applications, ensuring strict regulatory compliance and WCAG 2.1 AA accessibility.',
        'Optimized build toolchains and stripped redundant dependencies, drastically reducing production bundler build times from ~5000ms to ~100ms across development environments.',
        'Engineered an architectural solution for YouTube embedded playback and dynamic playlist handling that had been blocked for months, establishing a resilient video standard used across platforms.',
        'Architected reusable, accessible UI component primitives using React, TypeScript, and Storybook to eliminate cross-team duplication.',
        'Standardized PR reviews and established automated linting checks, mentoring junior developers on performance-first engineering.',
      ],
    },
    points: [
      'Deliver 5+ enterprise features per quarter aligned with global pharmaceutical regulatory standards.',
      'Embedded AI-accelerated workflows (Cursor, Copilot) to improve delivery velocity without sacrificing test coverage.',
    ],
    skills: [
      'React',
      'TypeScript',
      'Storybook',
      'Performance Optimization',
      'WCAG 2.1 AA',
      'SASS',
    ],
  },
  {
    period: 'Nov 2021 — Nov 2024',
    role: 'Frontend Software Engineer (L3)',
    company: 'Axelerant',
    companyUrl: 'https://axelerant.com',
    points: [
      'Engineered scalable, modular UI components in React and modern Next.js patterns, slashing feature rework and boosting UI consistency across client platforms.',
      'Cut average bug turnaround time by 40% through systematic root-cause analysis, legacy component refactoring, and strict linting/testing pipelines.',
      'Delivered zero-critical-regression web applications for enterprise clients including CAST, British Business Bank, AMA, and Veolia.',
      'Implemented reusable styling systems with Tailwind CSS and SASS, optimizing critical rendering paths and eliminating layout thrashing.',
      'Mentored emerging engineers and refined Git workflows to maintain 98%+ on-time sprint completions across simultaneous client accounts.',
    ],
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'WCAG 2.1 AA',
      'CI/CD Pipelines',
    ],
  },
  {
    period: 'Aug 2020 — Nov 2021',
    role: 'Founder & Principal Engineer',
    company: 'StackNothing',
    companyUrl: 'https://stacknothing.com',
    points: [
      'Founded a technical agency delivering custom web architectures, headless CMS integrations, and high-traffic publishing platforms.',
      'Partnered directly with international clients including BaylinMedia (USA), Phandroid (USA), and IIT Roorkee to build full-stack interfaces with sub-second page loads.',
      'Launched and scaled tech publications including FossNoobs and HackingSaga Media, securing strategic monetization partnerships with global VPN brands (NordVPN, ExpressVPN, Surfshark).',
      'Maintained hands-on oversight across production DNS, edge caching, Linux VPS infrastructure, and database migrations.',
    ],
    skills: [
      'Next.js',
      'WordPress / Headless',
      'Edge Caching',
      'Linux Administration',
      'SEO & Core Web Vitals',
    ],
  },
  {
    period: 'Mar 2020 — Aug 2020',
    role: 'Technical Support Engineer',
    company: 'Dell',
    points: [
      'Delivered end-to-end technical support diagnosing hardware, operating system, and network infrastructure faults under strict resolution SLAs.',
      'Conducted live remote diagnostics and firmware calibrations, optimizing machine stability and client workstation uptime.',
      'Authored standardized troubleshooting playbooks and escalated multi-tier system defects directly to hardware engineering teams.',
    ],
    skills: [
      'Hardware Diagnostics',
      'Network Troubleshooting',
      'OS Calibrations',
      'SLA Management',
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden bg-background text-textMain py-16 md:py-24 selection:bg-volt selection:text-black"
    >
      <div className="max-w-site mx-auto px-6 md:px-12 xl:px-16">
        <div className="p-8 md:p-14 xl:p-16 rounded-3xl liquid-glass">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12 pb-6 border-b-2 border-borderGlass">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-textMuted uppercase tracking-widest mb-3">
                <Terminal className="w-4 h-4 text-signal" />
                <span>Career History</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-textMain">
                Experience &amp; Leadership
              </h2>
            </div>
            <p className="font-mono text-xs md:text-sm text-textMuted">
              5+ Years • Enterprise Frontend Systems &amp; Architecture
            </p>
          </div>

          {/* Timeline Cards */}
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="p-7 md:p-9 rounded-2xl liquid-glass-subtle border border-borderGlass transition-colors hover:border-signal-dim/40"
              >
                {/* Meta Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-textMuted">
                    <Calendar className="w-3.5 h-3.5 text-signal" />
                    <span>{exp.period}</span>
                  </div>

                  {exp.companyUrl ? (
                    <Link
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 font-mono text-xs text-signal hover:underline font-medium"
                    >
                      <span>{exp.company}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  ) : (
                    <span className="font-mono text-xs text-textMuted font-medium">
                      {exp.company}
                    </span>
                  )}
                </div>

                {/* Role Title */}
                <h3 className="text-xl md:text-2xl font-bold text-textMain mb-4">
                  {exp.role}{' '}
                  <span className="text-textMuted font-normal">
                    at {exp.company}
                  </span>
                </h3>

                {/* Embedded Client Initiative (Novartis) */}
                {exp.subProject && (
                  <div className="mb-5 p-4 rounded-xl border border-signal-dim/30 bg-surface/50">
                    <div className="flex items-center gap-2 font-mono text-xs text-signal font-semibold mb-3 uppercase tracking-wider">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{exp.subProject.name}</span>
                    </div>
                    <ul className="space-y-2 text-xs md:text-sm text-textMuted">
                      {exp.subProject.points.map((pt, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-start gap-2.5 leading-relaxed"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-signal shrink-0 shadow-[0_0_6px_#05DF72]" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Primary Bullet Points */}
                <ul className="space-y-2.5 mb-6 text-xs md:text-sm text-textMuted">
                  {exp.points.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex items-start gap-2.5 leading-relaxed"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-signal shrink-0 shadow-[0_0_6px_#05DF72]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill Badges */}
                <div className="pt-5 border-t border-borderGlass flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-2.5 py-1 rounded-md border border-borderGlass bg-surface text-textMain"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
