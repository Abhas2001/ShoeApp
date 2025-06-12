import t1 from '../src/images/t1.svg'
import cart from '../src/images/cart.svg'
import hey from '../src/images/hey.svg'
import data from '../src/data.json'

export default function App() {
  



  return (

    <section className="w-full h-screen bg-[#BFD6EB] overflow-hidden">
      <section className='flex justify-between items-center w-full'>
      <img src={t1}/>
      <span className="font-schoolbell text-lg">SNEAKER2SR</span>

      <span>
        <img src={cart}/>
      </span>

      </section>

      <section className='ml-6'>
        <span className='text-[30px]'>
          Hello!
        </span>
      </section>

      <section className='ml-6 mt-4'>
        <input placeholder='Search' className='w-[300px] border-2 px-4 py-[10px] rounded-md border-[#C5C5C5] bg-[#C5C5C5]'/>
      </section>
 

      <section className='mt-4 ml-6 w-full flex gap-40 items-center'>
        <span className='text-[20px] font-extrabold text-[#000000]'>
          Select Brand
        </span>

        <button className='text-[#828282]'>
          View all
        </button>
      </section>

      <section className='ml-6 mt-6 flex gap-4'>
        <div className='w-[130px] h-[50px] rounded-lg border-2 border-[#292929] bg-[#292929] flex justify-center items-center'>
           <span className='font-bold text-[20px] text-[#FFFFFF]'>
            Jordan
           </span>
        </div>
        <div className='w-[130px] h-[50px] rounded-lg border-2 border-[#292929] bg-[#292929] flex justify-center items-center'>
           <span className='font-bold text-[20px] text-[#FFFFFF]'>
          Nike
           </span>
        </div>
      </section>

      <section className='mt-4 ml-6 w-full flex gap-36 items-center'>
        <span className='text-[25px] font-bold text-[#000000]'>
          New Arrival
        </span>

        <button className='text-[#828282]'>
          View all
        </button>
      </section>



      <section className='mt-4 ml-6 flex gap-4 overflow-x-scroll'>

      {Object.values(data).map((value)=>{
        
  if(value.brand==='NIKE'){
    return(
      <section>
      <div className='w-[157px] h-[157px] bg-[#FFFFFF] rounded-md flex justify-center items-center shrink-0'>
      <img className='w-[137px] h-[75px] object-cover'  src={value.imageURL}/>
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
  }

 })
}
      </section>
   

  


    


  
    </section>
  )
}