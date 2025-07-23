import "./ProjectCard.css";
import { useState } from "react";

import reactIcon from "../../../assets/icons/techs/react.webp";
import cssIcon from "../../../assets/icons/techs/css.webp";

import closeIcon from "../../../assets/icons/close.webP";

function ProjectCard({ image, title, description, modal }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="project-card reveal" data-sr-origin="bottom">
      <div className="image">
        <img src={image} alt={title} />
      </div>

      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="techs">
          <div className="tech-icon">
            <img src={reactIcon} alt="React Icon" loading="lazy" />
          </div>
          <div className="tech-icon">
            <img src={cssIcon} alt="CSS Icon" loading="lazy" />
          </div>
        </div>
        <button className="main-button" onClick={() => setIsOpen(true)}>
          View Demo
        </button>
      </div>

      {isOpen && (
        <div className="modal-wrapper">
          <div className="modal">
            <button className="close-button" onClick={() => setIsOpen(false)}>
              <img src={closeIcon} alt="close-modal" loading="lazy" />
            </button>
            <h2 className="modal-title">{title}</h2>
            <div className="image-scroll-wrapper">
              <img src={modal} alt={title} loading="lazy" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectCard;
