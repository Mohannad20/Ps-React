import React from 'react'
import NavbarApp from './navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../components/home';
import { cart } from '../components/cart';
import { UpdateProduct } from '../components/updateProduct';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavbarApp/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/UpdateProduct/:id' element={<UpdateProduct/>}/>
        <Route path='/cart' element={<cart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App