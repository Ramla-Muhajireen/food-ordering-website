import { useEffect, useState } from "react";
import AddDish from "./AddDish";

function DishList({ cart, setCart }) {
  const [dishes, setDishes] = useState([]);

  const loadDishes = () => {
    fetch("http://localhost:9000/api/dishes")
      .then(res => res.json())
      .then(data => setDishes(data));
  };

  useEffect(() => {
    loadDishes();
  }, []);

  const addToCart = (dish) => {
    const existing = cart.find(item => item.dishId === dish.dishId);

    if (existing) {
      setCart(cart.map(item =>
        item.dishId === dish.dishId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...dish, quantity: 1 }]);
    }
  };

  return (
    <>
      <AddDish onDishAdded={loadDishes} />

      <div className="grid">
        {dishes.map(dish => (
          <div className="card" key={dish.dishId}>
            <img
              src={
                dish.image
                  ? `http://localhost:9000/images/${dish.image}`
                  : "https://via.placeholder.com/300"
              }
              alt={dish.dishName}
            />
            <h3>{dish.dishName}</h3>
            <p>Rs. {dish.dishCost}</p>
            <button onClick={() => addToCart(dish)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default DishList;
