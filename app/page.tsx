import About from '../components/about';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Info from '../components/info';
import Nav from '../components/nav';
import Projects from '../components/projects';
import Services from '../components/services';
export default function Home() {
  return (
    <main className="min-h-screen bg-background flex items-center text-center justify-center flex-col">
      <div className="bg-terinary shadow-xl rounded-xl p-12 sm:p-12 xl:p-24 relative">
        <h1 className="text-background text-sm pb-4">we're working on it!</h1>
        <a
          href="mailto:contact@nazrulislam.dev"
          className="text-background text-xs m-8 link-hover1 relative"
        >
          get in touch
        </a>
      </div>
    </main>
  );
}
