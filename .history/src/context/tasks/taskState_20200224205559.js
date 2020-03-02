import React, { useReducer } from "react";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";
import {
  TASKS_PROJECT,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_PROJECT
} from "../../types";

const TaskState = props => {
  const initialState = {
    tasks: [
      {
        id: 1,
        name: "Elegir Plataforma",
        estado: true,
        projectId: 1
      },
      {
        id: 2,
        name: "Elegir Colores",
        estado: false,
        projectId: 2
      },
      {
        id: 3,
        name: "Elegir forma de pago",
        estado: false,
        projectId: 3
      },
      {
        id: 4,
        name: "Elegir Hosting",
        estado: true,
        projectId: 4
      },
      {
        id: 5,
        name: "Elegir Colores",
        estado: false,
        projectId: 2
      },
      {
        id: 6,
        name: "Elegir forma de pago",
        estado: false,
        projectId: 3
      },
      {
        id: 7,
        name: "Elegir Hosting",
        estado: true,
        projectId: 4
      },
      {
        id: 8,
        name: "Elegir Colores",
        estado: false,
        projectId: 2
      },
      {
        id: 9,
        name: "Elegir forma de pago",
        estado: false,
        projectId: 1
      },
      {
        id: 10,
        name: "CCC",
        estado: true,
        projectId: 3
      }
    ],
    tasksproject: null,
    errortask: false
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  //Functions

  //Get project tasks
  const getTasks = projectId => {
    dispatch({
      type: TASKS_PROJECT,
      payload: projectId
    });
  };

  //Add new task
  const addTask = task => {
    dispatch({
      type: ADD_TASK,
      payload: task
    });
  };

  //Validate task
  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK
    });
  };

  //Delete task by ID
  const deleteTask = id => {    
    dispatch({
      type: DELETE_PROJECT,
      payload: id
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        tasksproject: state.tasksproject,
        errortask: state.errortask,
        getTasks,
        addTask,
        validateTask,
        deleteTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
