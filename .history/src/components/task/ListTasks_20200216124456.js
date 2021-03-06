import React from "react";
import Task from "./Task";

const ListTasks = () => {
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
      <h2>Proyecto: Tienda</h2>

      <ul className="listado-tareas">
        {task.length === 0 ? (
          <li className="tarea">
            <p>No Tasks</p>
          </li>
        ) : (
          task.map(t => <Task task={t} />)
        )}
        <button type="button" className="btn btn-eliminar">
          Delete Project &times;
        </button>
      </ul>
    </>
  );
};

export default ListTasks;
