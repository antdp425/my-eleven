import React, { useState, useEffect } from "react";
import LineupStyle from "./LineupStyle";
import Player from "./Player";

function Lineup() {
  let [style, setStyle] = useState(
    JSON.parse(localStorage.getItem("lineupStyle")) || {
      backgroundColor: "rgb(0, 70, 21)",
    }
  );

  let updateLineupStyle = (styleKey, styleValue) => {
    setStyle(prevStyle => ({...prevStyle, [`${styleKey}`]: styleValue}) )
  }

  let [players, setPlayers] = useState([]);

  useEffect(() => {
    let playerData = localStorage.getItem("playerData");
    if (playerData) {
      setPlayers(JSON.parse(playerData));
    } else {
      localStorage.setItem("playerData", JSON.stringify(players));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("playerData", JSON.stringify(players));
  }, [players]);

  const updatePlayersArray = (updatedPlayer) => {
    let localPlayers = [...players];
    localPlayers[updatedPlayer.playerIndex] = updatedPlayer;
    setPlayers([...localPlayers]);
  };

  return (
    <>
      <LineupStyle updateLineupStyle={updateLineupStyle}/>
      <div style={style} className="lineup">
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={0}
          goalie={true}
          defaultPosition={{ x: 400, y: 50 }}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={1}
          defaultPosition={{ x: 175, y: 150 }}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={2}
          defaultPosition={{ x: 325, y: 150 }}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={3}
          defaultPosition={{ x: 475, y: 150 }}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={4}
          defaultPosition={{ x: 625, y: 150 }}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={5}
          defaultPosition={{ x: 250, y: 250 }}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={6}
          defaultPosition={{ x: 400, y: 250 }}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={7}
          defaultPosition={{ x: 550, y: 250 }}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={8}
          defaultPosition={{ x: 250, y: 350 }}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={9}
          defaultPosition={{ x: 400, y: 350 }}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={10}
          defaultPosition={{ x: 550, y: 350 }}
        />
      </div>
    </>
  );
}
export default Lineup;
