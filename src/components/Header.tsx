import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div>
      <img
        className="absolute w-80 px-18 py-2 bg-gradient-to-b from-black z-10"
        src={NETFLIX_LOGO}
        alt="Netflix"
      />
    </div>
  );
};

export default Header;
