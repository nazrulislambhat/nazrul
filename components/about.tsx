import React from 'react';

export default function AboutComponent() {
  return (
    <div className="bg-primary">
      <div className="boxed1920 py-12 text-primary selection:bg-secondary selection:text-primary px-6 md:px-12 xl:px-16 2xl:px-24">
        <p className="text-secondary border-b-2 font-semibold border-secondary w-fit mb-8">
          About Me
        </p>
        <p className="text-white md:text-medium xl:text-xl mt-4">
          Hi, I’m a{' '}
          <strong className="font-bold text-secondary">
            results-driven Software Engineer
          </strong>{' '}
          with
          <strong className="font-bold text-secondary">
            {' '}
            4+ years of experience
          </strong>{' '}
          specializing in
          <strong className="font-bold text-secondary">
            {' '}
            front-end development
          </strong>
          . My expertise revolves around the{' '}
          <strong className="font-bold text-secondary">
            JavaScript (ES6+) ecosystem
          </strong>
          , with a strong focus on{' '}
          <strong className="font-bold text-secondary">
            React.js and Next.js
          </strong>
          .
        </p>

        <p className="text-background md:text-medium xl:text-xl mt-4">
          I’m passionate about crafting{' '}
          <strong className="font-bold text-secondary">
            seamless, high-performance web applications
          </strong>{' '}
          that deliver exceptional user experiences. I thrive on
          <strong className="font-bold text-secondary">
            {' '}
            solving complex problems
          </strong>
          , optimizing performance, and staying ahead of industry trends.
          Whether it's
          <strong className="font-bold text-secondary">
            {' '}
            building scalable solutions
          </strong>
          ,
          <strong className="font-bold text-secondary"> enhancing UI/UX</strong>
          , or
          <strong className="font-bold text-secondary">
            {' '}
            leveraging modern frameworks
          </strong>
          , I’m always eager to explore and innovate.
        </p>

        <p className="text-background md:text-medium xl:text-xl mt-4">
          Beyond coding, I believe in{' '}
          <strong className="font-bold text-secondary">
            collaboration, creativity, and continuous learning
          </strong>
          . I enjoy working in{' '}
          <strong className="font-bold text-secondary">
            dynamic environments
          </strong>{' '}
          where I can contribute, grow, and make a real impact. Let’s connect
          and create something amazing! 🚀
        </p>
      </div>
    </div>
  );
}
