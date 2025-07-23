import "./Projects.css";
import { useContext } from "react";
import { appContext } from "../../context/context";

import ProjectCard from "./ProjectCard/ProjectCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

function Projects() {
  const { projects } = useContext(appContext);

  return (
    <section className="projects section" id="projects">
      <SectionTitle
        title={"My Projects"}
        description={
          "Here are some interfaces I've designed and developed with a focus on clarity, consistency, and usability."
        }
      />

      <div className="projects-container">
        {projects.slice(0, 6).map((project) => (
          <ProjectCard
            id={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            modal={project.modal}
          />
        ))}
      </div>
      <Link to={"/projects"}>
        <button
          className="main-button explore-all reveal"
          data-sr-origin="bottom"
        >
          Explore All Projects
        </button>
      </Link>
    </section>
  );
}

export default Projects;
