import React from "react";

const CTA = () => {
  return (
    <div className="flex flex-wrap gap-10 bg-gradients items-center rounded-xl justify-between CTA fontmanrop max-[1080px]:justify-center max-[1080px]:mx-[4%]">
      <div className=" gap-6 max-[1076px]:text-center">
        <a href="#" className="text-black text-[16px]">
        Request Early Access to Get Started
        </a>
        <p className="text-black text-2xl leading-normal font-extrabold max-[401px]:text-2xl">
        Register today & start exploring the endless possiblities.
        </p>
      </div>
      <div>
        <button className="text-[18px] font-bold text-white rounded-[40px] bg-black py-4 px-10">Get Started</button>
      </div>
    </div>
  );
};

export default CTA;
