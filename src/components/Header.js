import React from "react";

export default function Header(){
  return(
    <div className="header">
      <div className="title">Odin Unix Memory Game</div>
      <div className="score-container">
        <div className="current-score"></div>
        <div className="best-score"></div>
      </div>
    </div>
  )
}