import React, { useContext, useState, useEffect } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const FormTask = () => {
  const projectsContext = useContext(projectContext);
  const { currentproject } = projectsContext;

  const tasksContext = useContext(taskContext);
  const {
    currenttask,
    errortask,
    addTask,
    validateTask,
    getTasks,
    updateTask,
    cleanCurrentTask
  } = tasksContext;

  //Effect detect if there are a task selected
  useEffect(() => {
    if (currenttask !== null) {
      setTask(currenttask);
    } else {
      setTask({
        name: ""
      });
    }
  }, [currenttask]);

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
    if (name.trim() === "") {
      validateTask();
      return;
    }

    //Check edit or add
    if (currenttask === null) {
      //Add new task to state
      task.projectId = curProject.id;
      task.estado = false;
      addTask(task);
    } else {
      // Update current task selected
      updateTask(task);

      // Clean current task selected
      cleanCurrentTask();
    }

    //Get all task
    getTasks(curProject.id);

    //reset form
    setTask({
      name: ""
    });
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
            value={currenttask ? "Edit Task" : "Add Task"}
          />
        </div>
      </form>
      {errortask ? (
        <p className="mensaje error">Task name is mandatory</p>
      ) : null}
    </div>
  );
};

export default FormTask;
