import React, { useEffect, useState } from "react";
import "./EmojiReplacer.css";

export const emojiMap = {
  happy: "😊",
  sad: "😢",
  love: "❤️",
  angry: "😠",
  surprised: "😲",
  laugh: "😂",
  cool: "😎",
  tired: "😴",
  excited: "🤩",
  bored: "🥱",
  scared: "😱",
  confused: "😕",
  wow: "😮",
  cry: "😭",
  nervous: "😬",
  calm: "😌",
  hello: "👋",
  bye: "👋",
  goodnight: "🌙",
  night: "🌙",
  party: "🥳",
  dance: "💃",
  music: "🎵",
  sleep: "😴",
  work: "💼",
  study: "📚",
  sun: "☀️",
  rain: "🌧️",
  snow: "❄️",
  cloud: "☁️",
  fire: "🔥",
  tree: "🌳",
  flower: "🌸",
  pizza: "🍕",
  burger: "🍔",
  coffee: "☕",
  cake: "🍰",
  apple: "🍎",
  beer: "🍺",
  dog: "🐶",
  cat: "🐱",
  bird: "🐦",
  fish: "🐟",
  horse: "🐴",
  phone: "📱",
  laptop: "💻",
  heart: "❤️",
  star: "⭐",
  thumbs_up: "👍",
  thumbs_down: "👎",
  ok_hand: "👌",
  money: "💰",
  gift: "🎁",
  car: "🚗",
  bike: "🚲",
  airplane: "✈️",
  clock: "⏰",
};

export function replaceWithEmojis(input) {
  if (!input) return "";
  const str = input.split(" ");
  let result = "";

  for (let i = 0; i < str.length; i++) {

    result += (str[i].toLowerCase() in emojiMap ? emojiMap[str[i].toLowerCase()] : str[i]) + " ";
  }

  return result;
}

const EmojiReplacer = () => {
  const [text, setText] = useState("");
  const [ans, setAns] = useState("");

  useEffect(() => {
    setAns(replaceWithEmojis(text));
  }, [text]);

  return (
    <div className="app-container">
      <h1>Emoji Replacer</h1>

      <textarea
        placeholder="Type words like 'happy', 'love', 'pizza'..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        data-testid="input-textarea"
        rows={6}
      />

      <div className="button-row">
        <button
          className="clear-btn"
          onClick={() => setText("")}
          data-testid="clear-button"
        >
          Clear Text
        </button>
      </div>

      <h2>Output:</h2>
      <div className="output-box" data-testid="output-box">
        {/* TODO: Render replaced text using replaceWithEmojis */}
        {ans}
      </div>
    </div>
  );
};

export default EmojiReplacer;
