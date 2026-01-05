import React, { useState } from "react";
import "./PawnBoard.css"

const boardSize = 8;

export default function PawnBoard() {
  const [hovered, setHovered] = useState([]);
  const [moves, setMoves] = useState(new Set());

  const handleMouseEnter = (row, col) => {
    setHovered([row, col]);
    if (row === 0 || row == boardSize - 1) {
      setMoves(new Set());
      return;
    }

    let newSet = new Set();

    newSet.add(`${row - 1}-${col}`);

    if (row === 6) {
      newSet.add(`${row - 2}-${col}`);
    }

    setMoves(newSet);
  };

  const handleMouseLeave = (row, col) => {
    setHovered([]);
    setMoves(new Set());
  };

  return (
    <div className="board">
      {Array.from({ length: boardSize }).map((_, row) =>
        Array.from({ length: boardSize }).map((_, col) => {
          const isLight = (row + col) % 2 === 0;
          const hover = row === hovered?.[0] && col === hovered?.[1];
          const isMove = moves.has(`${row}-${col}`);

          return (
            <div
              key={`${row}-${col}`}
              role="gridcell"
              className={`cell ${isLight ? "light" : "dark"} ${
                hover ? "hovered" : ""
              } ${isMove ? "pawn-move" : ""}`}
              onMouseEnter={() => handleMouseEnter(row, col)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="pawn-icon">{hover ? "♙" : ""}</span>
            </div>
          );
        })
      )}
    </div>
  );
}
