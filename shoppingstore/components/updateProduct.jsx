import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateProduct } from "../redux/productActions";

export const UpdateProduct = () => {
  const { id } = useParams(); // Get the product ID from the URL parameters
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Select the product from the Redux store using the ID
  const product = useSelector((state) =>
    state.products.products.find((product) => product.id === id)
  );

  const [name, setName] = useState(product?.name || "");
  const [price, setPrice] = useState(product?.price || "");
  const [description, setDescription] = useState(product?.description || "");

  // Redirect if the product is not found
  useEffect(() => {
    if (!product) {
      navigate("/"); // Redirect to home if the product doesn't exist
    } else {
      setName(product.name);
      setPrice(product.price);
      setDescription(product.description);
    }
  }, [product, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        id,
        name,
        price,
        description,
        image: product.image, // Keep the existing image
      })
    );
    navigate("/"); // Redirect to home after updating
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Update Product</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Product Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
          Update Product
        </button>
      </form>
    </div>
  );
}