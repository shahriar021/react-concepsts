import React, { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);
  const handleChange = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={handleChange}>+</button>
    </div>
  );
}
