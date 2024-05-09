import React from "react";
import { NavLinks, Hero, Sponser } from "./components";

const App = () => (
  <div className="bg w-full overflow-hidden h-screen">
    <div className="px-6 flex justify-center items-center max-[640px]:px-16">
      <div className="xl:max-w-[1280px] w-full">
        <NavLinks />
      </div>
    </div>
    <div className="bg-gradient w-[20%] h-[30%] absolute z-[2]" />
  </div>
);

export default App;
