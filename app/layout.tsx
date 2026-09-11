import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import {
  Inter_Tight,
  Comfortaa,
  Archivo,
  Nunito,
  Pathway_Extreme,
} from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { ThemeGlassProvider } from '../components/context/theme-glass-context';
import GlassControls from '../components/ui/glass-controls';
import CursorCat from '../components/ui/cursor-cat';
import BigScreenMessage from '@/components/big-screen-message';
import CwvBadge from '@/components/ui/cwv-badge';
import ConsoleGreeting from '@/components/ui/console-greeting';
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-nunito',
});

const pathway = Pathway_Extreme({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-pathway',
});

const comfortaa = Comfortaa({
  subsets: ['latin'],
  variable: '--font-comfortaa',
});

const inter = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter',
});

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
});

export const metadata: Metadata = {
  title: 'Nazrul Islam - Full Stack Engineer | Senior Software Developer',
  description:
    'Software Engineer specializing in frontend architecture, React, Next.js, and TypeScript.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${nunito.variable} ${pathway.variable} ${comfortaa.variable} ${inter.variable} ${archivo.variable}`}
    >
      <head>
        <meta name="theme-color" content="#3139fb" />
      </head>
      <body
        className={`${nunito.className} bg-background text-textMain antialiased`}
      >
        <ThemeGlassProvider>
          <Providers>
            {children}
            <GlassControls />
            <ConsoleGreeting />
            <BigScreenMessage />
            <CwvBadge />
          </Providers>
        </ThemeGlassProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
