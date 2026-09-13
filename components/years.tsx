'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight, Calendar, Terminal } from 'lucide-react';

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  description: string;
  highlights: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    period: 'Nov 2024 — Present',
    role: 'Senior Software Engineer',
    company: 'HCLTech',
    companyUrl: 'https://www.hcltech.com',
    description:
      'Leading frontend architecture for enterprise-scale platforms. Spearheading production-grade UI systems with strict performance budgets, WCAG 2.1 AA accessibility, and developer-first design systems.',
    highlights: [
      'Deliver 5+ consumer-facing features per quarter in close collaboration with UX, Product, and Backend teams.',
      'Established code-review standards and PR templates, reducing post-merge defects by 25% across the team.',
      'Engineered reusable React component libraries; optimized bundles with lazy loading, useMemo, and useCallback.',
      'Embedded AI pair-programming tools (GitHub Copilot, Cursor) into daily sprints, accelerating delivery cycles.',
    ],
    skills: [
      'React',
      'TypeScript',
      'Next.js',

      'Design Systems',
      'Core Web Vitals',
      'GitHub Copilot',
    ],
  },
  {
    period: 'Nov 2021 — Nov 2024',
    role: 'Frontend Software Engineer 3',
    company: 'Axelerant',
    companyUrl: 'https://axelerant.com',
    description:
      'Engineered reusable design-system-driven component libraries and modular React architectures across large distributed client deployments.',
    highlights: [
      'Led end-to-end frontend development for NMDB and drove a 20% UI engagement lift for Millboard.',
      'Delivered WCAG 2.1 AA-compliant, cross-browser web applications for CAST, British Business Bank, AMA, and Veolia.',
      'Cut average bug turnaround by 40% through proactive refactoring; maintained a 98%+ on-time delivery rate across 6+ simultaneous projects.',
    ],
    skills: [
      'React',
      'TypeScript',
      'Drupal',
      'Tailwind CSS',
      'WCAG 2.1 AA',
      'CI/CD',
      'Performance',
    ],
  },
  {
    period: 'Founder & Principal',
    role: 'Technical Founder & Engineering Lead',
    company: 'StackNothing LLC',
    companyUrl: 'https://stacknothing.com',
    description:
      'Founded a technical digital studio focusing on frontend performance, headless integrations, and high-traffic tech media platforms (FossNoobs, HackingSaga).',
    highlights: [
      'Delivered end-to-end full-stack architectures and web apps for global clients including BaylinMedia, Phandroid, and IIT Roorkee.',
      'Scaled digital media properties and established strategic partnerships with global infrastructure brands like ExpressVPN and NordVPN.',
    ],
    skills: [
      'Next.js',
      'Full-Stack Architecture',
      'Edge Caching',
      'Cloudflare',
      'Linux',
    ],
  },
];

export default function Years() {
  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden bg-background text-textMain py-8 md:py-12 selection:bg-volt selection:text-black"
    >
      <div className="max-w-site mx-auto px-4 sm:px-8 md:px-12 xl:px-16">
        <div className="p-8 md:p-12 xl:p-14 rounded-3xl liquid-glass border border-borderGlass">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10 pb-6 border-b-2 border-borderGlass">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-textMuted uppercase tracking-widest mb-2">
                <Terminal className="w-4 h-4 text-signal" />
                <span>Career History</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-textMain">
                Experience &amp; Leadership
              </h2>
            </div>
            <p className="font-mono text-xs md:text-sm text-textMuted">
              5+ Years • Enterprise Frontend Systems
            </p>
          </div>

          {/* Experience Cards Stack */}
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.06 }}
                className="p-6 md:p-8 rounded-2xl liquid-glass-subtle border border-borderGlass/60"
              >
                {/* Meta Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2 font-mono text-xs text-textMuted">
                    <Calendar className="w-3.5 h-3.5 text-signal" />
                    <span>{exp.period}</span>
                  </div>
                  {exp.companyUrl ? (
                    <Link
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-signal hover:underline font-medium"
                    >
                      <span>{exp.company}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <span className="font-mono text-xs text-textMuted">
                      {exp.company}
                    </span>
                  )}
                </div>

                {/* Role Title */}
                <h3 className="text-xl md:text-2xl font-bold text-textMain mb-2.5">
                  {exp.role}
                </h3>

                {/* Narrative Summary */}
                <p className="text-sm md:text-base text-textMuted leading-relaxed mb-5 font-normal">
                  {exp.description}
                </p>

                {/* Key Deliverables & Achievements */}
                <ul className="space-y-2 mb-5 text-xs md:text-sm text-textMuted">
                  {exp.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-signal shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="pt-4 border-t-2 border-borderGlass flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-2.5 py-1 rounded-md border border-borderGlass bg-surface/80 text-textMain"
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
