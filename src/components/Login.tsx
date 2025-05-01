import Header from "./Header";
import { SITE_UI_BACKGROUND } from "../utils/constants";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
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
        <form className="absolute w-3/12 p-12 bg-black/88 rounded-lg shadow-lg text-white">
          <h1 className="font-bold text-2xl mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              className="p-4 my-2 w-full  bg-gray-800 border border-gray-600 rounded"
              type="text"
              placeholder="Enter Name"
            />
          )}
          <input
            className="p-4 my-2 w-full  bg-gray-800 border border-gray-600 rounded"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="p-4 my-2 w-full  bg-gray-800 border border-gray-600 rounded"
            type="password"
            placeholder="Password"
          />
          <button className="my-2 p-4 w-full bg-red-600 rounded hover:bg-red-700 cursor-pointer">
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
