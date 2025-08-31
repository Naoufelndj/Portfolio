import "./AllProjects.css";
import { useContext, useEffect } from "react";
import { appContext } from "../../context/context";
import { Link } from "react-router-dom";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ProjectCard from "../../components/Projects/ProjectCard/ProjectCard";

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
    </section>
  );
}

export default AllProjects;
