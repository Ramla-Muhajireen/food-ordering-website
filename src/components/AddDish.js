import { useState } from "react";

function AddDish({ onDishAdded }) {
  const [dishName, setDishName] = useState("");
  const [dishCost, setDishCost] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);

  const submitDish = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("dishName", dishName);
    formData.append("dishCost", dishCost);
    formData.append("quantity", quantity);
    formData.append("imageFile", image);

    fetch("http://localhost:9000/api/dishes", {
      method: "POST",
      body: formData
    })
      .then(() => {
        alert("Dish added!");
        onDishAdded();
      });
  };

  return (
    <div className="add-dish">
      <h2>Add New Dish</h2>

      <form onSubmit={submitDish}>
        <input placeholder="Name" onChange={e => setDishName(e.target.value)} />
        <input placeholder="Price" type="number" onChange={e => setDishCost(e.target.value)} />
        <input placeholder="Quantity" type="number" onChange={e => setQuantity(e.target.value)} />
        <input type="file" onChange={e => setImage(e.target.files[0])} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddDish;
