import React from 'react'
import Fixedft from '../Fixedft/Fixedft'
import back from '../images/back.svg';

const Cart = () => {




  return (
    <div className='w-full h-screen flex flex-col bg-[#F8F9FA]'>

      <div className='w-full flex justify-between mt-4'>
        <span className='bg-[#ffffff] rounded-full'>
          <img src={back} alt='back'/>
        </span>
          <span className='text-[#1A2530] font font-bold text-[16px]'>
            My Cart
        </span>

        <span>

        </span>
      </div>

     <Fixedft/>
     

 
    </div>
  )
}

export default Cart
