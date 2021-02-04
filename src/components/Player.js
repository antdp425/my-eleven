import React, { useState, useEffect, useRef } from "react";

function Player({ index }) {
  let playerRef = useRef();
  let style = {position: "relative", zIndex: index}
  
  return (
    <div
      style={{style}}
      classNmae="playerContainer"
      ref={playerRef}
      onClick={() => (playerRef.current.style.top = "50px")}
    >
      <div className="player"></div>
      <div className="playerName">Hi</div>
    </div>
  );
}

export default Player;
