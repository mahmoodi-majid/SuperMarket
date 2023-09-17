import React from "react";
import "./ShowproductsStyle.css";
export default function ShowProducts(props) {
 
  return (
    <>
      <div className="ContentBoxProducts">
        <div className="BoxPicproducts">
          <img src= {props.products.imgSrc} alt="" />
        </div>
        <h3>{props.products.name}</h3>
        <button>add To basket</button>
      </div>
    </>
  );
}
