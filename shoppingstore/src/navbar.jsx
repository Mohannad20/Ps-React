import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavbarApp = () => {
  const cart = useSelector(state => state.cart.cart);

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-indigo-600 text-white w-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-xl font-bold">
              <Link to='/'>Shopping store</Link>
            </div>
          </div>
          <div className="hidden md:flex space-x-4">
            {/* <Link className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" to='/'>Home</Link> */}
            <Link className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" to='/AddProduct'>Add</Link>
            <Link className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium relative" to='/cart'>
              Cart
              {totalQuantity > 0 && (
                <span className="absolute top-0 left-11 bg-red-600 text-white rounded-md text-xs w-5 h-5 flex justify-center items-center">
                  {totalQuantity}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarApp;
