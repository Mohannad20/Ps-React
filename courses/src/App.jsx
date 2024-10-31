import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './comp/navbar'
import Home from './comp/home'
import { Toaster } from "./components/ui/toaster"
import { useSelector } from 'react-redux'
import AddForm from './comp/addForm'
import Signup from './comp/signup'

const App = () => {
  const mode = useSelector(state => state.courses.mode)

  return (
    <div className={`${mode ? '' : 'dark'} bg-background h-full m-0 pt-3`}>
      <BrowserRouter>
        <Navbar />
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addForm" element={<AddForm/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App