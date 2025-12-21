import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="bg-background">
      <div className="py-20 text-black selection:bg-primary selection:text-secondary px-6 md:px-12 xl:px-16 2xl:px-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-primary bg-secondary px-2 py-1 rounded font-semibold w-fit mb-8"
        >
          About Me
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-black text-base mt-4"
        >
          Hi, I’m a results-driven{' '}
          <strong className="font-bold text-primary">Software Engineer</strong>{' '}
          with
          <strong className="font-bold text-primary">
            {' '}
            5+ years of experience
          </strong>{' '}
          specializing in
          <strong className="font-bold text-primary">
            {' '}
            front-end development
          </strong>
          . My expertise revolves around the{' '}
          <strong className="font-bold text-primary">JavaScript (ES6+) </strong>
          ecosystem, with a strong focus on{' '}
          <strong className="font-bold text-primary">React JS</strong> and{' '}
          <strong className="font-bold text-primary">Next JS</strong>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-black text-base mt-4"
        >
          I’m passionate about crafting{' '}
          <strong className="font-bold text-primary">
            seamless, high-performance web applications
          </strong>{' '}
          that deliver exceptional user experiences. I thrive on
          <strong className="font-bold text-primary">
            {' '}
            solving complex problems
          </strong>
          , optimizing performance, and staying ahead of industry trends.
          Whether it's
          <strong className="font-bold text-primary">
            {' '}
            building scalable solutions
          </strong>
          ,<strong className="font-bold text-primary"> enhancing UI/UX</strong>,
          or
          <strong className="font-bold text-primary">
            {' '}
            leveraging modern frameworks
          </strong>
          , I’m always eager to explore and innovate.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-black text-base mt-4"
        >
          Beyond coding, I believe in{' '}
          <strong className="font-bold text-primary">
            collaboration, creativity, and continuous learning
          </strong>
          . I enjoy working in{' '}
          <strong className="font-bold text-primary">
            dynamic environments
          </strong>{' '}
          where I can contribute, grow, and make a real impact.
        </motion.p>
      </div>
    </div>
  );
}
