import React, { Fragment, useState, useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const NewProject = () => {
  //Get State from Form
  const projectsContext = useContext(projectContext);
  const { form, showForm, addProject } = projectsContext;

  // State for project
  const [project, setProject] = useState({
    nameP: ""
  });

  const { nameP } = project;

  const onChangeProject = e => {
      console.log(e.target.value)
    setProject({
      ...project,
      [e.target.name]: e.target.value
    });
  };

  const onSubmitProject = e => {
    e.preventDefault();

    console.log(nameP)
    //valid project
    //if(nameP === '') return;

    
    // add state
    //addProject(project);

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
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProject}>
          <input
            type="text"
            className="input-text"
            placeholder="Project Name"
            name="nameP"
            value={nameP}
            onChange={onChangeProject}
          />
          <input
            type="submit"
            className="btn btn-block btn-primario"
            value="Add Project"            
          />
        </form>
      ) : null}
    </Fragment>
  );
};

export default NewProject;
