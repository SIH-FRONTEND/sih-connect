import React, { Fragment } from "react";

//importing from react-router-dom
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

//importing from react-redux
import { useSelector } from "react-redux";

//importing components
import Button from "../UI/Button";
import heroIcon from "../../assets/images/heroIcon.svg";

const HeroSection = () => {
  const { screenSize } = useSelector((state) => state.screenSize);
  return (
    <main className="flex flex-col xl2:flex-row items-center xl2:items-center  justify-start px-[4em] py-[2em] h-auto gap-4 ">
      <section className="flex flex-col justify-start items-start h-[80%] flex-1 gap-[3em] ">
        <div className="text-start xl2:w-[90%]">
          <h1 className="xl2:text-[4.5em] text-[2em] text-[#10328c]">
            <b>Connect</b> with <b>techies</b> from all <b>niche</b>
          </h1>
          <p className="font-medium text-[#6B6B6B] xl2:text-[1.3em] text-[1em]">
            Collaborate with techies on a project and get things done as a team
            with techies in start innovation hub
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/register">
            <Button type="button" margin="0">
              Join
              <BsArrowRightShort />
            </Button>
          </Link>

          <Link to="/all-techies">
            <Button
              margin="0"
              type="button"
              border="2px solid #10328c"
              backgroundColor="#ffffff"
              color="#10328c"
              hoverColor="#ffffff"
            >
              {screenSize > 520 ? "View Members" : "Members"}
              <BsArrowRightShort />
            </Button>
          </Link>
        </div>
      </section>

      <section className="flex justify-end w-[20em] xl2:w-[40em] lg2:w-[30em]">
        <img src={heroIcon} className="rounded-full w-full flex-0" />
      </section>
    </main>
  );
};

export default HeroSection;
