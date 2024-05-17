import React from "react";
import { blog01, blog02, blog03, blog04, blog05 } from "../assets";

const ArticleData = ({ image, date, title }) => (
  <div className="w-full h-full flex flex-col bg-[#042C54] ">
    <div className="w-full h-full bg-[#040C18]">
      <img src={image} alt="Blog Image" className="w-full h-full object-fit" />
    </div>
    <div className="flex flex-col text-white fontmanrop py-4 px-6">
      <div>
        <p className=" font-bold text-[11px] leading-[35px] ">{date}</p>
        <h3 className=" text-2xl font-extrabold min-[650px]:mb-8 cursor-pointer max-[650px]:text-[16px] max-[650px]:mb-2">{title}</h3>
      </div>

      <p  className=" font-bold text-[11px] leading-[35px] ">Read Full Article</p>
    </div>
  </div>
);

const Blog = () => {  
  return (
    <div className="fontmanrop  ">
      <div className="">
        <h1 className="gradient-text text-6xl leading-normal max-w-[710px] font-extrabold max-[401px]:text-2xl ">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className=" my-[150px] flex flex-row max-[1050px]:flex-col max-[1050px]:my-8 max-[990px]:mx-0 ">
        <div className=" flex-[0.75] min-[1050px]:mr-8 max-[1050px]:mb-8 max-[650px]:mb-4">
          <ArticleData image={blog01} date={"April 26, 2024"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}/>
        </div>
        <div className="flex-1 grid grid-cols-2 min-[450px]:gap-8 max-[450px]:flex-wrap max-[560px]:grid-cols-1 max-[450px]:gap-4">
        <ArticleData image={blog02} date={"April 26, 2024"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}/>
        <ArticleData image={blog03} date={"April 26, 2024"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}/>
        <ArticleData image={blog04} date={"April 26, 2024"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}/>
        <ArticleData image={blog05} date={"April 26, 2024"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}/>
        </div>
      </div>
    </div>
  );
};

export default Blog;
