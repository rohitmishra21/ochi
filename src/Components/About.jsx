import React from "react";

const About = () => {
  return (
    <>
      <div className="w-full p-20 bg-[#CDEA68] text-black">
      <h1 className="text-black text-[4vw] font-serif leading-none pr-28 mb-20">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell , ideas, and hire great people.
      </h1>
      <div className="border-t-2 border-black pt-10 flex">
        <div className="w-1/2">
          <h1 className="text-6xl capitalize ">our approch :</h1>
           <button className="px-8 py-3 text-stone-50 bg-black uppercase rounded-full mt-5">read more</button>
       </div>
       <div className="w-1/2 h-[70vh] bg-[#7d8f3a] rounded-3xl">
        
       </div>
      </div>
      </div>
    </>
  );
};

export default About;
