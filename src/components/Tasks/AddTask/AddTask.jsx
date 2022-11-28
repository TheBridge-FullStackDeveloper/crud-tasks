import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../context/GlobalState";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const { addTask } = useContext(GlobalContext);
  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addTask({ title });
  };

  return (
    <form>
      <input type="text" name="title" onChange={(e) => handleInputChange(e)} />
      {/* <input type="text" name="title" onChange={(e)=> setTitle(e.target.value)}/> */}
      <button onClick={onSubmit}>Crear</button>
    </form>
  );
};

export default AddTask;
