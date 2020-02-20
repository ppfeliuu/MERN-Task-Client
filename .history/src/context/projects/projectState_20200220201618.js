import React, { useReducer } from "react";
import uuid from "uuid";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM
} from "../../types";

const ProjectState = props => {
  const projects = [
    { id: 1, name: "Tienda Virtual" },
    { id: 2, name: "Website" },
    { id: 3, name: "Design Web" },
    { id: 4, name: "Mern" }
  ];

  const initialState = {
    form: false,
    projects: [],
    errorform: false,
    currentproject: null
  };

  //Dispatch for actions
  const [state, dispatch] = useReducer(projectReducer, initialState);

  //Functions for crud project
  const showForm = () => {
    dispatch({
      type: FORM_PROJECT
    });
  };

  //Get projects
  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects
    });
  };

  //add new project
  const addProject = project => {
    project.id = uuid.v4();

    // console.log(project)
    //Add project into state using dispatch
    dispatch({
      type: ADD_PROJECT,
      payload: project
    });
  };

  //Validate Form New Project
  const showError = () => {
    dispatch({ type: VALIDATE_FORM });
  };

  return (
    <projectContext.Provider
      value={{
        form: state.form,
        projects: state.projects,
        errorform: state.errorform,
        showForm,
        getProjects,
        addProject,
        showError
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
