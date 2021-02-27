import React from "react";
import ColorSquare from "./ColorSquare";
import { formations } from "../formations";
import FormationSelector from "./FormationSelector";

function LineupSettings({ updateLineupStyle }) {
  let colors = [
    { backgroundColor: "#003399" },
    { backgroundColor: "#4d0099" },
    { backgroundColor: "#990000" },
  ].map((color) => {
    return (
      <ColorSquare
        updateLineupStyle={updateLineupStyle}
        color={color.backgroundColor}
      />
    );
  });

  let formation = Object.keys(formations()).map((formation) => (
    <select>
      <FormationSelector
        formation={formation}
        updateLineupStyle={updateLineupStyle}
      />
    </select>
  ));

  return (
    <div className="lineupStyle">
      <div>
        <div>Background Color</div>
        <div className="colors">{colors}</div>
        {formation}
      </div>
    </div>
  );
}

export default LineupSettings;
