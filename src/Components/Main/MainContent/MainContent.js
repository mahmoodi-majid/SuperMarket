import React, { useState } from "react";
import HeaderMain from "../HeaderMin/HeaderMain";
import ShowProducts from "../ShowProducts/ShowProducts";
import "./mainContentstyle.css";
export default function MainContent() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "milk",
      type: "Household",
      Amount: 1,
      Price: 100_00,
      NeedFridge: "yes",
      imgSrc: "/IMG/milk.webp",
    },
    {
      id: 2,
      name: "glue",
      type: "Household",
      Amount: 1,
      Price: 200_00,
      NeedFridge: "yes",
      imgSrc: "/IMG/glue.webp",
    },
    {
      id: 3,
      name: "chips",
      type: "Household",
      Amount: 1,
      Price: 300_00,
      NeedFridge: "yes",
      imgSrc: "/IMG/chips.jpg",
    },
    {
      id: 4,
      name: "cheese",
      type: "Household",
      Amount: 1,
      Price: 400_00,
      NeedFridge: "yes",
      imgSrc: "/IMG/cheese.webp",
    },
  ]);
  return (
    <>
      <HeaderMain />
      <div className="ShowProducts">
        {products.map((item) => {
          return <ShowProducts key={item.id} products={item} />;
        })}
      </div>
    </>
  );
}
