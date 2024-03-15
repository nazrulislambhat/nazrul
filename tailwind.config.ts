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
        text: 'text 5s ease infinite',
      },
      colors: {
        primary: '#4C06E8',
        secondary: '#17BEBB',
        background: '#f2f2f2',
        richBlue: '#091540',
        richBlack: '#001A23',
        orange: '#E83A06',
        purple: '#5E239D',
        white: '#ffffff',
        yellow: '#FFC914',
        green: '#CDE77F',
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
};
export default config;
