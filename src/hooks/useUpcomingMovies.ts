import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { RootState } from "../utils/appStore";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector((store:RootState) => store.movies.upcomingMovies);
    const getUpcomingMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming?page=1",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results))
    };

    useEffect(() => {
        if (!upcomingMovies) {
            getUpcomingMovies();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

export default useUpcomingMovies;
