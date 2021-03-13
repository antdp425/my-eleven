import React, { useState, useEffect } from "react";

function MyPlayers() {
  let [myPlayers, setMyPlayers] = useState("Loading...");

  let fetchPlayers = () => {
    fetch("https://my-eleven-api.herokuapp.com/players")
      .then((resp) => resp.json())
      .then((data) =>
        setMyPlayers(
          data.map((player) => <p key={`player_${player.id}`}>{player.name}</p>)
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
