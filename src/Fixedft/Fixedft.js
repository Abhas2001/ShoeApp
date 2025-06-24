import React from 'react'
import centercart from '../../src/images/centercart.svg'
import home from '../../src/images/home.svg'
import heart from '../../src/images/heart.svg'
import {useNavigate} from 'react-router-dom'



const Fixedft = () => {

    
  const navigate = useNavigate();
    const handleCart = () =>{
        navigate("/cart")
     }

     const handleHome = () =>{
        navigate("/")
     }
  return (
   
    <section className='w-full  h-12 bg-[#ffffff] flex justify-evenly items-center fixed bottom-0 p-4'>
      <div onClick={handleHome}>
        <img alt='home' src={home}/>
      </div>
      <div onClick={handleCart}>
      <img alt='cart' src={centercart}/>
      </div>
      <div>
      <img alt='heart' src={heart}/>
      </div>

    </section>
  )
};

export default Fixedft
