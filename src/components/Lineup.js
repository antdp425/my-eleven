import React, { useState, useEffect } from "react";
import Player from "./Player";

function Lineup() {
  let [players, setPlayers] = useState();

  useEffect(() => {
    if (localStorage.getItem("players")) {
      setPlayers(localStorage.getItem("players"));
    } else {
      localStorage.setItem("players", JSON.stringify([]));
      setPlayers(localStorage.getItem("player"));
    }
  });

  return (
    <div className="lineup">
      <Player
        playersIndex={0}
        goalie={true}
        defaultPosition={{ x: 400, y: 50 }}
      />
      <Player playersIndex={1} defaultPosition={{ x: 175, y: 150 }} />
      <Player playersIndex={2} defaultPosition={{ x: 325, y: 150 }} />
      <Player playersIndex={3} defaultPosition={{ x: 475, y: 150 }} />
      <Player playersIndex={4} defaultPosition={{ x: 625, y: 150 }} />
      <Player playersIndex={5} defaultPosition={{ x: 250, y: 250 }} />
      <Player playersIndex={6} defaultPosition={{ x: 400, y: 250 }} />
      <Player playersIndex={7} defaultPosition={{ x: 550, y: 250 }} />
      <Player playersIndex={8} defaultPosition={{ x: 250, y: 350 }} />
      <Player playersIndex={9} defaultPosition={{ x: 400, y: 350 }} />
      <Player playersIndex={10} defaultPosition={{ x: 550, y: 350 }} />
    </div>
  );
}
export default Lineup;
