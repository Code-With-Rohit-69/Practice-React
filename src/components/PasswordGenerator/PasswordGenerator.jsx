import { useState } from "react";
import "./PasswordGenerator.css";

const generatePassword = (lowercase, uppercase, numbers, symbols, length) => {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const number = "0123456789";
  const symbol = "~`!@#$%^&*()-_+={}[]|;:'<,>.?/";

  let lower = "abcdefghijklmnopqrstuvwxyz";

  let passwordString = "";

  if (lowercase === true) {
    passwordString += lower;
  }

  if (uppercase === true) {
    passwordString += upper;
  }

  if (numbers === true) {
    passwordString += number;
  }

  if (symbols === true) {
    passwordString += symbol;
  }

  let result = "";

  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * passwordString.length);
    result += passwordString.charAt(index);
  }

  return result;
};

function PasswordGenerator() {
  const [includeTypes, setIncludeTypes] = useState({
    lowercase: true,
    uppercase: false,
    numbers: false,
    symbols: false,
  });
  const [length, setLength] = useState(4);
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    let { name } = e.target;
    setIncludeTypes((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleChangeLength = (e) => {
    setLength(e.target.value);
  };

  const handleClick = () => {
    if (
      length < 1 ||
      length > 20 ||
      (!includeTypes.lowercase &&
        !includeTypes.uppercase &&
        !includeTypes.numbers &&
        !includeTypes.symbols)
    )
      return;

    const pass = generatePassword(
      includeTypes.lowercase,
      includeTypes.uppercase,
      includeTypes.numbers,
      includeTypes.symbols,
      length
    );

    setPassword(pass);
  };

  return (
    <div className="passwordGenerator">
      <h1>Password Generator</h1>
      <p>Create a secure and Strong Password, to keep your account Safe</p>

      <div className="passwordGenerator-container">
        <label htmlFor="passwordLength">
          Password Length
          <input
            type="text"
            data-testid="length-input"
            value={length}
            onChange={handleChangeLength}
          />
        </label>

        <div className="checkboxes">
          <label>
            <input
              type="checkbox"
              data-testid="lowercase-checkbox"
              checked={includeTypes.lowercase}
              name="lowercase"
              onChange={handleChange}
            />
            Include LowerCase
          </label>

          <label>
            <input
              type="checkbox"
              data-testid="uppercase-checkbox"
              checked={includeTypes.uppercase}
              name="uppercase"
              onChange={handleChange}
            />
            Include UpperCase
          </label>

          <label>
            <input
              type="checkbox"
              data-testid="number-checkbox"
              checked={includeTypes.numbers}
              name="numbers"
              onChange={handleChange}
            />
            Include Numbers
          </label>

          <label>
            <input
              type="checkbox"
              data-testid="symbols-checkbox"
              checked={includeTypes.symbols}
              name="symbols"
              onChange={handleChange}
            />
            Include Symbols
          </label>
        </div>

        <button
          className="generate-btn"
          data-testid="generate-button"
          onClick={handleClick}
        >
          Generate
        </button>
        {password && password}
      </div>
    </div>
  );
}
export default PasswordGenerator;
