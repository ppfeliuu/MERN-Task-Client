import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const Project = ({ project }) => {
  const projectsContext = useContext(projectContext);
  const { projectSelected } = projectsContext;

  const tasksContext = useContext(taskContext);

  const { getTasks } = tasksContext;

  //Add project
  const selectProject = id => {
    projectSelected(id); //Set current project selected
    getTasks(id); 
  }

  return (
    <li>
      <button type="button" className="btn btn-blank" onClick={() => selectProject(project.id)}>
        {project.name}
      </button>
    </li>
  );
};

export default Project;
