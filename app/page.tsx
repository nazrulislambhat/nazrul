'use client';
import Header from '../components/header';
import Hero from '../components/hero';
import About from '../components/about';
import Contact from '../components/contact';
import FooterLower from '../components/footer-lower';
import SomethingCoolSoon from '../components/something-cool-soon';
import Years from '../components/years';
import Services from '../components/services';
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
