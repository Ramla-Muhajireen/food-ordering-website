import { IMAGE_URL } from "../services/api";

export default function FoodCard({ dish, addToCart }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
      
      <img
        src={`${IMAGE_URL}${dish.image}`}
        alt={dish.dishName}
        className="h-40 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="font-bold text-lg">{dish.dishName}</h3>
        <p className="text-orange-500 font-semibold">Rs. {dish.dishCost}</p>

        <button
          onClick={() => addToCart(dish)}
          className="mt-3 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
