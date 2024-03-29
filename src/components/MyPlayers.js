import React, { useState, useEffect } from "react";
import PlayerName from "./PlayerName";

function MyPlayers() {
  let [myPlayers, setMyPlayers] = useState("Loading...");
  let [newPlayer, setNewPlayer] = useState("");

  let updatePlayerList = (id) => {
    fetchPlayers()
  }

  let fetchPlayers = () => {
    fetch("https://my-eleven-api.herokuapp.com/players")
      .then((resp) => resp.json())
      .then((data) =>
        setMyPlayers(
          data.map((player) => (
            <PlayerName updatePlayerList={updatePlayerList} key={`player_${player.id}`} player={player} />
          ))
        )
      );
  };

  let handleNewPlayerChange = (event) => {
    setNewPlayer(event.target.value);
  };

  let addPlayer = (event) => {
    event.preventDefault();
    let player = { name: newPlayer };

    if (newPlayer) {
      fetch("https://my-eleven-api.herokuapp.com/players", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(player),
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.id) {
            setMyPlayers([
              ...myPlayers,
              <PlayerName updatePlayerList={updatePlayerList} key={`player_${data.id}`} player={data} />,
            ]);
            setNewPlayer("");
          }
        });
    }
  };

  useEffect(() => {
    fetchPlayers("https://my-eleven-api.herokuapp.com/players");
  }, []);

  return (
    <div className="myPlayers">
      <div className="myPlayersForm">
      <p className="myPlayersTitle">My Players</p>
        <form onSubmit={addPlayer}>
          <input
            value={newPlayer}
            onChange={handleNewPlayerChange}
            type="text"
          ></input>
          <button type="submit">Add</button>
        </form>
      </div>
      <div className="playerList">
      {myPlayers}
      </div>
    </div>
  );
}

export default MyPlayers;
