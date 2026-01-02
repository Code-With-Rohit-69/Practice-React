import React, { useState } from "react";
import "./QueenBoard.css";

const boardSize = 8;
const dirs = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
  [1, 1],
  [-1, 1],
  [1, -1],
  [-1, -1],
];

export default function QueenBoard() {
  const [hovered, setHovered] = useState([]);
  const [moves, setMoves] = useState(new Set());

  const handleMouseOver = (row, col) => {
    setHovered([row, col]);
    setMoves(() => {
      let newSet = new Set();

      dirs.forEach((dir, _) => {
        let x = row + dir[0];
        let y = col + dir[1];

        while (x >= 0 && x < 8 && y >= 0 && y < 8) {
          newSet.add(`${x}-${y}`);

          x += dir[0];
          y += dir[1];
        }
      });

      return newSet;
    });
  };

  const handleMouseLeave = () => {
    setHovered([]);
    setMoves(new Set());
  };

  return (
    <div className="board" role="grid">
      {Array.from({ length: boardSize }).map((_, row) =>
        Array.from({ length: boardSize }).map((_, col) => {
          const cellColor = (row + col) % 2 === 0 ? "light" : "dark";
          let hover = row === hovered[0] && col === hovered[1] ? "hovered" : "";
          let isHighLighted = moves.has(`${row}-${col}`) ? "queen-move" : "";
          const classes = `cell ${cellColor} ${hover} ${isHighLighted}`;

          return (
            <div
              key={`${row}-${col}`}
              role="gridcell"
              className={classes}
              data-testid={`cell-${row}-${col}`}
              data-row={row}
              data-col={col}
              onMouseOver={() => handleMouseOver(row, col)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="queen-icon">{hover ? "♛" : ""}</span>
            </div>
          );
        })
      )}
    </div>
  );
}
