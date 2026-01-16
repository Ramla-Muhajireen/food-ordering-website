import { useState } from "react";
import DishList from "./components/DishList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="container">
      <h1>🍔 Fast Food Store</h1>
      <DishList cart={cart} setCart={setCart} />
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;

