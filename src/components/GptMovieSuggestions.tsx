import { useSelector } from "react-redux";

import { RootState } from "../utils/appStore";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector(
    (store: RootState) => store.gpt
  );

  if (!movieNames || !movieResults) return null;

  return (
    <div className="p-4 m-4 bg-black text-white">
      <div>
        {movieNames.map((movieName: string, index: number) => (
          <MovieList
            key={index}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
}
    

export default GptMovieSuggestions;
