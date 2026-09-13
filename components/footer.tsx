'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Terminal,
  User,
  Briefcase,
  FolderGit2,
  Sparkles,
  BookOpen,
  Send,
  FileText,
  Package,
} from 'lucide-react';
const indexLinks = [
  { label: 'About', icon: User },
  { label: 'Experience', icon: Briefcase },
  { label: 'Projects', icon: FolderGit2 },
  { label: 'Skills', icon: Sparkles },
  { label: 'Reading', icon: BookOpen },
  { label: 'Contact', icon: Send },
];
/* Inline official X glyph */
function XIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-transparent pt-4 pb-20 md:pb-24 text-textMain selection:bg-volt selection:text-black">
      <div className="max-w-site mx-auto px-4 sm:px-8 md:px-12 xl:px-16">
        <div className="p-8 md:p-12 xl:p-14 rounded-3xl liquid-glass border border-borderGlass flex flex-col">
          {/* Top Row: Brand Statement & Availability Status */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 pb-6 mb-8 border-b-2 border-borderGlass">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-textMuted">
                <Terminal className="w-3.5 h-3.5 text-signal" />
                <span>Architecture &amp; Interface Engineering</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-textMain">
                Let’s build resilient, high-speed web platforms.
              </h2>
            </div>

            {/* Availability Pill */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-signal-dim/30 bg-surface/80 font-mono text-xs text-signal shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-volt opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
              </span>
              <span className="font-semibold text-textMain">
                Open to New Contracts &amp; Roles
              </span>
            </div>
          </div>

          {/* Middle Row: Navigation Columns & Social Outlets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 font-mono text-xs">
            {/* Quick Sections */}
            <div className="space-y-2.5">
              <span className="block text-[11px] font-bold text-textMuted uppercase tracking-wider">
                Index
              </span>
              <ul className="space-y-2">
                {indexLinks.map(({ label, icon: Icon }) => (
                  <li key={label}>
                    <Link
                      href={`#${label.toLowerCase()}`}
                      className="group inline-flex items-center gap-2 text-textMuted hover:text-signal transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5 text-signal/60 group-hover:text-signal group-hover:scale-110 group-hover:-rotate-6 transition-all duration-200" />
                      <span className="group-hover:underline">{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Artifacts & Tools */}
            <div className="space-y-2.5">
              <span className="block text-[11px] font-bold text-textMuted uppercase tracking-wider">
                Artifacts
              </span>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/resume"
                    className="group inline-flex items-center gap-1.5 text-textMuted hover:text-signal transition-colors"
                  >
                    <span className="group-hover:underline">
                      Printable Resume
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-signal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/nazrulislambhat"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1.5 text-textMuted hover:text-signal transition-colors"
                  >
                    <span className="group-hover:underline">
                      Design System Kit
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-signal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Direct Connect */}
            <div className="space-y-2.5">
              <span className="block text-[11px] font-bold text-textMuted uppercase tracking-wider">
                Dispatch
              </span>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:nazrulislambhat@gmail.com"
                    className="inline-flex items-center gap-1.5 text-textMuted hover:text-signal hover:underline transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-signal" />
                    <span>nazrulislambhat@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div className="space-y-2.5">
              <span className="block text-[11px] font-bold text-textMuted uppercase tracking-wider">
                Network
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://github.com/nazrulislambhat"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 rounded-xl border border-borderGlass bg-surface/80 text-textMuted hover:border-signal-dim hover:text-signal transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/nazrulislambhat"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 rounded-xl border border-borderGlass bg-surface/80 text-textMuted hover:border-signal-dim hover:text-signal transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com/nazrulislambhat"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X Profile"
                  className="p-2 rounded-xl border border-borderGlass bg-surface/80 text-textMuted hover:border-signal-dim hover:text-signal transition-all"
                >
                  <XIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-8 border-t-2 border-borderGlass flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] text-textMuted">
            <p>© {currentYear} Nazrul Islam</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
