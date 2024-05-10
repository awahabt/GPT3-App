import React, { useState } from "react";
import { logo, menu, close } from "../assets";
import { NavBarLinks } from "../index";

const NavLinks = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <div className="flex w-full py-6 justify-between items-center">
      <div className="flex items-center gap-20">
        <img src={logo} alt="GPT-3" className="w-[100px] h-[32px]" />
        <ul className="list-none gap-10 flex items-center text-white max-[1120px]:hidden">
          {NavBarLinks.map((Links) => (
            <li key={Links.id} className="fontmanrop text-[19px]">
              <a href={"#" + Links.id}>{Links.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex text-white fontmanrop items-center gap-5">
        <div className="max-[535px]:hidden">
          <button type="button" className="mr-5 ">
            Sign In
          </button>
          <button type="button" className="px-6 py-2 rounded-[4px] bg-btn">
            Sign Up
          </button>
        </div>

        <div className=" min-[1120px]:hidden items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[16px] w-[30px] object-contain"
            onClick={() => settoggle((prev) => !prev)}
          />
        </div>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } absolute p-6 bg-black-gradient top-20 right-10 rounded-xl min-w-[170px]`}
        >
          <ul className="list-none items-center text-white">
            {NavBarLinks.map((Links) => (
              <li key={Links.id} className="fontmanrop text-[19px] my-2">
                <a href={"#" + Links.id}>{Links.title}</a>
              </li>
            ))}
            <div className="flex text-white fontmanrop items-center gap-5 min-[535px]:hidden py-2">
              <button type="button">Sign In</button>
              <button type="button" className="px-6 py-2 rounded-[4px] bg-btn">
                Sign Up
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
