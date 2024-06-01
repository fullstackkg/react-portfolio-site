import React from "react";
import "../styles/Navbar.css";
import KGLogo from "../assets/images/kg-logo-vector.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="nav-center">
        <ul>
          <li>
            <img id="kg-logo" src={KGLogo} alt="My personal logo" />
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
