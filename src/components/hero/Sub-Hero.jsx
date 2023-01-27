import React from "react";

import minihero1 from "../../assets/icons/minihero1.png";
import minihero2 from "../../assets/icons/minihero2.png";
import minihero3 from "../../assets/icons/minihero3.png";
import minihero4 from "../../assets/icons/minihero4.png";
import minihero5 from "../../assets/icons/minihero5.png";
import minihero6 from "../../assets/icons/minihero6.png";

const objects = [
  {
    image: minihero1,
    text: "Developers",
  },
  {
    image: minihero2,
    text: "Hardware",
  },
  {
    image: minihero3,
    text: "Project Managers",
  },
  {
    image: minihero4,
    text: "Digital Marketers",
  },
  {
    image: minihero5,
    text: "Designers",
  },
  {
    image: minihero6,
    text: "Community Managers",
  },
];

const SubHeroSection = () => {
  const spanClassName = "text-[1em] xl2:text-[2em]";
  return (
    <div className="bg-[#F6F8FE] flex items-center flex-col justify-center gap-[2em] py-[2em]">
      <div className="flex flex-col items-center justify-center">
        <div className="[&>*]:text-[#1E1E1E] flex gap-3">
          <span className={spanClassName}>Find</span>
          <span className={spanClassName}>Connect</span>
          <span className={spanClassName}>Work</span>
          <span className={spanClassName}>Collaborate</span>
        </div>
        <p className="text-center text-[#6B6B6B]">
          All tech creatives with top notch knowledge and awareness in the tech
          space according to their personal niche
        </p>
      </div>
      <div className="flex justify-center items-end gap-[1.5em] flex-wrap ">
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
      <img src={image} className="w-[1rem] xl2:w-[2em]" />
      <p className="mt-[.3rem] text-[#1E1E1E]">{text}</p>
    </div>
  );
};

export default SubHeroSection;
