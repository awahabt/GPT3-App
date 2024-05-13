import React from "react";
import { FeatureLinks } from "../index";

const feature = () => {
  return (
    <div className="flex mt-10 justify-evenly px-[8%] items-center">
      <div className="gap-10">
        <p className="gradient-text text-4xl leading-normal max-w-[470px] font-bold max-[401px]:text-2xl">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </p>
        <a href="#" className="text-[#FF8A71] text-[16px]">
          Request Early Access to Get Started
        </a>
      </div>

      <div className="justify-center">
        {FeatureLinks.map((tit, desc) => (
          <Feature title:{tit.title}/>
        ))}
      </div>
    </div>
  );
};

export default feature;
