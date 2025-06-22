import React from 'react'
import { useBrand } from '../App'

const Brands = ['NIKE','Vans','ADIDAS','HUSHPUPPIES']

const Brand = () => {

    const {inputval,selected,handleSelected} = useBrand();
  return (
    <div>
          <section className={`mt-4 ml-6 w-full flex gap-40 items-center ${inputval.length>0&&'hidden'} `}>
        <span className='text-[20px] font-extrabold text-[#000000]'>
          Select Brand
        </span>

        <button className='text-[#828282]'>
          View all
        </button>
      </section>

      <section className={`ml-6 mt-2 flex gap-4 shrink-0 overflow-x-auto ${inputval.length>0&&'hidden'} `}>
        {Brands.map((x)=>{
          return (
            <div onClick={(e)=>handleSelected(e.target.innerText)} className={` w-[130px] h-[50px] rounded-lg border-2 border-[#fff] ${selected===x?'bg-[#292929]':'bg-[#ffffff]'} flex justify-center items-center shrink-0`}>
            <span  className={`font-bold text-[20px] ${selected===x?'text-[#ffffff]':'text-[#9B9B9B]'}`}>

               {x==='HUSHPUPPIES'?'HUSHP':x}
            </span>
         </div>
          )
        })
    
}
      </section>
    </div>
  )
}

export default Brand
