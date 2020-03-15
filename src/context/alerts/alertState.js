import React, { useReducer } from "react";
import { SHOW_ALERT, HIDE_ALERT } from "../../types";
import alertReducer from "./alertReducer";
import alertContext from "./alertContext";

const AlertState = props => {
  const initialState = {
    alert: null
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  //Functions
  const showAlert = (msg, cat) => {
    dispatch({
      type: SHOW_ALERT,
      payload: {
        msg,
        cat
      }
    });

    setTimeout(() => {
      dispatch({
        type: HIDE_ALERT
      });
    }, 5000);
  };
  return (
    <alertContext.Provider value={{ alert: state.alert, showAlert }}>
      {props.children}
    </alertContext.Provider>
  );
};

export default AlertState;
