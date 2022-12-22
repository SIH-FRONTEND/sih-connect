import React from "react";

const TechiesCard = ({
  profile_image,
  firstname,
  lastname,
  skills,
  experience_year_count,
}) => {
  return (
    <div>
      <div className=" h-[340px] w-[250px] bg-[#ffffff] shadow relative">
        <div className="py-8 px-5 justify-center items-center text-center">
          <div className="h-24  w-24  absolute left-[3rem] ">
            <img
              src={profile_image}
              className='h-[100%] w-[100%] object-fit" alt="images  rounded-full'
            />
          </div>
          <div className="justify-center items-center text-center pt-[95px]">
            <p className=" flex justify-center items-center text-center font-[Raleway] text[5px] font-[600] leading-[23px] ">
              {firstname + " " + lastname}
            </p>
            <p className="font-[Raleway] text-[16px] font-[500] leading-[23px]  text-[#6B6B6B]  ">
              {skills ? skills : "Skill"}
            </p>
            <p className="font-[Raleway] font-[500] text-[16px] leading-[33px] text-[#6B6B6B] mt-[30px]">
              {experience_year_count ? experience_year_count : "Experience"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechiesCard;
