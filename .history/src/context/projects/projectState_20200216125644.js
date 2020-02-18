import React, { useReducer} from "react";

import projectContext from "./projectContext";
import projectReducer from "./projectReducer";

const projectState = props => {
  const initialState = {
    newProject: false
  };

  //Dispatch for actions
  const [state, dispatch] = useReducer(projectReducer, initialState);

  //Functions for crud project

  return (
      <projectContext.Provider value={{ formProject: state.newProject}}>
          {props.children}
      </projectContext.Provider>
  )
}

export default projectState;
