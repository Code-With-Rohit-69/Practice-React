import React from "react";

const Card = ({ image, name, Cuisine, rating, reviews }) => {
  return (
    <div
      style={{
        padding: "10px",
        border: "2px solid black",
        borderRadius: "10px",
      }}
    >
      <img
        src={image}
        alt=""
        style={{ width: "100%", height: "150px", borderRadius: "10px" }}
      />
      <h3 style={{ textAlign: "center" }}>{name}</h3>
      <h5>🍴 Cuisine: {Cuisine}</h5>
      <h5>
        ⭐ Rating: {rating} ( {reviews} reviews)
      </h5>
      <button
        style={{
          padding: "10px 15px",
          borderRadius: "10px",
          backgroundColor: "green",
          color: "white",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
