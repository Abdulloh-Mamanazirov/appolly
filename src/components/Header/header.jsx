import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./header.css";
import logo from "../../images/logo.png";

// import App from '../../App'
import Blog from "../../Blog/Blog";

const Nav = () => {
  return (
    <>
      <div className="text-white navtop container d-flex justify-content-between align-items-center py-3">
        <div className="links d-flex align-items-center gap-5">
          <Link
            className="text-reset text-decoration-none d-flex align-items-center gap-2"
            to="/"
          >
            <i className="fa-solid fa-envelope"></i>
            abdullajonmamanazirov@gmail.com
          </Link>
          <Link
            className="text-reset text-decoration-none d-flex align-items-center gap-2"
            to="/"
          >
            <i className="fa-solid fa-phone"></i>+998-94-981-36-06
          </Link>
        </div>
        <div className="socials links d-flex align-items-center gap-4">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-facebook"></i>
        </div>
      </div>
      <div className="header rounded-3 bg-white p-3 container d-flex justify-content-between align-items-center ">
        <ul className="m-0 d-flex gap-4 list-unstyled align-items-center">
          <Link className="text-decoration-none text-reset" to="/">
            HOME{location.pathname === "/" && "👈"}
          </Link>
          <li>ABOUT</li>
          <li>FEATURES</li>
        </ul>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="m-0 d-flex gap-4 list-unstyled align-items-center">
          <li>SCREENSHOT</li>
          <Link className="text-decoration-none text-reset" to="/blog">
            BLOG{location.pathname === "/blog" && "👈"}
          </Link>
          <li className="m-0 btn btn-primary">DOWNLOAD</li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
