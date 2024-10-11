import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, deleteProduct } from "../redux/actions"; // Assuming you have a addProduct action to store products in Redux
import { useNavigate } from "react-router-dom";
import { ProductCard } from "./productCard";

export const Home = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch products from API when the component mounts
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        dispatch(addProduct(data.products));  // Dispatch the products array to Redux
        // console.log(data.products);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [dispatch]);
  

  useEffect(() => {
    console.log("Products from Redux Store:", products);  // Log products to check for duplicates
  }, [products]);


  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="container mx-auto py-8 ">
      {/* <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Shopping Store</h1>
        <button
          onClick={() => navigate("/AddProduct")}
          className="bg-blue-500 text-black py-2 px-4 rounded"
        >
          Add Product
        </button>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} onDelete={handleDelete} />
        ))
      ) : (
        <p>No products available</p>
      )}
      {/* {products.length > 0 ? (
      products.map((product, index) => (
        <ProductCard key={`${product.id}-${index}`} product={product} onDelete={handleDelete} />
      ))
    ) : (
      <p>No products available</p>
    )} */}

      </div>
    </div>
  );
};
