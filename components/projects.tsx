import Link from 'next/link';
export default function Projects() {
  return (
    <div className="projects">
      <div className="relative mt-6 mb-4 font-bold inline-block">
        <p className="text-primary font-bold flex items-center gap-1 z-10 text-2xl w-fit relative">
          Projects:
        </p>
        <span className="absolute inset-x-0 bottom-1 h-2 w-full bg-secondary z-0 opacity-80"></span>
      </div>
      <div className="flex gap-1 opacity-80">
        <p className="text-xs font-semibold">
          Over the years, I've engaged in numerous personal and professional
          projects, with some documented on my{' '}
          <Link
            href="https://github.com/nazrulislambhat"
            className="hover:animate-text font-bold pb-1 text-xs hover:opacity-100  text-primary link-primary hover:scale-105 w-fit opacity-100"
          >
            Github
          </Link>{' '}
          profile and others showcased on my website at
        </p>
        <Link
          href="/work"
          className="hover:animate-text font-bold pb-1 text-xs hover:opacity-100  text-primary link-primary hover:scale-105 w-fit opacity-100"
        >
          work
        </Link>
      </div>
    </div>
  );
}
