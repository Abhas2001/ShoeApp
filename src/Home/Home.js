import t1 from '../../src/images/t1.svg'
import cart from '../../src/images/cart.svg'
import data from '../../src/data.json'
import Fixedft from '../Fixedft/Fixedft'

import { useEffect, useState } from 'react'
import Brand from '../Brand/Brand'

import { createContext, useContext } from 'react';
import Popular from '../Popular/Popular'

export const BrandContext = createContext();

export const useBrand = () => useContext(BrandContext);


export default function App() {
  

  const[selected,setSelected] = useState('NIKE');
  const[finalselected,setFinalSelected] = useState('NIKE');
  const[inputval,setInputVal] = useState('');
  const[searchedRes,setSearchedRes] = useState([]);
  const[suggestedRes,setSuggestedRes] = useState([]);
  const[search,setSearch] = useState(false);
  const[hideSuggest,setHideSuggest]=useState(false);
  const[showloader,setshowloader] = useState(false);
  const[bestShoe,setBestShoe] = useState('');
  const[bestshoeprice,setBestshoeprice] = useState();
  const[bestshoeimage,setBestshoeimage] = useState();
  const[wishlistarr,setwishlistarr] = useState([])



  

  console.log(search);

  const handleSelected = (value) =>{

         setshowloader(true);
         console.log(showloader);
         setSelected(value==='HUSHP'?'HUSHPUPPIES':value);
         setTimeout(() => {
          setFinalSelected(value==='HUSHP'?'HUSHPUPPIES':value)
           setshowloader(false);
         }, 2000);
        
    
  }
  

  const handleChange = (x) =>{
    setInputVal(x)
  }

useEffect(()=>{
  if(hideSuggest){
   setSuggestedRes([])
  }
  // setHideSuggest(false);
  if(inputval.length===0){
  setSearch(false)
  }
},[inputval,hideSuggest])

useEffect(()=>{
  setshowloader(true)
   let shoeselected = Object.values(data).filter((x)=>
    x.brand ===  selected
   )
   
   let bestshoeName = shoeselected.filter((x)=>x.featured===1);
 setTimeout(() => {
  setBestShoe(bestshoeName[0]?.name);
  setBestshoeprice(bestshoeName[0]?.price)
  setBestshoeimage(bestshoeName[0]?.imageURL)
  setshowloader(false);
 }, 2000);
  


},[selected])

// autosuggestion
useEffect(()=>{

  let result =  Object.values(data).filter((x)=>
  x.name.toLocaleLowerCase().includes(inputval.toLocaleLowerCase())
)
  
if(search&&inputval.length>0){


    setSearchedRes(result);
  
}

 if(inputval.length>0&&!hideSuggest){
setSuggestedRes(result);
 }
 
 if(inputval.length===0){
  setHideSuggest(false)
 }

    
  },[inputval,hideSuggest,search])



  const handleSearched = (name) =>{
  //autosuggestion
    setHideSuggest(true);
    setInputVal(name.toLocaleLowerCase())
    setSearch(true)
  }


 const handlewishlist = (value) =>{
  console.log(value);
  console.log(wishlistarr.indexOf(value));
  let indextoremove = wishlistarr.indexOf(value)
       if(wishlistarr.indexOf(value)!==-1){
        console.log(indextoremove,"running");
        let newarr =  wishlistarr.filter((x)=>{
          return(
            x!==value
          )
          })
      
     setwishlistarr(newarr);
       }
       else{
  setwishlistarr((prev)=>[...prev,value])
       }
              
   
 } 



  return (

    <section className="w-full h-screen bg-[#F8F9FA] overflow-y-auto overflow-x-hidden ">
      <section className='flex justify-between items-center w-full'>
      <img alt='banner' src={t1}/>
      <span className="font-schoolbell text-lg">SNEAKER2SR</span>

      <span className='mr-4'>
        <img alt='cart' src={cart}/>
      </span>

      </section>

      <section className='ml-6 flex'>
        <span className='text-[30px]'>
          Hello!
        </span>

      
      
      </section>

      <section className='ml-6 mt-4'>
        <input    onKeyDown={(e) => {
        if (e.key === "Enter"){

        setHideSuggest(true);
       
        setSearch(true);
        }

      
        }}
         onChange={(e)=>handleChange(e.target.value.trimStart())}
          placeholder={inputval.length===0?'Looking for Shoes':{inputval}}
          value={inputval}
          
           className='w-[355px] border-2 px-4 py-[15px] rounded-3xl border-[#C5C5C5] bg-[#FFFFFF]'/>
          {/* autosuggestion */}

        <section className={`${suggestedRes.length>0&&inputval.length>0?'h-[150px] overflow-y-auto':'h-[0px]'}`}>
           {inputval.length>0&&!hideSuggest&&suggestedRes.map((x)=>{
            return(
              <div onClick={(e)=>handleSearched(e.target.innerText)}  className={` w-[355px] truncate overflow-hidden whitespace-nowrap border-2 px-4 py-[10px] rounded-md  bg-[#ffffff]`}>
                <span>
                {x.name}
                </span>

               
              </div>
            )
           })
          
         
}
</section>
      </section>
 
      <BrandContext.Provider
  value={{
    inputval,
    selected,
    handleSelected,
    handlewishlist,
    search,
    searchedRes,
    showloader,
    finalselected,
    wishlistarr
  }}
>
  <Brand />
  <Popular />
</BrandContext.Provider>

      <section className={`ml-6 mt-6 w-full flex gap-[130px] items-center ${inputval.length>0&&search&&'hidden'}`}>
        <span className='text-[25px] font-bold text-[#000000]'>
         New Arrivals
        </span>

        <button className='text-[#828282]'>
          View all
        </button>
      </section>
         
           { !showloader&& !search &&
         <section className='ml-5 mt-3' >
         <div className='w-[375px] h-[171px] bg-[#f5f5f5] border-[#fff]  rounded-2xl flex gap-[50px] justify-center items-center shrink-0 shadow-lg px-5 '>
           <div className='flex flex-col'>
            <span className='text-[#5BA5E1] font-medium'>Best Choice</span>
            <span className='text-[#1A2530] font-medium text-[20px] text-nowrap'>{bestShoe}</span>
            <span className='mt-2 text-[#1A2230] font-medium text-[16px]'>{`$${bestshoeprice}`}</span>
           </div>
           <div>
            <img alt='text' className='w-[137px] h-[75px] shadow-2xl  object-cover' src={bestshoeimage} />
           </div>
          </div>

         </section>
}

  
<Fixedft/>


  
    </section>
  )
}