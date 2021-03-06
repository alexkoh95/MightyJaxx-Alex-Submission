import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signinActions,
  userSignin,
} from "../../slices/Signup-Login/Signin-Slice";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = useSelector((state) => state.signin);
  const signinBodyInfo = { email: state.email, password: state.password };

  const handleEmailChange = (event) => {
    dispatch(signinActions.setEmailAddress(event.target.value));
  };

  const handlePasswordChange = (event) => {
    dispatch(signinActions.setPassword(event.target.value));
  };

  const handleSigninSubmitButton = async (event) => {
    event.preventDefault();
    dispatch(userSignin(signinBodyInfo));
    const body = { email: state.email, password: state.password };
    const getLogin = await fetch("http://localhost:5001/signin", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await getLogin.json();
    if (data.signInSuccessful === "Success") {
      dispatch(signinActions.setUserSignedin(data.userInformation));
      navigate("/dashboard");
    } else {
      console.log("Incorrect user information");
      dispatch(signinActions.setIncorrectUserInformation());
    }
  };

  const displayIncorrectInformationErrorMessage = () => {
    if (state.incorrectUserInformation === true) {
      return (
        <div className="text-red-500">
          Error: Incorrect Email and/or Password
        </div>
      );
    } else {
      return;
    }
  };

  return (
    <div className="signin-container max-w-sm mx-auto flex flex-1 items-center justify-center min-h-screen px-2">
      <div className="bg-white px-6 py-4 rounded-lg shadow-lg text-black w-full my-10">
        <h1 className="font-bold text-3xl">Sign In</h1>
        <Link to="/signup" className="text-sm text-yellow-500 pb-6">
          Don't have an account? Create one here
        </Link>
        <form className="signin-form pt-4">
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="text"
            placeholder="Email"
            onChange={handleEmailChange}
          ></input>
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
          ></input>
          <button
            className="block bg-yellow-500 text-white hover:bg-yellow-600 w-full p-3 rounded mb-4"
            type="submit"
            onClick={handleSigninSubmitButton}
          >
            Submit
          </button>
        </form>
        {displayIncorrectInformationErrorMessage()}
      </div>
    </div>
  );
};

export default Signin;
