import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={`${process.env.PUBLIC_URL}/images/slogo.avif`} alt="Logo" />
        <span className="logo-text"><h5>SHIVA KUMAR</h5></span>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="techstack" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact Me
          </Link>
        </li>
      </ul>
      <div className="navbar-resume">
        <a href="/Shiva Resume.pdf" download>Resume <i className="fa fa-file-text" /></a>
      </div>
    </nav>
  );
};

export default Navbar;
