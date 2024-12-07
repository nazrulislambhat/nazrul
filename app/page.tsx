'use client';
import Header from '@/components/header';
import Hero from '@/components/hero';
import AboutComponent from '@/components/about';
import CareerComponent from '@/components/career';
import ContactComponent from '@/components/contact';
import FooterComponent from '@/components/footer';
import ProjectsComponent from '@/components/projects';
import ComingSoon from './coming-soon/page';
export default function Home() {
  return (
    <main className="bg-primary">
      <Header />
      <Hero />
      <AboutComponent />
      {/* <CareerComponent />
      <ProjectsComponent />
      <ContactComponent />
      <FooterComponent /> */}
    </main>
  );
}
