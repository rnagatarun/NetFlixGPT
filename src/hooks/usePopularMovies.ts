import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular?page=1",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addPopularMovies(json.results))
    };

    useEffect(() => {
        getPopularMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

export default usePopularMovies;
