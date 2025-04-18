'use client';
import Header from '@/components/header';
import Hero from '@/components/hero';
import AboutComponent from '@/components/about';
import CareerComponent from '@/components/career';
import ContactComponent from '@/components/contact';
import FooterComponent from '@/components/footer';
import ProjectsComponent from '@/components/projects';

import ComingSoonComponent from '@/components/something-cool';
import Years from '@/components/years';
export default function Home() {
  return (
    <main className="bg-primary">
      <ComingSoonComponent />
      <Header />
      <Hero />
      <AboutComponent />
      {/* <Years /> */}
      {/* <CareerComponent />
      <ProjectsComponent />
      <ContactComponent />
      <FooterComponent /> */}
    </main>
  );
}
