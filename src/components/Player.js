import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";

function Player({ goalie, defaultPosition }) {
  return (
    <Draggable
      defaultPosition={{ x: defaultPosition.x, y: defaultPosition.y }}
      bounds="parent"
    >
    {!goalie ?
      <div className="player">
        <i class="fas fa-tshirt fa-2x"></i>
        <div>playerName</div>
      </div> : 
      <div className="player">
        <i class="goalie fas fa-tshirt fa-2x"></i>
        <div>playerName</div>
      </div>
    }
    </Draggable>
  );
}

export default Player;
