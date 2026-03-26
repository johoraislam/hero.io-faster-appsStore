import React from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import { TiHomeOutline } from "react-icons/ti";
import { FaAppStore, FaGithub } from "react-icons/fa";
import { MdInstallDesktop } from "react-icons/md";

const Header = () => {
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `inline-flex justify-center items-center gap-1 border-b-2 transition-all duration-300 p-2 mx-3 ${
            isActive
              ? "text-[#632EE3] border-[#9F62F2] font-semibold"
              : "text-[#00000090] border-transparent hover:border-[#9F62F2]"
          }`
        }
      >
        <TiHomeOutline /> Home
      </NavLink>

      <NavLink
        to="/apps"
        className={({ isActive }) =>
          `inline-flex justify-center items-center gap-1 border-b-2 transition-all duration-300 p-2 mx-3 ${
            isActive
              ? "text-[#632EE3] border-[#9F62F2] font-semibold"
              : "text-[#00000090] border-transparent hover:border-[#9F62F2]"
          }`
        }
      >
        <FaAppStore /> Apps
      </NavLink>

      <NavLink
        to="/installation"
        className={({ isActive }) =>
          `inline-flex justify-center items-center gap-1 border-b-2 transition-all duration-300 p-2 mx-3 ${
            isActive
              ? "text-[#632EE3] border-[#9F62F2] font-semibold"
              : "text-[#00000090] border-transparent hover:border-[#9F62F2]"
          }`
        }
      >
        <MdInstallDesktop /> Installation
      </NavLink>
    </>
  );
  return (
    <header className="bg-[#ffffff] sticky top-0 z-50 shadow-md py-2.5">
      <div className="navbar max-w-7xl mx-auto p-0">
        <div className="navbar-start mx-4 lg:mx-0">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 bg-transparent border-none shadow-none hover:scale-105 transition-transform duration-300"
          >
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
              HERO.IO
            </span>
          </Link>
        </div>

        {/* DesktopNav */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* NavLinks */}
            {navLinks}
          </ul>
        </div>

        {/* MobileNav */}
        <div className="dropdown navbar-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu top-10 menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 px-2 py-5 shadow text-center"
          >
            {/* NavLinks */}
            {navLinks}

            {/* Button */}
            <div className="lg:ml-4 mt-2 lg:mt-0">
              <Link
                to="https://github.com/AsifHossain22/hero.io-app-store"
                target="_blank"
                className="inline-flex gap-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-4 py-3 rounded-sm text-white font-semibold hover:opacity-90 transition-all duration-300"
              >
                <FaGithub className="text-2xl" /> Contribute
              </Link>
            </div>
          </ul>
        </div>

        {/* Button */}
        <div className="navbar-end lg:ml-4 mt-2 lg:mt-0 hidden lg:flex">
          <Link
            to="https://github.com/AsifHossain22/hero.io-app-store"
            target="_blank"
            className="inline-flex gap-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-4 py-3 rounded-sm text-base-100 font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300"
          >
            <FaGithub className="text-2xl" /> Contribute
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
