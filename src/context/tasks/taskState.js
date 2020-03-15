import React, { useReducer } from "react";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";
import {
  TASKS_PROJECT,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  CURRENT_TASK,
  UPDATE_TASK,
  CLEAN_TASK
} from "../../types";
import clientAxios from "../../config/axios";

const TaskState = props => {
  const initialState = {
    tasksproject: [],
    errortask: false,
    currenttask: null
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  //Functions

  //Get project tasks
  const getTasks = async project => {
    try {
      const res = await clientAxios.get("/api/tasks", { params: { project } });
      console.log(res);
      dispatch({
        type: TASKS_PROJECT,
        payload: res.data.tasks
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Add new task
  const addTask = async task => {
    try {
      await clientAxios.post("api/tasks", task);
      // console.log(res);
      dispatch({
        type: ADD_TASK,
        payload: task
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Validate task
  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK
    });
  };

  //Delete task by ID
  const deleteTask = async (id, project) => {
    try {
      await clientAxios.delete(`api/tasks/${id}`, { params: { project } });

      dispatch({
        type: DELETE_TASK,
        payload: id
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Get current task for edit
  const saveCurrentTask = task => {
    dispatch({
      type: CURRENT_TASK,
      payload: task
    });
  };

  //Update task
  const updateTask = async task => {
    try {
      const res = await clientAxios.put(`api/tasks/${task._id}`, task);
      console.log(res);
      dispatch({
        type: UPDATE_TASK,
        payload: res.data.task
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Clean current task
  const cleanCurrentTask = () => {
    dispatch({
      type: CLEAN_TASK
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasksproject: state.tasksproject,
        errortask: state.errortask,
        currenttask: state.currenttask,
        getTasks,
        addTask,
        validateTask,
        deleteTask,
        saveCurrentTask,
        updateTask,
        cleanCurrentTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
