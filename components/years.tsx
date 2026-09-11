'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase, Calendar, Terminal } from 'lucide-react';

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
    period: 'Dec 2024 — Present',
    role: 'Senior Software Engineer',
    company: 'HCLTech',
    companyUrl: 'https://www.hcltech.com',
    description:
      'Leading frontend architecture for enterprise-scale platforms. Spearheading production-grade UI systems with strict performance budgets, WCAG 2.1 AA accessibility, and developer-first design systems.',
    highlights: [
      'Architecting resilient React & TypeScript web applications with clean boundaries.',
      'Driving core architectural reviews and mentoring engineers on modern web standards.',
      'Optimizing rendering pipelines and Core Web Vitals across multi-tenant setups.',
    ],
    skills: [
      'React',
      'TypeScript',
      'Next.js',
      'Design Systems',
      'Micro-Frontends',
    ],
  },
  {
    period: 'Prior — 2024',
    role: 'Frontend Software Engineer (L3)',
    company: 'Axelerant',
    companyUrl: 'https://axelerant.com',
    description:
      'Engineered reusable design-system-driven component libraries and modular React architectures across large distributed client deployments.',
    highlights: [
      'Built composable component foundations that drastically decreased feature regression rates.',
      'Standardized frontend linting, testing workflows, and cross-browser consistency.',
    ],
    skills: [
      'React',
      'JavaScript (ES6+)',
      'Design Systems',
      'CI/CD',
      'Performance',
    ],
  },
  {
    period: 'Founder & Principal',
    role: 'Technical Founder & Engineering Lead',
    company: 'StackNothing',
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
      className="relative w-full overflow-hidden bg-background text-black selection:bg-secondary selection:text-black py-16 md:py-24"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-16">
        <div className="p-8 md:p-14 xl:p-16 border-2 border-white rounded-2xl bg-coolWhite/40 backdrop-blur-xs">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12 pb-6 border-b-2 border-white">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-black/60 uppercase tracking-widest mb-3">
                <Terminal className="w-4 h-4" />
                <span>Career History</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black">
                Experience &amp; Leadership
              </h2>
            </div>
            <p className="font-mono text-xs md:text-sm text-black/60">
              5+ Years • Enterprise Frontend Systems &amp; Engineering
            </p>
          </div>

          {/* Timeline Cards */}
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="p-7 md:p-9 border-2 border-white rounded-xl bg-white/70 hover:bg-white/90 transition-all duration-200"
              >
                {/* Meta Row: Period & Role */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-black/60">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>

                  {exp.companyUrl ? (
                    <Link
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-black/70 hover:text-primary transition-colors w-fit"
                    >
                      <span>{exp.company}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  ) : (
                    <span className="font-mono text-xs text-black/70">
                      {exp.company}
                    </span>
                  )}
                </div>

                {/* Role Header */}
                <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                  {exp.role}
                </h3>

                {/* Summary */}
                <p className="text-sm md:text-base text-black/80 leading-relaxed mb-6 font-normal">
                  {exp.description}
                </p>

                {/* Bullet Highlights */}
                <ul className="space-y-2 mb-6 text-xs md:text-sm text-black/70 font-normal">
                  {exp.highlights.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/40 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="pt-5 border-t-2 border-white/80 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-2.5 py-1 rounded-sm bg-coolWhite border border-white text-black/80"
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
