import React, { useState } from "react";

export default function Toogle() {
  const [toogle, setToogle] = useState(true);

  return (
    <div
      style={{ backgroundColor: "red", margin: "90px", borderRadius: "10px" }}
    >
      {toogle && (
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
          incidunt neque dolorem adipisci provident cupiditate aliquid fuga
          delectus minus, rem magni earum tempore doloremque placeat sunt nisi
          praesentium error maxime!
        </p>
      )}
      <div style={{ textAlign: "center" }}>
        <button onClick={() => setToogle(!toogle)}>
          {toogle ? "hide" : "show"}
        </button>
      </div>
    </div>
  );
}
