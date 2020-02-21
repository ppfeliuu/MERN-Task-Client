import React, { useReducer } from "react";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";

const TaskState = props => {
  const initialState = {
    tasks: [
      {
        name: "Elegir Plataforma",
        estado: true
      },
      {
        name: "Elegir Colores",
        estado: false
      },
      {
        name: "Elegir forma de pago",
        estado: false
      },
      {
        name: "Elegir Hosting",
        estado: true
      }
    ]
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  return <TaskContext.Provider>{props.children}</TaskContext.Provider>;
};

export default TaskState;
