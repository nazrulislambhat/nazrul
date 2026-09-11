import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './context/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3139fb',
        primaryLight: '#4831D3',
        secondary: '#CCF380',
        third: '#3D155F',
        red: '#F43C00',
        green: '#22E58B',
        volt: '#CCF380',
        signal: {
          DEFAULT: '#05DF72', // High-contrast readable green for dark mode text & icons
          dim: '#10B981', // Borders and secondary SVG strokes
          deep: '#047857', // High-contrast text on light surfaces
        },
        background: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        textMain: 'var(--color-text)',
        textMuted: 'var(--color-text-muted)',
        borderGlass: 'var(--color-border)',
        coolWhite: '#F5F8FD',
        black: '#0D1821',
        white: '#FFFFFF',
      },
      maxWidth: {
        site: '1440px',
      },
    },
  },
  plugins: [],
};

export default config;
