import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (dish) => {
    const existing = cart.find(item => item.dishId === dish.dishId);

    if (existing) {
      setCart(
        cart.map(item =>
          item.dishId === dish.dishId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...dish, quantity: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map(item =>
        item.dishId === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map(item =>
          item.dishId === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };


  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar cartCount={cart.reduce((sum, i) => sum + i.quantity, 0)} />
      <Home addToCart={addToCart} />
      <Cart cart={cart} increaseQty={increaseQty} decreaseQty={decreaseQty} />
    </div>
  );
}

export default App;
