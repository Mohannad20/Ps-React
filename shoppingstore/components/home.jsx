import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "./productCard";

export const Home = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="container mx-auto py-8 ">
      <div className="flex justify-between items-center bg-black mb-4">
        <h1 className="text-3xl font-bold">Shopping Store</h1>
        <button
          onClick={() => navigate("/AddProduct")}
          className="bg-blue-500 text-black py-2 px-4 rounded"
        >
          Add Product
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

