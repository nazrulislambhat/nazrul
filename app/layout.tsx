import type { Metadata, Viewport } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import {
  Inter_Tight,
  Comfortaa,
  Archivo,
  Nunito,
  Pathway_Extreme,
} from 'next/font/google';
import './globals.css';
import AppClientShell from '@/components/app-client-shell';
import ParticleBackground from '@/components/ui/particle-background';

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
  metadataBase: new URL('https://nazrulislam.dev'),
  title: {
    default: 'Nazrul Islam — Senior Frontend Engineer & Interface Architect',
    template: '%s | Nazrul Islam',
  },
  description:
    'Senior Frontend Engineer specializing in React.js, Next.js, TypeScript, and high-performance UI engineering with AI-augmented workflows.',
  keywords: [
    'Nazrul Islam',
    'Frontend Engineer',
    'React Developer',
    'Next.js Expert',
    'TypeScript',
    'UI/UX Engineering',
    'Bengaluru',
    'Web Performance',
  ],
  authors: [{ name: 'Nazrul Islam', url: 'https://nazrulislam.dev' }],
  creator: 'Nazrul Islam',
  publisher: 'Nazrul Islam',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nazrulislam.dev',
    title: 'Nazrul Islam — Senior Frontend Engineer',
    description:
      'Building resilient, high-speed web platforms with React, Next.js, and modern interface architecture.',
    siteName: 'Nazrul Islam Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nazrul Islam — Senior Frontend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nazrul Islam — Senior Frontend Engineer',
    description:
      'Senior Frontend Engineer specializing in React.js, Next.js, and high-performance web applications.',
    creator: '@nazrulislambhat',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#3139fb',
  width: 'device-width',
  initialScale: 1,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${nunito.variable} ${pathway.variable} ${comfortaa.variable} ${inter.variable} ${archivo.variable}`}
    >
      <body
        className={`${nunito.className} bg-background text-textMain antialiased selection:bg-volt selection:text-black`}
      >
        <ParticleBackground />
        <AppClientShell>{children}</AppClientShell>
        <SpeedInsights />
      </body>
    </html>
  );
}
