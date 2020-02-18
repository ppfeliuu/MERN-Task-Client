import React from "react";

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
      <projectContext.Provider>
          {props.children}
      </projectContext.Provider>
  )
};
