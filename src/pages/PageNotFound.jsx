//importing from react router dom
import { useNavigate, Link } from "react-router-dom";

// importing starthub logo
import sihLogo from "../assets/logos/hubIcon.svg";

const PageNotFound = () => {
  const nagivate = useNavigate();

  const navigateBackHandler = () => {
    nagivate(-1);
  };
  return (
    <div className="w-full h-[80vh] ">
      <div className="h-auto m-auto flex items-center flex-col mt-[7rem]">
        <div>
          <p className="text-[#10328C] text-[5rem] lg2:text-[8em] xl2:text-[20rem] font-medium flex flex-nowrap items-center h-auto w-fit m-auto font-sans">
            4
            <img className="h-[4rem] lg2:[8em] xl2:h-[16rem]" src={sihLogo} />4
          </p>
          <p className="text-[1.2rem] xl2:text-[3rem] font-medium text-center leading-[4rem] pb-[0.5rem]">
            Sorry, something’s missing
          </p>
        </div>
        <h2
          className="text-[2rem] text-center font-semibold text-[#10328C] cursor-pointer"
          onClick={navigateBackHandler}
        >
          Go back
        </h2>
      </div>
    </div>
  );
};

export default PageNotFound;
