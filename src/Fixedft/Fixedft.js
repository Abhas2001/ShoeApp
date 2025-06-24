import React from 'react'
import centercart from '../../src/images/centercart.svg'
import home from '../../src/images/home.svg'
import heart from '../../src/images/heart.svg'
import {Link, useNavigate} from 'react-router-dom'



const Fixedft = () => {

    
  const navigate = useNavigate();
    const handleCart = () =>{

        navigate("/cart")
     }

    //  const handleHome = () =>{
    //     navigate("/")
    //  }
  return (
   
    <section className='w-full  h-12 bg-[#ffffff] flex justify-evenly items-center fixed bottom-0 p-4'>
        <Link to="/">
      <div >
        <img alt='home' src={home}/>
      </div>
      </Link>
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
