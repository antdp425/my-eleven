import React, { useState, useRef } from "react";

function Player() {
   let playerRef = useRef()
   
  return <div className="player" 
              ref={playerRef} 
              ></div>;
}

export default Player;
