import React, { useReducer} from "react";

import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { FORM_PROJECT } from '../../types';

const ProjectState = props => {
  const initialState = {
    formProject: false
  };

  //Dispatch for actions
  const [state, dispatch] = useReducer(projectReducer, initialState);

  //Functions for crud project
  const showForm = () => {
    dispatch({
      type: FORM_PROJECT
    })
  }

  return (
      <projectContext.Provider value={{ formProject: state.formProject}}>
          {props.children}
      </projectContext.Provider>
  )
}

export default ProjectState;
