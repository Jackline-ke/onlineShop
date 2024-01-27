import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import Blog from './pages/Blog'
import Cart from './pages/Cart'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='blog' element={<Blog/>}/>
          <Route path='cart' element={<Cart/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App