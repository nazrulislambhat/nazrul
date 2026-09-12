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

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

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
    </main>
  );
}
