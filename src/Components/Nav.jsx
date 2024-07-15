import React from "react";

function Nav() {
  return (
    <>
      <div className="w-full h-20 flex justify-between px-14 items-center fixed z-[999]">
        <div className="logo">
          <h1 className="text-4xl font-medium">ocHi</h1>
        </div>
        <div className="links flex justify-center items-center gap-6 uppercase">
          {["service", "ourwork", "about us", "insights", "contract us"].map(
            (items, index) => (
              <a
                key={index}
                href=""
                className={`text-sm font-semibold ${index === 4 && "ml-40"}`}
              >
                {items}
              </a>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Nav;
