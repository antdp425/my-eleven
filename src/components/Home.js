import React from "react";
import Lineup from "./Lineup";
import LineupStyle from "./LineupStyle";
import MyPlayers from "./MyPlayers";

function Home() {
  return (
    <div className="home">
      <LineupStyle />
      <Lineup />
      <MyPlayers />
    </div>
  );
}

export default Home;
