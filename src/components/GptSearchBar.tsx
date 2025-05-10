import { useSelector } from "react-redux";
import language from "../utils/languageConstants";
import { RootState } from "../utils/appStore";

type LanguageKey = keyof typeof language; 

const GptSearchBar = () => {
  const langKey = useSelector((store:RootState) => store.config.lang) as LanguageKey;

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12" action="">
        <input
          type="text"
          className="p-4 m-4 bg-white col-span-9"
          placeholder={language[langKey].gptSearchPlaceholder}
        />
        <button className="px-4 py-2 m-4 bg-red-700 text-white rounded-lg col-span-3">
          {language[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
