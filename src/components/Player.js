import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";

function Player({ goalie, defaultPosition, playerIndex, updatePlayersArray }) {
  let playerNameField = useRef();
  let focusOnTextField = () => playerNameField.current.select();

  let [playerName, setPlayerName] = useState();
  let handleNameChange = (e) => {
    let name = e.target.value;
    setPlayerName(name);
  };
  
  useEffect(() => {
    let playerData = JSON.parse(localStorage.getItem("playerData"))[
      playerIndex
    ];
    if (playerData) {
      setPlayerName(playerData.playerName);
    }
    console.log("Ran on mount")
  }, []);

  useEffect(() => {
    let playerDetails = {
      playerName: playerName,
      playerIndex: playerIndex,
    }
    updatePlayersArray(playerDetails);
    console.log("Updated player details")
  },[playerName])

  return (
    <Draggable
      defaultPosition={{ x: defaultPosition.x, y: defaultPosition.y }}
      bounds="parent"
    >
      {!goalie ? (
        <div onClick={focusOnTextField} className="player">
          <i class="outfield fas fa-tshirt fa-3x"></i>
          <input
            type="text"
            onChange={handleNameChange}
            ref={playerNameField}
            value={playerName}
          />
        </div>
      ) : (
        <div onClick={focusOnTextField} className="player">
          <i class="goalie fas fa-tshirt fa-3x"></i>
          <input
            type="text"
            onChange={handleNameChange}
            ref={playerNameField}
            value={playerName}
          />
        </div>
      )}
    </Draggable>
  );
}

export default Player;
