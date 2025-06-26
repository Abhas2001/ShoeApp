import React, { useContext, useState } from 'react'
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
  const {cartid,count,setcount} = useContext(userContext);


 
 
const handleBack = () =>{
   navigate(-1)
}
 
let arr = Object.values(data).filter((x)=>{
  return(
   cartid.includes(x.id)
  )
})


const handleadd = (name) =>{
  setshoename(name)
   setcount(count + 1)
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
  { arr.map((x)=>{return(

 
      <section className='w-full flex justify-between p-4'>
        <section className='flex gap-[16px]'>
          <div className='flex w-[87px] h-[85px]'>
            <img alt='product' src={x.imageURL}/>
          </div>

          <div className='flex flex-col'>
            <span className='font-bold text-[16px]'>{x.name}</span>
            <span className='font-semibold text-[14px] mt-[4px]'>{x.price}</span>
            <div className='flex gap-3 mt-[3px]'>
            <button  className='w-6 h-6 flex justify-center items-center text-[#828A89] font-extrabold bg-[#fff] rounded-full'>
                  -
            </button>

            <span>
              {shoename===x.name?count:1}
            </span>

            <button onClick={()=>handleadd(x.name)} className='w-6 h-6 flex justify-center items-center  text-white font-extrabold bg-[#5B9EE1] rounded-full'>
              <img alt='plus' src={plus}/>
            </button>
            </div>
          </div>
        </section>

        <section className='flex flex-col justify-center items-center gap-4'>
          <div className='font-bold text-[14px]'>L</div>
          <div>
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
