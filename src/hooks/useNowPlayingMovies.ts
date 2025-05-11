import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { RootState } from "../utils/appStore";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store: RootState) => store.movies.nowPlayingMovies);
    const getNowPlayingMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing?page=1",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results))
    };

    useEffect(() => {
        if (!nowPlayingMovies) {
            getNowPlayingMovies();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

export default useNowPlayingMovies;
