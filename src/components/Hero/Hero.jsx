import "./Hero.css";

import fbIcon from "../../assets/icons/social/fb-dark.webp";
import instaIcon from "../../assets/icons/social/insta-dark.webp";
import xIcon from "../../assets/icons/social/x-dark.webp";
import whatsappIcon from "../../assets/icons/social/whatsapp-dark.webp";

function Hero() {
  return (
    <section className="hero">
      <div className="content reveal" data-sr-origin="bottom">
        <div className="title">
          <h1>Front-End Developer with a Designer's Eye</h1>
        </div>
        <div className="desc">
          <p>
            I design intuitive user interfaces and build them into fast,
            responsive front-end experiences using React.js.
          </p>
        </div>
      </div>

      <a href="#projects" className="main-button view-work">
        View My Work
      </a>

      <div className="social">
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
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
    </section>
  );
}

export default Hero;
