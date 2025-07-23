import "./Hero.css";

import arrowDown from "../../assets/icons/arrow-down.webp";

function Hero() {
  return (
    <section className="hero">
      <div className="content reveal" data-sr-origin="bottom">
        <h1>Front-End Developer with a Designer's Eye</h1>
        <p>
          I design intuitive user interfaces and build them into fast,
          responsive front-end experiences using React.js.
        </p>
      </div>

      <a href="#projects" className="go-down reveal" data-sr-origin="top">
        <img src={arrowDown} alt="arrow-down" loading="lazy" />
      </a>
    </section>
  );
}

export default Hero;
