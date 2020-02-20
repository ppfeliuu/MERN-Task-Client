import React, { Fragment, useState, useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const NewProject = () => {
  //Get State from Form
  const projectsContext = useContext(projectContext);
  const { form, showForm, addProject } = projectsContext;

  // State for project
  const [project, setProject] = useState({
    name: ""
  });

  const { name } = project;

  const onChangeProject = e => {
    setProject({
      ...project,
      [e.target.name]: e.target.value
    });
  };

  const onSubmitProject = e => {
    e.preventDefault();

    //valid project
    if(name === '') return;

    console.log(name)
    // add state
    // addProject(project);

    //reset form
  };

  const onClickShowForm = () => {
      showForm();
  }

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClickShowForm}
      >
        New Project
      </button>

      {form ? (
        <form className="formulario-nuevo-proyecto">
          <input
            type="text"
            className="input-text"
            placeholder="Project Name"
            name="name"
            value={name}
            onChange={onChangeProject}
          />
          <input
            type="submit"
            className="btn btn-block btn-primario"
            value="Add Project"
            onSubmit={onSubmitProject}
          />
        </form>
      ) : null}
    </Fragment>
  );
};

export default NewProject;
