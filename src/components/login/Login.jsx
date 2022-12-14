import React from "react";
import Logo from "../../assets/StarthubLogo.png";
import profile from "../../assets/profile_icon.png";
import { AiOutlineMail } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import googleIcon from "../../assets/goggle_icon.png";

const Login = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between px-20">
          <div>
            <div className="h-[38px] w-[138px]">
              <img
                src={Logo}
                className='h-[100%] w-[100%] object-fit" alt="Logo '
              />
            </div>
          </div>
          <div className="flex gap-20">
            <div className="hidden lg:block">
              <h3 className="font-bold mt-5">Not yet a member?</h3>
            </div>

            <div>
              <button className="bg-[#10328C] font-[Raleway] text[20px] text-white py-[0.6rem] px-[3rem] justify-center items-center text-center rounded-md hover:bg-[#5d8aa8] transition-colors mb-10">
                Log in
              </button>
            </div>
          </div>
        </div>

        <div className="  ">
          <div className="h-[5rem] w-[5rem] mx-auto text-center mb-16">
            <img
              src={profile}
              className='h-[100%] w-[100%] object-fit" alt="Logo '
            />
          </div>

          <div className="mt-3  mx-auto w-[30rem]">
            <div className="mt-3  relative ">
              <input
                className=" w-full h-[60px] pb-[0.2rem] rounded-md  border-gray-300  px-2 inline-none   bg-[#F6F8FE]  text-[12px] pl-[3.5rem]   "
                type="text"
                value="Enter e-mail "
              />
              <div className="absolute left-[1rem] top-[1.2rem]">
                <AiOutlineMail size={25} />
              </div>
            </div>
          </div>
          <div className="mt-16  mx-auto w-[30rem]">
            <div className="mt-3  relative ">
              <input
                className=" w-full h-[60px] pb-[0.2rem] rounded-md  border-gray-300  px-2 inline-none   bg-[#F6F8FE]  text-[12px] pl-[3.5rem]   "
                type="text"
                value="Enter password "
              />
              <div className="absolute left-[1rem] top-[1.2rem]">
                <MdLockOutline size={25} />
              </div>
              <div className="absolute left-[23rem] top-[1.2rem] text-[#10328C]">
                <p className="text-[12px] font-bold">Forgot password</p>
              </div>
            </div>
          </div>
          <div className="mt-16  mx-auto w-[30rem]">
            <button className="w-full h-[60px] pb-[0.2rem] font-[bold] bg-[#10328C] text-[20px] text-white py-[0.6rem] px-[3rem] justify-center items-center text-center rounded-md hover:bg-[#5d8aa8] transition-colors mb-10">
              Log in
            </button>
          </div>
          <div className="flex justify-evenly content-center  text-center mx-auto w-[10rem]">
            <div className="text-[20px]">log in with</div>
            <div className="h-5  w-5  mt-2">
              <img
                src={googleIcon}
                alt="google-icon"
                className='h-[100%] w-[100%] object-fit" alt="images  rounded-full'
              />
            </div>
          </div>
          <div className="flex justify-center  gap-3 content-center text-center mt-8">
            <div>
              <h3 className="text-[20px]">dont have an Account?</h3>
            </div>

            <div>
              <h3 className="font-bold text-[21px]">sign up</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
