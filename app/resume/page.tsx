import {
  FileDown,
  Linkedin,
  Github,
  PanelsTopLeft,
  Mail,
  MapPinCheckInside,
  House,
} from 'lucide-react';

import { Inter_Tight, Archivo, Nunito, Comfortaa } from 'next/font/google';
import Projects from '@/components/projects';
import Experience from '@/components/experience';
import Link from 'next/link';
import Rating from '@/components/rating';

const archivo = Archivo({ subsets: ['latin'] });
export default function Resume() {
  return (
    <div className="bg-background xl:pb-0 pb-8 xl:m-8 overflow-x-hidden">
      <div className=" flex flex-col xl:flex-row w-screen justify-start boxed ">
        <div className="pl-8 xl:pl-12 2xl:pl-0 xl:border-r-4 xl:pr-8 xl:border-white xl:py-24 xl:w-1/2 ">
          <div className="pt-8 pb-8 xl:pb-12 xl:pt-0 flex flex-col gap-1">
            <div className="items-center gap-2 text-primary inline-flex relative">
              <House className="w-4 h-4" />
              <Link
                href="https://nazrulislam.dev"
                className="text-primary font-semibold link-primary flex items-center gap-1 z-10 text-xl w-fit relative"
              >
                nazrulislam.dev
              </Link>
              <span className="absolute inset-x-0  bottom-1 left-6 h-2 w-[110px] bg-secondary z-0 opacity-80"></span>
            </div>
            <h5 className="font-semibold text-xs flex my-4 items-center gap-1 text-black">
              <MapPinCheckInside className="w-4 h-4" />
              Bengaluru, Karnataka
            </h5>
            <div className="flex items-start flex-col justify-start gap-2">
              <p className="flex items-center gap-2 text-primary">
                <Mail className="w-4 h-4" />
                <Link
                  href="mailto:nazrul@nazrulislam.dev"
                  target="_blank"
                  className="link-primary w-fit text-[10px] font-semibold text-primary"
                >
                  nazrul@nazrulislam.dev
                </Link>
              </p>
              <p className="flex items-center gap-2 text-primary">
                <Mail className="w-4 h-4" />
                <Link
                  href="mailto:nazrul@stacknothing.com"
                  target="_blank"
                  className="link-primary w-fit text-[10px] font-semibold text-primary"
                >
                  nazrul@stacknothing.com
                </Link>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8 mr-8 xl:mr-0">
            <div className="core">
              <div className="relative mb-4 font-bold inline-block">
                <p className="text-primary font-bold flex items-center gap-1 z-10 text-base w-fit relative">
                  Core:
                </p>
                <span className="absolute inset-x-0  bottom-1 h-2 w-full bg-secondary z-0 opacity-80"></span>
              </div>
              <ul className="text-xs font-semibold text-black opacity-80 flex flex-col gap-[4px]">
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-third rotate-45"></span>
                  JavaScript
                  <Rating
                    filled={5}
                    filledColor="text-third fill-third"
                    unfilledColor="text-third fill-none"
                  />
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-third rotate-45"></span>
                  React JS
                  <Rating
                    filled={4}
                    filledColor="text-third fill-third"
                    unfilledColor="text-third fill-none"
                  />
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-third rotate-45"></span>
                  Next JS
                  <Rating
                    filled={3}
                    filledColor="text-third fill-third"
                    unfilledColor="text-third fill-none"
                  />
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-third rotate-45"></span>
                  TypeScript
                  <Rating
                    filled={3}
                    filledColor="text-third fill-third"
                    unfilledColor="text-third fill-none"
                  />
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-third rotate-45"></span>
                  GraphQL
                  <Rating
                    filled={3}
                    filledColor="text-third fill-third"
                    unfilledColor="text-third fill-none"
                  />
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-third rotate-45"></span>
                  Redux
                  <Rating
                    filled={3}
                    filledColor="text-third fill-third"
                    unfilledColor="text-third fill-none"
                  />
                </li>

                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-third rotate-45"></span>
                  React Testing Library
                  <Rating
                    filled={3}
                    filledColor="text-third fill-third"
                    unfilledColor="text-third fill-none"
                  />
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-third rotate-45"></span>
                  Zustand
                  <Rating
                    filled={2}
                    filledColor="text-third fill-third"
                    unfilledColor="text-third fill-none"
                  />
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-third rotate-45"></span>
                  Git
                  <Rating
                    filled={5}
                    filledColor="text-third fill-third"
                    unfilledColor="text-third fill-none"
                  />
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-third rotate-45"></span>
                  CSS/SaSS
                  <Rating
                    filled={5}
                    filledColor="text-third fill-third"
                    unfilledColor="text-third fill-none"
                  />
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-third rotate-45"></span>
                  TailwindCSS
                  <Rating
                    filled={5}
                    filledColor="text-third fill-third"
                    unfilledColor="text-third fill-none"
                  />
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-third rotate-45"></span>
                  Styled Components
                  <Rating
                    filled={5}
                    filledColor="text-third fill-third"
                    unfilledColor="text-third fill-none"
                  />
                </li>
              </ul>
            </div>
            <div className="other">
              <div className="relative mb-4 font-bold inline-block">
                <p className="text-primary font-bold flex items-center gap-1 z-10 text-base w-fit relative">
                  Other:
                </p>
                <span className="absolute inset-x-0  bottom-1 h-2 w-full bg-secondary z-0 opacity-80"></span>
              </div>
              <ul className="text-xs font-semibold text-black opacity-80 flex flex-col gap-[4px]">
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-primary rotate-45"></span>
                  Vite
                  <Rating
                    filled={4}
                    filledColor="text-primary fill-primary"
                    unfilledColor="text-primary fill-none"
                  />
                </li>

                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-primary rotate-45"></span>
                  Vercel
                  <Rating
                    filled={4}
                    filledColor="text-primary fill-primary"
                    unfilledColor="text-primary fill-none"
                  />
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-primary rotate-45"></span>
                  Docker
                  <Rating
                    filled={2}
                    filledColor="text-primary fill-primary"
                    unfilledColor="text-primary fill-none"
                  />
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-primary rotate-45"></span>
                  Heroku
                  <Rating
                    filled={2}
                    filledColor="text-primary fill-primary"
                    unfilledColor="text-primary fill-none"
                  />
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-primary rotate-45"></span>
                  Webpack
                  <Rating
                    filled={3}
                    filledColor="text-primary fill-primary"
                    unfilledColor="text-primary fill-none"
                  />
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-primary rotate-45"></span>
                  LessCSS
                  <Rating
                    filled={5}
                    filledColor="text-primary fill-primary"
                    unfilledColor="text-primary fill-none"
                  />
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-primary rotate-45"></span>
                  Bootstrap
                  <Rating
                    filled={5}
                    filledColor="text-primary fill-primary"
                    unfilledColor="text-primary fill-none"
                  />
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-primary rotate-45"></span>
                  NextUI
                  <Rating
                    filled={5}
                    filledColor="text-primary fill-primary"
                    unfilledColor="text-primary fill-none"
                  />
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-primary rotate-45"></span>
                  MUI
                  <Rating
                    filled={5}
                    filledColor="text-primary fill-primary"
                    unfilledColor="text-primary fill-none"
                  />
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-primary rotate-45"></span>
                  Gulp
                  <Rating
                    filled={3}
                    filledColor="text-primary fill-primary"
                    unfilledColor="text-primary fill-none"
                  />
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-primary rotate-45"></span>
                  Babel
                  <Rating
                    filled={3}
                    filledColor="text-primary fill-primary"
                    unfilledColor="text-primary fill-none"
                  />
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-primary rotate-45"></span>
                  Drupal
                  <Rating
                    filled={5}
                    filledColor="text-primary fill-primary"
                    unfilledColor="text-primary fill-none"
                  />
                </li>
                <li className="flex items-center gap-2">
                  <span className="min-w-[5px] min-h-[5px] inline-block bg-primary rotate-45"></span>
                  WordPress
                  <Rating
                    filled={5}
                    filledColor="text-primary fill-primary"
                    unfilledColor="text-primary fill-none"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="about relative pl-8 mr-8 xl:mr-24 xl:py-24 2xl:mr-0 overflow-hidden">
          <div className="download py-8 xl:py-12 xl:absolute xl:top-6 xl:right-0 flex gap-2 items-center ">
            <Link
              href="https://drive.google.com/file/d/15-5JnG6SAuE--pMtUHeR5TQrsQSxIClF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative group inline-block">
                <FileDown className="text-primary cursor-pointer  hover:scale-105" />
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max bg-primary text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  download my resume
                </div>
              </div>
            </Link>
            <Link
              href="https://linkedin.com/in/nazrulislambhat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative group inline-block">
                <Linkedin className="text-[#0077B5] cursor-pointer hover:scale-105" />
              </div>
            </Link>
            <Link
              href="https://github.com/nazrulislambhat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative group inline-block">
                <Github className="hover:scale-105" />
              </div>
            </Link>
          </div>
          <div className="about-intro border-b-4 border-white ">
            <h1
              className={`${archivo.className} text-primary font-semibold text-5xl xl:text-8xl pb-8 tracking-wide flex items-center`}
            >
              Nazrul Islam
            </h1>
            <div className="flex xl:gap-4 gap-2 xl:flex-row flex-col mb-6 xl:mb-12 w-fit ">
              <p className="text-xs xl:text-xl text-black font-semibold tracking-wide flex flex-row xl:flex-row xl:items-center gap-2">
                Senior Software Engineer -
                <Link
                  href="https://hcltech.com"
                  className="text-xs text-primary font-bold w-fit link-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HCLTech
                </Link>
              </p>
              <span className="xl:block hidden text-black">|</span>
              <p className="text-xs xl:text-xl text-black font-semibold tracking-wide flex flex-row xl:flex-row xl:items-center gap-2">
                Founder & CEO -
                <Link
                  href="https://stacknothing.com"
                  className="text-xs text-primary font-bold  w-fit link-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  StackNothing
                </Link>
              </p>
            </div>
            <p className="text-black opacity-90 text-sm pb-8 leading-6 xl:leading-7 xl:w-auto">
              <span className="font-bold">Experienced Software Engineer</span>{' '}
              with 5+ years of experience in front-end technologies,
              particularly within the{' '}
              <span className="font-bold">JS(ES6+)</span> ecosystem encompassing{' '}
              <span className="font-bold">React JS</span> and{' '}
              <span className="font-bold">Next JS</span>, I am committed to
              harnessing technology for complex problem-solving. My track record
              showcases a consistent ability to exceed expectations and deliver
              exceptional outcomes. I have a proven ability to quickly grasp and
              master new technologies, ensuring I stay ahead of the curve.
            </p>
          </div>
          <Experience />
          <div className="projects">
            <div className="relative mt-6 mb-4 font-bold inline-block">
              <p className="text-primary font-bold flex items-center gap-1 z-10 text-2xl w-fit relative">
                Projects:
              </p>
              <span className="absolute inset-x-0 bottom-1 h-2 w-full bg-secondary z-0 opacity-80"></span>
            </div>
            <div className="opacity-80">
              <p className="text-xs font-semibold">
                Over the years, I've engaged in numerous personal and
                professional projects, with some documented on my{' '}
                <Link
                  href="https://github.com/nazrulislambhat"
                  className="hover:link-primary font-bold pb-1 text-xs hover:opacity-100  text-primary link-primary hover:scale-105 w-fit opacity-100"
                >
                  Github
                </Link>{' '}
                profile and others showcased on my website at
                <Link
                  href="https://nazrulislam.dev/#projects"
                  className="hover:link-primary font-bold pb-1 text-xs hover:opacity-100 mx-1 text-primary link-primary hover:scale-105 w-fit opacity-100"
                >
                  work
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
