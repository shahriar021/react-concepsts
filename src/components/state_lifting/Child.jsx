import React from "react";

export default function Child(props) {
  const giveParent = "i am from child";

  props.onChildData(giveParent);

  return (
    <div>
      <h1>{props.data}</h1>
    </div>
  );
}
