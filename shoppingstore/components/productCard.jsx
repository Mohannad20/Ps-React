import React from "react";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="border border-black rounded-lg col-">
      <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded" />
      <h2 className="text-xl font-bold mt-2">{product.name}</h2>
      <p className="text-gray-700 mt-1">${product.price}</p>
      <p className="text-sm text-gray-500 mt-1">{product.description}</p>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => navigate(`/update-product/${product.id}`)}
          className="bg-black text-black py-1 px-4 rounded"
        >
          Update
        </button>
        <button
          onClick={() => onDelete(product.id)}
          className="bg-red-500 text-black py-1 px-4 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

