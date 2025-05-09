import MovieCard from "./MovieCard";

interface MovieListProps {
  title: string;
  movies: { id: string; poster_path: string }[];
}

function MovieList({ title, movies }: MovieListProps) {
  console.log(movies);
  return (
    <div className="px-6">
        <h1 className="text-white text-2xl py-4">{title}</h1>
      <div className="flex overflow-x-scroll">
         <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} poster_path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
