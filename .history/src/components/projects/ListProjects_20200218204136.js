import React, { useContext } from "react";
import Project from "./Project";
import projectContext from "../../context/projects/projectContext";

const ListProjects = () => {
  //Get State from Form
  const projectsContext = useContext(projectContext);
  const { projects } = projectsContext;

  return (
    <ul className="listado-proyectos">
      {projects.map(project => (
        <Project project={project} />
      ))}
    </ul>
  );
};

export default ListProjects;
