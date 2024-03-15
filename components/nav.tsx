import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Nav() {
  return (
    <motion.nav
      className="flex justify-center items-center py-2 px-6 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <ul className="flex flex-col xl:flex-row text-base text-center text-background gap-8">
        <li>
          <Link
            href="#hero"
            className="hover:animate-text  hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:bg-clip-text hover:text-transparent opacity-100 font-bold pb-1 pb-1 link"
          >
            home
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            className="hover:animate-text  hover:bg-gradient-to-r hover:from-secondary  hover:to-primary hover:bg-clip-text hover:text-transparent opacity-100 font-bold link pb-1"
          >
            about
          </Link>
        </li>
        <li>
          <Link
            href="#skills"
            className="hover:animate-text  hover:bg-gradient-to-r hover:from-orange  hover:to-yellow hover:bg-clip-text hover:text-transparent opacity-100  font-bold pb-1 link"
          >
            skills
          </Link>
        </li>
        <li>
          <Link
            href="#projects"
            className="hover:animate-text  hover:bg-gradient-to-r hover:from-yellow  hover:to-secondary hover:bg-clip-text hover:text-transparent opacity-100 pb-1 font-bold link"
          >
            projects
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="hover:animate-text hover:bg-gradient-to-r hover:from-secondary  hover:to-yellow hover:bg-clip-text hover:text-transparent opacity-100 font-bold pb-1 link"
          >
            contact
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
}
