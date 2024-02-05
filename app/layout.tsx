import type { Metadata } from 'next';
import Home from './page';
import { Inter_Tight, Comfortaa } from 'next/font/google';
import './globals.css';

const inter = Inter_Tight({ subsets: ['latin'] });
const comfortaa = Comfortaa({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nazrul Islam - Full Stack Engineer | Software Developer',
  description: 'Software Engineer',
};
export default function Layout() {
  return (
    <html lang="en">
      <body className={`${comfortaa.className}`}>
        <div>
          <Home />
        </div>
      </body>
    </html>
  );
}
