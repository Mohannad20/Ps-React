import React from 'react';
import { ShoppingCart, Heart, Star, TagIcon, Trash, Plus, Minus } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from '../redux/actions';

const singleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.products.find((product) => product.id === Number(id)))
  const productInCart = useSelector(state => state.cart.cart.find((product) => product.id === Number(id)))

  const handleRemove = (id) => {
    dispatch(removeFromCart(id))
  }
  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id))
  }
  const handleDecrement = (id) => {
    if(productInCart.quantity > 1){
      dispatch(decrementQuantity(id))
    }else{
      dispatch(removeFromCart(id))
    }
  }

  return (
    <div className="min-h-screen min-w-screen m-0 bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-96 w-full object-cover md:w-96"
                src={product.images[0] || "/placeholder.svg?height=200&width=300"}
                alt={product.title} />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{product.availabilityStatus}</div>
              <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{product.title} </h2>
              <p className="mt-4 text-xl text-gray-500">{product.description}</p>
              <div className="mt-6 flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i + 1 > Math.round(product.rating) ? 'fill-gray-400 text-gray-400' : 'fill-yellow-400 text-yellow-400'} `} />

                  ))}
                </div>
                <p className="ml-3 text-sm text-gray-600">{product.rating} ({product.reviews.length} reviews)</p>
              </div>
              <div className="mt-8">
                <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                <span className="ml-2 text-sm text-gray-500">USD</span>
              </div>
              <div className="mt-8 flex space-x-4">
                {!productInCart ?

                  <button onClick={() => dispatch(addToCart(product))}
                    className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200">
                    <ShoppingCart className="inline-block w-5 h-5 mr-2" />
                    Add to Cart
                  </button>
                  :
                  <>
                    <div className="flex items-center justify-center space-x-4">
                      <button
                        onClick={() => handleDecrement(product.id)}
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
                        onClick={() => handleIncrement(product.id)}
                        className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out"
                      >
                        <Plus />
                      </button>

                      {/* Remove from cart */}
                      <button
                        onClick={() => handleRemove(product.id)}
                        className="bg-red-500 text-white transform focus:scale-100 duration-75 py-2 px-4 rounded-md hover:bg-red-600 transition ease-in-out"
                      >
                        <Trash />
                      </button>
                    </div>
                  </>
                }
                {/* <button className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200">
                  <Heart className="inline-block w-5 h-5 mr-2" />
                  Wishlist
                </button> */}
              </div>
              <div className='flex'>

                <div className="mt-8 border-t border-gray-200 pt-8">
                  <h3 className="text-lg font-medium text-gray-900">Product Informations</h3>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <span className="h-6 w-6 flex-shrink-0 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="ml-3 text-gray-700">Category : {product.category}</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-6 w-6 flex-shrink-0 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="ml-3 text-gray-700"> {product.dimensions.height} height, {product.dimensions.depth} depth, {product.dimensions.width} width</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-6 w-6 flex-shrink-0 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="ml-3 text-gray-700">{product.shippingInformation}</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-6 w-6 flex-shrink-0 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="ml-3 text-gray-700">{product.warrantyInformation}</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-8 ml-36">
                  <h3 className="text-lg font-medium text-gray-900 flex items-center"><TagIcon className='h-5 w-5' /> Tags</h3>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <span className="h-6 w-6 flex-shrink-0 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="ml-3 text-gray-700">#{product.tags[0]}#{product.tags[1]}</span>
                    </li>

                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="bg-white mt-8 shadow-xl rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Customer Reviews</h3>

              {product.reviews.length > 0 ? (
                <div className="space-y-8">
                  {product.reviews.map((reviewer) => (
                    <div key={reviewer.id} className="border-b border-gray-200 pb-8">
                      <div className="flex items-center mb-4">
                        <div className="flex text-yellow-400 mr-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${i + 1 <= Math.round(reviewer.rating)
                                ? 'fill-current text-yellow-400'
                                : 'stroke-current text-gray-300'
                                }`}
                            />
                          ))}
                        </div>
                        <span className="text-gray-600 text-sm">
                          {reviewer.rating} out of 5
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {reviewer.reviewerName}
                      </h4>
                      <p className="text-sm text-gray-500 mb-4">
                        Reviewed on {reviewer.date}
                      </p>
                      <p className="text-gray-700 mb-4">{reviewer.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">No reviews available for this product.</p>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default singleProduct;