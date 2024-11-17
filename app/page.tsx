'use client';
import Header from '@/components/header';
import Hero from '@/components/hero';
import AboutComponent from '@/components/about';
import CareerComponent from '@/components/career';
import ContactComponent from '@/components/contact';
import FooterComponent from '@/components/footer';
import ProjectsComponent from '@/components/projects';
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutComponent />
      <CareerComponent />
      <ProjectsComponent />
      <ContactComponent />
      <FooterComponent />
    </main>
  );
}
