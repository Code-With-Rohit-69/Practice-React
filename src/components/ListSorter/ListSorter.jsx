import React, { useEffect, useState } from "react";
import Style from "./ListSorter.module.css";

const defaultFruits = [
  "Banana",
  "Apple",
  "Cherry",
  "Mango",
  "Blueberry",
  "Kiwi",
  "Pineapple",
  "Fig",
];

const ListSorter = () => {
    const [order, setOrder] = useState("default");
    const [fruits, setFruits] = useState(defaultFruits);

    const handleChange = (e) => {
        const value = e.target.value;

        setOrder(value);
    };

    const handleFruitsOrder = () => {
        if (order === "length") {
        setFruits([...defaultFruits].sort((a, b) => a.length - b.length));
        return;
        }

        if (order === "a-z") {
        setFruits([...defaultFruits].sort((a, b) => a.localeCompare(b)));
        return;
        }

        if (order === "z-a") {
        setFruits([...defaultFruits].sort((a, b) => b.localeCompare(a)));
        return;
        }

        if (order === "default") {
        setFruits(defaultFruits);
        return;
        }
    };

    useEffect(() => {
        handleFruitsOrder();
    }, [order]);

  return (
    <div data-testid="container">
      <div>
        <h2> List Sorter</h2>
      </div>
      <label htmlFor="sort">Sort By:</label>
      <select id="sort" data-testid="sort-dropdown" onChange={handleChange}>
        <option value="default">Default</option>
        <option value="a-z">A - Z (Alphabetical)</option>
        <option value="z-a">Z - A (Alphabetical)</option>
        <option value="length">Length (Shortest First)</option>
      </select>
      <ul data-testid="list">
        {fruits.map((fruit, _) => (
          <li data-testid="list-item" key={`${fruit}`}>
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListSorter;
