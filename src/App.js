import React from 'react'
import Cart from '../src/Cart/cart'
import Home from '../src/Home/Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/cart' element = {<Cart/>} />
    </Routes>
    </Router>
  )
}

export default App
