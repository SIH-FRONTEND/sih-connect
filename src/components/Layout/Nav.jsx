//importimg icons
import Starthublogo from "../../assets/starthub_logo.svg";
import { IconContext } from "react-icons";
import { FaSistrix } from "react-icons/fa";
import { RxBell } from "react-icons/rx";
import { RxAvatar } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";

//importing for store actions
import { useSelector } from "react-redux";

const REGISTER = "/register";
//stores the pathname ready for comparison

//importing from react-router-dom
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  //using location to check path to display conditional screen
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <nav className="pl-10 pr-16 py-5 flex flex-column items-center justify-between">
      <Link to="/" className="object-cover">
        <img className="" src={Starthublogo} />
      </Link>
      {isLoggedIn && (
        <IconContext.Provider
          value={{
            className: "shared-class",
            size: 24,
            style: { cursor: "pointer" },
          }}
        >
          <div className="ml-auto flex gap-10 ">
            <FaSistrix />
            <Link to="/notifications" className="lg2:block hidden">
              <RxBell />
            </Link>
            <Link to="/profile" className="lg2:block hidden">
              <RxAvatar />
            </Link>
            <FiMenu className="block lg2:hidden" />
          </div>
        </IconContext.Provider>
      )}
      {!isLoggedIn && (
        <div className="flex items-center justify-center">
          <p className="text-lg font-bold">
            {pathname === REGISTER ? "Not yet a member?" : "Already a Member?"}
          </p>
          <Link
            to={pathname}
            className="text-white w-[170px] h-[53px] mx-[31px] bg-[#10328C] rounded-xl p-[auto] text-base flex items-center justify-center"
          >
            {pathname === REGISTER ? "Sign Up" : "Sign In"}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
