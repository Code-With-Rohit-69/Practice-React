import React, { useEffect, useState } from "react";
import style from "./ResizableSplitPane.module.css";

const ResizableSplitPane = () => {
  const [leftSize, setLeftSize] = useState(200);
  const [isDragging, setIsDargging] = useState(false);

  const handleMouseDown = () => {
    setIsDargging(true);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;

      const maxWidth = Math.max(100, Math.abs(leftSize - e.clientX));

      setLeftSize(maxWidth);
    };

    const handleMouseUp = () => {
      setIsDargging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div>
      <h1>Resizable Split Pane</h1>
      <div className={style.container}>
        <div className={style.left_pane} style={{ width: `${leftSize}px` }}>
          Left plane
        </div>
        <div className={style.divider} onMouseDown={handleMouseDown}></div>
        <div className={style.right_pane}>Right plane</div>
      </div>
    </div>
  );
};

export default ResizableSplitPane;
