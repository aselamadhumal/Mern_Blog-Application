import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const path = useLocation().pathname;

  return (
    <Navbar className="border-b-2">
      {/* Brand Section */}
      <Navbar.Brand>
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            Asela
          </span>
          Blog
        </Link>
      </Navbar.Brand>

      {/* Toggle Button for Mobile */}
      <Navbar.Toggle />

      {/* Search, Theme, and Sign-In Section */}
      <div className="flex items-center gap-2 order-2">
        {/* Search Input (Hidden on Mobile) */}
        <form className="hidden lg:block relative">
          <TextInput type="text" placeholder="Search..." className="pr-10" />
          <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </form>

        {/* Small Screen Search Button */}
        <Button className="w-12 h-10 lg:hidden" color="gray" pill>
          <AiOutlineSearch />
        </Button>

        {/* Theme Toggle Button */}
        <Button className="w-12 h-10 hidden sm:block" color="gray" pill>
          <FaMoon />
        </Button>

        {/* Sign-In Button */}
        <Link to="/sign-in">
          <Button gradientDuoTone="purpleToBlue" outline>
            Sign In
          </Button>
        </Link>
      </div>

      {/* Collapsible Links */}
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as="div">
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as="div">
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as="div">
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
