//importing components
import Button from "../UI/Button";

//importing react hooks
import { useState, useRef } from "react";

//importimg icons
import logo from "../../assets/logos/starthub_logo.svg";
import rlogo from "../../assets/logos/hubResponsizeLogo.svg";
import { IconContext } from "react-icons";
import { FaSistrix } from "react-icons/fa";
import { RxBell, RxAvatar } from "react-icons/rx";
import { BiLogIn, BiLogOut } from "react-icons/bi";

import { FiMenu } from "react-icons/fi";

//importing for store actions
import { useSelector } from "react-redux";

//stores the pathname ready for comparison
const REGISTER = "/register";
const LOGIN = "/login";

//importing from react-router-dom
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const searchRef = useRef();
  const [showSearch, setShowSearch] = useState(false);
  const { pathname } = useLocation();

  const { screenSize } = useSelector((state) => state.screenSize);

  //using location to check path to display conditional screen
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const showSearchHandler = () => {
    setShowSearch((prev) => !prev);
  };

  const searchHandler = async (event) => {
    event.preventDefault();
    const searchParam = searchRef.current.value;

    const response = await fetch(
      `https://starthubconnect.adaptable.app/user/filter?search_string=${searchParam}`
    );
    console.log(response);

    // const fetchData = await JSON.parse(response);

    // console.log(fetchData);
  };
  return (
    <nav className="xl2:px-16 px-2 flex flex-column items-center justify-between h-[4em] xl2:h-[5em] fixed right-0 left-0 top-0 bg-white z-[1000]">
      <Link to="/" className="object-cover">
        <img
          src={screenSize > 768 ? logo : rlogo}
          className=" h-[2.5em] xl2:h-[3.5em]"
        />
      </Link>

      <IconContext.Provider
        value={{
          className: "shared-class",
          size: 24,
          style: { cursor: "pointer" },
        }}
      >
        <div className="ml-auto flex gap-10 ">
          <FaSistrix onClick={showSearchHandler} />
          {showSearch && (
            <form
              onSubmit={searchHandler}
              action="submit"
              className="absolute xl2:static top-[6em] border border-solid border-black "
            >
              <input type="text" ref={searchRef} />
              <button type="submit">Search</button>
            </form>
          )}
          {isLoggedIn && (
            <Link to="/notifications" className="lg2:block hidden">
              <RxBell />
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/profile" className="lg2:block hidden">
              <RxAvatar />
            </Link>
          )}
          {isLoggedIn && <FiMenu className="block lg2:hidden" />}
        </div>
      </IconContext.Provider>

      {!isLoggedIn && (
        <div className="flex items-center justify-center gap-2">
          <p className="text-lg font-bold hidden xl:block">
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
