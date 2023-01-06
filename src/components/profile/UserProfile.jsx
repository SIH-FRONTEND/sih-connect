import profilePic from "../../assets/profile.png";

//importing from react-router-dom
import { Link } from "react-router-dom";

//importing icons from react-icons
import {
  BsTwitter,
  BsGithub,
  BsFacebook,
  BsLinkedin,
  BsShare,
} from "react-icons/bs";
import { GoLocation } from "react-icons/go";

//importing components
import Button from "../UI/Button";

const UserProfile = (props) => {
  //renders for each Icon row

  const IconsRow = (args) => {
    return (
      <div className="h-10 w-10">
        <Link to={args.linkTo}> {args.children}</Link>
        <p className="text-center text-[12px]">{args.text}</p>
      </div>
    );
  };

  return (
    <div>
      <div
        style={{ border: "2px solid green" }}
        className="w-full xl2:w-[70%] m-auto"
      >
        <div className="">
          <div className="active"></div>
          <div className="h-48 w-48 mt-20">
            <img src={profilePic} className="h-[100%] w-[100%] object-fit" />
          </div>
          <div className="">
            <div className="flex gap-2">
              <h1 className="text-[20px] font-bold">
                Uduak Eno <span className="font-[400]">(6 yrs experience)</span>{" "}
              </h1>
            </div>

            <div>
              <h2 className="text-[20px]">UI & UX Designer</h2>
              <BsShare />
            </div>

            <div className="flex gap-5 mt-2">
              <GoLocation />
              <h2 className="text-[20px]">Uyo, Nigeria</h2>
            </div>
            <div className="flex gap-5 mt-10">
              <Button fontSize="1em" width="12em">
                Edit Profile
              </Button>
              <Button
                fontSize="1em"
                width="12em"
                backgroundColor="#ffffff"
                border="2px solid #10328C"
                color="#10328C"
                hoverColor="#ffffff"
              >
                View Projects
              </Button>
            </div>
          </div>
          <div>
            <div className="mt-32">
              <IconsRow
                text="LinkedIn"
                linkTo={`https://www.linkedin.com/in/mfoniso-ukpabio-865b24207/`}
              >
                <BsLinkedin />
              </IconsRow>

              <IconsRow text="Twitter" linkTo={`https://twitter.com/Mfonisoh1`}>
                <BsTwitter />
              </IconsRow>

              <IconsRow
                text="Facebook"
                linkTo={`https://www.facebook.com/mfoniso.upabio/`}
              >
                <BsFacebook />
              </IconsRow>

              <IconsRow text="Github" linkTo={`https://github.com/AirZED`}>
                <BsGithub />
              </IconsRow>
            </div>
          </div>
        </div>

        <div>
          <h1 className=" font-semibold text-[25px]">Bio</h1>
          <p className=" w-[100%] h-full py-1 px-10  rounded-lg   border-gray-300 text-[#344054] inline-none mb-4  bg-[#F6F8FE]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            laudantium porro iusto alias ipsum, voluptatibus exercitationem
            neque provident at similique dolores, velit placeat quaerat
            explicabo eum quam magni iure sint.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
