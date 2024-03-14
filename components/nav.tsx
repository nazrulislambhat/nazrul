import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Nav() {
  return (
    <nav
      className={`bg-darkBackground fixed top-12 left-0 h-full w-full z-10 flex justify-center items-center`}
    >
      <ul className="flex flex-col uppercase text-4xl text-center text-background">
        <li>
          <Link
            href="#hero"
            className="active hover:opacity-100 hover:text-secondary  hover:stroke-white-2"
          >
            home.
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            className="opacity-50 hover:opacity-100 hover:text-secondary"
          >
            about.
          </Link>
        </li>
        <li>
          <Link
            href="#skills"
            className="opacity-50 hover:opacity-100 hover:text-secondary"
          >
            skills.
          </Link>
        </li>
        <li>
          <Link
            href="#projects"
            className="opacity-50 hover:opacity-100 hover:text-secondary"
          >
            projects.
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="opacity-50 hover:opacity-100 hover:text-secondary"
          >
            contact.
          </Link>
        </li>
      </ul>
    </nav>
  );
}
