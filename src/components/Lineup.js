import React, { useState, useEffect } from "react";
import LineupSettings from "./LineupSettings"
import Player from "./Player";
import {formations} from "../formations"

function Lineup() {
  let [style, setStyle] = useState(
    JSON.parse(localStorage.getItem("lineupStyle")) || {
      backgroundColor: "rgb(0, 70, 21)",
      formation: "433"
    }
  );

  let [players, setPlayers] = useState([]);

  useEffect(() => {
    let playerData = localStorage.getItem("playerData");
    let styleData = localStorage.getItem("styleData");

    if (playerData) {
      setPlayers(JSON.parse(playerData));
    } else {
      localStorage.setItem("playerData", JSON.stringify(players));
    }

    if (styleData) {
      setStyle(JSON.parse(styleData));
    } else {
      localStorage.setItem("styleData", JSON.stringify(style));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("playerData", JSON.stringify(players));
  }, [players]);

  useEffect(() => {
    localStorage.setItem("styleData", JSON.stringify(style));
  }, [style]);

  const updatePlayersArray = (updatedPlayer) => {
    let localPlayers = [...players];
    localPlayers[updatedPlayer.playerIndex] = updatedPlayer;
    setPlayers([...localPlayers]);
  };

  let updateLineupStyle = (styleKey, styleValue) => {
    setStyle((prevStyle) => ({ ...prevStyle, [`${styleKey}`]: styleValue }));
  };

  return (
    <>
      <LineupSettings updateLineupStyle={updateLineupStyle} />
      <div style={style} className="lineup">
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={0}
          goalie={true}
          defaultPosition={formations()[`${style.formation}`].defaultPositions[0]}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={1}
          defaultPosition={formations()[`${style.formation}`].defaultPositions[1]}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={2}
          defaultPosition={formations()[`${style.formation}`].defaultPositions[2]}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={3}
          defaultPosition={formations()[`${style.formation}`].defaultPositions[3]}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={4}
          defaultPosition={formations()[`${style.formation}`].defaultPositions[4]}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={5}
          defaultPosition={formations()[`${style.formation}`].defaultPositions[5]}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={6}
          defaultPosition={formations()[`${style.formation}`].defaultPositions[6]}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={7}
          defaultPosition={formations()[`${style.formation}`].defaultPositions[7]}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={8}
          defaultPosition={formations()[`${style.formation}`].defaultPositions[8]}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={9}
          defaultPosition={formations()[`${style.formation}`].defaultPositions[9]}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={10}
          defaultPosition={formations()[`${style.formation}`].defaultPositions[10]}
        />
      </div>
    </>
  );
}
export default Lineup;
