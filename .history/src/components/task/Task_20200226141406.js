import React, { useContext } from "react";
import taskContext from "../../context/tasks/taskContext";
import projectContext from "../../context/projects/projectContext";

const Task = ({ task }) => {
  const tasksContext = useContext(taskContext);
  const { deleteTask, getTasks, changeStatusTask } = tasksContext;

  const projectsContext = useContext(projectContext);
  const { currentproject } = projectsContext;

  const [cp] = currentproject;

  //Delete task when clicked
  const deleteTaskById = id => {    
    deleteTask(id);
    getTasks(cp.id);
  };

  //Modify status task
  const changeStatus = task => {
    if(task.estado) {
      task.estado = false
    } else {
      task.estado = true
    }
  }

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>

      <div className="estado">
        {task.estado ? (
          <button type="button" className="completo" onClick={() => changeStatus(task)}>
            Complete
          </button>
        ) : (
          <button type="button" className="incompleto" onClick={() => changeStatus(task)}>
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
