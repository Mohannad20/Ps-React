import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './comp/navbar'
import Home from './comp/home'
import { Toaster } from "./components/ui/toaster"

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Toaster/>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    </BrowserRouter>
    {/* <Button>btn</Button> */}
    </>
  )
}

export default App