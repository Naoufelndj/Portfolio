import "./ProjectCard.css";
import { useState } from "react";

import closeIcon from "../../../assets/icons/close.webp";

function ProjectCard({ image, title, modal, techs }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="project-card reveal" data-sr-origin="bottom">
      <div className="image">
        <img src={image} alt={title} />
      </div>

      <div className="content">
        <h3>{title}</h3>
        <div className="row">
          <div className="techs">
            {techs.map((t, index) => (
              <div className="tech-icon" key={index}>
                <img src={t} alt="Icon" loading="lazy" />
              </div>
            ))}
          </div>
          <button className="main-button" onClick={() => setIsOpen(true)}>
            View Demo
          </button>
        </div>
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
