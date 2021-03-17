import React, { useState, useEffect } from "react";
import PlayerName from "./PlayerName"

function MyPlayers() {
  let [myPlayers, setMyPlayers] = useState("Loading...");

  let fetchPlayers = () => {
    fetch("https://my-eleven-api.herokuapp.com/players")
      .then((resp) => resp.json())
      .then((data) =>
        setMyPlayers(
          data.map((player) => <PlayerName key={`player_${player.id}`} player={player} />)
        )
      );
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <div className="myPlayers">
      <p>My Players</p>
      {myPlayers}
    </div>
  );
}

export default MyPlayers;
