import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex items-center text-center justify-center flex-col">
      <div className="bg-cool shadow-xl rounded-xl p-12 sm:p-12 xl:p-24 relative">
        <h1 className="text-background text-sm">we're working on it!</h1>
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
