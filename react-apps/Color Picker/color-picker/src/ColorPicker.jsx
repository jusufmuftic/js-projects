import React, { useCallback, useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#FFFFFF");

  function handleColor(e) {
    setColor(e.target.value);
  }

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected color: {color}</p>
      </div>
      <label>Select a color:</label>
      <input type="color" value={"#000000"} onChange={handleColor} />
    </div>
  );
};

export default ColorPicker;