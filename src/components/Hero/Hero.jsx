import "./Hero.css";

import fbIcon from "../../assets/icons/social/fb-dark.webp";
import instaIcon from "../../assets/icons/social/insta-dark.webp";
import xIcon from "../../assets/icons/social/x-dark.webp";
import whatsappIcon from "../../assets/icons/social/whatsapp-dark.webp";

function Hero() {
  return (
    <section className="hero">
      <div className="content">
        <div className="title reveal" data-sr-origin="left">
          <h1>Front-End Developer with a Designer's Eye</h1>
        </div>
        <div className="desc reveal" data-sr-origin="right">
          <p>
            I design intuitive user interfaces and build them into fast,
            responsive front-end experiences using React.js.
          </p>
        </div>
      </div>

      <a
        href="#projects"
        className="main-button view-work reveal"
        data-sr-origin="bottom"
      >
        View My Work
      </a>

      <div className="social reveal" data-sr-origin="bottom">
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
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
    </section>
  );
}

export default Hero;
