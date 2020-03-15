import React, { useContext } from "react";
import taskContext from "../../context/tasks/taskContext";
import projectContext from "../../context/projects/projectContext";

const Task = ({ task }) => {
  const tasksContext = useContext(taskContext);
  const { deleteTask, getTasks, updateTask, saveCurrentTask } = tasksContext;

  const projectsContext = useContext(projectContext);
  const { currentproject } = projectsContext;

  const [cp] = currentproject;

  //Delete task when clicked
  const deleteTaskById = id => {
    deleteTask(id, cp._id);
    getTasks(cp.id);
  };

  //Modify status task
  const changeStatus = task => {
    if (task.status) {
      task.status = false;
    } else {
      task.status = true;
    }

    updateTask(task);
  };

  //Add current task when user edit
  const selectTask = task => {
    saveCurrentTask(task);
  };

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>

      <div className="estado">
        {task.status ? (
          <button
            type="button"
            className="completo"
            onClick={() => changeStatus(task)}
          >
            Complete
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => changeStatus(task)}
          >
            Incomplete
          </button>
        )}
      </div>

      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => selectTask(task)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => deleteTaskById(task._id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
