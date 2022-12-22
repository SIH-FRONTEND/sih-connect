// importing from react
import { useRef, useState } from "react";

//importing from react-router-dom
import { useNavigate } from "react-router-dom";

//importing api function
import { loginHandler } from "../../API/authAPI";

const Register = () => {
  const navigate = useNavigate();
  //initializing states
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);

  //defining refs for all routes
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const userNameRef = useRef();
  const emailRef = useRef();
  const phoneNoRef = useRef();
  const genderRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const areyouSureRef = useRef();

  //handles register form submit
  const submitFormHandler = async (event) => {
    event.preventDefault();

    const firstname = firstNameRef.current.value;
    const lastname = lastNameRef.current.value;
    const username = userNameRef.current.value;
    const email = emailRef.current.value;
    const phone_number = phoneNoRef.current.value;
    const gender = genderRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    const areyouSure = areyouSureRef.current.value;

    if (!areyouSure) {
      return;
    }

    const user = {
      firstname,
      lastname,
      username,
      email,
      phone_number,
      gender,
      password,
      confirmPassword,
    };

    try {
      console.log(JSON.stringify(user));
      setIsPending(true);
      const result = await loginHandler(
        "https://starthubconnect.adaptable.app/auth/register",
        user
      );
      console.log(result);
      setData(result);
      setIsPending(false);
      setError(null);
      navigate("/profile");
    } catch (error) {
      console.log(error);
      setError(error);
      setIsPending(false);
      setData(null);
    }
  };
  return (
    <div>
      <div className="justify-center items-center text-center  font-bold text-[28px]">
        Register
      </div>
      {isPending && !data && !error && <h1>Registering...</h1>}
      {error && !data && !isPending && <h1>Register Unsuccessful</h1>}
      {data && !isPending && <h1>Register Successful...</h1>}

      <form
        onSubmit={submitFormHandler}
        className=" bg-[#ffffff] flex flex-col items-center justify-center w-[30rem] xs2:px-5 mx-[auto]"
      >
        <div>
          <div className="mt-10">
            <label className="text-[#344054] flex text-start  mb-1  font-[400] text-[17px]">
              First name
            </label>
            <input
              className="w-full h-[65px] py-1 rounded-lg  border-gray-300 text-[#344054] px-2 inline-none mb-4  bg-[#F6F8FE]"
              type="text"
              placeholder="Enter firstname..."
              ref={firstNameRef}
            />
          </div>
          <div className="mt-3">
            <label className="text-[#344054] flex text-start  mb-1   font-[400] text-[17px] ">
              Last name
            </label>
            <input
              className="w-full h-[65px] py-1 rounded-md  border-gray-300 text-[#344054] px-2 inline-none mb-4  bg-[#F6F8FE]"
              type="text"
              placeholder="Enter lastname..."
              ref={lastNameRef}
            />
          </div>
          <div className="mt-3">
            <label className="text-[#344054] flex text-start  mb-1  font-[400] text-[17px] ">
              Username
            </label>
            <input
              className="w-full h-[65px] py-1 rounded-md  border-gray-300 text-[#344054] px-2 inline-none mb-4  bg-[#F6F8FE]"
              type="username"
              placeholder="Enter username..."
              ref={userNameRef}
            />
          </div>
          <div className="mt-3">
            <label className="text-[#344054] flex text-start  mb-1   font-[400] text-[17px] ">
              E-mail
            </label>
            <input
              className="w-full h-[65px] py-1 rounded-md  border-gray-300 px-2 inline-none mb-4  bg-[#F6F8FE]  text-[#B8B8B8]"
              type="email"
              placeholder="Enter e-mail "
              ref={emailRef}
            />
          </div>
          <div className="mt-3">
            <label className="text-[#738096] flex text-start    font-[400] text-[17px] ">
              Phone number
            </label>
            <input
              className="w-full h-[65px] py-1 rounded-md  border-gray-300  px-2 inline-none mb-4  bg-[#F6F8FE]  text-[#B8B8B8]"
              type="phone number"
              placeholder="000 000 000"
              ref={phoneNoRef}
            />
          </div>

          <div className="">
            <label className="text-[#344054] flex text-start    font-[400] text-[17px] ">
              Gender
            </label>
            <select ref={genderRef}>
              <option value={"M"}>Male</option>
              <option value="F">Female</option>
            </select>
          </div>

          <div className="mt-3">
            <label className="text-[#344054] flex text-start    font-[400] text-[17px] ">
              Password
            </label>
            <input
              className="w-full h-[65px] py-1 rounded-md  border-gray-300  px-2 inline-none mb-4  bg-[#F6F8FE] text-[#B8B8B8]"
              type="password"
              placeholder="enter password "
              ref={passwordRef}
            />
          </div>
          <div className="mt-3">
            <label className="text-[#344054] flex text-start    font-[400] text-[17px] ">
              Confirm password
            </label>
            <input
              className="w-full h-[65px] py-1 rounded-md  border-gray-300  px-2 inline-none mb-4  bg-[#F6F8FE] text-[#B8B8B8]"
              type="password"
              placeholder="confirm password "
              ref={confirmPasswordRef}
            />
          </div>
        </div>
        <div className="flex justify-center items-center text-start mx-start  ">
          <div className="jusify-start items-start contetnt-start ">
            <input
              className=" mt-[20px] w-[50px] h-[35px] py-1 rounded-md  border-gray-300   px-2 inline-none mb-4  bg-[#F6F8FE] text-[#B8B8B8]"
              type="checkbox"
              ref={areyouSureRef}
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
