import React, { useEffect, useState } from "react";
import Style from "./style.module.css";

const GridLights2 = () => {
  const [coloredGrid, setColoredGrid] = useState(new Set());
  const [activationOrder, setActivationOrder] = useState([]);
  const [isActivating, setIsActivating] = useState(false);

  const handleReset = () => {
    setColoredGrid(new Set());
    setActivationOrder([]);
  };

  const handleClick = (row, col) => {
    if (isActivating) return;

    const newVal = `${row}-${col}`;

    setColoredGrid((prev) => {
      const set = new Set(prev);
      set.add(newVal);

      return set;
    });

    setActivationOrder((prev) => [...prev, newVal]);
  };

  const handleRemoveActivation = () => {
    const orderCopy = [...activationOrder].reverse();

    orderCopy.forEach((val, index) => {
      setTimeout(
        () => {
          setColoredGrid((prev) => {
            const next = new Set(prev);
            next.delete(val);
            return next;
          });

          if (index === orderCopy.length - 1) {
            setActivationOrder([]);
            setIsActivating(false);
          }
        },
        500 * (index + 1),
      );
    });
  };

  useEffect(() => {
    if (activationOrder.length !== 9) return;

    setIsActivating(true);

    handleRemoveActivation();

    setIsActivating(true);
  }, [activationOrder]);

  return (
    <div>
      <h1 className={Style.heading}>Grid Lights</h1>
      <button onClick={handleReset}>Reset Grid</button>

      <div className={Style.grids}>
        {Array.from({ length: 3 }).map((_, row) =>
          Array.from({ length: 3 }).map((_, col) => {
            let present = coloredGrid.has(`${row}-${col}`);
            return (
              <div
                className={Style.grid}
                onClick={() => handleClick(row, col)}
                style={{
                  backgroundColor: present ? "rgb(56, 160, 56)" : "#e6e6e6",
                }}
                key={`${row}-${col}`}
              ></div>
            );
          }),
        )}
      </div>
    </div>
  );
};

export default GridLights2;
