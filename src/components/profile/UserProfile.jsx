//importing from react
import { Fragment } from "react";

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
  const { user } = props;
  console.log(user);
  const {
    address,
    bio,
    email,
    facebook_url,
    experience_year_count,
    cover_image,
    firstname,
    lastname,
    instagram_url,
    is_top_member,
    linkdln_url,
    twitter_url,
    profile_image,
    skills,
  } = props.user;

  //renders for each Icon row
  const IconsRow = (args) => {
    return (
      <div className="h-auto w-[fit-content] flex items-center justify-center flex-col">
        <Link to={args.linkTo} className="text-[30px] [&>*]:text-[#10328C]">
          {args.children}
        </Link>
        <p className="text-center text-[14px]">{args.text}</p>
      </div>
    );
  };

  const ProfileImage = (
    <div className="h-[16em] w-[16em] relative">
      <div className="bg-[#6B6B6B] h-7 w-7 border-4 border-solid border-[#fff] rounded-full absolute top-[1em] right-[1.8em]"></div>
      <img
        src={user.profile_image}
        className="h-[100%] w-[100%] object-fit rounded-full border border-black"
      />
    </div>
  );

  const ProfileActions = (
    <div className="flex ">
      <Button fontSize="1em" width="9em" margin=".1em">
        Edit Profile
      </Button>
      <Button
        fontSize="1em"
        width="9em"
        backgroundColor="#ffffff"
        border="2px solid #10328C"
        color="#10328C"
        hoverColor="#ffffff"
        margin=".1em"
      >
        View Projects
      </Button>
    </div>
  );

  const NameSection = (
    <h1 className="text-[20px] font-bold">
      Uduak Eno
      <span className="font-[400]">
        ({user.experience_year_count ? user.experience_year_count : "<1 "}
        yrs experience)
      </span>
    </h1>
  );

  const DetailsSection = (
    <Fragment>
      <h2 className="text-[20px] flex items-center justify-between">
        UI & UX Designer <BsShare size="24" />
      </h2>

      <h2 className="text-[20px] flex items-center ">
        <GoLocation size="24" />
        Uyo, Nigeria
      </h2>
    </Fragment>
  );

  const SocialSection = (
    <div className="grid grid-cols-2 grid-rows-2">
      {user.linkdln_url || (
        <IconsRow
          text="LinkedIn"
          linkTo={
            user.linkdln_url ||
            `https://www.linkedin.com/in/mfoniso-ukpabio-865b24207/`
          }
        >
          <BsLinkedin />
        </IconsRow>
      )}

      {user.linkdln_url || (
        <IconsRow
          text="Twitter"
          linkTo={user.twitter_url || `https://twitter.com/Mfonisoh1`}
        >
          <BsTwitter />
        </IconsRow>
      )}

      {user.facebook_url || (
        <IconsRow
          text="Facebook"
          linkTo={
            user.facebook_url || `https://www.facebook.com/mfoniso.upabio/`
          }
        >
          <BsFacebook />
        </IconsRow>
      )}

      {user.github_url || (
        <IconsRow text="Github" linkTo={`https://github.com/AirZED`}>
          <BsGithub />
        </IconsRow>
      )}
    </div>
  );

  return (
    <div>
      <div
        style={{ border: "2px solid green" }}
        className="w-full xl2:w-[70%] m-auto"
      >
        <div className="flex ">
          {ProfileImage}
          <div className="flex flex-col justify-evenly">
            {NameSection}
            {DetailsSection}
            {ProfileActions}
          </div>
          {SocialSection}
        </div>

        <div>
          <h1 className=" font-semibold text-[25px]">Bio</h1>
          {user.bio}
          {!user.bio && (
            <p className=" w-[100%] h-full py-1 px-10  rounded-lg   border-gray-300 text-[#344054] inline-none mb-4  bg-[#F6F8FE]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              laudantium porro iusto alias ipsum, voluptatibus exercitationem
              neque provident at similique dolores, velit placeat quaerat
              explicabo eum quam magni iure sint.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
