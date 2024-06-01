import React from "react";
import "../styles/PageLinkButtons.css";
import { Link } from "react-router-dom";

function PageLinkButtons() {
  return (
    <div className="button-container">
      <button type="button">
        <Link to="/" className="page-link-buttons">
          Home
        </Link>
      </button>
      <button type="button">
        <Link to="/about" className="page-link-buttons">
          About
        </Link>
      </button>
      <button type="button">
        <Link to="/" className="page-link-buttons">
          Projects
        </Link>
      </button>
      <button type="button">
        <Link to="/services" className="page-link-buttons">
          Services
        </Link>
      </button>
      <button type="button">
        <Link to="/contact" className="page-link-buttons">
          Contact
        </Link>
      </button>
    </div>
  );
}

export default PageLinkButtons;
