import { Link } from "@remix-run/react";
import React from "react";

function Navigation() {
  return (
    <>
      <nav className="flex justify-end mr-4 py-5">
        <Link
          to="/"
          className="text-lg text-primary font-medium hover:text-secondary active:underline"
        >
          Home
        </Link>
        <Link
          to="/portfolio"
          className="mx-4 text-lg text-primary font-medium  hover:text-secondary"
        >
          Projects
        </Link>
        <Link
          to="/blog"
          className="text-primary text-lg font-medium hover:text-secondary mr-4"
        >
          Blog
        </Link>
      </nav>
    </>
  );
}

export default Navigation;
