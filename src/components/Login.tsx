import Header from "./Header";
import { SITE_UI_BACKGROUND } from "../utils/constants";

const Login = () => {
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
          <h1 className="font-bold text-2xl mb-6">Sign In</h1>
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
          <button className="my-2 p-4 w-full bg-red-600 rounded hover:bg-red-700">
            Sign In
          </button>
          <p className="py-4">New to Netflix? Sign Up Now</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
