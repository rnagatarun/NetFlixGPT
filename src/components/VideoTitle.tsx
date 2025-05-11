interface VideoTitleProps {
  title: string;
  overview: string;
}

const VideoTitle = ({ title, overview }: VideoTitleProps) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3">{overview}</p>
      <div className="my-2 md:my-0">
        <button className="bg-white text-black py-1 md:px-7 px-2 text-lg rounded-lg cursor-pointer hover:bg-white/80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-black p-2 mx-2 px-7 text-lg rounded-lg cursor-pointer  hover:bg-gray-500/80">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
