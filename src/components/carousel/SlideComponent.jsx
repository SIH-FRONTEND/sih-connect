import React from "react";
import picture1 from "../../assets/profile.png";

import DisplayPhoto from "../techies/DisplayPhoto";

const SlideComponent = ({ image, testimony }) => {
  return (
    <div className=" bg-[#FFFFFF] my-[1em]  flex flex-col items-center justify-center">
      <div className="h-auto mb-[1em] flex items-center justify-center flex-col  ">
        <DisplayPhoto img={picture1} currentStatus={true} />
        <h3 className="font-bold">Janet Phil</h3>
        <p className="text-[#6B6B6B]">Chief Excutive Officer</p>
      </div>
      <p className="w-[100%] h-[auto] text-[.7em] xl2:text-[1.5em] text-center">
        Lorem ipsum dolor sit amet consectetur. Condimentum consectetur leo
        aenean quis eget lectus ut sodales diam. Sit arcu viverra enim aenean
        and osundu ayerika did not just give up his dreams, he was a regular
        dreamer sed in.
      </p>
    </div>
  );
};

export default SlideComponent;
