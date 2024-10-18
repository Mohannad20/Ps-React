import React from 'react';
import NavbarApp from './navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../components/home';
import { AddProduct } from '../components/addProduct';
// import { UpdateProduct } from '../components/updateProduct';
import { Cart } from '../components/cart';
import SingleProduct from '../components/singleProduct';

const App = () => {
  return (
    <div className="min-h-screen w-full flex flex-col overflow-x-hidden">
      <BrowserRouter>
        <NavbarApp />
        <div className="flex-grow">
          {/* Main Content */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path='/UpdateProduct/:id' element={<UpdateProduct/>}/> */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/AddProduct" element={<AddProduct />} />
            <Route path="/singleProduct/:id" element={<SingleProduct />} />
          </Routes>
        </div>
      </BrowserRouter>

      {/* Footer */}
      <div className="flex justify-center items-center w-full ">
        Shopping Store &copy; {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default App;