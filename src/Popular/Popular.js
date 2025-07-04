import React, { useContext } from 'react'
import { useBrand } from '../Home/Home'
import data from'../../src/data.json';
import wishlist from '../../src/images/wishlist.svg'
import wishlisted from '../../src/images/wishlisted.webp'

import addcart from '../../src/images/addcart.svg';


import plus from '../../src/images/plus.svg';
import { userContext } from '../App';
import { useNavigate } from 'react-router-dom';


const Popular = () => {

    const {inputval,search,searchedRes,handlewishlist,showloader,finalselected,wishlistarr} = useBrand()
    const {setCarrtid,setdetailedname} = useContext(userContext)
    const navigate = useNavigate()

    console.log("clicked");

    const handleCarts = (name) => {
    
      setCarrtid((prev)=>[...prev,name]);

      console.log("clicked");
      console.log(name);

    }

    const handledetailed = (name) =>{
      setdetailedname(name);
      navigate("/detailed")
    }
    console.log(showloader);
  return (
    <div>
             <section className={`mt-4 ml-6 w-full flex gap-[115px] items-center ${inputval.length>0&&search&&'hidden'}`}>
        <span className='text-[25px] font-bold text-[#000000]'>
          Popular Shoes
        </span>

        <button className='text-[#828282]'>
          View all
        </button>
      </section>


       <section>
        {console.log(searchedRes.length,"LENGTH")}
        {inputval.length>0&&search?
           
        searchedRes.length>0?
         <section className='mt-4 ml-6 flex gap-6 overflow-x-auto'>
                 {searchedRes.map((value)=>{
                  return(
                    <section>
                    <div className='w-[157px] h-[157px] bg-[#f5f5f5] rounded-md flex justify-center items-center shrink-0'>
                    <div onClick={() => handlewishlist(value.name)} className='relative top-[-60px] rounded-full object-cover'>
        { wishlistarr.includes(value.name)?
      <img alt='wishlisted' className='w-10 h-10 mt-2 object-fill rounded-full' src={wishlisted}/>
      :
                        <img alt='wishlist' className='w-10 h-10 mt-2' src={wishlist}/>
        }
                      </div>
                    <img alt='value' className='w-[137px] h-[75px] object-cover'  src={value.imageURL}/>
                  </div>
              
                  <div>
                      <span className='text-[16px] font-medium'>
                        {value.name}
                      </span>
                      <br/>
                      <span className='font-bold text-[18px]'>
                        {`$ ${value.price}`}
                      </span>
                  </div>
                  </section>
                  )
                 })

                 }
         </section>
         :
         <section className='w-full flex justify-center items-center mt-12'> <span className='text-[#FF0000] text-2xl '>No Products Found</span></section>
                
         :

         <section>
    
        
      <section className='mt-4 ml-6 flex gap-6 overflow-x-auto '>

      {Object.values(data).map((value)=>{
        
     
  if(value.brand===finalselected){

  
    return(
   
     
        <section >
      <div className='w-[157px] h-[201px] bg-[#f5f5f5] border-[#fff] rounded-tl-2xl rounded-br-2xl flex flex-col justify-center items-center shrink-0 shadow-lg '>
   <div className='flex'>
    
      <img onClick={()=>handledetailed(value.name)} alt='value' className='w-[137px] h-[75px] object-cover'  src={value.imageURL}/>
      <div onClick={() => handlewishlist(value.name)} className='relative top-[-8px] rounded-full object-cover'>
        { wishlistarr.includes(value.name)?
      <img alt='wishlisted' className='w-10 h-10 mt-2 object-fill rounded-full' src={wishlisted}/>
      :
                        <img alt='wishlist' className='w-10 h-10 mt-2' src={wishlist}/>
        }
                      </div>
    
      </div>
    <div className='mt-6 flex flex-col gap-1'>
      <div className='w-[137px] truncate overflow-hidden whitespace-nowrap '>
        <span  className='text-[16px] font-bold'>
          {value.name}
        </span>
        </div>
        
        <span className='font-medium text-[16px] text-[#FF0000]'>
          {`$ ${value.price}`}
        </span>
        
    </div>
    <div onClick={()=>handleCarts(value.id)} className='w-full flex justify-end relative top-[14px]'>
    <span >
          <img alt='cart'  src={addcart}/>
          <img alt='cart' className='relative top-[-24px] left-[10px]' src={plus}/>
        </span>

        </div>
    </div>
    </section>
  
    )
  }
  return null;

 })
}
      </section>

      </section>
      
}
      </section>
      
    </div>
  )
}

export default Popular
