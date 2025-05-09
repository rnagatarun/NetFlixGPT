import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";

function useMovieTrailer(id: string) {
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
            API_OPTIONS
        );
        const json = await data.json();

        const trailerData = json.results.filter(
            (video: { type: string }) => video.type === "Trailer"
        );
        const trailer = trailerData.length ? trailerData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
        getMovieVideos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

export default useMovieTrailer
