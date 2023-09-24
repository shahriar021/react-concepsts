import React, { useState } from "react";

export default function NewTodo(props) {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onTodo(todo);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newTOdo">New Todo</label>
        <input type="text" name="name" onChange={handleChange} value={todo} />
        <button>ADD</button>
      </form>
    </div>
  );
}
