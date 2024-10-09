import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { decrementQuantity, incrementQuantity } from "../redux/actions";
import { Minus, PencilIcon, Plus, Trash } from 'lucide-react';

export const ProductCard = ({ product, onDelete }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIncrement = () => {
    dispatch(incrementQuantity(product.id));
  };

  const handleDecrement = () => {
    if (product.quantity > 1) {
      dispatch(decrementQuantity(product.id));
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto">
      <img
        src={product.thumbnail || "/placeholder.svg?height=200&width=300"}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h2>
        <p className="text-3xl font-semibold text-indigo-600 mb-4">
          ${product.price}
        </p>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate(`/update-product/${product.id}`)}
            className="flex items-center justify-center bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out"
          >
            <PencilIcon />
            Update
          </button>
          <button
            onClick={() => onDelete(product.id)}
            className="flex items-center justify-center bg-red-500 text-white py-2 mx-2 px-4 rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
          >
            <Trash />
            Delete
          </button>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={handleDecrement}
            className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out"
            disabled={product.quantity <= 1}
          >
            {/* <MinusIcon className="h-5 w-5" /> */}
            <Minus/>
          </button>
          <span className="text-2xl font-semibold text-gray-800">{product.quantity}</span>
          <button
            onClick={handleIncrement}
            className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out"
          >
            <Plus />
          </button>
        </div>
      </div>
    </div>
  );
};
