import "./Technologies.css";

import htmlIcon from "../../assets/icons/technologies/html.webp";
import htmlDarkIcon from "../../assets/icons/technologies/html-dark.webp";
import cssIcon from "../../assets/icons/technologies/css.webp";
import cssDarkIcon from "../../assets/icons/technologies/css-dark.webp";
import jsIcon from "../../assets/icons/technologies/js.webp";
import jsDarkIcon from "../../assets/icons/technologies/js-dark.webp";
import reactIcon from "../../assets/icons/technologies/react.webp";
import reactDarkIcon from "../../assets/icons/technologies/react-dark.webp";
import nextIcon from "../../assets/icons/technologies/next.webp";
import nextDarkIcon from "../../assets/icons/technologies/next-dark.webp";
import tailwindIcon from "../../assets/icons/technologies/tailwind.webp";
import tailwindDarkIcon from "../../assets/icons/technologies/tailwind-dark.webp";
import bootstrapIcon from "../../assets/icons/technologies/bootstrap.webp";
import bootstrapDarkIcon from "../../assets/icons/technologies/bootstrap-dark.webp";

function Technologies() {
  return (
    <section className="technologies" id="tech">
      <img
        src={htmlDarkIcon}
        alt="html"
        onMouseOver={(e) => (e.currentTarget.src = htmlIcon)}
        onMouseOut={(e) => (e.currentTarget.src = htmlDarkIcon)}
        loading="lazy"
      />
      <img
        src={cssDarkIcon}
        alt="css"
        onMouseOver={(e) => (e.currentTarget.src = cssIcon)}
        onMouseOut={(e) => (e.currentTarget.src = cssDarkIcon)}
        loading="lazy"
      />
      <img
        src={jsDarkIcon}
        alt="js"
        onMouseOver={(e) => (e.currentTarget.src = jsIcon)}
        onMouseOut={(e) => (e.currentTarget.src = jsDarkIcon)}
        loading="lazy"
      />
      <img
        src={reactDarkIcon}
        alt="react"
        onMouseOver={(e) => (e.currentTarget.src = reactIcon)}
        onMouseOut={(e) => (e.currentTarget.src = reactDarkIcon)}
        loading="lazy"
      />
      <img
        src={nextDarkIcon}
        alt="next"
        onMouseOver={(e) => (e.currentTarget.src = nextIcon)}
        onMouseOut={(e) => (e.currentTarget.src = nextDarkIcon)}
        loading="lazy"
      />
      <img
        src={tailwindDarkIcon}
        alt="tailwind"
        onMouseOver={(e) => (e.currentTarget.src = tailwindIcon)}
        onMouseOut={(e) => (e.currentTarget.src = tailwindDarkIcon)}
        loading="lazy"
      />
      <img
        src={bootstrapDarkIcon}
        alt="bootstrap"
        onMouseOver={(e) => (e.currentTarget.src = bootstrapIcon)}
        onMouseOut={(e) => (e.currentTarget.src = bootstrapDarkIcon)}
        loading="lazy"
      />
    </section>
  );
}

export default Technologies;
