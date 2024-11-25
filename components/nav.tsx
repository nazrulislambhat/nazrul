import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  ExternalLink,
  AlignJustify,
  Grip,
  Ellipsis,
  Instagram,
  Youtube,
  Github,
  X,
  Linkedin,
} from 'lucide-react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex items-center">
      <div
        className={`flex flex-col w-[100%] h-[100%] lg:right-0 lg:w-auto xl:h-auto fixed xl:absolute justify-between left-0 top-0 xl:right-0 xl:top-10 xl:left-auto ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <nav className="flex menu px-8 xl:rounded-t-md items-center pt-32 xl:pt-12 pb-6 z-0 bg-third h-[100%] xl:h-auto xl:w-96">
          <ul className="flex flex-col xl:flex-col text-base xl:text-base gap-8">
            <li>
              <Link
                href="#about"
                className="hover:link-primary text-background hover:text-secondary hover:opacity-100 font-bold link pb-1 opacity-80"
              >
                about
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="hover:link-primary text-background hover:text-secondary hover:opacity-100 font-bold pb-1 link opacity-80"
              >
                skills
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="hover:link-primary text-background hover:text-secondary hover:opacity-100 pb-1 font-bold  link  opacity-80"
              >
                projects
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:link-primary text-background hover:text-secondary hover:opacity-100 pb-1 font-bold  link  opacity-80"
              >
                services
              </Link>
            </li>
            <li>
              <Link
                href="/resume"
                target="_blank"
                className="hover:link-primary text-background hover:text-secondary hover:opacity-100 pb-1 font-bold  link opacity-80"
              >
                resume
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:link-primary text-background hover:text-secondary hover:opacity-100 font-bold pb-1 link opacity-80 "
              >
                contact
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="flex say-salaam flex-col py-6 bg-third relative xl:h-auto xl:w-96 px-8">
          <span className="text-white uppercase text-2xl xl:text-3xl pb-4 xl:pb-6 opacity-40 tracking-[2rem] hover:opacity-80">
            Say Salaam
          </span>
          <ul className="flex flex-col text-4xl xl:text-base gap-1 xl:gap-2">
            <li>
              <Link
                href="mailto:nazrul@nazrulislam.dev"
                className="hover:link-primary  hover:text-secondary pb-1  text-xs hover:opacity-100  text-background link hover:scale-105 w-fit opacity-80"
              >
                nazrul@nazrulislam.dev
              </Link>
            </li>

            <li>
              <Link
                href="https://cal.com/nazrul"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:link-primary hover:text-secondary pb-1 hover:opacity-100 text-xs text-background link  flex items-center w-fit opacity-80"
              >
                meeting
                <ExternalLink className="ml-1 w-4 h-4 " />
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="flex social pt-6 pb-12 bg-third relative xl:h-auto xl:w-96 px-8 xl:rounded-b-md">
          <ul className="flex justify-between w-[100%]">
            <li>
              <Link
                href="https://github.com/nazrulislambhat"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <Github className="hover:link-primary hover:text-secondary hover:opacity-100 text-background text-xl link  hover:scale-105 w-fit opacity-80" />
              </Link>
            </li>
            <li>
              <Link
                href="https://linkedin.com/in/nazrulislambhat"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <Linkedin className="hover:link-primary hover:text-secondary hover:opacity-100 text-background text-xl link  hover:scale-105 w-fit opacity-80" />
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com/nazrulislambhat"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <Instagram className="hover:link-primary hover:text-secondary hover:opacity-100 text-background text-xl link  hover:scale-105 w-fit opacity-80" />
              </Link>
            </li>
            <li>
              <Link
                href="https://youtube.com/@nazrulislambhat"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <Youtube className="hover:link-primary hover:text-secondary hover:opacity-100 text-background text-xl link  hover:scale-105 w-fit opacity-80" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <button
        onClick={toggleMenu}
        className="focus:outline-none absolute right-0 cursor-pointer"
      >
        {isOpen ? (
          <Ellipsis className="w-6 h-6 close z-10 text-secondary xl:text-secondary" />
        ) : (
          <Grip className="w-6 h-6 open text-secondary" />
        )}
      </button>
    </div>
  );
}
