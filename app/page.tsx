'use client';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Contact from '@/components/contact';
import FooterLower from '@/components/footer-lower';
import SomethingCoolSoon from '@/components/something-cool-soon';
import Years from '@/components/years';
import Services from '@/components/services';
import About from '@/components/about-home';
import Footer from '@/components/footer';
export default function Home() {
  return (
    <main className="boxed">
      <SomethingCoolSoon />
      <Header />
      <Hero />
      <About />
      {/* <Services />
      <Years />
      <Contact /> */}
      <Footer/>
      <FooterLower />
    </main>
  );
}
