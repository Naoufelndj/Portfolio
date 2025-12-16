import "./Navbar.css";
import { useState } from "react";

import logo from "../../assets/logo/logo-dark.webp";
import listIcon from "../../assets/icons/navbar/list.webp";
import closeIcon from "../../assets/icons/close.webp";

import fbIcon from "../../assets/icons/social/fb-dark.webp";
import instaIcon from "../../assets/icons/social/insta-dark.webp";
import whatsappIcon from "../../assets/icons/social/whatsapp-dark.webp";
import xIcon from "../../assets/icons/social/x-dark.webp";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [startY, setStartY] = useState(null);

  const handleTouchStart = (e) => setStartY(e.touches[0].clientY);

  const handleTouchMove = (e) => {
    if (!startY) return;
    const currentY = e.touches[0].clientY;
    if (currentY - startY > 80) {
      setMenuOpen(false);
      setStartY(null);
    }
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Naoufel ndj" loading="lazy" />
      </div>

      <div className="right">
        {/* Desktop / Tablet */}
        <ul className="nav-links desktop-nav">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#tech">Tech</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>

        {/* Mobile */}
        <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          <div
            className="drawer-handle"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onClick={() => setMenuOpen(false)}
          ></div>

          <div className="top">
            <ul>
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
          </div>

          <div className="bottom">
            <a href="#footer" className="main-button">
              Contact Me
            </a>
            <div className="social-icons contact-info">
              <a
                href="https://www.facebook.com/naoufel.ndje/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={fbIcon} alt="facebook" loading="lazy" />
              </a>
              <a
                href="https://www.instagram.com/naoufel._.ndj/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instaIcon} alt="instagram" loading="lazy" />
              </a>
              <a
                href="https://wa.me/213676593365"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={whatsappIcon} alt="whatsapp" loading="lazy" />
              </a>
              <a
                href="https://github.com/Naoufelndj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={xIcon} alt="x" loading="lazy" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
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
