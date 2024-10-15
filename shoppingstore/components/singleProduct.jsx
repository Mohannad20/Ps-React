import React from 'react';
import { ShoppingCart, Heart, Star } from 'lucide-react';

const singleProduct = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-96 w-full object-cover md:w-96" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Product image" />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">New Arrival</div>
              <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Wireless Headphones</h2>
              <p className="mt-4 text-xl text-gray-500">Experience crystal-clear audio with our latest wireless headphones. Perfect for music lovers and professionals alike.</p>
              <div className="mt-6 flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="ml-3 text-sm text-gray-600">4.9 (2,394 reviews)</p>
              </div>
              <div className="mt-8">
                <span className="text-3xl font-bold text-gray-900">$299.99</span>
                <span className="ml-2 text-sm text-gray-500">USD</span>
              </div>
              <div className="mt-8 flex space-x-4">
                <button className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200">
                  <ShoppingCart className="inline-block w-5 h-5 mr-2" />
                  Add to Cart
                </button>
                <button className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200">
                  <Heart className="inline-block w-5 h-5 mr-2" />
                  Wishlist
                </button>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-8">
                <h3 className="text-lg font-medium text-gray-900">Product Features</h3>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <span className="h-6 w-6 flex-shrink-0 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3 text-gray-700">Bluetooth 5.0 connectivity</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-6 w-6 flex-shrink-0 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3 text-gray-700">40-hour battery life</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-6 w-6 flex-shrink-0 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3 text-gray-700">Active noise cancellation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default singleProduct;