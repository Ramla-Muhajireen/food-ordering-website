export default function Navbar({ cartCount }) {
  return (
    <nav className="bg-orange-500 text-white px-6 py-4 flex justify-between">
      <h1 className="text-xl font-bold">🍔 FastFood</h1>

      <div className="flex gap-4 items-center">
        <a href="/" className="hover:underline">Menu</a>
        <a href="/add" className="hover:underline">Add Food</a>

        <div className="bg-white text-orange-500 px-3 py-1 rounded-full">
          Cart: {cartCount}
        </div>
      </div>
    </nav>
  );
}

