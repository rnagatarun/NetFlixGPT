import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store: RootState) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-70 relative z-20 pl-8">
        <MovieList
          title={"Now Playing"}
          movies={movies.nowPlayingMovies || []}
        />
        <MovieList
          title={"Top Rated"}
          movies={movies.topRatedMovies || []}
        />
         <MovieList
          title={"Popular"}
          movies={movies.popularMovies || []}
        />
        <MovieList
          title={"Upcoming"}
          movies={movies.upcomingMovies || []}
        />
        
      </div> 
    </div>
  );
};

export default SecondaryContainer;
