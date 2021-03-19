import React from "react";

function FieldColorSquare({ color, updateLineupStyle}) {
  return (
    <div
      onClick={() => updateLineupStyle("backgroundColor", color)}
      className="colorSquare"
      style={{ backgroundColor: color }}
    ></div>
  );
}

export default FieldColorSquare;
