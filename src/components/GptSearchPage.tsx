import { SITE_UI_BACKGROUND } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="w-screen h-screen object-cover"
          src={SITE_UI_BACKGROUND}
          alt="Netflix Movies and series"
        />
      </div>
      <div className="md:pt-0">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearchPage;
