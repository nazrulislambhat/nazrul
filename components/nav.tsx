import Link from 'next/link';
export default function NavCpt() {
  return (
    <nav className="">
      <ul className="flex">
        <li>
          <Link href="#" className="active hover:opacity-100 hover:text-orange">
            home.
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="opacity-50 hover:opacity-100 hover:text-orange"
          >
            works.
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="opacity-50 hover:opacity-100 hover:text-orange"
          >
            contact.
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="opacity-50 hover:opacity-100 hover:text-orange"
          >
            about.
          </Link>
        </li>
      </ul>
    </nav>
  );
}
