import { useState, useEffect, useRef } from "react";
import "./WordCounter.css";

function WordCounter() {
  const [text, setText] = useState("");
  const [count, setCount] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  function handleCount() {
    if (!text.trim()) {
      setCount([]);
      return;
    }
    // Count Logic
    let words = text.toLowerCase().trim().split(/\s+/);

    let freq = {};

    for (let word of words) {
      freq[word] = (freq[word] || 0) + 1;
    }

    setCount(Object.entries(freq).sort((a, b) => b[1] - a[1]));
  }

  useEffect(() => {
    const timeout = setTimeout(() => handleCount(), 500);

    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <div className="wordCounter">
      <h1>Word Counter</h1>

      <div className="container">
        <textarea
          className="textarea"
          placeholder="Type your text here"
          data-testid="textarea"
          value={text}
          onChange={handleChange}
        ></textarea>

        <div className="results">
          <h3>Word Frequencies</h3>
          <ul data-testid="result-list">
            {count.map(([word, count], index) => (
              <li key={word} data-testid={`word-${word}`}>
                <strong>{word}</strong>: {count} Times
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default WordCounter;
