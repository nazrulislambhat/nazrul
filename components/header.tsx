import Link from 'next/link';
import { useState } from 'react';
import { FaTimes, FaMinus, FaWindowRestore, FaBars } from 'react-icons/fa';
import Nav from './nav';
import { motion } from 'framer-motion';

export default function Header() {
  const [showIcon, setShowIcon] = useState(false);
  const [minimizeIcon, setMinimizeIcon] = useState(false);
  const [resizeIcon, setResizeIcon] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex  justify-between bg-darkBackground px-6 py-4 opacity-95 xl:border-b-2 xl:border-background">
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
        <Link
          href="/"
          className="animate-text font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent opacity-100 uppercase ml-6"
        >
          {'< Nazrul />'}
        </Link>
      </div>
      <button
        className="menu-toggle text-background absolute right-10 "
        onClick={toggleMenu}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  );
}