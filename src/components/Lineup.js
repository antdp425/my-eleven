import React, { useState, useEffect } from "react";
import LineupSettings from "./LineupSettings"
import Player from "./Player";

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
    let styleData = localStorage.getItem("lineupStyle");

    if (playerData) {
      setPlayers(JSON.parse(playerData));
    } else {
      localStorage.setItem("playerData", JSON.stringify(players));
    }

    if (styleData) {
      setStyle(JSON.parse(styleData));
    } else {
      localStorage.setItem("lineupStyle", JSON.stringify(style));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("playerData", JSON.stringify(players));
  }, [players]);

  useEffect(() => {
    localStorage.setItem("lineupStyle", JSON.stringify(style));
  }, [style.formation, style.backgroundColor]);

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
          formation={style.formation}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={1}
          formation={style.formation}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={2}
          formation={style.formation}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={3}
          formation={style.formation}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={4}
          formation={style.formation}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={5}
          formation={style.formation}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={6}
          formation={style.formation}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={7}
          formation={style.formation}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={8}
          formation={style.formation}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={9}
          formation={style.formation}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={10}
          formation={style.formation}
        />
      </div>
    </>
  );
}
export default Lineup;
