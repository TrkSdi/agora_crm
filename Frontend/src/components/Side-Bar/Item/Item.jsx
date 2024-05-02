/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Item.css";

const Item = ({ name, image }) => {
  return (
    <div className="item-container">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default Item;
