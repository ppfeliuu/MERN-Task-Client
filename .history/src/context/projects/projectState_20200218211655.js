import React, { useReducer } from "react";

import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { FORM_PROJECT, GET_PROJECTS } from "../../types";

const projects = [
  { id: 1, name: "Tienda Virtual" },
  { id: 2, name: "Website" },
  { id: 3, name: "Design Web" },
  { id: 4, name: "Mern" }
];

const ProjectState = props => {
  const initialState = {
    form: false,
    projects: []
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
  const getProjects = projects => {
     dispatch({
       type: GET_PROJECTS,
       payload: projects
     })
  }

  return (
    <projectContext.Provider
      value={{
        form: state.form,
        projects: state.projects,
        showForm,
        getProjects
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
