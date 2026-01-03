import React, { useState, useRef, useEffect } from "react";
import "./DrawCircles.css";

function DrawCircles() {
  const [circles, setCircles] = useState([]);
  const [undo, setUndo] = useState([]);
  const [redo, setRedo] = useState([]);

  const handleDraw = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setUndo((prev) => [...prev, circles]);
    setCircles((prev) => [...prev, { x, y }]);
  };

  const handleUndo = () => {
    if (undo.length === 0) return;

    const previous = undo[undo.length - 1];

    setRedo((prev) => [...prev, circles]);
    setUndo((prev) => prev.slice(0, -1));
    setCircles(previous);
  };

  const handleRedo = () => {
    if (redo.length === 0) return;

    const next = redo[redo.length - 1];

    setUndo((prev) => [...prev, circles]);
    setRedo((prev) => prev.slice(0, -1));
    setCircles(next);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "z") {
        handleUndo();
      }
      if (e.ctrlKey && e.key === "y") {
        handleRedo();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleUndo, handleRedo]);

  return (
    <div className="circle-drawer">
      <div
        data-testid="drawing-area"
        className="drawing-area"
        onClick={handleDraw}
      >
        {circles.map((circle, index) => (
          <span
            key={index}
            className="circle"
            data-testid="circle"
            style={{
              left: `${circle.x}px`,
              top: `${circle.y}px`,
            }}
          />
        ))}
      </div>
      <div className="buttons">
        <button className="undo-btn" onClick={handleUndo}>
          Undo
        </button>
        <button className="redo-btn" onClick={handleRedo}>
          Redo
        </button>
      </div>
    </div>
  );
}

export default DrawCircles;
