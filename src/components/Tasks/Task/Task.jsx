import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalState";

const Task = () => {
  const { tasks, getTasks, deleteTask } = useContext(GlobalContext);

  useEffect(() => {
    getTasks();
  }, []);
  return (
    <div>
      {tasks?.map((task) => (
        <div key={task._id}>
          <p>Task: {task.title}</p>
          <button><Link to={'task/'+task._id}>Editar tarea</Link></button>
          <button onClick={()=> deleteTask(task._id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default Task;
