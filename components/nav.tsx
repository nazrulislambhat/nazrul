import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex items-center">
      <div className={`xl:block flex ${isOpen ? 'block' : 'hidden'}`}>
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center py-2 px-6 bg-third fixed w-screen h-screen xl:relative xl:bg-transparent xl:h-auto xl:w-auto left-0 top-0 xl:top-auto xl:left-auto "
        >
          <ul className="flex flex-col xl:flex-row text-4xl xl:text-base text-center text-background gap-8 xl:gap-20">
            <li className="relative hover-effect">
              <Link
                href="#hero"
                className="hover:animate-text hover:text-secondary font-bold pb-1 link"
              >
                home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="hover:animate-text hover:text-secondary font-bold link pb-1"
              >
                about
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="hover:animate-text hover:text-secondary font-bold pb-1 link"
              >
                skills
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="hover:animate-text  hover:text-secondary pb-1 font-bold link "
              >
                projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:animate-text hover:text-secondary font-bold pb-1 link "
              >
                contact
              </Link>
            </li>
          </ul>
        </motion.nav>
      </div>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        onClick={toggleMenu}
        className="focus:outline-none xl:hidden absolute  bg-secondary text-third rounded-md p-2 right-0 animate-text"
      >
        {isOpen ? (
          <FaTimes className="text-xl" />
        ) : (
          <FaBars className="text-xl" />
        )}
      </motion.button>
    </div>
  );
}
