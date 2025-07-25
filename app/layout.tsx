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

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});
const pathway = Pathway_Extreme({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});
const comfortaa = Comfortaa({ subsets: ['latin'] });
const inter = Inter_Tight({ subsets: ['latin'] });
const archivo = Archivo({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Nazrul Islam - Full Stack Engineer | Senior Software Developer',
  description: 'Software Engineer',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-background">
      <meta name="theme-color" content="#3139fb" />
      <body className={`${nunito.className}`}>
        <Providers>{children}</Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
