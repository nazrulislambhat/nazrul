'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/header';
import { ExternalLink, Mail } from 'lucide-react';


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
    <div className="bg-primary">
      <div className="flex flex-col items-start justify-center align-middle boxed h-screen rounded bg-primary">
        <motion.h1
          className="text-background text-4xl xl:text-8xl flex justify-center items-center align-middle mx-8 mb-4 selection:bg-secondary selection:text-primary "
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
        <p className="flex items-center justify-center gap-2 mx-8 mb-4">
          <Mail className=" text-secondary text-xs" />
          <motion.a
            href="mailto:nazrul@nazrulislam.dev"
            target="_blank"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            rel="noopener noreferrer"
            className="hover:link-primary hover:text-secondary   selection:bg-secondary selection:text-primary  text-xs text-secondary link flex text-semibold  items-center w-fit"
          >
            nazrul@nazrulislam.dev
          </motion.a>
        </p>

        <p className="flex items-center justify-center gap-2 mx-8 mb-4">
          <ExternalLink className=" text-secondary text-xs" />
          <motion.a
            href="https://cal.com/nazrul"
            target="_blank"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            rel="noopener noreferrer"
            className="hover:link-primary hover:text-secondary  link selection:bg-secondary selection:text-primary text-xs text-secondary linkflex text-semibold  items-center w-fit"
          >
            schedule a meeting
          </motion.a>
        </p>
      </div>
    </div>
  );
}

export default ComingSoon;
