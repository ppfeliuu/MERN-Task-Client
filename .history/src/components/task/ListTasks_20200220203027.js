import React, { useContext } from "react";
import Task from "./Task";
import projectContext from "../../context/projects/projectContext";

const ListTasks = () => {
  const projectsContext = useContext(projectContext);
  const { currentproject } = projectsContext;

  //Array destructuring for project name
  const [curProject] = currentproject;

  const task = [
    {
      name: "Elegir Plataforma",
      estado: true
    },
    {
      name: "Elegir Colores",
      estado: false
    },
    {
      name: "Elegir forma de pago",
      estado: false
    },
    {
      name: "Elegir Hosting",
      estado: true
    }
  ];

  return (
    <>
      <h2>Project: Tienda</h2>

      <ul className="listado-tareas">
        {task.length === 0 ? (
          <li className="tarea">
            <p>No Tasks</p>
          </li>
        ) : (
          task.map(t => <Task task={t} />)
        )}
      </ul>
      <button type="button" className="btn btn-eliminar">
        Delete Project &times;
      </button>
    </>
  );
};

export default ListTasks;
