import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const FormTask = () => {
  const projectsContext = useContext(projectContext);
  const { currentproject } = projectsContext;

  //No project selected
  if(!currentproject) return null;

  //Array destructuring for project name
  const [curProject] = currentproject;


  return (
    <div className="formulario">
      <form onSubmit={onSubmitAddTask}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Task name..."
            name="nameTask"
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
