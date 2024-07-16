import React from 'react'

const Card = () => {
  return (
   <>
   <div className='w-full'>
    <h1 className='font-sans text-6xl p-16 text-black '>Featured projects</h1>
 <div className='w-full border-t-2 border-gray-700 '>
   <div className="card-contaner w-full flex gap-10 px-16 mt-20">
     <div className="card-contaner-1 w-1/2 h-[75vh]  relative  ">
      <div className="card-1 w-full h-full rounded-xl  ">

      <h1 className='text-[#CDEA68] text-[7vw] tracking-tighter font-semibold uppercase absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-10 '>fyde</h1>
       <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt=""  className='w-full h-full object-cover'/>
       </div>
     </div>
     <div className="card-contaner-2 w-1/2 h-[75vh] ">
       <div className="card-2 w-full h-full rounded-xl  relative">
       <h1 className='text-[#CDEA68] text-[7vw] tracking-tighter font-semibold uppercase absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 '>vise</h1>
        <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt=""  className='w-full h-full object-cover'/>
       </div>
     </div>
   
   </div>
   </div>
 </div>
   </>
  )
}

export default Card