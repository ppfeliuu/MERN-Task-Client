import React, { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
import clientAxios from "../../config/axios";
import tokenAuth from "../../config/token";
import {
  REGISTER_OK,
  REGISTER_ERROR,
  GET_USER,
  LOGIN_OK,
  LOGIN_ERROR,
  CLOSE_SESION
} from "../../types";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    authenticated: null,
    user: null,
    message: null,
    loading: true
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //Functions
  const registerUser = async dataUser => {
    try {
      const res = await clientAxios.post("/api/users", dataUser);
      //console.log(res.data);

      dispatch({
        type: REGISTER_OK,
        payload: res.data
      });

      userAuth();
    } catch (error) {
      // console.log(error.response.data.msg);
      const alert = {
        msg: error.response.data.msg,
        cat: "alerta-error"
      };

      dispatch({
        type: REGISTER_ERROR,
        payload: alert
      });
    }
  };

  //Get info from registered user
  const userAuth = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      tokenAuth(token);
    }

    try {
      const res = await clientAxios.get("/api/auth");
      //console.log(res);

      dispatch({
        type: GET_USER,
        payload: res.data.user
      });
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR
      });
    }
  };

  //Init Session
  const login = async dataUser => {
    try {
      const res = await clientAxios.post("/api/auth", dataUser);
      console.log(res);

      dispatch({
        type: LOGIN_OK,
        payload: res.data
      });

      userAuth();
    } catch (error) {
      console.log(error.response.data.msg);
      const alert = {
        msg: error.response.data.msg,
        cat: "alerta-error"
      };

      dispatch({
        type: LOGIN_ERROR,
        payload: alert
      });
    }
  };

  const logout = () => {
    dispatch({
      type: CLOSE_SESION
    });
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        loading: state.loading,
        registerUser,
        login,
        userAuth,
        logout
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
