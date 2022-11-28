import React, { createContext,useReducer } from 'react';
import axios from 'axios'
import AppReducer from "./AppReducer"

const initialState = {
  tasks: [],
  task:{}
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
  
    const getTasks = async () => {
      const res = await axios.get("http://localhost:8080/tasks/getAllTask");
      dispatch({
        type: "GET_TASKS",
        payload: res.data.tasks,
      });
    };

    const deleteTask = async (_id)=>{
        const res = await axios.delete("http://localhost:8080/tasks/deleteTask/" + _id)
        dispatch({
            type: "DELETE_TASK",
            payload: res.data.task,
          });
    }

    const addTask = async(task) => {
        try {
            const res = await axios.post('http://localhost:8080/tasks/createTask', task)
            dispatch({
                type: "ADD_TASK",
                payload: res.data.task,
              });
        } catch (error) {
            console.error(error)
        }
    }

    const getTask = async(_id)=>{
        try {
            const res = await axios.get("http://localhost:8080/tasks/getTaskById/"+_id)
            dispatch({
                type: "GET_TASK",
                payload: res.data,
              });
        } catch (error) {
            console.error(error)
        }
    }
    const editTask = async(_id,task)=>{
        try {
            await axios.put("http://localhost:8080/tasks/updateTitleTask/"+_id,task)
        } catch (error) {
            console.error(error)
        }
    }
    return (
      <GlobalContext.Provider
        value={{
          tasks: state.tasks,
          task:state.task,
          getTasks,
          deleteTask,
          addTask,
          getTask,
          editTask
        }}>
        {children}
      </GlobalContext.Provider>
    );
  };  
  
