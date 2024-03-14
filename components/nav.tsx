import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Nav() {
  return (
    <nav className="bg-darkBackground opacity-95 fixed left-0 h-full w-full flex justify-center items-center">
      <ul className="flex flex-col uppercase text-4xl text-center text-background gap-8">
        <li>
          <Link
            href="#hero"
            className="hover:animate-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:bg-clip-text hover:text-transparent opacity-50 font-bold hover:opacity-100"
          >
            home.
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            className="hover:animate-text hover:bg-gradient-to-r hover:from-secondary  hover:to-primary hover:bg-clip-text hover:text-transparent opacity-50 font-bold hover:opacity-100"
          >
            about.
          </Link>
        </li>
        <li>
          <Link
            href="#skills"
            className="hover:animate-text hover:bg-gradient-to-r hover:from-orange  hover:to-yellow hover:bg-clip-text hover:text-transparent opacity-50 hover:opacity-100 font-bold"
          >
            skills.
          </Link>
        </li>
        <li>
          <Link
            href="#projects"
            className="hover:animate-text hover:bg-gradient-to-r hover:from-yellow  hover:to-secondary hover:bg-clip-text hover:text-transparent opacity-50 hover:opacity-100 font-bold"
          >
            projects.
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="hover:animate-text hover:bg-gradient-to-r hover:from-secondary  hover:to-yellow hover:bg-clip-text hover:text-transparent opacity-50 font-bold hover:opacity-100"
          >
            contact.
          </Link>
        </li>
      </ul>
    </nav>
  );
}
