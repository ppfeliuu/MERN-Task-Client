import React, { useContext } from "react";
import taskContext from "../../context/tasks/taskContext";
import projectContext from "../../context/projects/projectContext";

const Task = ({ task }) => {
  const tasksContext = useContext(taskContext);
  const { deleteTask, getTasks } = tasksContext;

  const projectsContext = useContext(projectContext);
  const { currentproject } = projectsContext;

  const [cp] = currentproject;

  //Delete task when clicked
  const deleteTaskById = id => {
    console.log(cp.id)
    deleteTask(id);
    getTasks(cp.id);
  };

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>

      <div className="estado">
        {task.estado ? (
          <button type="button" className="completo">
            Complete
          </button>
        ) : (
          <button type="button" className="incompleto">
            Incomplete
          </button>
        )}
      </div>

      <div className="acciones">
        <button type="button" className="btn btn-primario">
          Edit
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => deleteTaskById(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
