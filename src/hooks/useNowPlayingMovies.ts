import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing?page=1",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results))
    };

    useEffect(() => {
        getNowPlayingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

export default useNowPlayingMovies;
