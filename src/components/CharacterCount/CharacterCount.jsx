import { useEffect, useState } from "react";

function CharacterCount() {
  const [maxLength, setMaxLength] = useState(50);
  const [text, setText] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [exceed, setExceed] = useState(0);

  const currLength = text.length;

  useEffect(() => {
    const percent = (currLength / maxLength) * 100;
    setPercentage(percent);

    if (currLength > maxLength) {
      setExceed(currLength - maxLength);
    } else {
      setExceed(0);
    }
  }, [currLength, maxLength]);

  return (
    <div className="characterCount">
      <h1>Character Count</h1>
      <p>Track your input length with live character warnings.</p>

      <div className="container">
        <div className="inputs">
          <label>
            Max length:
            <input
              type="number"
              min="0"
              max="1000"
              data-testid="maxlength"
              value={maxLength}
              onChange={(e) => setMaxLength(Number(e.target.value))}
            />
          </label>
        </div>

        <textarea
          className="text"
          placeholder="Start Typing"
          data-testid="textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <div className="char-info">
          {currLength}/{maxLength}
        </div>

        <div className="warnings">
          <p className="warning-text" data-testid="warning-text">
            {percentage >= 90 && currLength <= maxLength && "You are close to the limit"}
          </p>

          <p className="error-message" data-testid="error-text">
            {exceed > 0 && `Limit exceeded by ${exceed} character(s).`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CharacterCount;
