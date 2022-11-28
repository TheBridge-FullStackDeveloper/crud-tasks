import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalState";

const EditTask = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const { getTask, task, editTask } = useContext(GlobalContext);

  useEffect(() => {
    getTask(_id);
  }, []);

  useEffect(() => {
    setTitle(task.title);
  }, [task.title]);

  const onSubmit = (e) => {
    e.preventDefault();
    editTask(task._id, { title });
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div>
      <h1>Editar tarea</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button>Guardar</button>
      </form>
    </div>
  );
};

export default EditTask;
