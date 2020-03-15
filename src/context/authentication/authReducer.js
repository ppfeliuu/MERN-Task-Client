import {
  REGISTER_OK,
  REGISTER_ERROR,
  GET_USER,
  LOGIN_OK,
  LOGIN_ERROR,
  CLOSE_SESION
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case REGISTER_OK:
    case LOGIN_OK:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        authenticated: true,
        message: null
      };
    case GET_USER:
      return {
        ...state,
        authenticated: true,
        user: action.payload,
        loading: false
      };
    case CLOSE_SESION:
    case LOGIN_ERROR:
    case REGISTER_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        message: action.payload,
        authenticated: false,
        user: null,
        loading: false
      };
    default:
      return state;
  }
};
