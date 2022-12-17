import React from "react";
import Logo from "../../assets/StarthubLogo.png";

const Register = () => {
  return (
    <div>
      <div className="flex justify-between px-10">
        <div>
          <div className="h-[38px] w-[130px]">
            <img
              src={Logo}
              className='h-[100%] w-[100%] object-fit" alt="Logo '
            />
          </div>
        </div>
        <div className="flex gap-20">
          <div className="hidden lg2:block">
            <h3 className="font-bold mt-5">Already a member?</h3>
          </div>

          <div>
            <button className="bg-[#10328C] font-[Raleway] text[20px] text-white py-[0.6rem] px-[3rem] justify-center items-center text-center rounded-md hover:bg-[#5d8aa8] transition-colors mb-10">
              Log in
            </button>
          </div>
        </div>
      </div>
      <div className="justify-center items-center text-center  font-bold text-[28px]">
        sign up!
      </div>

      <div className=" bg-[#ffffff] flex items-center justify-center   ">
        <div className="w-[30rem] xs2:px-5 ">
          <div>
            <div className="mt-10">
              <label className="text-[#344054] flex text-start  mb-1  font-[400] text-[17px]">
                First name
              </label>
              <input
                className="w-full h-[65px] py-1 rounded-lg  border-gray-300 text-[#344054] px-2 inline-none mb-4  bg-[#F6F8FE]"
                type="fname"
              />
            </div>
          </div>
          <div>
            <div className="mt-3">
              <label className="text-[#344054] flex text-start  mb-1   font-[400] text-[17px] ">
                Last name
              </label>
              <input
                className="w-full h-[65px] py-1 rounded-md  border-gray-300 text-[#344054] px-2 inline-none mb-4  bg-[#F6F8FE]"
                type="lname"
              />
            </div>
            <div className="mt-3">
              <label className="text-[#344054] flex text-start  mb-1  font-[400] text-[17px] ">
                Username
              </label>
              <input
                className="w-full h-[65px] py-1 rounded-md  border-gray-300 text-[#344054] px-2 inline-none mb-4  bg-[#F6F8FE]"
                type="username"
              />
            </div>
            <div className="mt-3">
              <label className="text-[#344054] flex text-start  mb-1   font-[400] text-[17px] ">
                E-mail
              </label>
              <input
                className="w-full h-[65px] py-1 rounded-md  border-gray-300 px-2 inline-none mb-4  bg-[#F6F8FE] text-[10px] text-[#B8B8B8]"
                type="email"
                value="Enter e-mail "
              />
            </div>
            <div className="mt-3">
              <label className="text-[#344054] flex text-start    font-[400] text-[17px] ">
                Phone number
              </label>
              <input
                className="w-full h-[65px] py-1 rounded-md  border-gray-300  px-2 inline-none mb-4  bg-[#F6F8FE]   text-[10px] text-[#B8B8B8]"
                type="phone number"
                value="+234 "
              />
            </div>
            <div className="flex justify-between mt-3">
              <div className="">
                <label className="text-[#344054] flex text-start    font-[400] text-[17px] ">
                  Gender
                </label>
                <input
                  className="w-40 h-[65px] py-1 rounded-md  border-gray-300  px-2 inline-none mb-4  bg-[#F6F8FE]   text-[10px] text-[#B8B8B8]"
                  type="phone number"
                  value="male "
                />
              </div>
              <div className="">
                <label className="text-[#344054] flex text-start    font-[400] text-[17px] ">
                  Date of Birth
                </label>
                <input
                  className="w-64 h-[65px] py-1 rounded-md  border-gray-300  px-2 inline-none mb-4  bg-[#F6F8FE]   text-[10px] text-[#B8B8B8]"
                  type="phone number"
                  value="18/04/1996 "
                />
              </div>
            </div>

            <div className="mt-3">
              <label className="text-[#344054] flex text-start    font-[400] text-[17px] ">
                Password
              </label>
              <input
                className="w-full h-[65px] py-1 rounded-md  border-gray-300  px-2 inline-none mb-4  bg-[#F6F8FE]   text-[10px] text-[#B8B8B8]"
                type="text"
                value="enter password "
              />
            </div>
            <div className="mt-3">
              <label className="text-[#344054] flex text-start    font-[400] text-[17px] ">
                Confirm password
              </label>
              <input
                className="w-full h-[65px] py-1 rounded-md  border-gray-300  px-2 inline-none mb-4  bg-[#F6F8FE]   text-[10px] text-[#B8B8B8]"
                type="text"
                value="confirm password "
              />
            </div>
          </div>
          <div className="flex justify-center items-center text-start mx-start  ">
            <div className="jusify-start items-start contetnt-start ">
              <input
                className=" mt-[20px] w-[50px] h-[35px] py-1 rounded-md  border-gray-300   px-2 inline-none mb-4  bg-[#F6F8FE]   text-[10px] text-[#B8B8B8]"
                type="checkbox"
                value="confirm password "
              />
            </div>
            <div>
              <p className=" font-[Raleway] p-2 text-[15px] ">
                By ticking the box you agree to receive our marketing and
                notification mails from us including our terms of service and
                privacy policy
              </p>
            </div>
          </div>
          <button className="flex justify-center items-center mx-auto content-center bg-[#10328C] font-[Raleway]  text[20px] text-white py-[0.6rem] px-[3rem]  rounded-md  hover:bg-[#5d8aa8] transition-colors mb-10">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
