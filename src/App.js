import t1 from '../src/images/t1.svg'
import cart from '../src/images/cart.svg'

import data from '../src/data.json'
import { useEffect, useState } from 'react'


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
  const Brands = ['NIKE','Vans','ADIDAS','HUSHPUPPIES']
 

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
  x.name.toLocaleLowerCase().includes(inputval)
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

        setHideSuggest(false);
       
        setSearch(true);
        }
        }}
         onChange={(e)=>handleChange(e.target.value)}
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

      <section className={`mt-4 ml-6 w-full flex gap-[115px] items-center ${inputval.length>0&&search&&'hidden'}`}>
        <span className='text-[25px] font-bold text-[#000000]'>
          Popular Shoes
        </span>

        <button className='text-[#828282]'>
          View all
        </button>
      </section>


       <section>
        {inputval.length>0&&search?

        searchedRes.length>0?
         <section className='mt-4 ml-6 flex gap-6 overflow-x-auto'>
                 {searchedRes.map((value)=>{
                  return(
                    <section>
                    <div className='w-[157px] h-[157px] bg-[#f5f5f5] rounded-md flex justify-center items-center shrink-0'>
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
             { !showloader&&
            //  showloader?
            //  <div className='w-full  flex justify-center items-center'>
            //   {/* <img className='w-24 h-24' alt='loader' src={loader}/> */}
            //  </div>
        
      <section className='mt-4 ml-6 flex gap-6 overflow-x-auto '>

      {Object.values(data).map((value)=>{
        
  if(value.brand===finalselected){
    return(
   
     
        <section >
      <div className='w-[157px] h-[201px] bg-[#f5f5f5] border-[#fff] rounded-tl-2xl rounded-br-2xl flex flex-col justify-center items-center shrink-0 shadow-lg '>
      <img alt='value' className='w-[137px] h-[75px] object-cover'  src={value.imageURL}/>
    

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
    </div>
    </section>
  
    )
  }
  return null;

 })
}
      </section>
}
      </section>
      
}
      </section>

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

  


    


  
    </section>
  )
}