import { useState } from "react";
import api from "../services/api";

export default function AddFood() {
  const [dishName, setDishName] = useState("");
  const [dishCost, setDishCost] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("dishName", dishName);
    formData.append("dishCost", dishCost);
    formData.append("quantity", quantity);
    formData.append("image", image);

    try {
      await api.post("/dishes", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      alert("Food added successfully 🍔");

      setDishName("");
      setDishCost("");
      setQuantity("");
      setImage(null);
      setPreview("");

    } catch (err) {
      alert("Upload failed ❌");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-12 bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-orange-500">
        🍕 Add New Food
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Food name"
          value={dishName}
          onChange={(e) => setDishName(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="number"
          placeholder="Price (Rs)"
          value={dishCost}
          onChange={(e) => setDishCost(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          required
        />

        {preview && (
          <img
            src={preview}
            alt="preview"
            className="w-full h-40 object-cover rounded"
          />
        )}

        <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
          Add Food
        </button>
      </form>
    </div>
  );
}
