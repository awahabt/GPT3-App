import React from "react";
import { FeatureLinks } from "../index";

// const Feature = ({title, description})=>(
//   <div>
//     <div className="gradient-div w-14 h-1"/>
//     <h1>{title}</h1>
//     <div>{description}</div>
//   </div>
// )

const feature = () => {
  return (
    <div className="flex gap-16 flex-wrap my-[150px] justify-between fontmanrop max-[1196px]:justify-center max-[730px]:px-[8%]">
      <div className="">
        <p className="gradient-text text-4xl leading-normal max-w-[470px] font-extrabold max-[401px]:text-2xl">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </p>
        <a href="#" className="text-[#FF8A71] text-[16px]">
          Request Early Access to Get Started
        </a>
      </div>

      <div className="justify-center">
        {FeatureLinks.map((tit) => (
          <div className="flex flex-wrap justify-between fontmanrop gap-16 items-center max-[730px]:gap-6">
            <div className="text-white font-bold max-w-[180px] text-xl my-6 max-[401px]:text-xl max-[730px]:mb-0 ">
              <div className="gradient-div w-14 h-1 mb-2" />
              <p className="text-white">{tit.title}</p>
            </div>

            <div className="text-dimWhite max-w-[370px] my-6 max-[730px]:mt-0">{tit.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default feature;
