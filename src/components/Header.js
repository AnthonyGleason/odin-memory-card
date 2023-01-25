import React from "react";

export default function Header(props){
  return(
    <div className="header">
      <div className="title">Odin Unix Memory Game</div>
      <div className="score-container">
        <div className="current-score">Current Score: {props.score}</div>
        <div className="best-score">Best Score: {props.bestScore}</div>
      </div>
    </div>
  )
}