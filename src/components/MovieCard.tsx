import { IMG_CDN } from "../utils/constants";

interface Props {
  poster_path: string;
}

function MovieCard({poster_path} : Props) {
    if (!poster_path) return null;
  return (
    <div className="w-42 pr-3">
      <img src={IMG_CDN + poster_path} alt="MovieCard" />
    </div>
  );
}

export default MovieCard;
