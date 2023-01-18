import React, { useState, useRef, useEffect } from "react";

// importing from react-router-dom
import { useNavigate } from "react-router-dom";

//importing from store and react-redux
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice.js";

//importing components
import Button from "../UI/Button.jsx";

//importing Global function
import { loginHandler } from "../../API/authAPI.js";

import profile from "../../assets/profile_icon.png";
import { AiOutlineMail } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import googleIcon from "../../assets/goggle_icon.png";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //refs
  const emailRef = useRef();
  const passwordRef = useRef();

  //initializing states
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);

  //functions submits login information and trigger login
  const submitFormHandler = async (event) => {
    //preventing default occurance
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      setIsPending(true);
      const result = await loginHandler(
        "https://starthubconnect.adaptable.app/auth/login",
        { email, password }
      );
      console.log(result);
      setData(result.user);
      setIsPending(false);
      setError(null);
      dispatch(authActions.handleLogin(result.token));
      navigate(`/${data.id}/profile`, { replace: true });
    } catch (error) {
      console.log(error);
      setError(error);
      setIsPending(false);
      setData(null);
    }
  };

  //useEffect checks and removes unsuccesful login state
  useEffect(() => {
    const timer = setTimeout(() => {
      if (error && !data) {
        setError(false);
      }
    }, 2000);
    clearTimeout(() => {
      timer;
    }, []);
  }, [error]);

  const rowClassName =
    "flex items-center justify-center w-full h-[50px] rounded-md border-gray-300 p-3 bg-[#F6F8FE] ";

  const inputClassName =
    "w-full h-[100%] p-[.5em] border border-0 focus:outline-0 hover:outline-0 active:outline-0 bg-[#F6F8FE] text-[.9em] ";

  return (
    <div className="w-[100%]">
      <form
        onSubmit={submitFormHandler}
        className="flex flex-col items-center gap-[1em] w-[100%] xl2:w-[60%] mx-auto mb-[7em] pt-[2em]"
      >
        <div className="h-[5rem] w-[5rem] mx-auto text-center mb-16">
          <img
            src={profile}
            className='h-[100%] w-[100%] object-fit" alt="Logo '
          />
        </div>
        <div className={rowClassName}>
          <AiOutlineMail size={25} />
          <input
            ref={emailRef}
            className={inputClassName}
            type="email"
            placeholder="Enter e-mail "
          />
        </div>

        <div className=" xl2:w-[100%] w-full">
          <div className={rowClassName}>
            <MdLockOutline size={25} />
            <input
              ref={passwordRef}
              className={inputClassName}
              type="password"
              placeholder="Enter password"
            />
          </div>
          <p className="text-[12px] font-bold">Forgot password</p>
        </div>
        <Button type="submit">Log In</Button>

        {isPending && !data && !error && <h1>Logging In</h1>}
        {error && !data && !isPending && <h1>Login Unsuccessful</h1>}
        {data && !isPending && <h1>Login Successful...</h1>}

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
      </form>
    </div>
  );
};

export default Login;
