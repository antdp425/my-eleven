import React from "react";
import ColorSquare from "./ColorSquare";

function LineupStyle({ updateLineupStyle }) {

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

  return (
    <div className="lineupStyle">
      <div>
        <div>Background Color</div>
        <div className="colors">{colors}</div>
      </div>
    </div>
  );
}

export default LineupStyle;
