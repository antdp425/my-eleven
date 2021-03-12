import React, { useState, useEffect } from "react";
import LineupSettings from "./LineupSettings";
import Player from "./Player";

function Lineup() {
  let [style, setStyle] = useState(
    JSON.parse(localStorage.getItem("lineupStyle")) || {
      backgroundColor: "rgb(0, 70, 21)",
    }
  );

  let [formation, setFormation] = useState(
    localStorage.getItem("formation") || "433"
  );

  let [players, setPlayers] = useState([]);

  useEffect(() => {
    let playerData = localStorage.getItem("playerData");
    let styleData = localStorage.getItem("lineupStyle");
    let formationData = localStorage.getItem("formation");

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

    if (formationData) {
      setFormation(formationData);
    } else {
      localStorage.setItem("formation", formation);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("playerData", JSON.stringify(players));
  }, [players]);

  useEffect(() => {
    localStorage.setItem("lineupStyle", JSON.stringify(style));
  }, [style]);

  useEffect(() => {
    localStorage.setItem("formation", formation);
  }, [formation]);

  const updatePlayersArray = (updatedPlayer) => {
    let localPlayers = [...players];
    localPlayers[updatedPlayer.playerIndex] = updatedPlayer;
    setPlayers([...localPlayers]);
  };

  let updateLineupStyle = (styleKey, styleValue) => {
    setStyle((prevStyle) => ({ ...prevStyle, [`${styleKey}`]: styleValue }));
  };

  let updateFormation = (formation) => {
    setFormation(formation);
  };

  return (
    <>
      <LineupSettings
        updateLineupStyle={updateLineupStyle}
        updateFormation={updateFormation}
      />
      <div style={style} className="lineup">
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={0}
          goalie={true}
          formation={formation}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={1}
          formation={formation}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={2}
          formation={formation}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={3}
          formation={formation}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={4}
          formation={formation}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={5}
          formation={formation}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={6}
          formation={formation}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={7}
          formation={formation}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={8}
          formation={formation}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={9}
          formation={formation}
        />
        <Player
          updatePlayersArray={updatePlayersArray}
          playerIndex={10}
          formation={formation}
        />
      </div>
    </>
  );
}
export default Lineup;
