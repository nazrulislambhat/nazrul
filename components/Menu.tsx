import Link from 'next/link';
function Menu() {
  return (
    <nav className="">
      <Link href="#hero" className="">
        Home
      </Link>
      <Link href="#about" className="">
        About
      </Link>
      <Link href="#skills" className="">
        Skills
      </Link>
      <Link href="#projects" className="">
        Projects
      </Link>
      <Link href="#contact" className="">
        Contact
      </Link>
    </nav>
  );
}

export default Menu;
