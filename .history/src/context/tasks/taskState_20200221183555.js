import React, { useReducer } from "react";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";
import { TASKS_PROJECT } from "../../types";

const TaskState = props => {
  const initialState = {
    tasks: [
      {
        name: "Elegir Plataforma",
        estado: true,
        projectId: 1
      },
      {
        name: "Elegir Colores",
        estado: false,
        projectId: 2
      },
      {
        name: "Elegir forma de pago",
        estado: false,
        projectId: 3
      },
      {
        name: "Elegir Hosting",
        estado: true,
        projectId: 4
      },
      {
        name: "Elegir Colores",
        estado: false,
        projectId: 2
      },
      {
        name: "Elegir forma de pago",
        estado: false,
        projectId: 3
      },
      {
        name: "Elegir Hosting",
        estado: true,
        projectId: 4
      },
      {
        name: "Elegir Colores",
        estado: false,
        projectId: 2
      },
      {
        name: "Elegir forma de pago",
        estado: false,
        projectId: 1
      },
      {
        name: "Elegir Hosting",
        estado: true,
        projectId: 3
      }
    ]
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  //Functions

  //Get project tasks
  const getTasks = projectId => {
    dispatch({
      type: TASKS_PROJECT,
      payload: projectId
    })
  }

  return (
    <TaskContext.Provider value={{ tasks: state.tasks, getTasks }}>
      {props.children}
    </TaskContext.Provider>
  );
};



export default TaskState;
