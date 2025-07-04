/* eslint-disable react-hooks/exhaustive-deps */


import React, { useContext, useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom';
import { userContext } from '../App';
import Fixedft from '../Fixedft/Fixedft'
import data from '../data.json'
import back from '../images/back.svg';
import deletes from '../images/delete.png';
import plus from '../../src/images/plus.svg';

const Cart = () => {

  const navigate = useNavigate()
  const[shoename,setshoename] = useState()

  const[additionselects,setadditionselects] = useState([])
  const[cartarr,setcartarr] = useState([]);
  const[valcount,setvalcount] = useState({});
  const {cartid} = useContext(userContext);

 let counts = 1 ;
 console.log(shoename);
const handleBack = () =>{
   navigate(-1)
}
 
let arr = Object.values(data).filter((x)=>{
  return(
   cartid.includes(x.id)
  )
})


// eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(() => {
  setcartarr(arr);
}, []);


function handlecountofelements(varue,arr){
  arr.map((x)=>{
  
     if(x === varue){
        counts++;
     }
   return counts;
   
  })

  setvalcount((prevs) => ({...prevs,[varue]:counts}))
  console.log(counts);

} 

console.log(valcount["Nike React Miler"]);
const handleadd = (name) =>{
  setadditionselects((prev)=>[...prev,name]);
  setshoename(name)
  handlecountofelements(name,additionselects)

}
 
const handleremovecart = (val) =>{
  let final = cartarr.filter((x)=>{
    return(
      x.name!==val
    )
  })


  setcartarr(final);
}


  return (
    <div className='w-full h-screen flex flex-col bg-[#F8F9FA]'>

      <div className='w-full flex justify-between mt-4'>
        <span onClick={()=>handleBack()} className='bg-[#ffffff] rounded-full'>
          <img src={back} alt='back'/>
        </span>
          <span className='text-[#1A2530] font font-bold text-[16px]'>
            My Cart
        </span>

        <span>

        </span>
      </div>
<section className='mt-10'>
  { cartarr.map((x)=>{return(

 
      <section className='w-full flex justify-between p-4'>
        <section className='flex gap-[16px]'>
          <div className='flex w-[97px] h-[95px] rounded-xl shadow-md'>
            <img className='rounded-xl' alt='product' src={x.imageURL}/>
          </div>

          <div className='flex flex-col'>
            <span className='font-bold text-[16px]'>{x.name}</span>
            <span className='font-semibold text-[16px] mt-[6px]'>{'$'+x.price}</span>
            <div className='flex gap-3 mt-[14px]  items-center'>
            <button  className='w-8 h-8 flex justify-center items-center text-[#828A89] font-extrabold bg-[#fff] rounded-full'>
                  -
            </button>

            <span>
              {valcount[x.name]?valcount[x.name]:1}
            </span>

            <button onClick={()=>handleadd(x.name)} className='w-8 h-8 flex justify-center items-center  text-white font-extrabold bg-[#5B9EE1] rounded-full'>
              <img alt='plus' src={plus}/>
            </button>
            </div>
          </div>
        </section>

        <section className='flex flex-col justify-center items-center gap-4'>
          <div className='font-bold text-[18px]'></div>
          <div onClick={()=>handleremovecart(x.name)}>
            <img alt='delete' src={deletes}/>
          </div>
        </section>
      </section>
       )})
}
      </section>

     <Fixedft/>
     

 
    </div>
  )
}

export default Cart
