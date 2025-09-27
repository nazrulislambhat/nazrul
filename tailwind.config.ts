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
      animation: {
        text: 'text 5s ease-in-out infinite',
      },
      colors: {
        primary: '#3139fb',
        primaryLight: '#4831D3',
        secondary: '#CCF380',
        third: '#3D155F',
        black: '#0D1821',
        red: '#F43C00',
        background: '#F5F4FC',
        resume: '#D6EADF',
        orange: '#FF7A00',
        yellow: '#FAFF81',
        green: '#6DECAF',
        white: '#FFFFFF',
        coolWhite: '#F5F8FD',
      },

      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
  important: true,
};
export default config;
