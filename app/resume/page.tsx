import React from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload, FaLinkedin } from 'react-icons/fa';
import { MdOutlineWebAsset, MdMailOutline, MdLocationOn } from 'react-icons/md';
import { Inter_Tight } from 'next/font/google';
const inter = Inter_Tight({ subsets: ['latin'] });
export default function Resume() {
  return (
    <div className="boxed bg-background border-1 border-third m-8 overflow-x-hidden">
      <div className="inner flex w-screen justify-start">
        <div className="skills pl-12 border-r-4 border-primary xl:py-24 xl:w-96">
          <div className="contact pb-12 flex flex-col gap-2">
            <div className="relative inline-block">
              <a
                href="https://nazrulislam.dev"
                className="text-primary font-bold flex items-center gap-1 z-10 text-base w-fit relative"
              >
                <MdOutlineWebAsset />
                nazrulislam.dev
              </a>
              <span className="absolute inset-x-0  bottom-1 h-2 w-[50%] bg-secondary z-0"></span>
            </div>
            <h5 className="font-semibold text-xs flex items-center gap-1 text-black">
              <MdLocationOn />
              Bengaluru, Karnataka
            </h5>
            <div className="relative inline-block">
              <a
                href="mailto:nazrul@nazrulislam.dev"
                className="text-primary font-bold z-10 text-base w-fit relative flex items-center gap-1 "
              >
                <MdMailOutline />
                nazrul@nazrulislam.dev
              </a>

              <span className="absolute inset-x-0  bottom-1 h-2 w-[76%] bg-secondary z-0"></span>
            </div>
          </div>
          <div className="core">
            <div className="relative mb-4 font-bold inline-block">
              <p className="text-primary font-bold flex items-center gap-1 z-10 text-base w-fit relative">
                Core Technologies:
              </p>
              <span className="absolute inset-x-0  bottom-1 h-2 w-full bg-secondary z-0"></span>
            </div>
            <ul className="text-xs font-semibold text-black opacity-80 flex flex-col gap-[4px]">
              <li className="flex items-center gap-1">
                <span className="w-[5px] h-[5px] inline-block bg-third rotate-45"></span>
                JavaScript
              </li>
              <li className="flex items-center gap-1">
                <span className="w-[5px] h-[5px] inline-block bg-third rotate-45"></span>
                React JS
              </li>
              <li className="flex items-center gap-1">
                <span className="w-[5px] h-[5px] inline-block bg-third rotate-45"></span>
                CSS/SaSS
              </li>
              <li className="flex items-center gap-1">
                <span className="w-[5px] h-[5px] inline-block bg-third rotate-45"></span>
                LessCSS
              </li>
              <li className="flex items-center gap-1">
                <span className="w-[5px] h-[5px] inline-block bg-third rotate-45"></span>
                TailwindCSS
              </li>
              <li className="flex items-center gap-1">
                <span className="w-[5px] h-[5px] inline-block bg-third rotate-45"></span>
                Bootstrap
              </li>
              <li className="flex items-center gap-1">
                <span className="w-[5px] h-[5px] inline-block bg-third rotate-45"></span>
                Styled Components
              </li>
              <li className="flex items-center gap-1">
                <span className="w-[5px] h-[5px] inline-block bg-third rotate-45"></span>
                TypeScript
              </li>
              <li className="flex items-center gap-1">
                <span className="w-[5px] h-[5px] inline-block bg-third rotate-45"></span>
                Next JS
              </li>
              <li className="flex items-center gap-1">
                <span className="w-[5px] h-[5px] inline-block bg-third rotate-45"></span>
                NextUI
              </li>
              <li className="flex items-center gap-1">
                <span className="w-[5px] h-[5px] inline-block bg-third rotate-45"></span>
                GraphQL
              </li>
              <li className="flex items-center gap-1">
                <span className="w-[5px] h-[5px] inline-block bg-third rotate-45"></span>
                MUI
              </li>
            </ul>
          </div>
          <div className="other">
            <div className="relative mb-4 mt-12 font-bold inline-block">
              <p className="text-primary font-bold flex items-center gap-1 z-10 text-base w-fit relative">
                Other Technologies:
              </p>
              <span className="absolute inset-x-0  bottom-1 h-2 w-full bg-secondary z-0"></span>
            </div>
            <ul className="text-xs font-semibold text-black opacity-80 flex flex-col gap-[4px]">
              <li className="flex items-center gap-1">
                <span className="w-[5px] h-[5px] inline-block bg-primary rotate-45"></span>
                Vite
              </li>
              <li className="flex items-center gap-1">
                <span className="w-[5px] h-[5px] inline-block bg-primary rotate-45"></span>
                Redux
              </li>
              <li className="flex items-center gap-1">
                <span className="w-[5px] h-[5px] inline-block bg-primary rotate-45"></span>
                Git
              </li>
              <li className="flex items-center gap-1">
                <span className="w-[5px] h-[5px] inline-block bg-primary rotate-45"></span>
                Vercel
              </li>
              <li className="flex items-center gap-1">
                <span className="w-[5px] h-[5px] inline-block bg-primary rotate-45"></span>
                Docker
              </li>
              <li className="flex items-center gap-1">
                <span className="w-[5px] h-[5px] inline-block bg-primary rotate-45"></span>
                Heroku
              </li>
              <li className="flex items-center gap-1">
                <span className="w-[5px] h-[5px] inline-block bg-primary rotate-45"></span>
                Webpack
              </li>
              <li className="flex items-center gap-1">
                <span className="w-[5px] h-[5px] inline-block bg-primary rotate-45"></span>
                Gulp
              </li>
              <li className="flex items-center gap-1">
                <span className="w-[5px] h-[5px] inline-block bg-primary rotate-45"></span>
                Babel
              </li>
              <li className="flex items-center gap-1">
                <span className="w-[5px] h-[5px] inline-block bg-primary rotate-45"></span>
                Drupal
              </li>
              <li className="flex items-center gap-1">
                <span className="w-[5px] h-[5px] inline-block bg-primary rotate-45"></span>
                WordPress
              </li>
            </ul>
          </div>
        </div>
        <div className="about relative  pl-12 py-24 w-screen overflow-hidden">
          <div className="download absolute top-6 right-28 flex gap-2 items-center ">
            <a
              href="https://drive.google.com/file/d/15-5JnG6SAuE--pMtUHeR5TQrsQSxIClF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFileDownload className="text-primary hover:text-third text-2xl" />
            </a>
            <a
              href="https://linkedin.com/in/nazrulislambhat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-[#0077B5] text-2xl" />
            </a>
          </div>
          <div className="about__intro border-b-4 max-w-[1280px]">
            <h1
              className={`${inter.className} text-primary font-semibold text-8xl pb-4 tracking-wide`}
            >
              Nazrul Islam
            </h1>
            <p className="text-2xl text-black font-semibold tracking-wide pb-12">
              Software Engineer | Frontend Engineer
            </p>
            <p className="text-black opacity-80 text-base pb-8 leading-8">
              Experienced Software Engineer with 4+ years of experience in
              front-end technologies, particularly within the JS(ES6+) ecosystem
              encompassing React.JS and Next.JS, I am committed to harnessing
              technology for complex problem-solving. My track record showcases
              a consistent ability to exceed expectations and deliver
              exceptional outcomes. I have a proven ability to quickly grasp and
              master new technologies, ensuring I stay ahead of the curve.
            </p>
          </div>
          <div className="experience">
            <span>Experience</span>
            <div className="company1">
              <h3>Company Name</h3>
              <h4>Title</h4>
              <span>Duration</span>
              <p>project name</p>
              <ul>
                <li>what i did</li>
              </ul>
            </div>
            <div className="company2">
              <h3>Company Name</h3>
              <h4>Title</h4>
              <span>Duration</span>
              <p>project name</p>
              <ul>
                <li>what i did</li>
              </ul>
            </div>
            <div className="company3">
              <h3>Company Name</h3>
              <h4>Title</h4>
              <span>Duration</span>
              <p>project name</p>
              <ul>
                <li>what i did</li>
              </ul>
            </div>
          </div>
          <div className="projects">
            <span>Projects</span>
            <div className="project1">
              <h3>Project Name</h3>
              <p>description</p>
              <ul>
                <li>what i did</li>
              </ul>
            </div>
            <div className="project2">
              <h3>Project Name</h3>
              <p>description</p>
              <ul>
                <li>what i did</li>
              </ul>
            </div>
            <div className="project3">
              <h3>Project Name</h3>
              <p>description</p>
              <ul>
                <li>what i did</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
