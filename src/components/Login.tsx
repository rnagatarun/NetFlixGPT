import Header from "./Header";
import { SITE_UI_BACKGROUND } from "../utils/constants";
import { useState, useRef } from "react";
import { checkValidateData } from "../utils/validateData";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit = () => {
    if (email.current && password.current) {
      const message = checkValidateData(
        email.current.value,
        password.current.value
      );
      setErrorMessage(message);
      if (message) return;
      if (!isSignInForm) {
        //Sign Up
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            // if (name.current) {
            //   user.displayName = name.current.value; // Assign the name to user object
            // }
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " - " + errorMessage);
            // ..
          });
      } else {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse");

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " - " + errorMessage);
  });

      }
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute w-full h-full"
          src={SITE_UI_BACKGROUND}
          alt="Netflix Movies and series"
        />
      </div>

      <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center z-10">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute w-3/12 p-12 bg-black/88 rounded-lg shadow-lg text-white"
        >
          <h1 className="font-bold text-2xl mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              className="p-4 my-2 w-full  bg-gray-800 border border-gray-600 rounded"
              type="text"
              ref={name}
              placeholder="Enter Name"
            />
          )}
          <input
            className="p-4 my-2 w-full  bg-gray-800 border border-gray-600 rounded"
            type="text"
            ref={email}
            placeholder="Email Address"
          />
          <input
            className="p-4 my-2 w-full  bg-gray-800 border border-gray-600 rounded"
            type="password"
            ref={password}
            placeholder="Password"
          />
          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
          <button
            className="my-2 p-4 w-full bg-red-600 rounded hover:bg-red-700 cursor-pointer"
            onClick={handleSubmit}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Existing User? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
