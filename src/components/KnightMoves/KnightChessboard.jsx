// KnightChessboard.js
import React, { useState } from "react";
import "./KnightChessboard.css";

const BOARD_SIZE = 8;
const dirs = [
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [1, -2],
  [2, -1],
];

function getKnightMoves(row, col, set) {
  dirs.forEach((dir, index) => {
    let x = dir[0] + row;
    let y = dir[1] + col;

    if (x >= 0 && x < 8 && y >= 0 && y < 8) {
      set.add(`${x}-${y}`);
    }
  });
  
}

const KnightChessboard = () => {
  const [moves, setMoves] = useState(new Set());
  const [hovered, setHovered] = useState([]);

  const handleMouseOver = (row, col) => {
    setHovered([row, col]);
    setMoves(() => {
      let newSet = new Set();
      getKnightMoves(row, col, newSet);
      return newSet;
    });
  };

  const handleMouseLeave = () => {
    setMoves(new Set());
    setHovered([]);
  };

  return (
    <div className="chessboard-grid">
      {Array.from({ length: BOARD_SIZE }).map((_, row) =>
        Array.from({ length: BOARD_SIZE }).map((_, col) => {
          const isLight = (row + col) % 2 === 0;
          let hover = row === hovered[0] && col === hovered[1];
          let contains = moves.has(`${row}-${col}`);

          return (
            <div
              key={`${row}-${col}`}
              data-testid={`cell-${row}-${col}`}
              className={`cell ${isLight ? "light-square" : "dark-square"} ${
                hover ? "selected-square" : ""
              } ${contains ? "knight-move-target" : ""}`}
              onMouseOver={() => handleMouseOver(row, col)}
              onMouseLeave={handleMouseLeave}
            >
              <span>{hover ? "♞" : ""}</span>
            </div>
          );
        })
      )}
    </div>
  );
};

export default KnightChessboard;
