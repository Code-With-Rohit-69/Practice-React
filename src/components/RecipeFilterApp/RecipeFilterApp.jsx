import React, { useState } from "react";
import Style from "./styles.module.css"; 
import Card from "./Card.jsx";
import recipesData from "./recipesData.js"

const RecipeFilterApp = () => {
  const [data, setData] = useState(recipesData);

  const handleChange = (rate) => {
    setData([...data].filter((recipe, index) => recipe.rating >= rate));
  };

  return (
    <div>
      <h1>🍽️ Recipe Explorer</h1>
      <span>
        <h4>Filter By Rating: </h4>
        <select name="" id="" onChange={handleChange}>
          <option>4.0+</option>
          <option>4.3+</option>
          <option>4.5+</option>
          <option>4.7+</option>
          <option>4.9+</option>
        </select>
      </span>
      <span style={{ marginLeft: "20rem" }}>🛒 Cart items:</span>
      <h1>Average Rating: </h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5rem" }}>
        {data.map((recipe, index) => (
          <Card
            key={recipe.id}
            image={recipe.image}
            name={recipe.name}
            Cuisine={recipe.cuisine}
            rating={recipe.rating}
            reviews={recipe.reviewCount}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeFilterApp;

