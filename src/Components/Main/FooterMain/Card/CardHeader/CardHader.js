import React from "react";
import "./cardHeaderStyle.css";

export default function CardHader() {
  return (
    <div className="cardHeader">
      <div className="cardTitle">
        <h1>Cart</h1>
      </div>
      <div className="cardTitleItem">
        <span className="cartNvbar cardItem">Item</span>
        <span className="cartNvbar cardPrice">Price</span>
        <span className="cartNvbar cardQuantty">Quantty</span>
      </div>
    </div>
  );
}
