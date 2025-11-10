import "./AllProjects.css";
import { useContext, useEffect } from "react";
import { appContext } from "../../context/context";
import { Link } from "react-router-dom";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ProjectCard from "../../components/Projects/ProjectCard/ProjectCard";

import arrowIcon from "../../assets/icons/arrow-down-gold.webp";

function AllProjects() {
  const { projects } = useContext(appContext);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="all-projects section" id="all-projects">
      <SectionTitle
        title={"All My Projects"}
        description={
          "A complete collection of the interfaces and websites I've crafted."
        }
      />

      <div className="all-projects-container">
        {projects.map((project) => (
          <ProjectCard
            id={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            modal={project.modal}
            techs={project.techs}
          />
        ))}
      </div>

      <Link to={"/"}>
        <button className="main-button go-back reveal" data-sr-origin="bottom">
          Go Back
        </button>
      </Link>

      <p className="cta">
        Loved what you see? Let's build something great together
        <a href="#footer">
          <img src={arrowIcon} alt="go down" />
        </a>
      </p>
    </section>
  );
}

export default AllProjects;
