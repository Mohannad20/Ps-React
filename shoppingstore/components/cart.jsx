import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../redux/actions';

export const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto w-3/4 mt-2 spa">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4" role="alert">
          <p className="font-bold">Info</p>
          <p>No products in your cart.</p>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 text-left">Product</th>
                  <th className="py-2 px-4 text-left">Price</th>
                  <th className="py-2 px-4 text-left">Quantity</th>
                  <th className="py-2 px-4 text-left">Total</th>
                  <th className="py-2 px-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2 px-4">{item.title}</td>
                    <td className="py-2 px-4">${item.price.toFixed(2)}</td>
                    <td className="py-2 px-4">
                      <div className="flex items-center space-x-2">
                        <button 
                          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 disabled:opacity-50"
                          onClick={() => dispatch(decrementQuantity(item.id))}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                          className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                          onClick={() => dispatch(incrementQuantity(item.id))}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-2 px-4">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="py-2 px-4">
                      <button 
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-right mt-4">
            <h4 className="text-xl font-bold">
              Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
            </h4>
          </div>
        </>
      )}
    </div>
  );
};