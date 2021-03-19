import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import formations from "../formations";

function FieldPlayer({ formation, goalie, playerIndex, updatePlayersArray }) {
  let playerNameField = useRef();
  let focusOnTextField = () => playerNameField.current.select();

  let [playerName, setPlayerName] = useState();
  let handleNameChange = (e) => {
    let name = e.target.value;
    setPlayerName(name);
  };

  let [position, setPosition] = useState(
    formations[formation].defaultPositions[playerIndex]
  );

  let playerDetails = {
    playerName,
    playerIndex,
  };

  useEffect(() => {
    let playerData = JSON.parse(localStorage.getItem("playerData"));
    if (playerData && playerData[playerIndex]) {
      setPlayerName(playerData[playerIndex].playerName);
    }
  }, []);

  useEffect(() => {
    updatePlayersArray(playerDetails);
  }, [playerName]);

  useEffect(() => {
    setPosition(formations[formation].defaultPositions[playerIndex]);
  }, [formation]);

  return (
    <Draggable position={position} bounds="parent">
      {!goalie ? (
        <div onClick={focusOnTextField} className="player">
          <i className="outfield fas fa-tshirt fa-3x"></i>
          <input
            type="text"
            onChange={handleNameChange}
            ref={playerNameField}
            value={playerName}
          />
        </div>
      ) : (
        <div onClick={focusOnTextField} className="player">
          <i className="goalie fas fa-tshirt fa-3x"></i>
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

export default FieldPlayer;
