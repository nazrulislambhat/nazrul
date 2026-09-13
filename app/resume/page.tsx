'use client';

import React from 'react';
import Link from 'next/link';
import {
  Download,
  ArrowLeft,
  Mail,
  Phone,
  Globe,
  Github,
  Linkedin,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-outer-wrapper"
      className="min-h-screen w-full bg-background text-textMain py-8 md:py-12 selection:bg-volt selection:text-black"
    >
      <div className="max-w-site mx-auto px-4 sm:px-8 md:px-12 xl:px-16">
        {/* Screen Floating Action Bar (Hidden in Print) */}
        <div
          id="resume-actions"
          className="flex items-center justify-between gap-4 mb-6 p-4 rounded-2xl liquid-glass border border-borderGlass no-print"
        >
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-xs text-textMuted hover:text-signal transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-signal" />
            <span>Return to Portfolio</span>
          </Link>

          <button
            onClick={handlePrint}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-bold hover:bg-volt hover:text-black dark:hover:bg-volt dark:hover:text-black transition-all shadow-2xs cursor-pointer"
          >
            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            <span>Download PDF</span>
          </button>
        </div>

        {/* Printable Canvas */}
        <div className="p-8 md:p-12 xl:p-14 rounded-3xl liquid-glass border border-borderGlass bg-surface print:p-0 print:border-none print:shadow-none flex flex-col justify-between space-y-6 md:space-y-7 print:space-y-3.5">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pb-5 border-b-2 border-borderGlass print:border-neutral-800 print:pb-3">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-textMain print:text-2xl">
                Nazrul Islam
              </h1>
              <p className="text-sm font-semibold text-signal mt-1 print:text-black">
                Senior Frontend Engineer • React.js | Next.js | TypeScript |
                AI-Augmented Development
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-textMuted print:text-neutral-800 print:gap-y-1">
              <a
                href="https://nazrulislam.dev"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-1 hover:text-signal hover:underline transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-signal print:hidden" />
                <span>nazrulislam.dev</span>
                <ArrowUpRight className="w-3 h-3 text-signal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform print:hidden" />
              </a>
              <a
                href="mailto:nazrulislambhat@gmail.com"
                className="flex items-center gap-1 hover:text-signal hover:underline transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-signal print:hidden" />
                <span>nazrulislambhat@gmail.com</span>
              </a>
              <a
                href="tel:+919469444007"
                className="flex items-center gap-1 hover:text-signal hover:underline transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-signal print:hidden" />
                <span>+91 9469444007</span>
              </a>
              <a
                href="https://github.com/nazrulislambhat"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-1 hover:text-signal hover:underline transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-signal print:hidden" />
                <span>github.com/nazrulislambhat</span>
                <ArrowUpRight className="w-3 h-3 text-signal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform print:hidden" />
              </a>
              <a
                href="https://linkedin.com/in/nazrulislambhat"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-1 hover:text-signal hover:underline transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-signal print:hidden" />
                <span>linkedin.com/in/nazrulislambhat</span>
                <ArrowUpRight className="w-3 h-3 text-signal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform print:hidden" />
              </a>
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-signal print:hidden" />
                <span>Bengaluru / Srinagar, IN</span>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-textMuted font-bold print:text-neutral-900 mb-2 pb-1 border-b-2 border-borderGlass print:border-neutral-300">
              Summary
            </h2>
            <p className="text-xs md:text-sm text-textMain leading-relaxed font-normal print:text-[11px] print:leading-normal">
              Senior Frontend Engineer with 5+ years shipping production-grade
              React.js and Next.js applications at scale. Proven, measurable
              impact: 25% fewer post-merge defects, 20% UI engagement lift, 40%
              faster bug resolution, and 98%+ on-time delivery across 6+
              simultaneous client projects. Deep expertise in WCAG 2.1 AA
              accessibility, Core Web Vitals optimization, reusable component
              architecture, and modern Next.js App Router (RSC, streaming UI).
              Builds AI-augmented development workflows using GitHub Copilot and
              Cursor for pair-programming, code review, and rapid prototyping to
              ship faster without compromising code quality or accessibility.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-textMuted font-bold print:text-neutral-900 mb-2.5 pb-1 border-b-2 border-borderGlass print:border-neutral-300">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5 text-xs print:text-[11px] leading-snug">
              <p>
                <strong className="text-textMain font-semibold">
                  Frontend:
                </strong>{' '}
                <span className="text-textMuted print:text-neutral-800">
                  React.js, Next.js (App Router, RSC), JavaScript (ES6+),
                  TypeScript, Redux, Zustand, React Hook Form, GraphQL, REST
                  APIs
                </span>
              </p>
              <p>
                <strong className="text-textMain font-semibold">
                  Performance &amp; Accessibility:
                </strong>{' '}
                <span className="text-textMuted print:text-neutral-800">
                  Core Web Vitals (LCP, CLS, FID), Code Splitting, WCAG 2.1 AA,
                  ARIA, Lighthouse
                </span>
              </p>
              <p>
                <strong className="text-textMain font-semibold">
                  Styling &amp; UI:
                </strong>{' '}
                <span className="text-textMuted print:text-neutral-800">
                  Tailwind CSS, Styled Components, MUI, Bootstrap, SASS, LESS,
                  Figma, Adobe XD
                </span>
              </p>
              <p>
                <strong className="text-textMain font-semibold">
                  AI &amp; Tooling:
                </strong>{' '}
                <span className="text-textMuted print:text-neutral-800">
                  GitHub Copilot, Cursor, Git, Bitbucket, CI/CD, Webpack,
                  Docker, Firebase, OAuth, JWT, JIRA
                </span>
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4 print:space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-widest text-textMuted font-bold print:text-neutral-900 pb-1 border-b-2 border-borderGlass print:border-neutral-300">
              Experience
            </h2>

            {/* HCLTech */}
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h3 className="text-xs md:text-sm font-bold text-textMain print:text-xs">
                  HCLTech{' '}
                  <span className="font-normal text-textMuted print:text-neutral-700">
                    — Senior Software Engineer
                  </span>
                </h3>
                <span className="font-mono text-xs text-textMuted print:text-neutral-800 print:text-[11px]">
                  Nov 2024 — Present | Bengaluru, India
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-textMuted print:text-neutral-800 print:text-[11px] print:leading-tight">
                <li>
                  Deliver 5+ consumer-facing features per quarter in close
                  collaboration with UX Designers, Product Managers, and Backend
                  Engineers, consistently meeting sprint goals.
                </li>
                <li>
                  Established code-review standards and PR templates, reducing
                  post-merge defects by 25% and increasing overall code quality
                  across the team.
                </li>
                <li>
                  Engineered reusable React component libraries improving
                  scalability and eliminating duplicate UI code; optimized
                  bundles with lazy loading,{' '}
                  <code className="text-[10.5px] font-mono px-1 py-0.2 rounded-sm bg-surface border border-borderGlass/60">
                    useMemo
                  </code>
                  ,{' '}
                  <code className="text-[10.5px] font-mono px-1 py-0.2 rounded-sm bg-surface border border-borderGlass/60">
                    useCallback
                  </code>
                  , and{' '}
                  <code className="text-[10.5px] font-mono px-1 py-0.2 rounded-sm bg-surface border border-borderGlass/60">
                    React.memo
                  </code>
                  .
                </li>
                <li>
                  Embedded AI pair-programming tools (GitHub Copilot, Cursor)
                  into daily sprints, accelerating feature delivery and
                  standardizing prompt-driven code review practices.
                </li>
                <li>
                  Mentored junior engineers through code reviews and pair
                  programming, reinforcing best practices and accelerating team
                  onboarding.
                </li>
              </ul>
            </div>

            {/* Axelerant */}
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h3 className="text-xs md:text-sm font-bold text-textMain print:text-xs">
                  Axelerant{' '}
                  <span className="font-normal text-textMuted print:text-neutral-700">
                    — Frontend Software Engineer 3
                  </span>
                </h3>
                <span className="font-mono text-xs text-textMuted print:text-neutral-800 print:text-[11px]">
                  Nov 2021 — Nov 2024 | Remote, India
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-textMuted print:text-neutral-800 print:text-[11px] print:leading-tight">
                <li>
                  Led end-to-end frontend development for NMDB (Next.js +
                  Tailwind CSS movie database); drove a 20% UI engagement lift
                  for Millboard by refactoring legacy components into
                  responsive, reusable modules.
                </li>
                <li>
                  Delivered WCAG 2.1 AA-compliant, zero-regression,
                  cross-browser applications for CAST, British Business Bank,
                  AMA, and Veolia with zero critical accessibility regressions
                  post-launch.
                </li>
                <li>
                  Cut average bug turnaround by 40% through systematic
                  root-cause analysis and proactive refactoring; maintained 98%+
                  on-time delivery across 6+ simultaneous client projects.
                </li>
                <li>
                  Collaborated directly with international clients and
                  cross-functional teams across design, backend, and QA to ship
                  features end-to-end on aggressive timelines.
                </li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-textMuted font-bold print:text-neutral-900 mb-2.5 pb-1 border-b-2 border-borderGlass print:border-neutral-300">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs print:text-[11px]">
              {/* StackNothing */}
              <div className="p-3.5 rounded-2xl liquid-glass-subtle border border-borderGlass/60 print:border-neutral-300 print:p-1.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <strong className="text-textMain font-semibold">
                      StackNothing
                    </strong>
                    <a
                      href="https://stacknothing.com"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-0.5 text-signal hover:underline font-mono text-[10px]"
                    >
                      <span>stacknothing.com</span>
                      <ArrowUpRight className="w-2.5 h-2.5 text-signal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                  <p className="text-textMuted print:text-neutral-800 mt-1.5 leading-snug">
                    Freelance frontend consultancy platform built with Next.js
                    and Tailwind CSS — SEO-optimized, Core Web Vitals-compliant,
                    for enterprise and individual clients.
                  </p>
                </div>
              </div>

              {/* Dhikrly */}
              <div className="p-3.5 rounded-2xl liquid-glass-subtle border border-borderGlass/60 print:border-neutral-300 print:p-1.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <strong className="text-textMain font-semibold">
                      Dhikrly
                    </strong>
                    <a
                      href="https://dhikrly.com"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-0.5 text-signal hover:underline font-mono text-[10px]"
                    >
                      <span>dhikrly.com</span>
                      <ArrowUpRight className="w-2.5 h-2.5 text-signal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                  <p className="text-textMuted print:text-neutral-800 mt-1.5 leading-snug">
                    Prayer and practice tracking app (React.js + Firebase) built
                    end-to-end, featuring Qibla finder, Tasbeeh counter, offline
                    PWA, and cross-device sync.
                  </p>
                </div>
              </div>

              {/* Hostinger Cache Watchdog */}
              <div className="p-3.5 rounded-2xl liquid-glass-subtle border border-borderGlass/60 print:border-neutral-300 print:p-1.5 flex flex-col justify-between">
                <div>
                  <strong className="text-textMain font-semibold">
                    Hostinger Cache Watchdog
                  </strong>
                  <p className="text-textMuted print:text-neutral-800 mt-1.5 leading-snug">
                    WordPress plugin automating hPanel cache management via
                    Puppeteer automation, with WooCommerce detection and
                    Slack/Telegram alerts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-textMuted font-bold print:text-neutral-900 mb-2 pb-1 border-b-2 border-borderGlass print:border-neutral-300">
              Education
            </h2>
            <div className="flex flex-wrap justify-between gap-2.5 text-xs print:text-[11px] text-textMuted print:text-neutral-800">
              <p>
                <strong className="text-textMain font-semibold">
                  MCA, Master of Computer Applications
                </strong>{' '}
                — University of Kashmir
                <span className="font-mono ml-2 text-textMuted/80 font-medium">
                  (2015 — 2019)
                </span>
              </p>
              <p>
                <strong className="text-textMain font-semibold">
                  BCA, Bachelor of Computer Applications
                </strong>{' '}
                — University of Kashmir
                <span className="font-mono ml-2 text-textMuted/80 font-medium">
                  (2012 — 2015)
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
