//importing components
import Button from "../UI/Button";

//importimg icons
import Starthublogo from "../../assets/starthub_logo.svg";
import { IconContext } from "react-icons";
import { FaSistrix } from "react-icons/fa";
import { RxBell } from "react-icons/rx";
import { RxAvatar } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";

//importing for store actions
import { useSelector } from "react-redux";

//stores the pathname ready for comparison
const REGISTER = "/register";
const LOGIN = "/login";

//importing from react-router-dom
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  //using location to check path to display conditional screen
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <nav className="xl2:px-16 px-2 flex flex-column items-center justify-between h-[6em]">
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
        <div className="flex items-center justify-center gap-2">
          <p className="text-lg font-bold">
            {pathname === LOGIN ? "Not yet a member?" : "Already a Member?"}
          </p>
          <Link to={pathname === LOGIN ? REGISTER : LOGIN}>
            <Button margin="0">
              {pathname === LOGIN ? "Sign Up" : "Sign In"}
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
