import "./About.css";

import aboutMain from "../../assets/images/About/about.webp";

function About() {
  return (
    <section className="about section" id="about">
      <div className="content reveal" data-sr-origin="left">
        <h2>The Art Behind My Code</h2>
        <p>
          I carefully shape each detail with intention, aiming for timeless
          aesthetics, clear structure, and smooth user experience. This is where
          design meets discipline, and creativity becomes code.
        </p>
        <p>
          Every website featured in this portfolio - from concept to final
          polish - is entirely my own work.
        </p>

        <h3>My Approach :</h3>
        <p>
          I don't just build websites. I craft digital experiences that feel
          intuitive, visually balanced, and performance-driven. I value clean
          code, scalable structure, and thoughtful interaction — every element
          serves a purpose.
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
