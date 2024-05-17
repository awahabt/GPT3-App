import React from 'react'
import { ai, people } from "../assets";

const Hero = () => {
  return (
    <div className=" flex-wrap min-[1386px]:flex min-[1386px]:justify-between max-[1386px]:items-center main-div ">
    <div className="fontmanrop mt-16 max-[1386px]:w-[100%] max-[1386px]:text-center min-[1386px]:w-[600px] max-[1386px]:items-center">
      <h1 className="gradient-text max-[1386px]:text-center max-[471px]:text-[30px] text-6xl leading-normal  font-extrabold">
        Let's Build Something amazing with GPT-3 OpenAI
      </h1>
      <p className="text-dimWhite text-[20px] max-[1386px]:text-center mt-10">
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy
        alteration boisterous the attachment. Party we years to order allow
        asked of.
      </p>
      <div className="mt-8 max-[601px]:flex-wrap max-[601px]:flex-column input-div">
        <form className="flex">
          <input
            className="input"
            type="email"
            placeholder="Your Email Address"
          />
          <button className="button" type="submit">
            Get Started
          </button>
        </form>
      </div>

      <div className="flex items-center text-white mt-8 max-[1386px]:flex-wrap max-[1386px]:justify-center max-[1386px]:gap-6">
        <img src={people} alt="people" />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>
    <div className="ai-img">
      <img src={ai} alt="AI-Logo" className=" w-[660px] " />
    </div>
  </div>
  )
}

export default Hero
