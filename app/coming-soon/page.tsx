'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/header';

import { FaExternalLinkAlt } from 'react-icons/fa';

function ComingSoon() {
  const [progress, setProgress] = useState(17.319);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 0.02
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="">
      <Header />
      <div className="flex flex-col items-start justify-center align-middle boxed h-screen rounded bg-primary">
        <motion.h1
          className="text-background text-2xl xl:text-8xl flex justify-center items-center align-middle mx-8 mb-4 selection:bg-secondary selection:text-primary "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          in the making.....
        </motion.h1>
        <motion.span
          className="text-primary h-fit text-base xl:text-xl w-[40%] max-w-[85%] xl:max-w-[95%] font-bold px-4 py-1 rounded-md mx-8 mb-4 bg-gradient-to-r  from-secondary via-orange to-red "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          style={{
            width: `${progress}%`,
            transition: 'width 0.1s linear',
          }}
        >
          {progress.toFixed(3)}%
        </motion.span>
        <motion.a
          className="text-secondary font-semibold text-xs mx-8 mb-4 link selection:bg-secondary selection:text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          href="mailto:nazrul@nazrulislam.dev"
        >
          nazrul@nazrulislam.dev
        </motion.a>
        <motion.a
          href="https://cal.com/nazrul"
          target="_blank"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          rel="noopener noreferrer"
          className="hover:link-primary hover:text-secondary mx-8 mb-4 selection:bg-secondary selection:text-primary hover:opacity-100 text-xs text-secondary link hover:scale-105 flex text-semibold  items-center w-fit"
        >
          schedule a meeting
          <FaExternalLinkAlt className="ml-1 text-secondary  hover:opacity-100 hover:text-secondary text-[10px] link flex items-center w-fit" />
        </motion.a>
      </div>
    </div>
  );
}

export default ComingSoon;
