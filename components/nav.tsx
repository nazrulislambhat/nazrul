import Link from 'next/link';
export default function Nav() {
  return (
    <nav className="bg-cool">
      <ul className="flex">
        <li>
          <Link
            href="#hero"
            className="active hover:opacity-100 hover:text-orange"
          >
            home.
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            className="opacity-50 hover:opacity-100 hover:text-orange"
          >
            about.
          </Link>
        </li>
        <li>
          <Link
            href="#skills"
            className="opacity-50 hover:opacity-100 hover:text-orange"
          >
            skills.
          </Link>
        </li>
        <li>
          <Link
            href="#projects"
            className="opacity-50 hover:opacity-100 hover:text-orange"
          >
            projects.
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="opacity-50 hover:opacity-100 hover:text-orange"
          >
            contact.
          </Link>
        </li>
      </ul>
    </nav>
  );
}
