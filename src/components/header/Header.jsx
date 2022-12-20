import React, { Fragment } from "react";

//importing from react-router-dom
import { Link } from "react-router-dom";

//importing components
import { buttonData } from "./btnData";
import DefaultBtn from "./DefaultBtn";
import SIHConnect from "../../assets/starthubconnect.png";

const Header = () => {
  return (
    <main className="lg2:grid lg2:grid-cols-[1fr,1fr] flex ">
      <section className="flex flex-col items-start justify-center">
        <div>
          <h1 className="text-5.5xl text-baseBlue font-medium leading-12">
            <b>Connect</b> with <b>techies</b> from all <b>niche</b>
          </h1>
          <p className="font-medium max-w-xl text-xlr text-primary pt-8 pb-10  leading-8 ">
            Collaborate with techies on a project and get things done as a team
            with techies in start innovation hub
          </p>
        </div>
        <div className="flex flex-col items-center">
          {buttonData.map((props, id) => {
            return (
              <Fragment key={id}>
                <Link to="/register">
                  {props.type === "A" && <DefaultBtn {...props} />}
                </Link>
                <Link to="/all-techies">
                  {props.id === 2 && <DefaultBtn {...props} />}
                </Link>
              </Fragment>
            );
          })}
        </div>
      </section>

      <section className="flex items-center justify-center">
        <img src={SIHConnect} className="rounded-full w-[860px]" />
      </section>
    </main>
  );
};

export default Header;
