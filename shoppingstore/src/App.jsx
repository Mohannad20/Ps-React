import React from 'react'
import NavbarApp from './navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../components/home';
import { AddProduct } from '../components/addProduct';
// import { UpdateProduct } from '../components/updateProduct';
import { Cart } from '../components/cart';
import SingleProduct from '../components/singleProduct';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavbarApp/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/UpdateProduct/:id' element={<UpdateProduct/>}/> */}
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/AddProduct' element={<AddProduct/>}/>
        <Route path='/singleProduct' element={<SingleProduct/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App