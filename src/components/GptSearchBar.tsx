import { useDispatch, useSelector } from "react-redux";
import language from "../utils/languageConstants";
import { RootState } from "../utils/appStore";
import { useRef } from "react";
import client from "./geminiAI";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

type LanguageKey = keyof typeof language;

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector(
    (store: RootState) => store.config.lang
  ) as LanguageKey;

  const searchText = useRef<HTMLInputElement>(null);
  const gptQuery =
    "Act as a movie recommendation system and suggest some movies for the query: " +
    (searchText.current ? searchText.current.value : "") +
    " Only give me names of 5 movies, coma seperated like the example result given ahead. Example Result: Daddy, Sanam teri kasam, Sye, Yamadonga, Don Seenu";

  const searchMovieInTMDB = async (movie: string) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        encodeURIComponent(movie) +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    let gptMovies: string[] = [];
    try {
      //Make API call to openAI to get movie results
      const gptResults = await client.models.generateContent({
        model: "gemini-2.0-flash",
        contents: gptQuery,
      });

      gptMovies = (gptResults.text ?? "")
        .split(",")
        .map((movie: string) => movie.trim());
    } catch (error) {
      const err = error as { message: string; status?: number };
      console.error("Gemini API Error:", err.message);
    }

    if (gptMovies.length === 0) return;
    const promiseArray = gptMovies.map((movie: string) =>
      searchMovieInTMDB(movie)
    );
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        action=""
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 bg-white col-span-9"
          placeholder={language[langKey].gptSearchPlaceholder}
        />
        <button
          className="px-4 py-2 m-4 bg-red-700 text-white rounded-lg col-span-3 cursor-pointer"
          onClick={handleGptSearchClick}
        >
          {language[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
