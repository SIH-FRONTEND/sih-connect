import React from "react";
import Starthublogo from "../assets/starthub_logo.svg";
("");
import { IconContext } from "react-icons";
import { FaSistrix } from "react-icons/fa";
import { RxBell } from "react-icons/rx";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <React.Fragment>
      <nav className="pl-10 pr-16 py-5 flex flex-column items-center">
        <Link to="/" className="object-cover">
          <img className="" src={Starthublogo} />
        </Link>
        <IconContext.Provider value={{ className: "shared-class", size: 28 }}>
          <div className="ml-auto flex gap-10 ">
            <Link to="/search">
              <FaSistrix style="" />
            </Link>
            <Link to="/notifications">
              <RxBell />
            </Link>
            <Link to="/profile">
              <RxAvatar />
            </Link>
          </div>
        </IconContext.Provider>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
