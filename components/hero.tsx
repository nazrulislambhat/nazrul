import Link from 'next/link';
import { SiMinutemailer, SiGooglecalendar } from 'react-icons/si';
import { BsRocketTakeoff } from 'react-icons/bs';

function Hero() {
  return (
    <div className="relative text-white px-8 xl:mb-16 pt-36 pb-16 bg-primary">
      <div className="relative boxed">
        <h1 className="heading text-xl xl:text-5xl pb-8 xl:pb-10 selection:bg-secondary selection:text-primary relative ">
          Full Stack Engineer,
          <span className="bg-secondary px-2  xl:px-4 text-primary  selection:bg-red selection:text-white">
            helping brands build their online presence.
          </span>
          My daily routine consists of (but not limited to) drinking coffee,
          coding, writing, overcoming boredom{' '}
          <BsRocketTakeoff className="inline" />
        </h1>
        <span className="text-sm">Living in Namma Bengaluru ( ಬೆಂಗಳೂರು )</span>
        <p className="subheading-one boxed selection:bg-secondary selection:text-primary mt-6 mb-12 uppercase tracking-wide text-xs">
          Your trusted partner for strategy, design, development.
        </p>
        <div className="flex items-center gap-8">
          <p className="flex items-center gap-2 text-secondary">
            <SiMinutemailer />
            <Link
              href="mailto:nazrul@nazrulislam.dev"
              target="_blank"
              className="link w-fit text-xs font-semibold text-secondary"
            >
              Write an Email
            </Link>
          </p>
          <p className="flex items-center gap-2 text-secondary">
            <SiGooglecalendar />
            <Link
              href="https://cal.com/nazrul/"
              target="_blank"
              className="link w-fit text-xs font-semibold text-secondary"
            >
              Schedule a call
            </Link>
          </p>
        </div>
      </div>
      {/* <p className="about selection:bg-secondary text-sm selection:text-primary xl:text-[3rem] xl:leading-[3rem] xl:pt-52 xl:mb-32">
        Nazrul Islam, an enthusiastic software developer, excels in transforming
        lines of code into digital marvels. Armed with a computer science{' '}
        <span className="border-b-2 border-secondary">Masters Degree</span> and
        a talent for inventive problem-solving, Nazrul Islam is committed to
        enhancing the digital landscape. Beyond coding, Nazrul Islam embraces
        the beauty of nature, enjoying outdoor adventures. This multifaceted
        approach allows Nazrul Islam to find harmony not only in software
        development but also in life's diverse experiences.
      </p> */}
    </div>
  );
}

export default Hero;
