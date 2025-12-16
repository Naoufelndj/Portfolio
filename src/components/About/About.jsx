import "./About.css";

import aboutMain from "../../assets/images/About/about.webp";

function About() {
  return (
    <section className="about section" id="about">
      <div className="content reveal" data-sr-origin="left">
        <h2>The Art Behind My Code</h2>
        <p>
          <span>
            I craft digital experiences that feel intuitive, balanced, and
            performance driven.
          </span>{" "}
          <br />I carefully shape each detail with intention, aiming for
          timeless aesthetics, clear structure, and smooth user experience…
        </p>
      </div>

      <div className="image">
        <img
          src={aboutMain}
          alt="desktop"
          loading="lazy"
          className="reveal"
          data-sr-origin="right"
        />
        <span className="reveal" data-sr-origin="top">
          Design. Develop. Deliver
        </span>
      </div>
    </section>
  );
}

export default About;
