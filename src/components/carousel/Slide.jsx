import React from "react";
import picture1 from "../../assets/profile.png";

const Slide = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <div className="justify-center items-center text-center container  ">
        <div className="h-24  w-24  mx-auto mt-5  ">
          <img
            src={picture1}
            className='h-[100%] w-[100%] object-fit" alt="images  rounded-full'
          />
        </div>
        <h3 className="font-bold">Janet Phil</h3>
        <p className="text-[#6B6B6B]">Chief Excutive Officer</p>

        <p className="w-[1230.35px] h-[46px;]">
          pLorem ipsum dolor sit amet consectetur. Condimentum consectetur leo
          aenean quis eget lectus ut sodales diam. Sit arcu viverra enim aenean
          sed in. Mi vel mauris vehicula sit magna ut non luctus urna. Tortor eu
          arcu ut mauris vel velit netus.
        </p>
      </div>
    </div>
  );
};

export default Slide;
