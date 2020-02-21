import React, { useContext } from "react";
import Task from "./Task";
import projectContext from "../../context/projects/projectContext";

const ListTasks = () => {
  const projectsContext = useContext(projectContext);
  const { currentproject, deleteProject } = projectsContext;

  //No project selected
  if(!currentproject) return <h1>Select a project</h1>

  //Array destructuring for project name
  const [curProject] = currentproject;

  const tasks = [
    
  ];

  const handleDeleteProject = () => {
      deleteProject(curProject.id)
  }

  return (
    <>
      <h2>Project: {curProject.name}</h2>

      <ul className="listado-tareas">
        {tasks.length === 0 ? (
          <li className="tarea">
            <p>No Tasks</p>
          </li>
        ) : (
          tasks.map(t => <Task task={t} />)
        )}
      </ul>
      <button type="button" className="btn btn-eliminar" onClick={handleDeleteProject}>
        Delete Project &times;
      </button>
    </>
  );
};

export default ListTasks;
