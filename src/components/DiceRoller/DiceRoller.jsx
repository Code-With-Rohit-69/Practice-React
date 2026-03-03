import React, { useState } from "react";
import Style from "./DiceRoller.module.css";

const DiceRoller = () => {
  const [input, setInput] = useState();
  const [dices, setDices] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleRoll = () => {
    if (input < 1 || input > 12) {
      return;
    }

    setDices([]);

    for (let i = 0; i < input; i++) {
      let randDice = Math.floor(Math.random() * 6 + 1);
      setDices((p) => [...p, randDice]);
    }
  };

  return (
    <div>
      <h1 className={Style.title}>Number of Dice</h1>
      <div className={Style.inputField}>
        <input
          type="number"
          className={Style.input}
          name="input"
          id="input-number"
          min={1}
          max={12}
          value={input}
          onChange={handleChange}
        />
        <button onClick={handleRoll} className={Style.roll}>
          Roll
        </button>
      </div>
      {dices.length > 0 && (
        <div className={Style.dices}>
          {dices.map((dice, index) => (
            <div className={Style.dice} key={index}>
              {dice}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DiceRoller;
