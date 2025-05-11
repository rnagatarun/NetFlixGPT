import { SITE_UI_BACKGROUND } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="w-full h-full"
          src={SITE_UI_BACKGROUND}
          alt="Netflix Movies and series"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
