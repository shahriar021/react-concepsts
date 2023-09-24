import React from 'react';
import Data from './data/data.json'

export default function DoWork() {
    const decoraiton={
        "backgroundColor":"red",
        "color":"white",
        "display":"flex",
        "alignItems":"center",
        "justify-content":"center",
        "margin":"10px",
        "padding":"10px",
        "width":"550px"
        
    }


  return (
    <div>
      {Data.map((i)=>{
        return (
            <div style={decoraiton}>
                <h1>{i.name}</h1>
                <p>{i.position}</p>
                <span>{i.salary}</span>
            </div>
        )
      })}
    </div>
  );
}
