import "./Navbar.css";
import { useState } from "react";

import logo from "../../assets/logo/light-logo.webp";
import listIcon from "../../assets/icons/navbar/list.webp";
import closeIcon from "../../assets/icons/close.webP";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Naoufel ndj" loading="lazy" />
      </div>

      <div className="right">
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#tech" onClick={() => setMenuOpen(false)}>
              Tech
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
        </ul>

        <button className="open-list" onClick={() => setMenuOpen(!menuOpen)}>
          <img
            src={menuOpen ? closeIcon : listIcon}
            alt="menu toggle"
            loading="lazy"
          />
        </button>

        <a href="#footer" className="main-button contact-button">
          Contact Me
        </a>
      </div>
    </header>
  );
}

export default Navbar;
