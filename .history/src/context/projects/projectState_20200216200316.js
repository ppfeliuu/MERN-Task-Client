import React, { useReducer} from "react";

import projectContext from "./projectContext";
import projectReducer from "./projectReducer";

const ProjectState = props => {
  const initialState = {
    formProject: false
  };

  //Dispatch for actions
  const [state, dispatch] = useReducer(projectReducer, initialState);

  //Functions for crud project

  return (
      <projectContext.Provider value={{ formProject: state.newProjectForm}}>
          {props.children}
      </projectContext.Provider>
  )
}

export default ProjectState;
