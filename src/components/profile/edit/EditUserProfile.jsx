import profilePic from "../../../assets/profile2.png";
import radioIcon from "../../../assets/radio_button.png";

//importing components
import DisplayPhoto from "../../techies/DisplayPhoto";

//importing from react-icons
import { TbCameraPlus } from "react-icons/tb";

const EditUserProfile = () => {
  return (
    <div className=" flex justify-around flex-col xl2:flex-row ">
      <div className="">
        <div className=" flex justify-center content-center text-center">
          <DisplayPhoto img={profilePic} />

          <TbCameraPlus />
        </div>
        <div className="flex  justify-center content-center text-center gap-3">
          <h2 className="font-semibold font-[Raleway]">Availability</h2>

          <div className="h-3  w-3  mt-2">
            <img
              src={radioIcon}
              alt="radio-icon"
              className='h-[100%] w-[100%] object-fit" alt="images  rounded-full'
            />
          </div>
        </div>
        <h3 className="font-bold">Bio</h3>
        <textarea
          className=" bg-[#F6F8FE] w-[30rem] h-[8rem]  text-center text-[12px] text-[#6B6B6B] rounded-lg p-2  mt-1"
          id="txtid"
          name="txtname"
          rows="4"
          cols="50"
          maxLength={"200"}
          dafaultvalue=" type here....... max of 300 characters"
        ></textarea>

        <div className=" mt-10">
          <label className="text-[#344054] flex text-start    font-[400] text-[17px] ">
            View Project (porfolio link)
          </label>
          <input
            className=" w-[30rem] h-[45px] py-1 rounded-md  border-gray-300  px-2 inline-none mb-4  bg-[#F6F8FE]   text-[10px] text-[#B8B8B8]"
            type="text"
            placeholder="paste project link here "
          />
        </div>

        <button className=" w-[30rem] h-[45px] flex justify-center items-center  content-center bg-[#10328C] font-[Raleway]  text[20px] text-white py-[0.6rem] px-[3rem]  rounded-md  hover:bg-[#5d8aa8] transition-colors mb-10">
          Save changes
        </button>
      </div>

      {/* Right Side */}
      <div>
        <div className="flex justify-evenly mt-1 gap-5">
          <div className="">
            <label className="text-[#344054] flex text-start    font-[400] text-[17px] ">
              First name
            </label>
            <input
              className="w-72 h-[45px] py-1 rounded-md  border-gray-300  px-2 inline-none mb-4  bg-[#F6F8FE]   text-[10px] text-[#B8B8B8]"
              type="text"
              placeholder="type here "
            />
          </div>
          <div className="">
            <label className="text-[#344054] flex text-start    font-[400] text-[17px] ">
              Last name
            </label>
            <input
              className="w-72 h-[45px] py-1 rounded-md  border-gray-300  px-2 inline-none mb-4  bg-[#F6F8FE]   text-[10px] text-[#B8B8B8]"
              type="text"
              placeholder="type here "
            />
          </div>
        </div>

        <div className="flex justify-evenly mt-1 gap-5">
          <div className="">
            <label className="text-[#344054] flex text-start    font-[400] text-[17px] ">
              User name
            </label>
            <input
              className="w-72 h-[45px] py-1 rounded-md  border-gray-300  px-2 inline-none mb-4  bg-[#F6F8FE]   text-[10px] text-[#B8B8B8]"
              type="text"
              placeholder="type here "
            />
          </div>
          <div className="">
            <label className="text-[#344054] flex text-start    font-[400] text-[17px] ">
              Email
            </label>
            <input
              className="w-72 h-[45px] py-1 rounded-md  border-gray-300  px-2 inline-none mb-4  bg-[#F6F8FE]   text-[10px] text-[#B8B8B8]"
              type="email"
              placeholder="type here "
            />
          </div>
        </div>
        <div className="flex justify-evenly mt-1 gap-5">
          <div className="">
            <label className="text-[#344054] flex text-start    font-[400] text-[17px] ">
              Phone number
            </label>
            <input
              className="w-72 h-[45px] py-1 rounded-md  border-gray-300  px-2 inline-none mb-4  bg-[#F6F8FE]   text-[10px] text-[#B8B8B8]"
              type="tel"
              placeholder="type here "
            />
          </div>
          <div className="">
            <label className="text-[#344054] flex text-start    font-[400] text-[17px] ">
              Gender
            </label>
            <input
              className="w-72 h-[45px] py-1 rounded-md  border-gray-300  px-2 inline-none mb-4  bg-[#F6F8FE]   text-[10px] text-[#B8B8B8]"
              type="text"
              placeholder="male "
            />
          </div>
        </div>
        <div className="flex justify-evenly mt-1 gap-5">
          <div className="">
            <label className="text-[#344054] flex text-start    font-[400] text-[17px] ">
              Address
            </label>
            <input
              className="w-72 h-[45px] py-1 rounded-md  border-gray-300  px-2 inline-none mb-4  bg-[#F6F8FE]   text-[10px] text-[#B8B8B8]"
              type="text"
              placeholder="type here "
            />
          </div>
          <div className="">
            <label className="text-[#344054] flex text-start    font-[400] text-[17px] ">
              Years of experience
            </label>
            <input
              className="w-72 h-[45px] py-1 rounded-md  border-gray-300  px-2 inline-none mb-4  bg-[#F6F8FE]   text-[10px] text-[#B8B8B8]"
              type="email"
              placeholder="type here "
            />
          </div>
        </div>
        <div className="flex justify-evenly mt-1 gap-5">
          <div className="">
            <label className="text-[#344054] flex text-start    font-[400] text-[17px] ">
              Linkedin
            </label>
            <input
              className="w-72 h-[45px] py-1 rounded-md  border-gray-300  px-2 inline-none mb-4  bg-[#F6F8FE]   text-[10px] text-[#B8B8B8]"
              type="text"
              placeholder="paste link here "
            />
          </div>
          <div className="">
            <label className="text-[#344054] flex text-start    font-[400] text-[17px] ">
              Github
            </label>
            <input
              className="w-72 h-[45px] py-1 rounded-md  border-gray-300  px-2 inline-none mb-4  bg-[#F6F8FE]   text-[10px] text-[#B8B8B8]"
              type="text"
              placeholder="paste link here "
            />
          </div>
        </div>
        <div className="flex justify-evenly mt-1 gap-5">
          <div className="">
            <label className="text-[#344054] flex text-start    font-[400] text-[17px] ">
              Facebook
            </label>
            <input
              className="w-72 h-[45px] py-1 rounded-md  border-gray-300  px-2 inline-none mb-4  bg-[#F6F8FE]   text-[10px] text-[#B8B8B8]"
              type="text"
              placeholder="paste link here "
            />
          </div>
          <div className="">
            <label className="text-[#344054] flex text-start font-[400] text-[17px] ">
              Twitter
            </label>
            <input
              className="w-72 h-[45px] py-1 rounded-md  border-gray-300  px-2 inline-none mb-4  bg-[#F6F8FE]   text-[10px] text-[#B8B8B8]"
              type="text"
              placeholder="paste link here "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserProfile;
