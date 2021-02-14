import React, { useState, useEffect } from "react";
import Player from "./Player";

function Lineup() {
  let [players, setPlayers] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("players")) {
      setPlayers(JSON.parse(localStorage.getItem("players")));
    } else {
      localStorage.setItem("players", JSON.stringify(players));
      setPlayers(JSON.parse(localStorage.getItem("player")));
    }
  }, [localStorage.getItem("players")]);

  const updatePlayersArray = (updatedPlayer) => {
    let localPlayers = [...players];
    localPlayers[updatedPlayer.playerIndex] = updatedPlayer;
    setPlayers([...players,updatedPlayer])
    localStorage.setItem("players", JSON.stringify(localPlayers))
  };

  return (
    <div className="lineup">
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
  );
}
export default Lineup;
