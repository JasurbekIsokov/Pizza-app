import React, { useState, useEffect } from "react";
import Card from "./Components/Card";
import Products from "./Components/Products";

function App() {
  const [products, setProducts] = useState([]);
  const [card, setCard] = useState([]);

  const addToCard = (item) => {
    const productList = [...card];
    if (!productList.includes(item)) {
      productList.push(item);
    }
    const index = productList.indexOf(item);
    productList[index].quantity++;
    setCard(productList);

    localStorage.setItem("cart", JSON.stringify(productList));
    alert("Pizza is added", card);
  };

  return (
    <>
      <h1>Assalomu alaykum</h1>
    </>
  );
}

export default App;
