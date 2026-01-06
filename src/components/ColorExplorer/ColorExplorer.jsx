import React, { useState } from "react";
import { colorNameToHex } from "./colorData";
import "./ColorExplorer.css";

const ColorExplorer = () => {
  let [input, setInput] = useState("");
  const [HEXColor, setHEXColor] = useState({});
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearchColor = () => {
    setError(false);
    setHEXColor("");

    if (input.trim().length === 0) {
      setError(true);
      return;
    }

    input = input.toLowerCase();
    const isValidName = colorNameToHex(input);

    if (isValidName) {
      setHEXColor({ name: input, hex: isValidName });
    } else {
      setError(true);
      setHEXColor("");
    }
  };

  return (
    <div className="container">
      <h1>Color Explorer</h1>
      <div className="input-section">
        <input
          type="text"
          data-testid="color-input"
          placeholder="Type a color name e.g. lavender"
          value={input}
          onChange={handleInputChange}
        />
        <button data-testid="search-button" onClick={handleSearchColor}>
          🔍
        </button>
      </div>

      {error ? (
        <p data-testid="error-msg">{`Sorry, I couldn't recognize that color.`}</p>
      ) : (
        <div className="color-box" data-testid="color-box">
          <div
            className="preview"
            role="presentation"
            data-testid="color-preview"
            style={{ backgroundColor: !error ? HEXColor.hex : "" }}
          ></div>
          <p data-testid="color-name">
            <strong>Name: {HEXColor.name}</strong>
          </p>
          <p data-testid="color-hex">
            <strong>Hex: {HEXColor.hex}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default ColorExplorer;
