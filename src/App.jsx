import React from "react";
import {
  NavLinks,
  Sponser,
  WhatsGPT3,
  Feature,
  Possibility,
  CTA,
  Blog,
  Footer,
} from "./components";
import Header from "./components/Header";


const App = () => (
  <div className="bg w-full overflow-hidden">
    <div className="px-6 flex justify-center items-center max-[640px]:px-16">
      <div className="xl:max-w-[1380px] w-full">
        <NavLinks />
        <Header />
        <Sponser />
        <WhatsGPT3 />
        <Feature />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
    <div className="bg-gradient w-[20%] h-[30%] absolute z-[2]" />
  </div>
);

export default App;
