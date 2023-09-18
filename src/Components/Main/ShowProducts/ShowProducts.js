import React from "react";
import "./ShowproductsStyle.css";
export default function ShowProducts(props) {
  return (
    <>
      <div className="ContentBoxProducts">
        <div className="BoxPicproducts">
          <img src={props.products.imgSrc} alt="" />
        </div>
        <h3>{props.products.name}</h3>
        <p>{`Price :  ${props.products.Price}`}</p>
        <button
          onClick={() => {
            props.addProducts(props.products.id);
          }}
        >
          add To basket
        </button>
      </div>
    </>
  );
}
