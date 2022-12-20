import React from "react";
import picture1 from "../../assets/profile.png";

const Slide = () => {
  return (
    <div className="bg-[#FFFFFF] my-[16px] w-[100%] flex flex-col items-center justify-center">
      <div className=" flex flex-col justify-center items-center text-center container w-[100%]">
        <div className="h-auto mb-[32px] flex items-center justify-center flex-col  ">
          <img
            src={picture1}
            className='h-[100px] w-[100px]" alt="images rounded-full'
          />
          <h3 className="font-bold">Janet Phil</h3>
          <p className="text-[#6B6B6B]">Chief Excutive Officer</p>
        </div>

        <p className="w-[100%] h-[auto]">
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
