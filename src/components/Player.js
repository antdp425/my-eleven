import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import formations from "../formations"


function Player({ formation, goalie, playerIndex, updatePlayersArray }) {
  let playerNameField = useRef();
  let focusOnTextField = () => playerNameField.current.select();

  let [playerName, setPlayerName] = useState();
  let handleNameChange = (e) => {
    let name = e.target.value;
    setPlayerName(name);
  };

  let playerDetails = {
    playerName,
    playerIndex,
  };

  useEffect(() => {
    console.log("I was mounted")
    let playerData = JSON.parse(localStorage.getItem("playerData"));
    if (playerData && playerData[playerIndex]) {
      setPlayerName(playerData[playerIndex].playerName);
    }
  }, []);

  useEffect(() => {
    updatePlayersArray(playerDetails);
  }, [playerName]);

  useEffect(() => {
    setDefaultPosition(formations[formation].defaultPositions[playerIndex])
  }, [formation])

  let [defaultPosition, setDefaultPosition] = useState(formations[formation].defaultPositions[playerIndex])

  return (
    <Draggable
      defaultPosition={defaultPosition}
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
