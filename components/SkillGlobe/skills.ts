import type { Skill } from './constants';

/* `short` is used on narrow screens. `blurb` shows when a skill is selected.
   Edit or remove the blurbs freely; they're optional. */
export const DEFAULT_SKILLS: Skill[] = [
  // Languages & Core
  { name: 'TypeScript', group: 'Languages & Core' },
  { name: 'JavaScript (ES6+)', short: 'JavaScript', group: 'Languages & Core' },
  { name: 'HTML5 / Semantic Web', short: 'HTML5', group: 'Languages & Core' },
  { name: 'CSS3 / Modern Layouts', short: 'CSS3', group: 'Languages & Core' },
  { name: 'Python', group: 'Languages & Core' },

  // Frameworks & Frontend
  { name: 'React.js', group: 'Frameworks & Frontend' },
  {
    name: 'Next.js (App Router)',
    short: 'Next.js',
    group: 'Frameworks & Frontend',
    blurb: 'Runs this site, upgraded from Next.js 14 to 16.',
  },
  { name: 'Framer Motion', group: 'Frameworks & Frontend' },
  { name: 'Tailwind CSS', group: 'Frameworks & Frontend' },
  {
    name: 'Redux Toolkit / Zustand',
    short: 'Redux / Zustand',
    group: 'Frameworks & Frontend',
  },
  {
    name: 'Three.js / WebGL',
    short: 'Three.js',
    group: 'Frameworks & Frontend',
  },
  { name: 'MUI / HeroUI', group: 'Frameworks & Frontend' },

  // Architecture & Standards
  { name: 'Design Systems', group: 'Architecture & Standards' },
  { name: 'Micro-Frontends', group: 'Architecture & Standards' },
  {
    name: 'Core Web Vitals',
    group: 'Architecture & Standards',
    blurb: 'Performance tuning measured against LCP, INP, and CLS.',
  },
  {
    name: 'WCAG 2.1 AA Accessibility',
    short: 'WCAG 2.1 AA',
    group: 'Architecture & Standards',
    blurb: 'Audit and remediation work against WCAG 2.1 AA.',
  },
  { name: 'Atomic Design', group: 'Architecture & Standards' },

  // Backend
  { name: 'Node.js', group: 'Backend' },
  { name: 'SQL / PostgreSQL', short: 'PostgreSQL', group: 'Backend' },
  { name: 'RESTful & GraphQL APIs', short: 'REST / GraphQL', group: 'Backend' },

  // Tooling & Infrastructure
  {
    name: 'Webpack / Vite',
    group: 'Tooling & Infrastructure',
    blurb: 'Consolidated per-theme Webpack configs into one shared core.',
  },
  {
    name: 'Git & GitHub Actions',
    short: 'Git / Actions',
    group: 'Tooling & Infrastructure',
  },
  {
    name: 'Cloudflare Workers / Pages',
    short: 'Cloudflare',
    group: 'Tooling & Infrastructure',
  },
  {
    name: 'Storybook / Pattern Lab',
    short: 'Storybook',
    group: 'Tooling & Infrastructure',
    blurb: 'Pattern libraries for Drupal and WordPress themes.',
  },
  {
    name: 'AI-Augmented Dev Tooling',
    short: 'AI Dev Tooling',
    group: 'Tooling & Infrastructure',
  },
];
