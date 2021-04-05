import React, { useState } from "react";
import Node from "./Node";
import "./Grid.css";

const giveGrid = (a, b) => {
  const grid = [];
  for (let r = 0; r < a; r++) {
    const row = [];
    for (let c = 0; c < b; c++) row.push([]);
    grid.push(row);
  }
  return grid;
};

function Grid() {
  const grid = giveGrid(20, 50);
  const [isMousePressed, setIsMousePressed] = useState(0);

  const mouseDown = ()=>{
      console.log("mouse down")
      if(!isMousePressed)
      setIsMousePressed(1);
    }
    const mouseUp = ()=>{
      console.log("mouse up")
        if(isMousePressed)
            setIsMousePressed(0);
  }

  return (
    <div className="grid"
    onMouseDown={mouseDown}
    onMouseUp={mouseUp}
    >
      <h1>iam grid</h1>
      {grid.map((row, i) => {
          return (
              <div className="row">
            {row.map((col, j) => {
              console.log("grid")
              return <Node row={i} col={j} isMousePressed={isMousePressed} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Grid;
