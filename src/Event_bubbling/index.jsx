import React from "react";

export default function Event_bubbling() {
  const handleParent = (e) => {
    console.log("parent", e);
  };

  const handleChild = (e) => {
    e.stopPropagation();
    console.log("child", e);
  };

  return (
    <div style={{ backgroundColor: "red" }} onClick={handleParent}>
      <h1>i'm parent</h1>
      <button onClick={handleChild}>+</button>
    </div>
  );
}
