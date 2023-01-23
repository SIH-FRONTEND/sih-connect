import { useNavigate } from "react-router-dom";

import sihLogo from "../assets/SIH_Blue.png";

const PageNotFound = () => {
  const nagivate = useNavigate();

  const navigateBackHandler = () => {
    nagivate(-1);
  };
  return (
    <div className="grid grid-cols-1 justify-center py-[8rem]">
      <div>
        <h1 className="text-[#10328C] text-center tracking-tight leading-[2rem] text-[20rem] font-medium ">
          4
          <img
            className="inline-block w-[14rem] mt-[3rem] object-contain "
            src={sihLogo}
          />
          4
        </h1>
        <h1 className="text-[3.2rem] font-medium text-center leading-[4rem] pb-[0.5rem]">
          Sorry, something’s missing
        </h1>
      </div>

      <h2
        className="text-[1.46rem] text-center font-semibold text-[#10328C] pb-[9rem]"
        onClick={navigateBackHandler}
      >
        Go back
      </h2>
    </div>
  );
};

export default PageNotFound;
