import React, { useReducer } from "react";

import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM,
  CURRENT_PROJECT,
  DELETE_PROJECT,
  PROJECT_ERROR
} from "../../types";
import clientAxios from "../../config/axios";

const ProjectState = props => {
  const initialState = {
    form: false,
    projects: [],
    errorform: false,
    currentproject: null,
    message: null
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
  const getProjects = async () => {
    try {
      const res = await clientAxios.get("/api/projects");
      // console.log(res);

      dispatch({
        type: GET_PROJECTS,
        payload: res.data.projects
      });
    } catch (error) {
      const alert = {
        msg: "Somethin went wrong!",
        cat: "alerta-error"
      };
      dispatch({
        type: PROJECT_ERROR,
        payload: alert
      });
    }
  };

  //add new project
  const addProject = async project => {
    try {
      const res = await clientAxios.post("/api/projects", project);
      // console.log(res);
      //Add project into state using dispatch
      dispatch({
        type: ADD_PROJECT,
        payload: res.data
      });
    } catch (error) {
      const alert = {
        msg: "Somethin went wrong!",
        cat: "alerta-error"
      };
      dispatch({
        type: PROJECT_ERROR,
        payload: alert
      });
    }
  };

  //Validate Form New Project
  const showError = () => {
    dispatch({ type: VALIDATE_FORM });
  };

  //Select to set project selected
  const projectSelected = currentprojectId => {
    dispatch({
      type: CURRENT_PROJECT,
      payload: currentprojectId
    });
  };

  const deleteProject = async currentprojectId => {
    try {
      await clientAxios.delete(`api/projects/${currentprojectId}`);
      dispatch({
        type: DELETE_PROJECT,
        payload: currentprojectId
      });
    } catch (error) {
      const alert = {
        msg: "Somethin went wrong!",
        cat: "alerta-error"
      };
      dispatch({
        type: PROJECT_ERROR,
        payload: alert
      });
    }
  };

  return (
    <projectContext.Provider
      value={{
        form: state.form,
        projects: state.projects,
        errorform: state.errorform,
        currentproject: state.currentproject,
        message: state.message,
        showForm,
        getProjects,
        addProject,
        showError,
        projectSelected,
        deleteProject
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
