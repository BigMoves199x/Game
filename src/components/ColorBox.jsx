import React from "react";

const ColorBox = ({ color, isRevealed }) => {
  return (
    <div className="color-box-container">
      <div
        className="color-box"
        data-testid="colorBox"
        style={{ backgroundColor: isRevealed ? color : "gray" }}
      >
        {!isRevealed ? "?" : ""}
      </div>
    </div>
  );
};

export default ColorBox;
