import React from "react";
import { possibility } from "../assets";

const Possibility = () => {
  return (
    <div className="flex flex-wrap justify-between items-center fontmanrop my-[100px] max-[1196px]:justify-center max-[730px]:px-[8%] ">
      <div className="w-[550px]">
        <img src={possibility} alt="My App" />
      </div>
      <div className="mt-[100px]">
        <a href="#" className="text-[#71E5FF] text-[16px]">
          Request Early Access to Get Started
        </a>
        <p className="gradient-text my-[10px] text-4xl leading-normal max-w-[470px] font-extrabold max-[401px]:text-2xl">
          The possibilities are beyond your imagination
        </p>
        <p className="max-w-[480px] text-[#81AFDD] fontmanrop my-[30px] font-light">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <a href="#" className="text-[#FF8A71] text-[16px]">
          Request Early Access to Get Started
        </a>
      </div>
    </div>
  );
};

export default Possibility;
