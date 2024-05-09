import React from "react";
import { logo } from "../assets";
import { NavBarLinks } from "../index";

const NavLinks = () => {
  return (
    <div className="flex w-full py-6 justify-between items-center">
      <div className="flex items-center gap-20">
        <img src={logo} alt="GPT-3" className="w-[100px] h-[32px]" />
        <ul className="list-none gap-10 flex items-center text-white">
          {NavBarLinks.map((Links) => (
            <li
              key={Links.id}
              className= "fontmanrop text-[19px]"
            >
              <a href={"#" + Links.id}>{Links.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-white fontmanrop" >
        <button type="button" className="mr-4">Sign In</button>
        <button type="button" className="px-6 py-2 rounded-[4px] bg-btn">Sign Up</button>
      </div>


      
    </div>
  )
}

export default NavLinks;
