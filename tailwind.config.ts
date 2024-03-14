import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/react');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#4C06E8',
        secondary: '#6DECAF',
        terinary: '#101935',
        darkGrey: '#131313',
        background: '#f2f2f2',
        darkBackground: '#011627',
        cool: '#17BEBB',
        orange: '#E83A06',
        purple: '#5E239D',
        white: '#ffffff',
        yellow: '#FFC914',
        green: '#58BC82',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
