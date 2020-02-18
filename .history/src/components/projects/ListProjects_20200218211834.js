import React, { useContext, useEffect } from "react";
import Project from "./Project";
import projectContext from "../../context/projects/projectContext";

const ListProjects = () => {

  //Get projects from State
  const projectsContext = useContext(projectContext);
  const { projects, getProjects } = projectsContext;

  //if project have items
  if(projects.length === 0) return null;

  useEffect(() => {
    getProjects();
  }, [])

  return (
    <ul className="listado-proyectos">
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ListProjects;
