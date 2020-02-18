import React, { useContext } from "react";
import Project from "./Project";
import projectContext from "../../context/projects/projectContext";

const ListProjects = () => {
  //Get State from Form
  const projectsContext = useContext(projectContext);
  const { projects } = projectsContext;

  if(projects.length === 0) return null;

  return (
    <ul className="listado-proyectos">
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ListProjects;
