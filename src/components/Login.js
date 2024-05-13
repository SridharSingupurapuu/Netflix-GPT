import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setSignInForm(!signInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="absolute p-12 bg-black bg-opacity-80 w-4/12 my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl p-2 my-4">
          {signInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!signInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-800 rounded-sm"
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-2 my-2 w-full bg-gray-800 rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-800 rounded-sm"
        />
        <button className="my-2 p-2 bg-red-700 w-full rounded-sm">
          {signInForm ? "Submit" : "Sign Up"}
        </button>
        {signInForm ? (
          <p className="py-4">
            New to Netflix?
            <span
              className="font-bold ml-1 cursor-pointer"
              onClick={toggleSignInForm}
            >
              Sign up now.
            </span>
          </p>
        ) : (
          <p className="py-4">
            Already registered?
            <span
              className="font-bold ml-1 cursor-pointer"
              onClick={toggleSignInForm}
            >
              Sign In now.
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
