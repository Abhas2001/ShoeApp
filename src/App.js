import React from 'react'
import Cart from './Cart/Cart'
import Home from '../src/Home/Home'

import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'

//here above i am writing browserRouter as Router so here Router acts as BrowserRouter only 
//browserrouter is a component from react router when url is / home is rendered here and also the page does not reload 
//these things react handles internally.
//so this means in order to make routes and route to work we need to wrap it inside browser router
//Routes is a wrapper component so basically it wraps route it looks at the current url and renders the matching component


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App
