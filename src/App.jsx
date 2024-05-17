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
  Hero,
} from "./components";

const App = () => (
  <div className="bg w-full overflow-hidden">
    <div className="px-6 flex justify-center items-center max-[640px]:px-16">
      <div className="xl:max-w-[1380px] w-full">
        <NavLinks />
        <Hero />
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
