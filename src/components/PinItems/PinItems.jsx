import React, { useState } from "react";
import style from "./PinItems.module.css";

export default function PinItems() {
  const [items, setItems] = useState([
    { id: 1, text: "Buy groceries", pinned: false },
    { id: 2, text: "Call Alice", pinned: false },
    { id: 3, text: "Meeting with Bob", pinned: false },
    { id: 4, text: "Pay electricity bill", pinned: false },
    { id: 5, text: "Read a book", pinned: false },
    { id: 6, text: "Go for a walk", pinned: false },
    { id: 7, text: "Fix bug #234", pinned: false },
    { id: 8, text: "Review pull requests", pinned: false },
  ]);

  const handleCheckbox = (id) => {
    setItems((prev) => {
      const updatedItems = prev.map((item, _) =>
        item.id === id ? { ...item, pinned: !item.pinned } : item,
      );

      return updatedItems.sort((a, b) => {
        if (a.pinned !== b.pinned) {
          return a.pinned ? -1 : 1;
        }
        return a.id - b.id;
      });
    });
  };

  return (
    <div className={style.container} data-testid="app-container">
      <h3 data-testid="main-title">Pin Items To Top</h3>
      <ul data-testid="item-list">
        {items.map((item) => (
          <li key={item.id} className={item.pinned ? style.pinned : ""}>
            <label>
              <input
                type="checkbox"
                data-testid={`pin-checkbox-${item.id}`}
                onChange={() => handleCheckbox(item.id)}
              />
              {item.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
