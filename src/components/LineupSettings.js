import React, { useState } from "react";
import ColorSquare from "./ColorSquare";
import formations from "../formations";

function LineupSettings({ updateLineupStyle, updateFormation }) {
  let colors = [
    { backgroundColor: "#003399" },
    { backgroundColor: "#4d0099" },
    { backgroundColor: "#990000" },
  ].map((color) => {
    return (
      <ColorSquare
        key={`color_${color.backgroundColor}`}
        updateLineupStyle={updateLineupStyle}
        color={color.backgroundColor}
      />
    );
  });

  let formationOptions = Object.keys(formations).map((formation) => (
    <option key={`option_${formation}`} value={`${formation}`}>{formation.split("").join("-")}</option>
  ));

  let handleFormationChange = (event) => {
    let formationValue = event.target.value;
    return formationValue
      ? updateFormation(event.target.value)
      : null;
  };

  return (
    <div className="lineupStyle">
      <div>
        <div>Background Color</div>
        <div className="colors">{colors}</div>
        <div>Formation</div>
        <select onChange={handleFormationChange}>
          <option value="" selected >
            --- Select Formation ----
          </option>
          {formationOptions}
        </select>
      </div>
    </div>
  );
}

export default LineupSettings;
