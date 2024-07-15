import React from "react";
import { FaArrowUp } from "react-icons/fa";

function Landingpage() {
  return (
    <>
      <div className="w-full h-screen pt-1 ">
        <div className="mt-40 ">
          {["we create", "eye-opening", "presentation"].map((items, index) => (
            <div className="masker">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <div className=" w-[8vw] h-[6vw] ml-16 relative pr-0 top-[.5vw] bg-slate-700"></div>
                )}
                <h1
                  key={index}
                  className={`${
                    index === 0 || index === 2 ? "ml-16" : ""
                  } text-9xl font-semibold uppercase leading-[8vw] font-sarif tracking-tight`}
                >
                  {items}
                </h1>
              </div>
            </div>
          ))}
        </div>
        <div className="top-footer border-t-[1px] border-white mt-16 flex justify-between items-center ">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((items, index) => (
            <p className="pl-16 pt-4">{items}</p>
          ))}
          <div className="statrt pt-4 flex items-center">
            <p className="px-6 py-2  border-2 border-white rounded-full uppercase">
              start the project{" "}
            </p>
            <div className="px-2 py-2  border-2 border-white rounded-full mx-2 rotate-45 ">
              {" "}
              <FaArrowUp />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landingpage;
