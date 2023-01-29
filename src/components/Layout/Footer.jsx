//importing icons
import footLogo from "../../assets/logos/whitelogo.svg";

//importing from React-Router-Dom
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-[#10328C] text-white flex flex-nowrap justify-between p-[1em] xl2:p-[4em] lg:items-center h-auto py-[1em] xl2:h-[14em] xl2:[&>*>*]:text-[1.1em] w-full">
      <div className="flex items-center flex-col [&>*]:text-[0.5em]">
        <img src={footLogo} alt="footlogo" className="h-[3em] xl2:h-[4em]" />
        <p>Copyright &copy; 2022</p>
      </div>

      <div className="flex flex-col items-start xl3:flex-row xl2:gap-[3em] [&>*]:text-[0.7em] ">
        <Link to="/supportUs ">Terms & Conditions</Link>
        <Link to="/">Become A Member</Link>
        <Link to="/">About Us</Link>
      </div>

      <div className="flex flex-col items-start xl3:flex-row xl2:gap-[3em] [&>*]:text-[0.7em]">
        <Link to="/">Support Us</Link>
        <Link to="/">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
