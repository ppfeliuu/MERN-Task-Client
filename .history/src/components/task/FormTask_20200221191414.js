import React, { useContext, useState } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const FormTask = () => {
  const projectsContext = useContext(projectContext);
  const { currentproject } = projectsContext;

  const tasksContext = useContext(taskContext);
  const { addTask } = tasksContext;

  //State form
  const [task, setTask] = useState({ name: "" });

  //Destructuring from task
  const { name } = task;

  //No project selected
  if (!currentproject) return null;

  //Array destructuring for project name
  const [curProject] = currentproject;

  //Read values from form
  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  };

  const onSubmitAddTask = e => {
    e.preventDefault();

    //Validate

    //Pass validation

    //Add new task to state
    task.projectId = curProject;
    task.estado = false;
    addTask(task);

    //reset form
  };
  return (
    <div className="formulario">
      <form onSubmit={onSubmitAddTask}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Task name..."
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Add Task"
          />
        </div>
      </form>
    </div>
  );
};

export default FormTask;
