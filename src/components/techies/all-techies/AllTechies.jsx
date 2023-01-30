//importing supporting components

import TechiesCard from "../TechiesCard";

//import Icons
import { MdArrowDropDown } from "react-icons/md";

const AllTechies = ({ techies }) => {
  //reuseable component
  const DropDownMenu = ({ text }) => {
    return (
      <div className="w-fit gap-[2em] h-[3rem] rounded-[5px] shadow-md text-[1.1rem] px-[1rem] flex justify-between items-center m-[0.5rem]">
        {text}
        <MdArrowDropDown />
      </div>
    );
  };
  return (
    <div className="text-center h-full]">
      <section className="w-full h-[45vh] flex items-center justify-center">
        <article className="font-300 text-[3rem] w-[60%] text-[#10328C]">
          Techies from our hub are top notch with best experience in
          collaboration, and productivity
        </article>
      </section>
      <section className="w-full ">
        <div className=" px-[4rem] flex justify-between">
          <DropDownMenu text={" All Categories"} />
          <DropDownMenu text={"All year(s) of experience"} />
        </div>
        <div className="grid grid-cols-6  gap-[0.5em] p-[1em] px-[4rem] py-[2rem] bg-[#F6F8FE]">
          {techies.map((techie) => (
            <TechiesCard
              profile_image={techie.profile_image}
              firstname={techie.firstname}
              lastname={techie.lastname}
              skills={techie.skills}
              experience_year_count={techie.experience_year_count}
              key={techie.id}
              id={techie.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllTechies;
