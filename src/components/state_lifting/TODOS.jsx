import React from "react";
import TODO from "./TODO";

function TODOS(props) {
  return (
    <div>
      {props.todos.map((i, k) => (
        <TODO key={k} i={i} />
      ))}
    </div>
  );
}

export default TODOS;
