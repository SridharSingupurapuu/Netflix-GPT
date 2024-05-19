import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../customhooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div>
      <iframe
        className="w-screen aspect-video md:-mt-20 -mt-7"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?playlist=" +
          trailerVideo?.key +
          "&loop=1&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        allowTransparency
      ></iframe>
    </div>
  );
};

export default VideoBackground;
