import React from "react";

function PlayerName({player , updatePlayerList}) {
  let handleDelete = () => {
    fetch(`https://my-eleven-api.herokuapp.com/players/${player.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      }
    })
      .then((data) => {
        if (data.ok) {
           updatePlayerList(player.id)
        }
      });
  };

  return (
    <div className="playerName">
      <div className="name">{player.name}</div>
      <button onClick={handleDelete} className="deletePlayer">
        Delete
      </button>
    </div>
  );
}

export default PlayerName;
