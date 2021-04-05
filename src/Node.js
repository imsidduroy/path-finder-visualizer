import React, { useState } from "react";
import "./Node.css";

function Node({ row, col, isMousePressed }) {
  const [isWall, setIsWall] = useState(0);
  const MouseEnter = ()=> {
    if(isMousePressed){
     console.log("Entering")
     setIsWall(!isWall) ;
    }
  };
  return (
    <div
      className={`node ${isWall ? "wall" : ""}`}
      onMouseEnter={MouseEnter}
    //   onMouseDown={() => setIsWall(!isWall)}
    ></div>
  );
}

export default Node;
