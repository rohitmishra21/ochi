import React, { useEffect, useState } from 'react'

const Game = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove",(e)=>{
       let mouseX = e.clientX;
       let mouseY = e.clientY;
        
       let deltaX = mouseX - window.innerWidth/2;
       let deltaY = mouseY - window.innerHeight/2;

       var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);

       setRotate(angle - 180)
       
    })
  })
  return (
    <>
    <div className='w-full h-screen'>

        <div className='relative w-full h-screen bg-center bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
            <div className='  absolute top-[50%] left-[50%] -translate-x-[50%]  -translate-y-[50%] flex gap-10'>
               <div className='w-[15vw] h-[15vw] rounded-full bg-white flex justify-center items-center'> 
               <div className='w-[10vw] h-[10vw] rounded-full bg-black relative'> 
                <div style={{ transform:`translate(-50%,-50%) rotate(${rotate}deg) `}} className=" line w-full h-10  absolute top-[50%] left-[50%] -translate-x-[50%]  -translate-y-[50%]">
                     <div className='w-[2vw] h-[2vw] rounded-full bg-white'> </div>
                </div>
              
                </div>
               </div>
               <div className='w-[15vw] h-[15vw] rounded-full bg-white flex justify-center items-center'> 
                
               <div className='w-[10vw] h-[10vw] rounded-full bg-black relative'> 
               <div style={{ transform:`translate(-50%,-50%) rotate(${rotate}deg)` }} 
               className="line w-full h-10  absolute top-[50%] left-[50%] -translate-x-[50%]  -translate-y-[50%]">
                     <div className='w-[2vw] h-[2vw] rounded-full bg-white'> </div>
                </div>
              
                </div>
               </div>
            </div>
        </div>
       
    </div>
    </>
  )
}

export default Game