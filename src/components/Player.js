import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";

function Player({defaultPosition}) {

  return (
    <Draggable defaultPosition={{x:defaultPosition.x, y:defaultPosition.y}} bounds="parent">
      <div className="player">
        <div>icon</div>
        <div>playername</div>
      </div>
    </Draggable>
  );
}

export default Player;
