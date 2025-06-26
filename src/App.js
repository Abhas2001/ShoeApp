import React, { useState,createContext } from 'react'
import Cart from './Cart/Cart';
import Home from './Home/Home';

import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'

export const userContext = createContext();


const App = () => {

  const[cartid,setCarrtid] = useState([])
console.log(cartid);
  return (
    <userContext.Provider value={{cartid,setCarrtid}}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </userContext.Provider>

  )
}

export default App
