import "./Footer.css";

import logo from "../../assets/logo/logo-dark.webp";

import emailIcon from "../../assets/icons/contact/email.webp";
import phoneIcon from "../../assets/icons/contact/phone.webp";

import fbIcon from "../../assets/icons/social/fb-dark.webp";
import instaIcon from "../../assets/icons/social/insta-dark.webp";
import xIcon from "../../assets/icons/social/x-dark.webp";
import whatsappIcon from "../../assets/icons/social/whatsapp-dark.webp";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="logo reveal">
        <img
          src={logo}
          alt="naoufel ndj"
          data-sr-origin="bottom"
          loading="lazy"
        />
      </div>
      <div className="contact reveal" data-sr-origin="bottom">
        <a
          href="https://wa.me/213676593365"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-info number"
        >
          <img src={phoneIcon} alt="number" loading="lazy" />
          +213 676 59 33 65
        </a>
        <div className="line"></div>
        <a href="mailto:naoufeldev@gmail.com" className="contact-info email">
          <img src={emailIcon} alt="email" loading="lazy" />
          naoufeldev@gmail.com
        </a>
        <div className="line"></div>
        <div className="social-icons contact-info">
          <a
            href="https://www.facebook.com/profile.php?id=61585269600585&mibextid=wwXIfr&rdid=OsLr8RSzPzPaJBwM&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AA74iKECL%2F%3Fmibextid%3DwwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={fbIcon} alt="facebook" loading="lazy" />
          </a>
          <a
            href="https://www.instagram.com/naoufeldev/"
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
            href="https://x.com/Naoufeldev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={xIcon} alt="x" loading="lazy" />
          </a>
        </div>
      </div>
      <p className="rights">
        © 2025 Naoufel dev — Front-End Developer & Web Designer
      </p>
    </footer>
  );
}

export default Footer;
