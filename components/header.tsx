import Link from 'next/link';
import { useState } from 'react';
import { FaTimes, FaMinus, FaWindowRestore, FaBars } from 'react-icons/fa';
import Nav from './nav';
import { motion, AnimatePresence } from 'framer-motion';
const menuItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};
export default function Header() {
  const [showIcon, setShowIcon] = useState(false);
  const [minimizeIcon, setMinimizeIcon] = useState(false);
  const [resizeIcon, setResizeIcon] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex justify-between bg-darkBackground px-6 py-4 opacity-90 xl:border-b-2 xl:border-background">
      <div className="header flex align-middle justify-start items-center">
        <div className="icons-container flex items-center gap-2">
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
          </span>{' '}
        </div>
        <Link href="/" className="text-background opacity-80 text-xs ml-6">
          Nazrul Islam
        </Link>
      </div>
      <button className="menu-toggle text-background " onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuItemVariants}
            className="menu-items"
          >
            <Nav isOpen={isOpen} toggleMenu={toggleMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
