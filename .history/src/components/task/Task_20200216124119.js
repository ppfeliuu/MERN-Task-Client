import React from "react";

const Task = ({ task }) => {
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
    </li>
  );
};

export default Task;
