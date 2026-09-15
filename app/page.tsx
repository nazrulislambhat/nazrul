// app/page.tsx
import Header from '../components/header';
import Hero from '../components/hero';
import About from '../components/about';
import Years from '../components/years';
import Projects from '../components/projects';
import Skills from '../components/skills';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Books from '@/components/ui/books';
import CwvBadge from '@/components/ui/cwv-badge';
import CalFloatingWidget from '@/components/ui/cal-floating-widget';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background flex flex-col">
      <Header />
      <Hero />
      <About />
      <Years />
      <Projects />
      <Skills />
      <Books />
      <Contact />
      <Footer />
      <CwvBadge />
      <CalFloatingWidget />
    </main>
  );
}
