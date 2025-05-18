'use client';
import Header from '@/components/header';
import Hero from '@/components/hero';
import AboutComponent from '@/components/about-home-cpt';
import CareerComponent from '@/components/career';
import ContactComponent from '@/components/contact';
import FooterComponentLower from '@/components/footer';
import ProjectsComponent from '@/components/projects';

import ComingSoonComponent from '@/components/something-cool';
import Years from '@/components/years';
import Services from './services/page';
import ServicesComponent from '@/components/services';
import { Contact } from 'lucide-react';
export default function Home() {
  return (
    <main className="boxed">
      <ComingSoonComponent />
      <Header />
      <Hero />
      <AboutComponent />
      <ServicesComponent />
      <Years />
      <ContactComponent />
      <FooterComponentLower />
      {/* <Years /> */}
      {/* <CareerComponent />
      <ProjectsComponent />
      <ContactComponent />
       */}
    </main>
  );
}
