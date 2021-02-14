import React, { useState, useRef } from "react";
import Draggable from "react-draggable";

function Player({ goalie, defaultPosition, playerIndex, updatePlayersArray}) {
  let [playerDetails, setPlayerDetails] = useState({playerName: "", playerIndex: playerIndex})

  let playerNameField = useRef();
  let focusOnTextField = () => playerNameField.current.select();

  let [playerName, setPlayerName] = useState();
  let handleChange = (e) => {
    setPlayerName(e.target.value);
    setPlayerDetails(oldDetails => ({...oldDetails, playerName: e.target.value}))
    updatePlayersArray(playerDetails)
  };

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
            onChange={handleChange}
            ref={playerNameField}
            value={playerName}
          />
        </div>
      ) : (
        <div onClick={focusOnTextField} className="player">
          <i class="goalie fas fa-tshirt fa-3x"></i>
          <input
            type="text"
            onChange={handleChange}
            ref={playerNameField}
            value={playerName}
          />
        </div>
      )}
    </Draggable>
  );
}

export default Player;
