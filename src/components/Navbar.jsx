import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Change background based on route
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage ? "bg-gray-800 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
        <NavLink to="/" className="cursor-pointer flex items-center gap-4">
          <img
            src={assets.logo}
            alt="Logo"
            className="w-16 h-16 object-cover rounded-full border-2 border-x-blue-950"
          />
          <p className="cursor-pointer hover:text-gray-400 text-lg font-semibold text-white">
            High Rise Engineering
          </p>
        </NavLink>

        <ul className="hidden md:flex gap-7 text-white">
          <NavLink to="/">
            <p className="cursor-pointer hover:text-gray-400">Home</p>
          </NavLink>
          <NavLink to="/about">
            <p className="cursor-pointer hover:text-gray-400">About</p>
          </NavLink>
          <NavLink to="/projects">
            <p className="cursor-pointer hover:text-gray-400">Projects</p>
          </NavLink>
          <NavLink to="/services">
            <p className="cursor-pointer hover:text-gray-400">Services</p>
          </NavLink>
          <NavLink to="/contact">
            <p className="cursor-pointer hover:text-gray-400">Contact us</p>
          </NavLink>
        </ul>

        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt="Menu"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        } right-0 top-0 bottom-0 overflow-hidden bg-gray-800 transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6"
            alt="Close Menu"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium text-white">
          <NavLink
            to="/"
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block"
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block"
          >
            Projects
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block"
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block"
          >
            Contact
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;