import React from "react";
import { Link } from "react-router-dom";
import sihLogo from "../assets/SIH_Blue.png";

const PageNotFound = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 justify-center py-[8rem]">
        <h1 className="text-[#10328C] text-center tracking-tight leading-[2rem] text-[20rem] font-medium ">
          4
          <i>
            <img
              className="inline-block w-[14rem] mt-[3rem] object-contain "
              src={sihLogo}
            />
          </i>
          4
        </h1>
        <h1 className="text-[3.2rem] font-medium text-center leading-[4rem] pb-[0.5rem]">Sorry, something’s missing</h1>
        <Link to="/" className="text-[1.46rem] text-center font-semibold text-[#10328C] pb-[9rem]" >Go back</Link>
      </div>
    </React.Fragment>
  );
};

export default PageNotFound;
