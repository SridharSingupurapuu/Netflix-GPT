import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setSignInForm(!signInForm);
  };

  const handleButtonClick = () => {
    // Validate the Form Data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    // SignIn or SignOut Logic
    if (!signInForm) {
      // SignOut Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // SignIn Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="logo" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black bg-opacity-80 w-4/12 my-36 mx-auto right-0 left-0 text-white"
      >
        <h1 className="font-bold text-3xl p-2 my-4">
          {signInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!signInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-800 rounded-sm"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="p-2 my-2 w-full bg-gray-800 rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-800 rounded-sm"
        />
        <p className="text-red-500 font-medium text-lg py-1">{errorMessage}</p>
        <button
          className="my-2 p-2 bg-red-700 w-full rounded-sm"
          onClick={handleButtonClick}
        >
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
