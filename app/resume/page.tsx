import React from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdOutlineWebAsset, MdMailOutline, MdLocationOn } from 'react-icons/md';
import { Inter_Tight } from 'next/font/google';
import Experience from '../../components/experience';
import Projects from '../../components/projects';
const inter = Inter_Tight({ subsets: ['latin'] });
export default function Resume() {
  return (
    <div className="boxed bg-background m-4 xl:m-8 overflow-x-hidden ">
      <div className=" flex flex-col xl:flex-row w-screen justify-start">
        <div className="skills pl-8 xl:pl-12 border-r-4 border-whiteBackground xl:py-24 xl:w-96">
          <div className="contact pt-8 pb-8 xl:pb-12 xl:pt-0 flex flex-col gap-2">
            <div className="relative inline-block">
              <a
                href="https://nazrulislam.dev"
                className="text-primary font-bold flex items-center gap-1 z-10 text-base w-fit relative"
              >
                <MdOutlineWebAsset />
                nazrulislam.dev
              </a>
              <span className="absolute inset-x-0  bottom-1 h-2 w-[35%] xl:w-[50%] bg-secondary z-0 opacity-80"></span>
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

              <span className="absolute inset-x-0  bottom-1 h-2 w-[50%] xl:w-[76%] bg-secondary z-0 opacity-80"></span>
            </div>
          </div>
          <div className="flex flex-row xl:flex-col xl:gap-0 gap-12">
            <div className="core">
              <div className="relative mb-4 font-bold inline-block">
                <p className="text-primary font-bold flex items-center gap-1 z-10 text-base w-fit relative">
                  Core Technologies:
                </p>
                <span className="absolute inset-x-0  bottom-1 h-2 w-full bg-secondary z-0 opacity-80"></span>
              </div>
              <ul className="text-xs font-semibold text-black opacity-80 flex flex-col gap-[4px]">
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-third rotate-45"></span>
                  JavaScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-third rotate-45"></span>
                  React JS
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-third rotate-45"></span>
                  CSS/SaSS
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-third rotate-45"></span>
                  LessCSS
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-third rotate-45"></span>
                  TailwindCSS
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-third rotate-45"></span>
                  Bootstrap
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-third rotate-45"></span>
                  Styled Components
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-third rotate-45"></span>
                  TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-third rotate-45"></span>
                  Next JS
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-third rotate-45"></span>
                  NextUI
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-third rotate-45"></span>
                  GraphQL
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-third rotate-45"></span>
                  MUI
                </li>
              </ul>
            </div>
            <div className="other">
              <div className="relative mb-4 xl:mt-12 font-bold inline-block">
                <p className="text-primary font-bold flex items-center gap-1 z-10 text-base w-fit relative">
                  Other Technologies:
                </p>
                <span className="absolute inset-x-0  bottom-1 h-2 w-full bg-secondary z-0 opacity-80"></span>
              </div>
              <ul className="text-xs font-semibold text-black opacity-80 flex flex-col gap-[4px]">
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-primary rotate-45"></span>
                  Vite
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-primary rotate-45"></span>
                  Redux
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-primary rotate-45"></span>
                  Git
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-primary rotate-45"></span>
                  Vercel
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-primary rotate-45"></span>
                  Docker
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-primary rotate-45"></span>
                  Heroku
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-primary rotate-45"></span>
                  Webpack
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-primary rotate-45"></span>
                  Gulp
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-primary rotate-45"></span>
                  Babel
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-primary rotate-45"></span>
                  Drupal
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-primary rotate-45"></span>
                  WordPress
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="about relative  pl-8  xl:pr-28 xl:py-24 max-w-[85%]  xl:w-screen overflow-hidden">
          <div className="download py-12 xl:absolute xl:top-6 xl:right-28 flex gap-2 items-center ">
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
            <a
              href="https://github.com/nazrulislambhat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-third hover:text-primary text-2xl" />
            </a>
          </div>
          <div className="about__intro border-b-4 border-whiteBackground max-w-[1280px] ">
            <h1
              className={`${inter.className} text-primary font-semibold text-5xl xl:text-8xl pb-4 tracking-wide`}
            >
              Nazrul Islam
            </h1>
            <p className="text-base xl:text-2xl text-black font-semibold tracking-wide pb-8 xl:pb-12 flex flex-col xl:flex-row xl:items-center gap-2">
              Frontend Software Engineer | Founder
              <a
                href="https://oneseven.dev"
                className="text-xs link-primary text-primary py-1 font-bold w-fit"
                target="_blank"
                rel="noopener noreferrer"
              >
                OneSeven Technologies
              </a>
            </p>
            <p className="text-black opacity-90 text-base pb-8 leading-7 xl:leading-8 xl:w-auto">
              Experienced Software Engineer with 4+ years of experience in
              front-end technologies, particularly within the JS(ES6+) ecosystem
              encompassing React.JS and Next.JS, I am committed to harnessing
              technology for complex problem-solving. My track record showcases
              a consistent ability to exceed expectations and deliver
              exceptional outcomes. I have a proven ability to quickly grasp and
              master new technologies, ensuring I stay ahead of the curve.
            </p>
          </div>
          <Experience />
          <Projects />
        </div>
      </div>
    </div>
  );
}
