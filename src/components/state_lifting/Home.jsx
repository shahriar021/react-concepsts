import React, { useState } from "react";
import TODOS from "./TODOS";
import NewTodo from "./NewTodo";

const dummy = ["todo1", "todo2"];
export default function Home() {
  const [todos, setTodos] = useState(dummy);

  const handleTodo = (child) => {
    setTodos([...todos, child]);
  };

  return (
    <div>
      <NewTodo onTodo={handleTodo} />
      <TODOS todos={todos} />
    </div>
  );
}
