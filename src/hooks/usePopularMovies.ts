import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { RootState } from "../utils/appStore";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector((store: RootState) => store.movies.popularMovies);

    const getPopularMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular?page=1",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addPopularMovies(json.results))
    };

    useEffect(() => {
        if (!popularMovies) {
            getPopularMovies();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

export default usePopularMovies;
