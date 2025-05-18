'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="bg-background">
      <div className="py-12 text-black selection:bg-primary selection:text-secondary px-6 md:px-12 xl:px-16 2xl:px-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-primary border-b-2 font-semibold border-primary w-fit mb-8"
        >
          About Me
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-black md:text-medium xl:text-xl mt-4"
        >
          Hi, I’m a{' '}
          <strong className="font-bold text-primary">
            results-driven Software Engineer
          </strong>{' '}
          with
          <strong className="font-bold text-primary">
            {' '}
            4+ years of experience
          </strong>{' '}
          specializing in
          <strong className="font-bold text-primary">
            {' '}
            front-end development
          </strong>
          . My expertise revolves around the{' '}
          <strong className="font-bold text-primary">
            JavaScript (ES6+)
          </strong>{' '}
          ecosystem, with a strong focus on{' '}
          <strong className="font-bold text-primary">React.js</strong> and{' '}
          <strong className="font-bold text-primary">Next.js</strong>. I'm
          proficient in{' '}
          <strong className="font-bold text-primary">TypeScript</strong>,
          ensuring type safety and scalability in large codebases. I have
          hands-on experience with modern build tools like{' '}
          <strong className="font-bold text-primary">Vite</strong> and bundlers
          like <strong className="font-bold text-primary">Webpack</strong>. I
          write clean, maintainable code following{' '}
          <strong className="font-bold text-primary">
            component-driven architecture
          </strong>
          , and I’m well-versed in using{' '}
          <strong className="font-bold text-primary">Tailwind CSS</strong>,{' '}
          <strong className="font-bold text-primary">ShadCN UI</strong>, and{' '}
          <strong className="font-bold text-primary">Framer Motion</strong> for
          building polished UIs with delightful user experiences. I also
          leverage{' '}
          <strong className="font-bold text-primary">React Query</strong>,{' '}
          <strong className="font-bold text-primary">Zustand</strong>, and{' '}
          <strong className="font-bold text-primary">Firebase</strong> for state
          management and backend integration.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-black md:text-medium xl:text-xl mt-4"
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
          className="text-black md:text-medium xl:text-xl mt-4"
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
