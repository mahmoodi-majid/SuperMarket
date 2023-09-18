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
  const [addProductsBasket, setProductsBasket] = useState([]);

  let addProducts = (id) => {
    products.filter((products) => {
      let newProduct = {
        id: addProductsBasket.length + 1,
        name: products.name,
        type: products.type,
        Amount: products.Amount,
        Price: products.Price,
        NeedFridge: products.NeedFridge,
        imgSrc: products.imgSrc,
      };
      if (products.id === id) {
        setProductsBasket((prevState) => {
          return [...prevState, newProduct];
        });
      }
    });
  };

  return (
    <>
      <HeaderMain />
      <div className="ShowProducts">
        {products.map((item) => {
          return (
            <ShowProducts
              key={item.id}
              products={item}
              addProducts={addProducts}
            />
          );
        })}
      </div>
    </>
  );
}
