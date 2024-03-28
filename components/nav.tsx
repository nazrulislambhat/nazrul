import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FaXing,
  FaGitter,
  FaExternalLinkAlt,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaStream,
} from 'react-icons/fa';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex items-center">
      <div
        className={`flex flex-col h-[100%] xl:h-auto fixed justify-between left-0 top-0 xl:right-16 xl:top-16 xl:left-auto ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex menu px-8 items-center pt-32 xl:pt-16 pb-6 z-0 bg-primary h-[100%] xl:h-auto xl:w-96"
        >
          <ul className="flex flex-col xl:flex-col text-base xl:text-base gap-8">
            <li>
              <Link
                href="#about"
                className="hover:animate-text text-background hover:text-secondary hover:opacity-100 font-bold link pb-1 opacity-80"
              >
                about
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="hover:animate-text text-background hover:text-secondary hover:opacity-100 font-bold pb-1 link opacity-80"
              >
                skills
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="hover:animate-text text-background hover:text-secondary hover:opacity-100 pb-1 font-bold  link  opacity-80"
              >
                projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:animate-text text-background hover:text-secondary hover:opacity-100 font-bold pb-1 link opacity-80 "
              >
                contact
              </Link>
            </li>
          </ul>
        </motion.nav>
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex say-salaam flex-col py-6 bg-primary relative xl:h-auto xl:w-96 px-8"
        >
          <span className="text-background uppercase text-2xl xl:text-3xl pb-4 xl:pb-6 opacity-40 tracking-[2rem]">
            Say Salaam
          </span>
          <ul className="flex flex-col text-4xl xl:text-base gap-1 xl:gap-2">
            <li>
              <Link
                href="mailto:nazrul@nazrulislam.dev"
                className="hover:animate-text  hover:text-secondary pb-1  text-xs hover:opacity-100  text-background link hover:scale-105 w-fit opacity-80"
              >
                nazrul@nazrulislam.dev
              </Link>
            </li>

            <li>
              <motion.a
                href="https://cal.com/nazrul"
                target="_blank"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                rel="noopener noreferrer"
                className="hover:animate-text hover:text-secondary pb-1 hover:opacity-100 text-xs text-background link hover:scale-105 flex items-center w-fit opacity-80"
              >
                meeting
                <FaExternalLinkAlt className="ml-1 text-background  hover:opacity-100 hover:text-secondary text-[10px] link flex items-center opacity-80 w-fit" />
              </motion.a>
            </li>
          </ul>
        </motion.nav>
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex social py-6 bg-primary relative xl:h-auto xl:w-96 px-8"
        >
          <ul className="flex justify-between w-[100%]">
            <li>
              <motion.a
                href="https://github.com/nazrulislambhat"
                target="_blank"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                rel="noopener noreferrer"
                className=""
              >
                <FaGithub className="hover:animate-text hover:text-secondary hover:opacity-100 text-background text-xl link  hover:scale-105 w-fit opacity-80" />
              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://linkedin.com/in/nazrulislambhat"
                target="_blank"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                rel="noopener noreferrer"
                className=""
              >
                <FaLinkedin className="hover:animate-text hover:text-secondary hover:opacity-100 text-background text-xl link  hover:scale-105 w-fit opacity-80" />
              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://instagram.com/nazrulislambhat"
                target="_blank"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                rel="noopener noreferrer"
                className=""
              >
                <FaInstagram className="hover:animate-text hover:text-secondary hover:opacity-100 text-background text-xl link  hover:scale-105 w-fit opacity-80" />
              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://youtube.com/@nazrulislambhat"
                target="_blank"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                rel="noopener noreferrer"
                className=""
              >
                <FaYoutube className="hover:animate-text hover:text-secondary hover:opacity-100 text-background text-xl link  hover:scale-105 w-fit opacity-80" />
              </motion.a>
            </li>
          </ul>
        </motion.nav>
      </div>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        onClick={toggleMenu}
        className="focus:outline-none absolute right-0 top-0 animate-text"
      >
        {isOpen ? (
          <FaXing className="text-3xl close z-10 text-secondary xl:text-primary" />
        ) : (
          <FaGitter className="text-3xl open text-primary rotate-90" />
        )}
      </motion.button>
    </div>
  );
}
