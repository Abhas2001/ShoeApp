import React, { useState } from 'react'
import Fixedft from '../Fixedft/Fixedft'

const Cart = () => {

  const[userdetails,setuserdetails] = useState({name:"",email:"",age:""})


  function handlechange (key,val) {

    console.log(val);
 setuserdetails(prev =>({...prev,[key]:val}))

 /*key is a variable

[key] tells JavaScript:

“Use the value inside this variable as the key.”*/
  }
  console.log(userdetails);


  return (
    <div className='w-full h-screen flex flex-col gap-2 justify-center items-center'>

     <input onChange={(e)=>handlechange("name",e.target.value)} className="border-2 border-black px-12 py-2"/>
     <input onChange={(e)=>handlechange("email",e.target.value)} className="border-2 border-black px-12 py-2"/>
     <input onChange={(e)=>handlechange("age",e.target.value)} className="border-2 border-black px-12 py-2"/>
     

 
    </div>
  )
}

export default Cart
