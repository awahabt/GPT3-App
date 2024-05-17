import React from "react";
import { logo } from "../assets";

const Footer = () => {
  return (
    <div className="bg-[#031B34] fontmanrop flex flex-col justify-center items-center py-10">
      <div className="max-w-[840px] my-10 mx-[8%]">
        <h1 className="gradient-text text-6xl font-extrabold max-[750px]:text-4xl max-[600px]:text-2xl max-[401px]:text-xl text-center ">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="my-[100px]">
        <button className="py-4 px-8  border-2 text-white max-[490px]:text-sm max-[490px]:py-2 max-[490px]:px-4 max-[360px]:text-[10px] max-[360px]:py-1 max-[360px]:px-2">
          Request Early Access
        </button>
      </div>

      <div className="flex w-full flex-wrap justify-evenly my-[50px]  max-[920px]:justify-around gap-10 px-[8%]">
        <div className="mb-10"> 
          <img src={logo} alt="GPT 3" className="mb-6 w-[120px]" />
          <p className="text-white max-w-[168px] text-[12px]">Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className="flex flex-wrap justify-center fontmanrop gap-32">
          <div>
            <p className="text-white font-bold text-sm mb-5">Links</p>
            <ul className="text-[12px] text-dimWhite leading-[40px]">
              <li>Overans</li>
              <li>Social media</li>
              <li>Counters</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <p className="text-white font-bold text-sm mb-5">Company</p>
            <ul className="text-[12px] text-dimWhite leading-[40px]">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="">
            <p className="text-white font-bold text-sm mb-5">Get in touch</p>
            <ul className="text-[12px] text-dimWhite">
              <li className="max-w-[120px] ">Crechterwoord K12 182 DK Alknjkcb</li>
              <li className="leading-[40px]">085-132567</li>
              <li className="leading-[40px]">info@payme.net</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="fontmanrop text-white">© 2021 GPT-3. All rights reserved.</p>
    </div>
  );
};

export default Footer;
