//importimg icons
import Starthublogo from "../../assets/starthub_logo.svg";
import { IconContext } from "react-icons";
import { FaSistrix } from "react-icons/fa";
import { RxBell } from "react-icons/rx";
import { RxAvatar } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";

//importing from react-router-dom
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="pl-10 pr-16 py-5 flex flex-column items-center">
      <Link to="/" className="object-cover">
        <img className="" src={Starthublogo} />
      </Link>
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
    </nav>
  );
};

export default Nav;
