import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import MenuPage from "./pages/menuPage";
import CartOffCanvas from "./components/cartOffCanvas";

function App() {
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  
  return (
    <>
      <CartOffCanvas cartItems={cartItems} />
      <Header cartCounter={cartItems.length} />
      <MenuPage addToCart={addToCart} />

    </>
  );
}

export default App;
