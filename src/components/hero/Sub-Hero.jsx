import React from "react";
import { objects } from "./objects";

const SubHeroSection = () => {
  return (
    <div className="bg-[#F6F8FE] py-[20px] px-[30px] grid grid-cols-1 justify-center">
      <h1 className="text-[#1E1E1E] text-[1.8rem] mt-[20px] text-center ">
        Find &nbsp;&nbsp; | &nbsp;&nbsp; connect &nbsp;&nbsp; | &nbsp;&nbsp;
        work &nbsp;&nbsp; | &nbsp;&nbsp; collaborate
      </h1>
      <p className="mb-[2.5rem] px-[22rem] text-center text-[#6B6B6B]">
        All tech creatives with top notch knowledge and awareness in the tech
        space according to their personal niche
      </p>
      <div className="flex justify-center items-end gap-[50px]">
        {objects.map((object) => {
          return <Object {...object} />;
        })}
      </div>
    </div>
  );
};

const Object = ({ image, text }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={image} className='w-[2rem]' />
      <p className="mt-[.3rem] text-[#1E1E1E]">{text}</p>
    </div>
  );
};

export default SubHeroSection;
