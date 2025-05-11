import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
import { RootState } from "../utils/appStore";

function useMovieTrailer(id: string) {
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store: RootState) => store.movies.trailerVideo);
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
        if (!trailerVideo) {
            getMovieVideos();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

export default useMovieTrailer
