import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {removeFromCart,incrementQuantity, decrementQuantity} from '../redux/actions';




const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  return (
    <div className="container w-75 my-2">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? ( // Check if the cart is empty
        <div className="alert alert-info" role="alert">
          No products in your cart.
        </div>
      ):<>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <div className="d-flex align-items-center">
                  <button 
                    className="btn btn-outline-danger btn-sm" 
                    onClick={() => dispatch(decrementQuantity(item.id))}
                   // Disable if quantity is 1
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button 
                    className="btn btn-outline-success btn-sm" 
                    onClick={() => dispatch(incrementQuantity(item.id))}
                  >
                    +
                  </button>
                </div>
              </td>
              <td>{(item.price * item.quantity).toFixed(2)}</td>
              <td>
               <button className="btn btn-outline-danger btn-sm" onClick={()=>dispatch(removeFromCart(item.id))}>

                remove
               </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
  
      <div className="text-end">
        <h4>
          Total: {cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
        </h4>
      </div>
      </>}
    </div>
  );
};

export default Cart;
