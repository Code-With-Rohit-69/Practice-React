import React, { useState, useEffect } from "react";
import "./ColorCode.css";

function getRandomHEX() {
  const hexValues = "1234567890ABCDEF";
  const length = hexValues.length;
  let curr = "";

  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * length);
    curr += hexValues[index];
  }

  return curr;
}

function ColorCodeGame() {
  const [randomHex, setRandomHex] = useState([]);
  const [answerHex, setAnswerHex] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [round, setRound] = useState(1);

  useEffect(() => {
    const color = [getRandomHEX(), getRandomHEX(), getRandomHEX()];
    setRandomHex(color);

    const randomIndex = Math.floor(Math.random() * color.length);
    setAnswerHex(color[randomIndex]);
  }, [round]);

  const handleClick = (hex) => {
    if (loading) return;
    if (hex === answerHex) {
      setMessage("Correct");
    } else {
      setMessage("Incorrect");
    }

    setLoading(true);
    setShowButton(true);
  };

  return (
    <div className="game-container">
      <h1>Color Codes</h1>
      <p># {answerHex}</p>
      <h3>What is this color?</h3>
      <div className="color-options">
        {randomHex.map((hex, index) => (
          <div
            key={index}
            className="color-box"
            role="button"
            aria-label={`Color option #FFFFFF}`}
            style={{ backgroundColor: `#${hex}` }}
            tabIndex={loading ? -1 : 0}
            onClick={() => handleClick(hex)}
            disabled={loading}
          ></div>
        ))}
        <br />
        <br />
      </div>
      <p className="feedback">{message}</p>
      {showButton && (
        <button
          className="play-again-btn"
          onClick={() => {
            setLoading(false);
            setShowButton(false);
            setMessage("");
            setRound((prev) => prev + 1);
          }}
        >
          Play Again
        </button>
      )}
    </div>
  );
}
export default ColorCodeGame;
