'use client';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Contact from '@/components/contact-pop-form';
import FooterLower from '@/components/footer-lower';
import SomethingCoolSoon from '@/components/something-cool-soon';
import Years from '@/components/years';
import Services from '@/components/services';
import About from '@/components/about-home';
import Footer from '@/components/footer';
import Projects from '@/components/projects';
import BigScreenMessage from '@/components/big-screen-message';
export default function Home() {
  return (
    <main className="boxed">
      <SomethingCoolSoon />
      <BigScreenMessage />
      <Header />
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
