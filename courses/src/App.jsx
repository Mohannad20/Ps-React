import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './comp/navbar'
import Home from './comp/home'
import { Toaster } from "./components/ui/toaster"
import { useSelector } from 'react-redux'

const App = () => {
  const mode = useSelector(state => state.courses.mode)

  return (
    <div className={`${mode ? '' : 'dark'} bg-background m-0 pt-3 pb-20 `}>
      <BrowserRouter>
        <Navbar />
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      {/* <Button>btn</Button> */}
    </div>
  )
}

export default App