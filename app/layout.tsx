import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter_Tight, Comfortaa, Archivo, Nunito } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const nunito = Nunito({ subsets: ['latin'] });
const comfortaa = Comfortaa({ subsets: ['latin'] });
const inter = Inter_Tight({ subsets: ['latin'] });
const archivo = Archivo({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Nazrul Islam - Full Stack Engineer | Software Developer',
  description: 'Software Engineer',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-white">
      <meta name="theme-color" content="#4831D3" />
      <body className={`${nunito.className}`}>
        <Providers>{children}</Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
