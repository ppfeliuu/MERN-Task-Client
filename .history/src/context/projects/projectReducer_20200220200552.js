import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case FORM_PROJECT:
      return {
        ...state,
        form: true
      };
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload]
      };
    case VALIDATE_FORM:
      return {
        ...state,
        errorform: true
      };

    default:
      return state;
  }
};
