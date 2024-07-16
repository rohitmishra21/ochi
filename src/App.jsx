import React from "react";
import Nav from "./Components/Nav";
import Landingpage from "./Components/Landingpage";
import Second from "./Components/Second";
import About from "./Components/About";
import Game from "./Components/Game";
import Card from "./Components/Card";


function App() {

  return (
    <>
      <div className="w-full h-screen bg-zinc-950 text-white">
        <Nav />
        <Landingpage />
        <Second />
        <About />
        <Game />
        <Card />
      </div>
    </>
  );
}

export default App;
