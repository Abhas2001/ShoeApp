import React, { useState,createContext } from 'react'
import Cart from './Cart/Cart';
import Home from './Home/Home';
import Detailed from './Detailed/Detailed';

import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'

export const userContext = createContext();


const App = () => {

  const[cartid,setCarrtid] = useState([])
  const[detailedname,setdetailedname] = useState('')
  const[count,setcount] = useState(1);
console.log(detailedname,"detailedname");
  return (
    <userContext.Provider value={{cartid,setCarrtid,setcount,count,setdetailedname,detailedname}}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/detailed' element={<Detailed/>}/>
    </Routes>
    </BrowserRouter>
    </userContext.Provider>

  )
}

export default App
