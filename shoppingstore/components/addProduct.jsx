import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

export const AddProduct = () => {
  const [productInfos, setProductInfos] = useState({
    // id: uuid(),
    name: "",
    price: null,
    description: "",
    image: "",
  });
  const [errors, setErrors] = useState({})
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value,} = e.target
    setProductInfos({...productInfos, [name] : value})
  } 
  const handleValidate = () => {
    let isValid = true
    const newErrors = {}

    if (!productInfos.name.trim()) {
      newErrors.name = 'please, give the product a name'
      isValid = false
    }
    if (!productInfos.price || productInfos.price <= 0) {
      newErrors.price = 'The product should have a price'
      isValid = false
    }
    if (!productInfos.description.trim()) {
      newErrors.description = 'Description is required'
      isValid = false
    }
    if (!productInfos.image.trim()) {
      newErrors.image = 'invalid image'
      isValid = false
    }
    setErrors(newErrors)
    return isValid
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({})
    if (handleValidate()) { 
      navigate("/");
      console.log('successfully submited');
      dispatch(addProduct(productInfos))
    }
  };

  return (
    <div className="min-h-screen min-w-screen bg-gray-100 flex justify-center pt-3 ">
      <div className="max-w-md w-full gap-2 space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Add New Product
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="product-name" className="font-semibold">
                Product Name
              </label>
              <input
                id="product-name"
                name="name"
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Product Name"
                value={productInfos.name}
                onChange={handleChange}
              />
            {errors.name && <p className="text-red-600">{errors.name}</p> }
            </div>
            <div>
              <label htmlFor="price" className="font-semibold">
                Price
              </label>
              <input
                id="price"
                name="price"
                type="number"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Price"
                value={productInfos.price}
                onChange={handleChange}
              />
            {errors.price && <p className="text-red-600">{errors.price}</p> }

            </div>
            <div>
              <label htmlFor="description" className="font-semibold">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Description"
                rows="4"
                value={productInfos.description}
                onChange={handleChange}
              />
            {errors.description && <p className="text-red-600">{errors.description}</p> }
            </div>
            <div>
              <label htmlFor="image" className="font-semibold">
                Image
              </label>
              <input
                id="image"
                name="image"
                type="url"
                alt="image"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 "
                placeholder="image url"
                value={productInfos.image}
                onChange={handleChange}
              />
            {errors.image && <p className="text-red-600">{errors.image}</p> }

            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};