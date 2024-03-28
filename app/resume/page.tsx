import React from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdOutlineWebAsset, MdMailOutline, MdLocationOn } from 'react-icons/md';
import { Inter_Tight } from 'next/font/google';
const inter = Inter_Tight({ subsets: ['latin'] });
export default function Resume() {
  return (
    <div className="boxed bg-background m-8 overflow-x-hidden ">
      <div className=" flex w-screen justify-start">
        <div className="skills pl-12 border-r-4 border-whiteBackground xl:py-24 xl:w-96">
          <div className="contact pb-12 flex flex-col gap-2">
            <div className="relative inline-block">
              <a
                href="https://nazrulislam.dev"
                className="text-primary font-bold flex items-center gap-1 z-10 text-base w-fit relative"
              >
                <MdOutlineWebAsset />
                nazrulislam.dev
              </a>
              <span className="absolute inset-x-0  bottom-1 h-2 w-[50%] bg-secondary z-0 opacity-80"></span>
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

              <span className="absolute inset-x-0  bottom-1 h-2 w-[76%] bg-secondary z-0 opacity-80"></span>
            </div>
          </div>
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
            <div className="relative mb-4 mt-12 font-bold inline-block">
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
              className={`${inter.className} text-primary font-semibold text-8xl pb-4 tracking-wide`}
            >
              Nazrul Islam
            </h1>
            <p className="text-2xl text-black font-semibold tracking-wide pb-12 flex items-center gap-2">
              Frontend Software Engineer | Founder & CEO
              <a
                href="https://oneseven.dev"
                className="text-xs link-primary text-primary py-1 font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                OneSeven Technologies
              </a>
            </p>
            <p className="text-black opacity-90 text-base pb-8 leading-8">
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
            <div className="relative my-6 font-bold inline-block">
              <p className="text-primary font-bold flex items-center gap-1 z-10 text-2xl w-fit relative">
                Experience:
              </p>
              <span className="absolute inset-x-0 bottom-1 h-2 w-full bg-secondary z-0 opacity-80"></span>
            </div>
            <div className="axelerant max-w-[1280px]  ">
              <div className="flex items-center justify-between">
                <div className="flex w-full items-center justify-start gap-2">
                  <h3 className="company text-primary text-base font-bold">
                    Axelerant Technologies
                  </h3>
                  |
                  <h4 className="role font-semibold text-black text-xs">
                    Software / Frontend Engineer (L3)
                  </h4>
                  <span className="h-[2px] rounded-full bg-black flex-grow"></span>
                </div>
                <p className="duration text-xs ml-2 text-black font-semibold whitespace-nowrap">
                  Nov 2021 - Present
                </p>
              </div>
              <div className="millboard">
                <div className="relative mb-2 mt-6 font-bold inline-block">
                  <p className="text-third font-bold flex z-10 text-base w-fit relative">
                    Millboard
                  </p>
                  <span className="absolute inset-x-0 bottom-1 h-2 w-full bg-red z-0 opacity-30"></span>
                </div>
                <ul className="flex flex-col gap-1 opacity-90">
                  <li className="text-xs font-semibold flex items-center gap-2">
                    <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
                    Elevated codebase as Frontend Engineer by making significant
                    contributions.
                  </li>
                  <li className="text-xs font-semibold flex items-center gap-2">
                    <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
                    Specialized in creating responsive components and resolving
                    bugs.
                  </li>
                  <li className="text-xs font-semibold flex items-center gap-2">
                    <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
                    Integrated JavaScript, GIT, SASS, and React JS technologies.
                  </li>
                  <li className="text-xs font-semibold flex items-center gap-2">
                    <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
                    Collaborated closely with the team to deliver high-quality
                    solutions.
                  </li>
                  <li className="text-xs font-semibold flex items-center gap-2">
                    <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
                    Reviewed and merged pull requests, mentored team members.
                  </li>
                </ul>
              </div>
              <div className="cast-bbb-veolia">
                <div className="relative mb-2 mt-6 font-bold inline-block">
                  <p className="text-third font-bold z-10 text-base w-fit relative">
                    CAST, British Business Bank, Veolia
                  </p>
                  <span className="absolute inset-x-0 bottom-1 h-2 w-full bg-red z-0 opacity-30"></span>
                </div>
                <ul className="flex flex-col gap-1 opacity-90">
                  <li className="text-xs font-semibold flex items-center gap-2">
                    <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
                    Crafted responsive components and resolved bugs as Frontend
                    Engineer.
                  </li>
                  <li className="text-xs font-semibold flex items-center gap-2">
                    <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
                    Implemented HTML, CSS, JavaScript, GIT, SASS, and React JS
                    technologies.
                  </li>
                  <li className="text-xs font-semibold flex items-center gap-2">
                    <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
                    Fostered collaboration within the team for delivering
                    user-friendly solutions.
                  </li>
                  <li className="text-xs font-semibold flex items-center gap-2">
                    <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
                    Collaborated closely with the team to deliver high-quality
                    solutions.
                  </li>
                  <li className="text-xs font-semibold flex items-center gap-2">
                    <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
                    Contributed to enhancement and maintenance of frontend
                    codebase.
                  </li>
                </ul>
              </div>
              <div className="NMDB">
                <div className="relative mb-2 mt-6 font-bold inline-block">
                  <p className="text-third font-bold z-10 text-base w-fit relative">
                    NMDB
                  </p>
                  <span className="absolute inset-x-0 bottom-1 h-2 w-full bg-red z-0 opacity-30"></span>
                </div>
                <ul className="flex flex-col gap-1 opacity-90">
                  <li className="text-xs font-semibold flex items-center gap-2">
                    <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
                    Utilized Next.js and Tailwind CSS for a movie database
                    project.
                  </li>
                  <li className="text-xs font-semibold flex items-center gap-2">
                    <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
                    Created a sleek and responsive user interface with Next.js'
                    server-side rendering.
                  </li>
                  <li className="text-xs font-semibold flex items-center gap-2">
                    <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
                    Integrated The Movie Database (TMDb) API for fetching movie
                    data.
                  </li>
                  <li className="text-xs font-semibold flex items-center gap-2">
                    <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
                    Designed intuitive user experience using Tailwind CSS.
                  </li>
                </ul>
              </div>
            </div>
            <div className="oneseven max-w-[1280px]  ">
              <div className="flex items-center justify-between mt-6">
                <div className="flex w-full items-center justify-start gap-2 ">
                  <h3 className="company text-primary text-base font-bold">
                    OneSeven Technologies
                  </h3>
                  |
                  <h4 className="role font-semibold text-black text-xs">
                    Founder & CEO
                  </h4>
                  <span className="h-[2px] rounded-full bg-black flex-grow"></span>
                </div>
                <p className="duration text-xs ml-2 text-black font-semibold whitespace-nowrap">
                  Nov 2019 - Present
                </p>
              </div>

              <div className="oneseven">
                <div className="relative mb-2 mt-2 font-bold inline-block">
                  <p className="text-third font-bold flex items-center gap-1 z-10 text-base w-fit relative">
                    what i did:
                  </p>
                  <span className="absolute inset-x-0 bottom-1 h-2 w-full bg-red z-0 opacity-30"></span>
                </div>
                <ul className="flex flex-col gap-1 opacity-90">
                  <li className="text-xs font-semibold leading-5 opacity-90 flex items-center gap-2">
                    <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
                    While pursuing my master's degree, I gained valuable
                    experience working as a developer and partner with esteemed
                    companies such as BaylinMedia USA, Phandroid USA, and IIT
                    Roorkee, among others, both nationally and internationally.
                    Presently.
                  </li>
                  <li className="text-xs font-semibold leading-5 opacity-90 flex items-center gap-2">
                    <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
                    I am actively managing ongoing freelance projects,
                    overseeing various client requirements and tasks. This
                    hands-on involvement has equipped me with comprehensive
                    skills in managing both the backend and frontend aspects of
                    websites, with notable projects including fossnoobs.com,
                    ifedtrust.com, mehandibysana.com, thekunafah.com, and more.
                  </li>
                  <li className="text-xs font-semibold leading-5 opacity-90 flex items-center gap-2">
                    <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
                    My journey led me to establish OneSeven Technologies, a
                    pioneering agency renowned for its expertise in digital
                    integration and innovation. At OneSeven, we specialize in
                    creating digital synergy by seamlessly integrating
                    technologies. Our proficiency spans across React,
                    JavaScript, Next.js, Drupal, and WordPress, enabling us to
                    deliver exceptional solutions tailored to our clients'
                    needs.
                  </li>
                  <li className="text-xs font-semibold leading-5 opacity-90 flex items-center gap-2">
                    <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
                    During my tenure at OneSeven Technologies, I took charge of
                    launching and overseeing various blogs, websites, and
                    projects, most notably FossNoobs Media and HackingSaga
                    Media. Through effective leadership, I cultivated successful
                    partnerships with esteemed brands such as ExpressVPN,
                    NordVPN, IIT Roorkee, AtlasVPS, Surfshark, and others.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
