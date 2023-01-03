// importing from react
import { useRef, useState } from "react";

//importing from react-router-dom
import { useNavigate, Link } from "react-router-dom";

//importing components
import Input from "./Input";

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
  const dobRef = useRef();
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
    const dob = dobRef.current.value;
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
  //className for each row of inputs
  const rowsClassName = `flex items-center justify-between w-[100%]`;

  return (
    <div className="w-[100%] ">
      {isPending && !data && !error && <h1>Registering...</h1>}
      {error && !data && !isPending && <h1>Register Unsuccessful</h1>}
      {data && !isPending && <h1>Register Successful...</h1>}

      <form
        onSubmit={submitFormHandler}
        className="flex flex-col items-center gap-[1em] w-[60%] mx-auto mb-[7em]"
      >
        <p className="font-bold text-[28px] mb-[1em]">Sign Up!</p>
        <div className="flex flex-col gap-[1em]">
          <div className={rowsClassName}>
            <Input ref={firstNameRef} placeholder="Enter firstname...">
              First name
            </Input>
            <Input ref={lastNameRef} placeholder="Enter lastname...">
              Last name
            </Input>
          </div>

          <div className={rowsClassName}>
            <Input type="email" placeholder="Enter email" ref={emailRef}>
              E-mail
            </Input>
            <Input
              type="phone-number"
              placeholder="000 0000 000"
              ref={phoneNoRef}
            >
              Phone number
            </Input>
          </div>

          <div className={rowsClassName}>
            <Input placeholder="Enter gender" ref={genderRef}>
              Gender
            </Input>
            <Input placeholder="DD/MM/YYYY " ref={dobRef}>
              Date of birth
            </Input>
          </div>

          <div className={rowsClassName}>
            <Input
              type="password"
              placeholder="Enter password"
              ref={passwordRef}
            >
              Password
            </Input>
            <Input
              type="password"
              placeholder="Confirm password"
              ref={confirmPasswordRef}
            >
              E-mail
            </Input>
          </div>
          <div className="flex items-start justify-center gap-6 my-[2em]">
            <input
              className="w-[30px] h-[30px] border border-solid border-black "
              type="checkbox"
              ref={areyouSureRef}
            />

            <p className=" font-[Raleway] text-[16px] ">
              By ticking the box you agree to receive our marketing and
              notification mails from us including our terms of service and
              privacy policy
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center mx-auto gap-2">
          <button className="flex items-center justify-center h-[3em] bg-[#10328C] text[20px] text-white rounded-md hover:bg-[#5d8aa8] w-[500px]">
            Sign Up
          </button>
          <p>
            Already have an account?{" "}
            <Link className="text-[blue] font-[500]">Log In</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
