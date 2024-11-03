import Link from 'next/link';
function Hero() {
  return (
    <div className="relative  text-white px-8 xl:mb-16 xl:px-64 pt-32 pb-16 boxed bg-primary">
      <div className="relative">
        <h1 className="heading text-xl xl:text-5xl pb-8 xl:pb-12 selection:bg-secondary selection:text-primary">
          Software Engineer and sometimes writer. My daily routine consists of
          (but not limited to) drinking coffee, coding, writing, overcoming
          boredom 🚀
        </h1>
        <span className="border-b-1 border-secondary">
          Living in Namma Bengaluru
        </span>
        <p className="subheading-one selection:bg-secondary selection:text-primary mt-6 mb-12 uppercase tracking-wide text-xs">
          Your trusted partner for strategy, design, development.
        </p>
        <Link
          href="https://cal.com/nazrul/"
          target="_blank"
          className="text-primary border-1 text-xs px-6 py-4 font-semibold border-secondary bg-secondary rounded-full hover:border-secondary hover:bg-transparent hover:text-secondary"
        >
          Schedule a call 📅
        </Link>
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
