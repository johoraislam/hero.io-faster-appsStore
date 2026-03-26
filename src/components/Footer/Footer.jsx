import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#001931]">
      <div className="footer sm:footer-horizontal max-w-7xl mx-auto text-base-100 py-10 px-4 lg:px-0">
        <aside>
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 bg-transparent border-none shadow-none hover:scale-110 transition-transform duration-300"
          >
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
              HERO.IO
            </span>
          </Link>
          <p>
            Power up your digital world.
            <br />
            Discover, download and deploy the next <br /> generation of
            high-performance applications at Hero.io.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Development</a>
          <a className="link link-hover">Marketing</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
        </nav>
      </div>

      <aside>
        <p className="text-center text-base-100 pb-10 px-4 lg:px-0">
          Copyright © {new Date().getFullYear()} - All right reserved |
          Developed by{" "}
          <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
            Hi ASIF
          </span>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
