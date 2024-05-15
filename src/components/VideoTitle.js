import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-12 absolute text-white">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-2/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-3 px-10 mx-2 text-xl rounded-md hover:bg-opacity-75">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white p-3 px-10 text-xl rounded-md bg-opacity-50">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
