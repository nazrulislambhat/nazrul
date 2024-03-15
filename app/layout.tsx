import type { Metadata } from 'next';

import { Inter_Tight, Comfortaa } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const comfortaa = Comfortaa({ subsets: ['latin'] });
const inter = Inter_Tight({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Nazrul Islam - Full Stack Engineer | Software Developer',
  description: 'Software Engineer',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-richBlue  max-width">
      <body className={`${comfortaa.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
