export default function CartItem({ item, increaseQty, decreaseQty }) {
  return (
    <div className="flex justify-between items-center mb-3">
      <div>
        <p className="font-semibold">{item.dishName}</p>
        <p className="text-sm text-gray-500">
          Rs. {item.dishCost} × {item.quantity}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => decreaseQty(item.dishId)}
          className="px-2 bg-red-500 text-white rounded"
        >
          −
        </button>

        <span className="font-bold">{item.quantity}</span>

        <button
          onClick={() => increaseQty(item.dishId)}
          className="px-2 bg-green-500 text-white rounded"
        >
          +
        </button>
      </div>
    </div>
  );
}
