import useMovieTrailer from "../hooks/useMovieTrailer";
import { RootState } from "../utils/appStore";
import { useSelector } from "react-redux";

interface VideoBackgroundProps {
  id: string;
}

function VideoBackground({ id }: VideoBackgroundProps) {
  const trailerVideo = useSelector(
    (store: RootState) => store.movies?.trailerVideo as { key: string } | null
  );

  useMovieTrailer(id);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&controls=0&rel=0&showinfo=0&modestbranding=1&loop=1&playlist=" +
          trailerVideo?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}

export default VideoBackground;
