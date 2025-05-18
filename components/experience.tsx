import Link from 'next/link';
export default function Experience() {
  return (
    <div className="experience">
      <div className="relative my-6 font-bold inline-block">
        <p className="text-primary font-bold flex items-center gap-1 z-10 text-2xl w-fit relative">
          Experience:
        </p>
        <span className="absolute inset-x-0 bottom-1 h-2 w-full bg-secondary z-0 opacity-80"></span>
      </div>

      <div className="hcltech max-w-[1440px]">
        <div className="flex xl:flex-row flex-col xl:items-center xl:justify-between">
          <div className="flex flex-col justify-between xl:flex-row w-full xl:items-center xl:justify-start gap-2">
            <h3 className="company text-primary text-xl font-bold whitespace-nowrap">
              HCLTech
            </h3>

            <span className="hidden xl:block">|</span>
            <h4 className="role font-semibold text-third text-base">
              Senior Software Engineer
            </h4>
            <span className="h-[2px] xl:block hidden rounded-full bg-third flex-grow"></span>
          </div>
          <p className="duration text-xs mt-2 xl:mt-0 xl:ml-2 text-third font-semibold whitespace-nowrap">
            Dec 2024 - Present
          </p>
        </div>
        <div className="millboard">
          <div className="relative mb-2 mt-6 font-bold inline-block">
            <p className="text-third font-bold flex z-10 text-base w-fit relative">
              Novartis
            </p>
            <span className="absolute inset-x-0 bottom-1 h-2 w-full bg-red z-0 opacity-30"></span>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="text-xs font-semibold flex items-center gap-2 leading-5">
              <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
              Spearheaded the development of scalable frontend architecture as a
              Senior Software Engineer.
            </li>
            <li className="text-xs font-semibold flex items-center gap-2 leading-5">
              <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
              Specialized in building robust, accessible, and responsive
              components using React, Storybook.
            </li>
            <li className="text-xs font-semibold flex items-center gap-2 leading-5">
              <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
              Streamlined performance optimization by implementing advanced
              state management and reducing code redundancy.
            </li>
            <li className="text-xs font-semibold flex items-center gap-2 leading-5">
              <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
              Collaborated with cross-functional teams, ensuring alignment with
              client objectives and regulatory requirements.
            </li>
            <li className="text-xs font-semibold flex items-center gap-2 leading-5">
              <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
              Conducted code reviews, mentored junior developers, and
              established best practices for clean and efficient coding.
            </li>
            <li className="text-xs font-semibold flex items-center gap-2 leading-5">
              <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
              Utilized a tech stack including JavaScript (ES6+), TypeScript,
              SASS, and Git for efficient development cycles.
            </li>
          </ul>
        </div>
      </div>

      <div className="axelerant max-w-[1440px] my-8">
        <div className="flex xl:flex-row flex-col xl:items-center xl:justify-between">
          <div className="flex flex-col justify-between xl:flex-row w-full xl:items-center xl:justify-start gap-2">
            <h3 className="company text-primary text-xl font-bold whitespace-nowrap">
              Axelerant
            </h3>

            <span className="hidden xl:block">|</span>
            <h4 className="role font-semibold text-third text-base">
              Frontend Software Engineer (L3)
            </h4>
            <span className="h-[2px] xl:block hidden rounded-full bg-third flex-grow"></span>
          </div>
          <p className="duration text-xs mt-2 xl:mt-0 xl:ml-2 text-third font-semibold whitespace-nowrap">
            Nov 2021 - Nov 2024
          </p>
        </div>
        <div className="millboard">
          <div className="relative mb-2 mt-6 font-bold inline-block">
            <p className="text-third font-bold flex z-10 text-base w-fit relative">
              Millboard
            </p>
            <span className="absolute inset-x-0 bottom-1 h-2 w-full bg-red z-0 opacity-30"></span>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="text-xs font-semibold flex items-center gap-2 leading-5">
              <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
              Elevated codebase as Frontend Engineer by making significant
              contributions.
            </li>
            <li className="text-xs font-semibold flex items-center gap-2 leading-5">
              <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
              Specialized in creating responsive components and resolving bugs.
            </li>
            <li className="text-xs font-semibold flex items-center gap-2 leading-5">
              <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
              Integrated JavaScript, GIT, SASS, and React JS technologies.
            </li>
            <li className="text-xs font-semibold flex items-center gap-2 leading-5">
              <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
              Collaborated closely with the team to deliver high-quality
              solutions.
            </li>
            <li className="text-xs font-semibold flex items-center gap-2 leading-5">
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
          <ul className="flex flex-col gap-2">
            <li className="text-xs font-semibold flex items-center gap-2 leading-5">
              <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
              Crafted responsive components and resolved bugs as Frontend
              Engineer.
            </li>
            <li className="text-xs font-semibold flex items-center gap-2 leading-5">
              <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
              Implemented HTML, CSS, JavaScript, GIT, SASS, and React JS
              technologies.
            </li>
            <li className="text-xs font-semibold flex items-center gap-2 leading-5">
              <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
              Fostered collaboration within the team for delivering
              user-friendly solutions.
            </li>
            <li className="text-xs font-semibold flex items-center gap-2 leading-5">
              <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
              Collaborated closely with the team to deliver high-quality
              solutions.
            </li>
            <li className="text-xs font-semibold flex items-center gap-2 leading-5">
              <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
              Contributed to enhancement and maintenance of frontend codebase.
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
          <ul className="flex flex-col gap-2">
            <li className="text-xs font-semibold flex items-center gap-2 leading-5">
              <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
              Utilized Next.js and Tailwind CSS for a movie database project.
            </li>
            <li className="text-xs font-semibold flex items-center gap-2 leading-5">
              <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
              Created a sleek and responsive user interface with Next.js'
              server-side rendering.
            </li>
            <li className="text-xs font-semibold flex items-center gap-2 leading-5">
              <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
              Integrated The Movie Database (TMDb) API for fetching movie data.
            </li>
            <li className="text-xs font-semibold flex items-center gap-2 leading-5">
              <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
              Designed intuitive user experience using Tailwind CSS.
            </li>
          </ul>
        </div>
      </div>
      <div className="StackNothing max-w-[1440px]  ">
        <div className="flex xl:flex-row flex-col xl:items-center xl:justify-between mt-6 xl:mt-8">
          <div className="flex flex-col justify-between xl:flex-row w-full xl:items-center xl:justify-start gap-2">
            <h3 className="company text-primary text-xl font-bold whitespace-nowrap">
              StackNothing
            </h3>
            <span className="hidden xl:block">|</span>
            <h4 className="role font-semibold text-third text-base">
              Founder & CEO
            </h4>
            <span className="h-[2px] xl:block hidden rounded-full bg-third flex-grow"></span>
          </div>
          <p className="duration text-xs mt-2 xl:mt-0 xl:ml-2 text-third font-semibold whitespace-nowrap">
            Aug 2020 - Nov 2021
          </p>
        </div>

        <div className="StackNothing">
          <div className="relative mb-2 mt-6 font-bold inline-block">
            <p className="text-third font-bold flex items-center gap-1 z-10 text-base w-fit relative">
              what i did:
            </p>
            <span className="absolute inset-x-0 bottom-1 h-2 w-full bg-red z-0 opacity-30"></span>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="text-xs font-semibold flex items-center gap-2 leading-5">
              <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
              While pursuing my master's degree, I gained valuable experience
              working as a developer and partner with esteemed companies such as
              BaylinMedia USA, Phandroid USA, and IIT Roorkee, among others,
              both nationally and internationally.
            </li>
            <li className="text-xs font-semibold flex items-center gap-2 leading-5 ">
              <span className="min-w-[5px] min-h-[5px]  inline-block bg-red rotate-45"></span>
              I am actively managing ongoing freelance projects, overseeing
              various client requirements and tasks. This hands-on involvement
              has equipped me with comprehensive skills in managing both the
              backend and frontend aspects of websites, with notable projects
              including fossnoobs.com, ifedtrust.com, mehandibysana.com,
              thekunafah.com, and more.
            </li>
            <li className="text-xs font-semibold flex items-center gap-2 leading-5">
              <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
              My journey led me to establish StackNothing Technologies, a
              pioneering agency renowned for its expertise in digital
              integration and innovation. At StackNothing, we specialize in
              creating digital synergy by seamlessly integrating technologies.
              Our proficiency spans across React, JavaScript, Next.js, Drupal,
              and WordPress, enabling us to deliver exceptional solutions
              tailored to our clients' needs.
            </li>
            <li className="text-xs font-semibold flex items-center gap-2 leading-5">
              <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
              During my tenure at StackNothing Technologies, I took charge of
              launching and overseeing various blogs, websites, and projects,
              most notably FossNoobs Media and HackingSaga Media. Through
              effective leadership, I cultivated successful partnerships with
              esteemed brands such as ExpressVPN, NordVPN, IIT Roorkee,
              AtlasVPS, Surfshark, and others.
            </li>
          </ul>
        </div>
      </div>
      <div className="Dell max-w-[1440px]  ">
        <div className="flex xl:flex-row flex-col xl:items-center xl:justify-between mt-6 xl:mt-8">
          <div className="flex flex-col justify-between xl:flex-row w-full xl:items-center xl:justify-start gap-2">
            <h3 className="company text-primary text-xl font-bold whitespace-nowrap">
              Dell
            </h3>
            <span className="hidden xl:block">|</span>
            <h4 className="role font-semibold text-third text-base">
              Technical Support Engineer
            </h4>
            <span className="h-[2px] xl:block hidden rounded-full bg-third flex-grow"></span>
          </div>
          <p className="duration text-xs mt-2 xl:mt-0 xl:ml-2 text-third font-semibold whitespace-nowrap">
            Mar 2020 - Aug 2020
          </p>
        </div>

        <div className="StackNothing">
          <div className="relative mb-2 mt-6 font-bold inline-block">
            <p className="text-third font-bold flex items-center gap-1 z-10 text-base w-fit relative">
              what i did:
            </p>
            <span className="absolute inset-x-0 bottom-1 h-2 w-full bg-red z-0 opacity-30"></span>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="text-xs font-semibold flex items-center gap-2 leading-5">
              <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
              Provided end-to-end technical support to clients, troubleshooting
              hardware, software, and network issues to ensure minimal downtime.
            </li>
            <li className="text-xs font-semibold flex items-center gap-2 leading-5">
              <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
              Assisted customers with system diagnostics, installations, and
              updates, enhancing their overall user experience and system
              performance.
            </li>
            <li className="text-xs font-semibold flex items-center gap-2 leading-5">
              <span className="min-w-[5px] min-h-[5px] inline-block bg-red rotate-45"></span>
              Documented solutions and escalated complex cases to senior
              engineers, contributing to improved knowledge base and team
              efficiency.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
