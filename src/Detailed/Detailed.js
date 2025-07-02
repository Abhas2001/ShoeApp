import React, { useContext, useState } from 'react'
import { userContext } from '../App'

import data from '../data.json';
import {useNavigate } from 'react-router-dom';

const Detailed = () => { 
  

    const {detailedname} = useContext(userContext);
    const navigate = useNavigate()
    const[rotation,setrotation] = useState(0.142);

    console.log(detailedname);

    let detailedarr = 
    Object.values(data).filter((x)=>{
     return(
        x.name===detailedname
     )
    })

    const handleback = () =>{
        navigate(-1);
    }


    const handlerotation = () =>{
        if(rotation===3.142){
                   setrotation(-0.142)
        }
        else{
          setrotation((prev)=>prev+1);
        }
          console.log(rotation);    }
    console.log(detailedarr[0]?.imageURL);

  return (
    <div className='w-full h-screen bg-[#f5f5f5]'>
    
    <button onClick={()=>handleback()}>
        back
    </button>

    <section>
    <div className="bg-[#f5f5f5] p-4 rounded-2xl shadow-inner flex flex-col items-center">
    <img 
  alt="detailedimage"
  src={detailedarr[0]?.imageURL || ''}
  style={{
    transform: `rotateZ(${rotation}rad)`, // rotation in radians (e.g., 3.142 = 180deg)
    transformStyle: 'preserve-3d',
    backfaceVisibility: 'visible' // make sure back face shows if needed
  }}
  className="object-contain scale-[1.02] border border-gray-200"
/>

 
</div>
<div className='w-full flex justify-center items-center'>


  <button onClick={()=>handlerotation()} className='font-bold'>
    rotate
  </button>
  </div>
    </section>
    </div>
  )
}

export default Detailed
