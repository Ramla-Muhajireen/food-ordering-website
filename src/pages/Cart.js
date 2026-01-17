import CartItem from "../components/CartItem";

export default function Cart({ cart, increaseQty, decreaseQty }) {
  const total = cart.reduce(
    (sum, item) => sum + item.dishCost * item.quantity,
    0
  );

  return (
    <div className="fixed right-4 top-24 bg-white w-80 p-4 shadow-xl rounded-xl">
      <h2 className="text-xl font-bold mb-3">🛒 Your Cart</h2>

      {cart.length === 0 && (
        <p className="text-gray-400">Cart is empty</p>
      )}

      {cart.map(item => (
        <CartItem
          key={item.dishId}
          item={item}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
        />
      ))}

      <hr className="my-3" />

      <p className="font-bold text-lg">Total: Rs. {total}</p>

      <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
        Proceed to Checkout
      </button>
    </div>
  );
}
