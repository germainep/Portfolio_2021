import { Link } from "@remix-run/react";

function Navbar() {
  return (
    <>
      <nav className="flex justify-end align-center mr-4 h-24 py-9">
        <Link
          to="/"
          className="text-2xl text-primary font-medium hover:text-secondary active:underline"
        >
          Home
        </Link>
        <Link
          to="/portfolio"
          className="mx-4 text-2xl text-primary font-medium  hover:text-secondary"
        >
          Projects
        </Link>
        <Link
          to="/blog"
          className="text-primary text-2xl font-medium hover:text-secondary mr-4"
        >
          Blog
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
