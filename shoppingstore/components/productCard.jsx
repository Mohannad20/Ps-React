import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from "../redux/actions";
import { Minus, PencilIcon, Plus, Star, Trash } from 'lucide-react';
import { Link } from "react-router-dom";

export const ProductCard = ({ product, onDelete }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector(state => state.cart.cart);
  const [isReadMore, setIsReadMore] = useState(false)

  const productInCart = cart.find(item => item.id === product.id);

  const handleIncrement = () => {
    dispatch(incrementQuantity(product.id));
  };

  const handleDecrement = () => {
    if (productInCart && productInCart.quantity > 1) {
      dispatch(decrementQuantity(product.id));
    }
  };

  const handleAdd = () => {
    dispatch(addToCart(product));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(product.id));
  };
  const handleReadMore = () => {
    setIsReadMore(!isReadMore)
  }

  return (
    <div className="bg-white h-fit hover:bg-indigo-50 transition duration-300  shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto border-gray-400 border">

      <img
        src={product.images || "/placeholder.svg?height=200&width=300"}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h2>
        <p className="text-3xl font-semibold text-indigo-600 mb-4">
          ${product.price}
        </p>
        <div className="flex">
          <div className="flex items-center space-x-1">
            <div className='flex'>
              {Array(5).fill(null).map((_, pos) => (
                <Star key={pos} className={` ${pos + 1 > Math.round(product.rating) ? 'fill-gray-400 text-gray-400' : 'fill-yellow-400 text-yellow-400'} `} />
              ))}
            </div>
            {product.rating && <>
              <span className="font-bold">{product.rating}</span>
              <span className="text-muted-foreground">({product.reviews.length} reviews)</span>
            </>
            }
          </div>
        </div>
        <p className="text-gray-600 mb-4">{isReadMore ? product.description :
          `${product.description.substring(0, 80)}... `}
          <span onClick={handleReadMore} className="cursor-pointer text-indigo-600 underline">{isReadMore ? 'Read less' : 'Read more'}</span>
        </p>
        {productInCart ? (
          <>
            {/* If product is in the cart, show increment/decrement buttons */}
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={handleDecrement}
                className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out"
                disabled={productInCart.quantity <= 1}
              >
                <Minus />
              </button>

              {/* Show current quantity */}
              <span className="text-2xl font-semibold text-gray-800">
                {productInCart.quantity}
              </span>

              <button
                onClick={handleIncrement}
                className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out"
              >
                <Plus />
              </button>

              {/* Remove from cart */}
              <button
                onClick={handleRemove}
                className="bg-red-500 text-white transform focus:scale-50 duration-50  py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
              >
                <Trash />
              </button>
            </div>
          </>
        ) : (
          <>
            {/* If product is not in the cart, show "Add to cart" button */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={handleAdd}
                className="flex items-center justify-center transform focus:scale-90 duration-800 translate-y-3 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out"
              >
                Add to cart
              </button>

              <button
                onClick={() => navigate(`/singleProduct/${product.id}`)}
                className="flex items-center justify-center transform focus:scale-90 duration-800 translate-y-3 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out"
              >
                {/* <Link to='/singleProduct'> */}
                More details
                {/* </Link> */}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
