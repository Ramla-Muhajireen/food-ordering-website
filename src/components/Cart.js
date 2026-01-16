function Cart({ cart, setCart }) {
  const removeItem = (id) => {
    setCart(cart.filter(item => item.dishId !== id));
  };

  return (
    <div className="cart">
      <h2>🛒 Cart</h2>

      {cart.map(item => (
        <div key={item.dishId}>
          {item.dishName} - {item.quantity}
          <button onClick={() => removeItem(item.dishId)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
