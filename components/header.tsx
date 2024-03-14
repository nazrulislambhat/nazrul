import Link from 'next/link';
import { useState } from 'react';
import { FaTimes, FaMinus, FaWindowRestore, FaBars } from 'react-icons/fa';
import Nav from './nav';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [showIcon, setShowIcon] = useState(false);
  const [minimizeIcon, setMinimizeIcon] = useState(false);
  const [resizeIcon, setResizeIcon] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="flex justify-between bg-darkBackground opacity-95 pl-6 relative py-6 xl:border-b-2 xl:border-background items-center ">
        <div className="header flex align-middle justify-start items-center">
          <motion.div
            className="icons-container flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span
              className="icon cancel bg-orange rounded-full w-[15px] h-[15px] flex items-center justify-center"
              onMouseEnter={() => setShowIcon(true)}
              onMouseLeave={() => setShowIcon(false)}
            >
              {showIcon && (
                <FaTimes className="show-icon text-darkBackground opacity-80 text-[8px]" />
              )}
            </span>
            <span
              className="icon minimize bg-yellow rounded-full w-[15px] h-[15px] flex items-center justify-center"
              onMouseEnter={() => setMinimizeIcon(true)}
              onMouseLeave={() => setMinimizeIcon(false)}
            >
              {minimizeIcon && (
                <FaMinus className="minimize-icon text-darkBackground opacity-80 text-[8px]" />
              )}
            </span>
            <span
              className="icon minimize bg-green rounded-full w-[15px] h-[15px] flex items-center justify-center"
              onMouseEnter={() => setResizeIcon(true)}
              onMouseLeave={() => setResizeIcon(false)}
            >
              {resizeIcon && (
                <FaWindowRestore className="resize-icon text-darkBackground font-bold opacity-80 text-[8px]" />
              )}
            </span>
          </motion.div>

          <motion.a
            className="animate-text font-bold text-xl xl:text-2xl bg-gradient-to-r from-green to-secondary bg-clip-text text-transparent opacity-100 uppercase ml-6"
            href="/"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {'{ Nazrul }'}
          </motion.a>
        </div>
        <motion.button
          className="menu-toggle text-background absolute right-10 z-50 text-xl"
          onClick={toggleMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Nav />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
