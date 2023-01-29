//importing icons
import footLogo from "../../assets/logos/whitelogo.svg";

//importing from React-Router-Dom
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-[#10328C] text-white flex flex-nowrap justify-between p-[1em] xl2:p-[4em] lg:items-center h-auto py-[1em] xl2:h-[14em] w-full">
      <div className="flex items-center flex-col ">
        <img src={footLogo} alt="footlogo" className="h-[3em] xl2:h-[6em]" />
        <p className="xl2:text-[1.2em] text-[0.7em]">Copyright &copy; 2022</p>
      </div>

      <div className="flex flex-col items-start xl3:flex-row xl3:gap-[3em] ">
        <Link to="/supportUs" className="xl2:text-[1.2em] text-[0.7em]">
          Terms & Conditions
        </Link>
        <Link to="/" className="xl2:text-[1.2em] text-[0.7em]">
          Become A Member
        </Link>
        <Link to="/" className="xl2:text-[1.2em] text-[0.7em]">
          About Us
        </Link>
      </div>

      <div className="flex flex-col items-start xl3:flex-row xl3:gap-[3em]">
        <Link to="/" className="xl2:text-[1.2em] text-[0.7em]">
          Support Us
        </Link>
        <Link to="/" className="xl2:text-[1.2em] text-[0.7em]">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
