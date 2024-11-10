'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/header';

import { FaExternalLinkAlt } from 'react-icons/fa';

function ComingSoon() {
  const [progress, setProgress] = useState(20.0001);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 0.02
      );
    }, 50); // Update every 100 milliseconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="">
      <Header />
      <div className="flex flex-col items-start justify-center align-middle boxed h-screen rounded bg-primary">
        <h1 className="text-white text-3xl xl:text-8xl flex justify-center items-center align-middle mx-8 mb-4 ">
          in the making
        </h1>
        <span
          className="h-fit text-xs max-w-[85%] xl:max-w-[95%] font-bold px-4 py-1 bg-secondary rounded-xl mx-8 mb-4 bg-gradient-to-r text-primary from-secondary to-red"
          style={{
            width: `${progress}%`,
            transition: 'width 0.1s linear',
          }}
        >
          {progress.toFixed(4)}%
        </span>
        <Link
          className="text-secondary font-semibold text-xs mx-8 mb-4 link "
          href="mailto:nazrul@nazrulislam.dev"
        >
          nazrul@nazrulislam.dev
        </Link>
        <motion.a
          href="https://cal.com/nazrul"
          target="_blank"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          rel="noopener noreferrer"
          className="hover:link-primary hover:text-secondary mx-8 mb-4 hover:opacity-100 text-xs text-background link hover:scale-105 flex items-center w-fit opacity-80"
        >
          meeting
          <FaExternalLinkAlt className="ml-1 text-background  hover:opacity-100 hover:text-secondary text-[10px] link flex items-center opacity-80 w-fit" />
        </motion.a>
      </div>
    </div>
  );
}

export default ComingSoon;
