import React, { useState } from "react";
import "./GridLights.css";

const GridLights = ({ n }) => {
  const [gridLights, setGridLights] = useState(new Set());

  const handleClick = (row, col) => {
    const cellId = `${row}-${col}`;

    setGridLights((prev) => {
      const newSet = new Set(prev);
      let left = `${row}-${col - 1}`;
      let top = `${row - 1}-${col}`;
      let right = `${row}-${col + 1}`;
      let bottom = `${row + 1}-${col}`;

      if (newSet.has(left)) {
        newSet.delete(left);
      } else {
        newSet.add(left);
      }

      if (newSet.has(top)) {
        newSet.delete(top);
      } else {
        newSet.add(top);
      }

      if (newSet.has(right)) {
        newSet.delete(right);
      } else {
        newSet.add(right);
      }

      if (newSet.has(bottom)) {
        newSet.delete(bottom);
      } else {
        newSet.add(bottom);
      }

      if (newSet.has(cellId)) {
        newSet.delete(cellId);
      } else {
        newSet.add(cellId);
      }

      return newSet;
    });
  };

  return (
    <div>
      <h1 className="text-2xl text-center">Grid Lights</h1>
      <div
        style={{
          gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`,
          width: "fit-content",
        }}
        className={`grids grid gap-1.25 `}
      >
        {Array.from({ length: n * n }).map((_, index) => {
          const row = Math.floor(index / n);
          const col = index % n;

          let isHighLighted = gridLights.has(`${row}-${col}`);

          return (
            <span
              key={`${row}-${col}`}
              className={`border  cursor-pointer flex items-center justify-center w-14 h-14 ${
                isHighLighted ? "bg-[#FFD700]" : "bg-[#dfdfdf]"
              }`}
              onClick={() => handleClick(row, col)}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default GridLights;
