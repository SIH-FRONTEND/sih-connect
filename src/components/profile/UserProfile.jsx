import React from "react";
import share from "../../assets/share_icon.png";
import linkedin from "../../assets/linkedin_icon.png";
import twitter from "../../assets/twitter_icon.png";
import facebook from "../../assets/facebook_icon.png";
import gitHub from "../../assets/github_icon.png";
import location from "../../assets/location_icon.png";
import profilePic from "../../assets/profile.png";

const UserProfile = (props) => {
  return (
    <div>
      <div className="container mx-auto">
        <div className=" grid grid-cols-3  content-center text-center">
          <div className="h-48 w-48 mt-20">
            <img
              src={profilePic}
              alt=""
              className="h-[100%] w-[100%] object-fit"
            />
            <h1 className=" font-semibold text-[25px]">Bio</h1>
          </div>
          <div className="mt-20">
            <div className="flex gap-2">
              <h1 className="text-[20px] font-bold">Uduak Eno </h1>
              <h1 className="mt-1 text-[#000000]">(6 yrs experience)</h1>
            </div>

            <div className="flex  gap-12 mt-5">
              <h2 className=" text-[20px] ">UI & UX Designer</h2>
              {/* <div className="h-5 w-5 mt-2">
                <img
                  src={share}
                  alt=""
                  className="h-[100%] w-[100%] object-fit"
                />
              </div> */}
            </div>

            <div className="flex gap-5 mt-2">
              <div className="h-5 w-5 mt-2">
                <img
                  src={location}
                  alt=""
                  className="h-[100%] w-[100%] object-fit"
                />
              </div>
              <h2 className="text-[20px]">Uyo, Nigeria</h2>
            </div>
            <div className="flex gap-5 mt-10">
              <button className="bg-[#10328C] w-[12rem] h-[3rem] font-[Raleway] text-[15px] text-white py-[0.6rem] px-[3rem]  text-center rounded-md hover:bg-[#5d8aa8] transition-colors mb-10">
                Edit profile
              </button>
              <button className="bg-white   w-[12rem] h-[3rem] border-2 border-[#10328C] font-[Raleway] text-[15px] text-[#10328C] py-[0.6rem] px-[3rem] text-center rounded-md hover:bg-[#5d8aa8] transition-colors mb-10">
                View projects
              </button>
            </div>
          </div>
          <div>
            <div className="mt-32">
              <div className="flex justify-around mb-20">
                <div>
                  <div className="h-10 w-10">
                    <img
                      src={linkedin}
                      alt=""
                      className="h-[100%] w-[100%] object-fit"
                    />
                    <p className="text-center text-[12px]">Linkedln</p>
                  </div>
                </div>
                <div>
                  <div className="h-10 w-10">
                    <img
                      src={twitter}
                      alt=""
                      className="h-[100%] w-[100%] object-fit"
                    />
                    <p className="text-center text-[12px]">Twitter</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-around">
                <div>
                  <div className="h-10 w-10">
                    <img
                      src={facebook}
                      alt=""
                      className="h-[100%] w-[100%] object-fit"
                    />
                    <p className="text-center text-[12px]">Facebok</p>
                  </div>
                </div>
                <div>
                  <div className="h-10 w-10">
                    <img
                      src={gitHub}
                      alt="github"
                      className="h-[100%] w-[100%] object-fit"
                    />
                    <p className="text-center text-[12px]">Github</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[100%] h-[200px]  text-center mt-20">
          <input
            className=" w-[100%] h-full py-1 px-10  rounded-lg   border-gray-300 text-[#344054] inline-none mb-4  bg-[#F6F8FE]"
            type="fname"
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...................................
              "
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

// first container
// <div>
//   <img src={profilePic} alt="" />
//   <h1 className="font-semibold text-blue-500">Bio</h1>
// </div>
// second container
// <div>
//   <h1 className=" mt-20 text-center">hello</h1>
//   <div className="">
//     <h2 className="text-re-500">UI & UX Designer</h2>
//     <div className="h-5 w-5">
//       <img
//         src={share}
//         alt=""
//         className="h-[100%] w-[100%] object-fit"
//       />
//     </div>
//     <div className="">
//       <div className="h-5 w-5">
//         <img
//           src={location}
//           alt=""
//           className="h-[100%] w-[100%] object-fit"
//         />
//       </div>
//       <h2 className="text-re-500">Uyo, Nigeria</h2>
//     </div>
//     <div>
//       <div>edit profile</div>
//       <div>View Projects</div>
//     </div>
//   </div>
// </div>
// third container
// <div>thier container</div>
