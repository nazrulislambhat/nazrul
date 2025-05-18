'use client';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import FooterLower from '../components/FooterLower';
import SomethingCoolSoon from '../components/SomethingCoolSoon';
import Years from '../components/Years';
import Services from '../components/Services';
export default function Home() {
  return (
    <main className="boxed">
      <SomethingCoolSoon />
      <Header />
      <Hero />
      <About />
      <Services />
      <Years />
      <Contact />
      <FooterLower />
    </main>
  );
}
