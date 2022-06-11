import React, { useState, useEffect } from "react";

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
  };

  return (
    <>
      <h1>Assalomu alaykum</h1>
    </>
  );
}

export default App;
