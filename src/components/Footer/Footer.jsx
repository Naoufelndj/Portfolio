import "./Footer.css";

import logo from "../../assets/logo/light-logo.webp";

import emailIcon from "../../assets/icons/contact/email.webp";
import phoneIcon from "../../assets/icons/contact/phone.webp";

import fbIcon from "../../assets/icons/social/fb.webp";
import instaIcon from "../../assets/icons/social/insta.webp";
import xIcon from "../../assets/icons/social/x.webp";
import pinterestIcon from "../../assets/icons/social/pinterest.webp";
import githubIcon from "../../assets/icons/social/github.webp";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <img
        src={logo}
        alt="naoufel ndj"
        className="logo reveal"
        data-sr-origin="bottom"
        loading="lazy"
      />
      <div className="contact reveal" data-sr-origin="bottom">
        <a href="#" className="contact-info number">
          <img src={phoneIcon} alt="number" loading="lazy" />
          +213 676 59 33 65
        </a>
        <div className="line"></div>
        <a href="#" className="contact-info email">
          <img src={emailIcon} alt="email" loading="lazy" />
          naoufelnedjaoum@gmail.com
        </a>
        <div className="line"></div>
        <div className="social-icons contact-info">
          <a href="#">
            <img src={fbIcon} alt="facebook" loading="lazy" />
          </a>
          <a href="#">
            <img src={instaIcon} alt="insta" loading="lazy" />
          </a>
          <a href="#">
            <img src={xIcon} alt="x" loading="lazy" />
          </a>
          <a href="#">
            <img src={pinterestIcon} alt="pinterest" loading="lazy" />
          </a>
          <a href="#">
            <img src={githubIcon} alt="github" loading="lazy" />
          </a>
        </div>
      </div>
      <p className="rights">
        © 2025 Naoufel NDJ — Front-End Developer & Web Designer
      </p>
    </footer>
  );
}

export default Footer;
