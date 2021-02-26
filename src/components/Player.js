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

  return (
    <Draggable
      defaultPosition={{ x: defaultPosition.x, y: defaultPosition.y }}
      bounds="parent"
      onStart={(e) => console.log(e)}
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
