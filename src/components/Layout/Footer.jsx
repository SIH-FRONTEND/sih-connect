//importing icons
import frame from "../../assets/frame.png";

//importing from React-Router-Dom
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-[#10328C] text-white  flex flex-nowrap sm:gap-0  sm:px-10 justify-around py-20 sm:text-sm  lg:text-lg lg:items-end absolute buttom-0 left-0 right-0">
      <div className="logo">
        <img src={frame} alt="" />
        <ul>Copyright &copy; 2022</ul>
      </div>

      <div className="mid lg:flex  gap-20">
        <ul>
          <Link to="/supportUs ">Terms & Conditions</Link>
        </ul>

        <ul>
          <Link to="/">Become A Member</Link>
        </ul>

        <ul>
          <Link to="/">About Us</Link>
        </ul>
      </div>

      <div className="last lg:flex gap-20">
        <ul>
          <Link to="/">Support Us</Link>
        </ul>

        <ul>
          <Link to="/">Privacy Policy</Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
