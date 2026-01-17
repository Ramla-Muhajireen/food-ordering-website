import { useEffect, useState } from "react";
import { getDishes } from "../services/api";
import FoodCard from "../components/FoodCard";

export default function Home({ addToCart }) {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    getDishes().then(setDishes);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-orange-500">
        🔥 Popular Meals
      </h2>

      <p className="mb-6 text-gray-600">
        Freshly cooked. Fast delivery. Happiness guaranteed 🍟
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dishes.map((dish) => (
          <FoodCard
            key={dish.dishId}
            dish={dish}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}
