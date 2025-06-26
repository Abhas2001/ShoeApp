import React, { useContext } from 'react'
import {useNavigate } from 'react-router-dom';
import { userContext } from '../App';
import Fixedft from '../Fixedft/Fixedft'
import data from '../data.json'
import back from '../images/back.svg';

const Cart = () => {

  const navigate = useNavigate()
  const {cartid} = useContext(userContext);

  console.log(cartid);

 
 
const handleBack = () =>{
   navigate(-1)
}
 
let arr = Object.values(data).filter((x)=>{
  return(
   cartid.includes(x.id)
  )
})


console.log(arr); 
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
            <div className='flex gap-3'>
            <button>
                  -
            </button>

            <span>
              1
            </span>

            <button>
              +
            </button>
            </div>
          </div>
        </section>

        <section className='flex flex-col gap-4'>
          <div className='font-bold text-[14px]'>L</div>
          <div>
            delete
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
