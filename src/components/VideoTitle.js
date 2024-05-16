import React from "react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-12 absolute text-white">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-2/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-2 px-6 mr-3 text-xl rounded-md hover:bg-opacity-75">
          <div className="flex">
            <FaPlay className="h-8 mr-2" /> <span>Play</span>
          </div>
        </button>
        <button className="bg-gray-500 text-white p-2 px-6 text-xl rounded-md bg-opacity-50">
          <div className="flex">
            <FaInfoCircle className="h-8 w-6 mr-2" /> <span>More Info </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
