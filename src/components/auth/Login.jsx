import React, { useState, useRef, useEffect } from "react";

// importing from react-router-dom
import { useNavigate, Link } from "react-router-dom";

//importing from store and react-redux
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice.js";

//importing components
import Button from "../UI/Button.jsx";
import LoadingSpinner from "../UI/LoadingSpinner.jsx";

//importing Global function
import { loginHandler } from "../../API/authAPI.js";

import profile from "../../assets/profile_icon.png";
import { AiOutlineMail } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

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
      // console.log(result);
      setData(result.user);
      setIsPending(false);
      dispatch(authActions.handleLogin(result.token));
      navigate(`/${data.id}/profile`, { replace: true });
    } catch (error) {
      // console.log(error);
      setError(error);
      setIsPending(false);
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
    "w-full h-[100%] p-[.5em] border border-0 focus:outline-0 hover:outline-0 active:outline-0 bg-[#F6F8FE] autofill:-bg[#autofill] text-[.9em] ";

  return (
    <form
      onSubmit={submitFormHandler}
      className="flex flex-col items-center gap-[1em] w-[100%] xl2:w-[50%] mx-auto mb-[7em] p-[2em]  border-2 border-solid border-black"
    >
      <div className="h-[5rem] w-[5rem] mx-auto text-center mb-16">
        <img
          src={profile}
          className="h-[100%] w-[100%] object-fit "
          alt="Logo"
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
      <Button type="submit" width={"80%"}>
        Log In
      </Button>

      <div className="[&>*]:text-[20px] [&>*]:font-[500] [&>*]:flex [&>*]:items-center [&>*]:justify-center">
        <Link>
          Log in with <FcGoogle size={"40px"} className="mx-4" />
        </Link>
        <h3>
          Don't have an Account?
          <Link className="font-bold text-[21px] ml-4" to={"/register"}>
            Sign up
          </Link>
        </h3>
      </div>

      {isPending && !data && !error && <LoadingSpinner />}
      {error && !data && !isPending && <h1>Login Unsuccessful</h1>}
      {data && !isPending && <h1>Login Successful...</h1>}
    </form>
  );
};

export default Login;
