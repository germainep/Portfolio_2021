import Navlink from "~/components/Navigation/Navlink";

function Navbar() {
  return (
    <>
      <nav className="flex justify-end align-center mr-4 h-24 py-9">
        <Navlink url="/" name="Home" />
        <Navlink url="/portfolio" name="Projects" />
        <Navlink url="/blog" name="Blog" />
      </nav>
    </>
  );
}

export default Navbar;
