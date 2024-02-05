import Image from 'next/image';

export default function Home() {
  return (
    <main
      className="min-h-screen bg-background flex items-center text-center justify-center flex-col bg-gradient-to-r
    from-teal-600
    via-rose-500
    to-indigo-600
    background-animate"
    >
      <div className="bg-background shadow-xl rounded-xl sm:p-12 xl:p-24">
        <h1 className="text-terinary font-bold text-sm">
          we're working on it!
        </h1>
        <a
          href="mailto:contact@nazrulislam.dev"
          className="text-terinary font-bold text-xs underline m-8 hover:text-red"
        >
          get in touch
        </a>
      </div>
    </main>
  );
}
