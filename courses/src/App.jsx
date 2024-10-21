import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './comp/navbar'
import Home from './comp/home'
// import { Button } from "./components/ui/button"



const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    </BrowserRouter>
    {/* <Button>btn</Button> */}
    </>
  )
}

export default App