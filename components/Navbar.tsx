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
  Mail,
  Linkedin,
} from 'lucide-react';

const menuVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative flex items-center">
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
          className={`flex flex-col w-[100%] h-[100%] lg:right-0 lg:w-auto  xl:h-auto fixed xl:absolute justify-between left-0 top-0 xl:right-0 xl:top-10 xl:left-auto`}
        >
          <nav className="flex flex-col justify-start text-sm gap-8 menu px-8 xl:rounded-t-md pt-16 xl:pt-12 pb-10 z-0 bg-third h-[100%] xl:h-auto xl:w-96">
            {[
              'about',
              'experience',
              'projects',
              'skills',
              'resume',
              'contact',
            ].map((item, index) => (
              <motion.li
                key={item}
                variants={itemVariants}
                className="list-none"
              >
                {item === 'resume' ? (
                  <Link
                    href="/resume"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:link-primary text-background hover:text-secondary hover:opacity-100 font-bold link pb-1 opacity-80"
                  >
                    {item}
                  </Link>
                ) : (
                  <Link
                    href={`/${item}`}
                    className="hover:link-primary text-background hover:text-secondary hover:opacity-100 font-bold link pb-1 opacity-80"
                  >
                    {item}
                  </Link>
                )}
              </motion.li>
            ))}
          </nav>
          <nav className="flex say-salaam flex-col py-6 bg-third relative xl:h-auto xl:w-96 px-8">
            <span className="text-white uppercase text-2xl xl:text-3xl pb-4 xl:pb-6 opacity-60 tracking-[2rem] hover:opacity-100 hover:text-secondary">
              Say Salaam
            </span>
            <ul className="flex flex-col text-4xl xl:text-base gap-2">
              <li>
                <Link
                  href="mailto:nazrul@nazrulislam.dev"
                  className="hover:link-primary hover:text-secondary pb-1 hover:opacity-100 text-xs text-background link  flex items-center w-fit opacity-80"
                >
                  nazrul@nazrulislam.dev
                  <Mail className="ml-1 w-3 h-3 " />
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
                  <ExternalLink className="ml-1 w-3 h-3 " />
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="flex social py-8 bg-third relative xl:h-auto xl:w-96 px-8 xl:rounded-b-md">
            <ul className="flex justify-start gap-8">
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
        </motion.div>
      )}

      <button onClick={toggleMenu} className="absolute right-0 cursor-pointer">
        {isOpen ? (
          <Ellipsis className="w-6 h-6 text-secondary" />
        ) : (
          <Grip className="w-6 h-6 text-secondary" />
        )}
      </button>
    </div>
  );
}
