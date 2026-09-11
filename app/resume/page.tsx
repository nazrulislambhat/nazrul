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
      className="min-h-screen w-full bg-background text-textMain py-10 md:py-16 selection:bg-[#CCF380] selection:text-black"
    >
      <div className="max-w-site mx-auto px-4 sm:px-8 md:px-12 xl:px-16">
        {/* Floating Screen Actions (Hidden from Print) */}
        <div
          id="resume-actions"
          className="flex items-center justify-between gap-4 mb-8 p-4 rounded-2xl liquid-glass no-print"
        >
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-xs text-textMuted hover:text-[#CCF380] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-bold hover:bg-[#CCF380] hover:text-black dark:hover:bg-[#CCF380] dark:hover:text-black transition-all shadow-xs"
          >
            <Download className="w-4 h-4" />
            <span>Download 1-Page PDF</span>
          </button>
        </div>

        {/* Full A4 Printable Canvas */}
        <div className="p-8 md:p-12 rounded-3xl liquid-glass bg-surface print:p-0 print:border-none print:shadow-none flex flex-col justify-between space-y-5 print:space-y-4">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 pb-4 border-b-2 border-borderGlass print:border-neutral-800">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-textMain print:text-2xl">
                Nazrul Islam[cite: 1]
              </h1>
              <p className="text-sm font-semibold text-[#CCF380] dark:text-[#CCF380] mt-1 print:text-black">
                Senior Frontend Engineer • React.js | Next.js | TypeScript |
                AI-Augmented Development[cite: 1]
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-xs text-textMuted print:text-neutral-800">
              <a
                href="https://nazrulislam.dev"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-1 hover:text-[#CCF380] transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-[#CCF380] print:hidden" />
                <span>nazrulislam.dev</span>
                <ArrowUpRight className="w-3 h-3 text-[#CCF380] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform print:hidden" />
                [cite: 1]
              </a>
              <a
                href="mailto:nazrulislambhat@gmail.com"
                className="flex items-center gap-1 hover:text-[#CCF380] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#CCF380] print:hidden" />
                <span>nazrulislambhat@gmail.com</span>
              </a>
              <a
                href="tel:+919469444007"
                className="flex items-center gap-1 hover:text-[#CCF380] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#CCF380] print:hidden" />
                <span>+91 9469444007</span>[cite: 1]
              </a>
              <a
                href="https://github.com/nazrulislambhat"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-1 hover:text-[#CCF380] transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-[#CCF380] print:hidden" />
                <span>github.com/nazrulislambhat</span>
                <ArrowUpRight className="w-3 h-3 text-[#CCF380] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform print:hidden" />
                [cite: 1]
              </a>
              <a
                href="https://linkedin.com/in/nazrulislambhat"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-1 hover:text-[#CCF380] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#CCF380] print:hidden" />
                <span>linkedin.com/in/nazrulislambhat</span>
                <ArrowUpRight className="w-3 h-3 text-[#CCF380] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform print:hidden" />
                [cite: 1]
              </a>
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#CCF380] print:hidden" />
                <span>Bengaluru, India</span>[cite: 1]
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-textMuted font-bold print:text-neutral-900 mb-1.5 pb-0.5 border-b border-borderGlass print:border-neutral-300">
              Summary[cite: 1]
            </h2>
            <p className="text-xs md:text-sm text-textMain leading-relaxed font-normal print:text-[11px] print:leading-normal">
              Senior Frontend Engineer with 5+ years shipping production-grade
              React.js and Next.js applications at scale[cite: 1]. Proven,
              measurable impact: 25% fewer post-merge defects, 20% UI engagement
              lift, 40% faster bug resolution, and 98%+ on-time delivery across
              6+ simultaneous client projects[cite: 1]. Deep expertise in WCAG
              2.1 AA accessibility, Core Web Vitals optimization, reusable
              component architecture, and modern Next.js App Router (RSC,
              streaming UI)[cite: 1]. Builds AI-augmented development workflows
              using GitHub Copilot and Cursor for pair-programming, code review,
              and rapid prototyping to ship faster without compromising code
              quality or accessibility[cite: 1].
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-textMuted font-bold print:text-neutral-900 mb-2 pb-0.5 border-b border-borderGlass print:border-neutral-300">
              Technical Skills[cite: 1]
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1 text-xs print:text-[11px] leading-snug">
              <p>
                <strong className="text-textMain">Frontend:</strong>{' '}
                <span className="text-textMuted print:text-neutral-800">
                  React.js, Next.js (App Router, RSC), JavaScript (ES6+),
                  TypeScript, Redux, Zustand, React Hook Form, GraphQL, REST
                  APIs[cite: 1]
                </span>
              </p>
              <p>
                <strong className="text-textMain">
                  Performance &amp; Accessibility:
                </strong>{' '}
                <span className="text-textMuted print:text-neutral-800">
                  Core Web Vitals (LCP, CLS, FID), Code Splitting, WCAG 2.1 AA,
                  ARIA, Lighthouse[cite: 1]
                </span>
              </p>
              <p>
                <strong className="text-textMain">Styling &amp; UI:</strong>{' '}
                <span className="text-textMuted print:text-neutral-800">
                  Tailwind CSS, Styled Components, MUI, Bootstrap, SASS, LESS,
                  Figma, Adobe XD[cite: 1]
                </span>
              </p>
              <p>
                <strong className="text-textMain">AI &amp; Tooling:</strong>{' '}
                <span className="text-textMuted print:text-neutral-800">
                  GitHub Copilot, Cursor, Git, Bitbucket, CI/CD, Webpack,
                  Docker, Firebase, OAuth, JWT, JIRA[cite: 1]
                </span>
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3.5 print:space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-widest text-textMuted font-bold print:text-neutral-900 pb-0.5 border-b border-borderGlass print:border-neutral-300">
              Experience[cite: 1]
            </h2>

            {/* HCLTech */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline">
                <h3 className="text-xs md:text-sm font-bold text-textMain print:text-xs">
                  HCLTech{' '}
                  <span className="font-normal text-textMuted print:text-neutral-700">
                    — Senior Software Engineer
                  </span>
                  [cite: 1]
                </h3>
                <span className="font-mono text-xs text-textMuted print:text-neutral-800 print:text-[11px]">
                  Nov 2024 — Present | Bengaluru, India[cite: 1]
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-textMuted print:text-neutral-800 print:text-[11px] print:leading-tight">
                <li>
                  Deliver 5+ consumer-facing features per quarter in close
                  collaboration with UX Designers, Product Managers, and Backend
                  Engineers, consistently meeting sprint goals[cite: 1].
                </li>
                <li>
                  Established code-review standards and PR templates, reducing
                  post-merge defects by 25% and increasing overall code quality
                  across the team[cite: 1].
                </li>
                <li>
                  Engineered reusable React component libraries improving
                  scalability and eliminating duplicate UI code; optimized
                  bundles with lazy loading,{' '}
                  <code className="text-[10.5px]">useMemo</code>,{' '}
                  <code className="text-[10.5px]">useCallback</code>, and{' '}
                  <code className="text-[10.5px]">React.memo</code>[cite: 1].
                </li>
                <li>
                  Embedded AI pair-programming tools (GitHub Copilot, Cursor)
                  into daily sprints, accelerating feature delivery and
                  standardizing prompt-driven code review practices[cite: 1].
                </li>
                <li>
                  Mentored junior engineers through code reviews and pair
                  programming, reinforcing best practices and accelerating team
                  onboarding[cite: 1].
                </li>
              </ul>
            </div>

            {/* Axelerant */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline">
                <h3 className="text-xs md:text-sm font-bold text-textMain print:text-xs">
                  Axelerant{' '}
                  <span className="font-normal text-textMuted print:text-neutral-700">
                    — Frontend Software Engineer 3
                  </span>
                  [cite: 1]
                </h3>
                <span className="font-mono text-xs text-textMuted print:text-neutral-800 print:text-[11px]">
                  Nov 2021 — Nov 2024 | Remote, India[cite: 1]
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-textMuted print:text-neutral-800 print:text-[11px] print:leading-tight">
                <li>
                  Led end-to-end frontend development for NMDB (Next.js +
                  Tailwind CSS movie database); drove a 20% UI engagement lift
                  for Millboard by refactoring legacy components into
                  responsive, reusable modules[cite: 1].
                </li>
                <li>
                  Delivered WCAG 2.1 AA-compliant, zero-regression,
                  cross-browser applications for CAST, British Business Bank,
                  AMA, and Veolia with zero critical accessibility regressions
                  post-launch[cite: 1].
                </li>
                <li>
                  Cut average bug turnaround by 40% through systematic
                  root-cause analysis and proactive refactoring; maintained 98%+
                  on-time delivery across 6+ simultaneous client projects[cite:
                  1].
                </li>
                <li>
                  Collaborated directly with international clients and
                  cross-functional teams across design, backend, and QA to ship
                  features end-to-end on aggressive timelines[cite: 1].
                </li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-textMuted font-bold print:text-neutral-900 mb-2 pb-0.5 border-b border-borderGlass print:border-neutral-300">
              Projects[cite: 1]
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs print:text-[11px]">
              {/* StackNothing */}
              <div className="p-2.5 rounded-xl bg-surface border border-borderGlass print:border-neutral-300 print:p-1.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <strong className="text-textMain">StackNothing</strong>
                    [cite: 1]
                    <a
                      href="https://stacknothing.com"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-0.5 text-[#CCF380] hover:underline font-mono text-[10px]"
                    >
                      <span>stacknothing.com</span>
                      <ArrowUpRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      [cite: 1]
                    </a>
                  </div>
                  <p className="text-textMuted print:text-neutral-800 mt-1 leading-snug">
                    Freelance frontend consultancy platform built with Next.js
                    and Tailwind CSS — SEO-optimized, Core Web Vitals-compliant,
                    for enterprise and individual clients[cite: 1].
                  </p>
                </div>
              </div>

              {/* Dhikrly */}
              <div className="p-2.5 rounded-xl bg-surface border border-borderGlass print:border-neutral-300 print:p-1.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <strong className="text-textMain">Dhikrly</strong>[cite: 1]
                    <a
                      href="https://dhikrly.com"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-0.5 text-[#CCF380] hover:underline font-mono text-[10px]"
                    >
                      <span>dhikrly.com</span>
                      <ArrowUpRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      [cite: 1]
                    </a>
                  </div>
                  <p className="text-textMuted print:text-neutral-800 mt-1 leading-snug">
                    Prayer and practice tracking app (React.js + Firebase) built
                    end-to-end, featuring Qibla finder, Tasbeeh counter, offline
                    PWA, and cross-device sync[cite: 1].
                  </p>
                </div>
              </div>

              {/* Hostinger Cache Watchdog */}
              <div className="p-2.5 rounded-xl bg-surface border border-borderGlass print:border-neutral-300 print:p-1.5 flex flex-col justify-between">
                <div>
                  <strong className="text-textMain">
                    Hostinger Cache Watchdog
                  </strong>
                  [cite: 1]
                  <p className="text-textMuted print:text-neutral-800 mt-1 leading-snug">
                    WordPress plugin automating hPanel cache management via
                    Puppeteer automation, with WooCommerce detection and
                    Slack/Telegram alerts[cite: 1].
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-textMuted font-bold print:text-neutral-900 mb-1.5 pb-0.5 border-b border-borderGlass print:border-neutral-300">
              Education[cite: 1]
            </h2>
            <div className="flex flex-wrap justify-between gap-2 text-xs print:text-[11px] text-textMuted print:text-neutral-800">
              <p>
                <strong className="text-textMain">
                  MCA, Master of Computer Applications
                </strong>{' '}
                — University of Kashmir[cite: 1]
                <span className="font-mono ml-2 font-medium">
                  (2015 — 2019)
                </span>
                [cite: 1]
              </p>
              <p>
                <strong className="text-textMain">
                  BCA, Bachelor of Computer Applications
                </strong>{' '}
                — University of Kashmir[cite: 1]
                <span className="font-mono ml-2 font-medium">
                  (2012 — 2015)
                </span>
                [cite: 1]
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
