import React, { useContext } from "react";
import Task from "./Task";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListTasks = () => {
  const projectsContext = useContext(projectContext);
  const { currentproject, deleteProject } = projectsContext;

  //Get tasks
  const tasksContext = useContext(taskContext);
  const { tasksproject } = tasksContext;

  //No project selected
  if(!currentproject) return <h1>Select a project</h1>

  //Array destructuring for project name
  const [curProject] = currentproject;
 
  const handleDeleteProject = () => {
      deleteProject(curProject.id)
  }

  return (
    <>
      <h2>Project: {curProject.name}</h2>

      <ul className="listado-tareas">
        {tasksproject.length === 0 ? (
          <li className="tarea">
            <p>No Tasks</p>
          </li>
        ) : (
          tasksproject.map((t, index) => <Task key={index} task={t} />)
        )}
      </ul>
      <button type="button" className="btn btn-eliminar" onClick={handleDeleteProject}>
        Delete Project &times;
      </button>
    </>
  );
};

export default ListTasks;
