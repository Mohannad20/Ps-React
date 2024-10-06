import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { decrementQuantity, incrementQuantity } from "../redux/actions";

export const ProductCard = ({ onDelete }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products=useSelector(state=>state.products.products);

  const { id } = useParams(); // Assuming you're using a product id from the URL

  // Find the product from the Redux store
  // const product = useSelector((state) =>
  //   state.cart.cart.find((item) => item.id === parseInt(id))
  // );

  // if (!product) {
  //   return <div>Product not found</div>;
  // }

  const handleIncrement = () => {
    dispatch(incrementQuantity(product.id));
  };

  const handleDecrement = () => {
    if (product.quantity > 1) {
      dispatch(decrementQuantity(product.id));
    }
  };

  return (
    <div className="border border-black rounded-lg p-4">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded"
      />
      <h2 className="text-xl font-bold mt-2">{product.name}</h2>
      <p className="text-gray-700 mt-1">${product.price.toFixed(2)}</p>
      <p className="text-sm text-gray-500 mt-1">{product.description}</p>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => navigate(`/update-product/${product.id}`)}
          className="bg-black text-white py-1 px-4 rounded"
        >
          Update
        </button>
        <button
          onClick={() => onDelete(product.id)}
          className="bg-red-500 text-white py-1 px-4 rounded"
        >
          Delete
        </button>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleIncrement}
            className="bg-green-500 text-white py-1 px-4 rounded"
          >
            +
          </button>
          <span className="text-lg">{product.quantity}</span>
          <button
            onClick={handleDecrement}
            className="bg-yellow-500 text-white py-1 px-4 rounded"
            disabled={product.quantity <= 1}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};
