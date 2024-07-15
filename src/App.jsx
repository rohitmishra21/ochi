import React from "react";
import Nav from "./Components/Nav";
import Landingpage from "./Components/Landingpage";

function App() {
  return (
    <>
      <div className="w-full h-screen bg-zinc-950 text-white">
        <Nav />
        <Landingpage />
      </div>
    </>
  );
}

export default App;
