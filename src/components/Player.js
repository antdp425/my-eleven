import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";

function Player({ index }) {
  return (
    <Draggable>
    <div className="player">
      <div>icon</div>
      <div>playername</div>
    </div>
    </Draggable>
  );
}

export default Player;
