'use client';
import Header from '@/components/header';
import Hero from '@/components/hero';

import SomethingCoolSoon from '@/components/something-cool-soon';
import Years from '@/components/years';
import About from '@/components/about-home';
import Projects from '@/components/projects';
import Footer from '@/components/footer';
import BigScreenMessage from '@/components/big-screen-message';
export default function Home() {
  return (
    <main className="boxed">
      <SomethingCoolSoon />
      <BigScreenMessage />
      <Header />
      <Hero />
      <About />
      <Years />
      {/* <Projects /> */}
      <Footer />
    </main>
  );
}
